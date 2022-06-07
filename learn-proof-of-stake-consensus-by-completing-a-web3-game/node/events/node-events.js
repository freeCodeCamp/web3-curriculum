import { nodeState } from "../state.js";
import {
  handle_mine,
  handle_validate,
} from "../../blockchain/pkg/blockchain.js";
import { parse } from "../../utils/websockets/index.js";
import { debug } from "../../utils/logger.js";

/**
 * Emitted when a node finds a peer already on the network
 * If receiving node is the next miner, an `UpdateChain` transaction is added to the transaction pool
 */
export function connect(data, name) {
  if (nodeState.isNextMiner()) {
    nodeState.transactionPool.push({
      event: "UpdateChain",
      name,
    });
  }
}

/**
 * Emitted when a node updates the blockchain
 * - If the updated chain is longer than the current chain, the node state chain is updated
 * - Adds an `UpdateChain` transaction to the transaction pool
 * - Adds the sender node to the network state
 * - Broadcasts an `update-chain` event to all connected clients
 */
export function updateChain(data, name) {
  if (nodeState.chain.length < data.chain.length) {
    nodeState.chain = data.chain;
  }
  nodeState.transactionPool.push({
    event: "UpdateChain",
    name,
  });
  nodeState.network.add(name);
  nodeState.clientSocks.forEach((sock) => {
    sock.send(
      parse({
        data: {
          chain: nodeState.chain,
          tasks: nodeState.tasks,
          transactionPool: nodeState.transactionPool,
        },
        name,
        type: "update-chain",
      })
    );
  });
}

/**
 * Emitted when a client node buys a rack
 * - If the receiver node is the next miner, a `BuyRack` transaction is added to the transaction pool
 */
export function buyRack(data, name) {
  if (nodeState.isNextMiner()) {
    // Add transaction to pool
    nodeState.transactionPool.push({
      event: "BuyRack",
      name,
    });
  }
}

/**
 * Emitted when a client node stakes a token
 * - If the receiver node is the next miner, a `Stake` transaction is added to the transaction pool
 */
export function stake(data, name) {
  if (nodeState.isNextMiner()) {
    // Add transaction to pool
    nodeState.transactionPool.push({
      event: "Stake",
      name,
    });
  }
}

/**
 * Emitted when a client node unstakes a token
 * - If the receiver node is the next miner, a `Unstake` transaction is added to the transaction pool
 */
export function unstake(data, name) {
  if (nodeState.isNextMiner()) {
    // Add transaction to pool
    nodeState.transactionPool.push({
      event: "Unstake",
      name,
    });
  }
}

/**
 * Emitted when a client node submits a task
 * - If the receiver node is a next validator:
 *   - The task is validated
 *   - A `SubmitTask` transaction is added to the transaction pool
 *   - An `update-chain` event is broadcast to all connected clients
 *   - A `task-validated` event is broadcast to all peer nodes
 */
export function submitTask(data, name) {
  if (nodeState.isNextValidator()) {
    debug("Validating: ", data, name);
    const { taskValid } = handleSubmitTask({
      data,
      name,
    });
    nodeState.transactionPool.push({
      name,
      event: "SubmitTask",
    });
    nodeState.clientSocks.forEach((sock) => {
      sock.send(
        parse({
          data: {
            chain: nodeState.chain,
            tasks: nodeState.tasks,
            transactionPool: nodeState.transactionPool,
          },
          name,
          type: "update-chain",
        })
      );
    });
    broadcast({
      data: { taskValid },
      name,
      type: "task-validated",
    });
  }
}

/**
 * Emitted when a node mines a block
 * - If the receiver node is a next validator:
 *   - The block is validated
 *     - If the block is valid, the block is added to the chain, broadcast to all connected clients, and a `block-validated` event is broadcast
 *     - If the block is invalid, a `block-invalidated` event is broadcast
 */
export function blockMined(data, name) {
  // If isNextValidator, then validate, and emit "block-validated"
  if (nodeState.isNextValidator()) {
    const isValid = handle_validate({
      chain: data.chain,
      network: Array.from(nodeState.network),
    });
    if (isValid) {
      nodeState.chain = data.chain;
      nodeState.clientSocks.forEach((sock) => {
        sock.send(
          parse({
            data: {
              chain: nodeState.chain,
              tasks: nodeState.tasks,
              transactionPool: nodeState.transactionPool,
            },
            name,
            type: "update-chain",
          })
        );
      });
      broadcast({ data, name, type: "block-validated" });
    } else {
      broadcast({ data, name, type: "block-invalidated" });
    }
  }
}

/**
 * Emitted when a validator node invalidates a proposed block
 * - If the receiver node is the next miner, a `BlockInvalidated` transaction is added to the transaction pool
 * - A new block is mined and proposed with a punishment for the bad actor
 * - The transaction pool is cleared
 */
export function blockInvalidated(data, name) {
  // If next miner, add punishment to transaction pool
  if (nodeState.isNextMiner()) {
    nodeState.transactionPool.push({
      event: "BlockInvalidated",
      name,
    });
    // Try mine again
    const [{ chain: proposedChain }, errors] = handle_mine({
      chain: {
        chain: nodeState.chain,
        network: Array.from(nodeState.network),
      },
      transactions: nodeState.transactionPool,
      task_valid: false, // Mine again, but with punishment
    });
    debug("Proposed chain: ", proposedChain, errors);
    // Clear transaction pool
    nodeState.transactionPool = [];
    // Handle proposed chain
    handleProposedBlock(proposedChain);
  }
}

/**
 * Emitted when a validator node validates a proposed block
 * - If receiving node is the next miner, a random task is added to the node state
 * - An `update-chain` event is broadcast to all connected clients
 */
export function blockValidated(data, name) {
  // Emitted event from next_validators. Contains most up-to-date chain.
  nodeState.chain = data.chain;

  if (nodeState.isNextMiner()) {
    addTaskToState(getRandomTask());
  }
  // Send client updated chain
  nodeState.clientSocks.forEach((sock) => {
    sock.send(
      parse({
        data: {
          chain: nodeState.chain,
          tasks: nodeState.tasks,
          transactionPool: nodeState.transactionPool,
        },
        name,
        type: "update-chain",
      })
    );
  });
}

/**
 * Emitted when a validator has validated a task
 * - A new block is mined, and the resulting chain is proposed
 * - The transaction pool is cleared
 */
export function taskValidated(data, name) {
  const [{ chain: proposedChain }, errors] = handle_mine({
    chain: { chain: nodeState.chain, network: Array.from(nodeState.network) },
    transactions: nodeState.transactionPool,
    task_valid: data.taskValid,
  });
  debug("Proposed chain: ", proposedChain, errors);
  // Clear transaction pool
  nodeState.transactionPool = [];
  // Handle proposed chain
  handleProposedBlock(proposedChain);
}
