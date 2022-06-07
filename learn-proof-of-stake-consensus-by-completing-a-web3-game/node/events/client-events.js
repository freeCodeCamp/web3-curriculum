import { nodeState } from "../state.js";
import { parse } from "../../utils/websockets/index.js";

/**
 * Emitted when a client node tries to buy a new server rack
 */
export function buyRack(data, name) {
  if (nodeState.isNextMiner()) {
    // Add transaction to pool
    nodeState.transactionPool.push({
      event: "BuyRack",
      name: nodeState.name,
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
  } else {
    broadcast({ data, name, type: "buy-rack" });
  }
}

/**
 * Emitted when a client node tries to stake a token
 */
export function stake(data, name) {
  if (nodeState.isNextMiner()) {
    // Add transaction to pool
    nodeState.transactionPool.push({
      event: "Stake",
      name: nodeState.name,
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
  } else {
    broadcast({ data, name, type: "stake" });
  }
}

/**
 * Emitted when a client node tries to unstake a token
 */
export function unstake(data, name) {
  if (nodeState.isNextMiner()) {
    // Add transaction to pool
    nodeState.transactionPool.push({
      event: "Unstake",
      name: nodeState.name,
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
  } else {
    broadcast({ data, name, type: "unstake" });
  }
}

/**
 * Emitted when a client node submits a task
 * - Task is removed from node state
 * - A `submit-task` event is broadcast
 */
export function submitTask(data, name) {
  // Remove task from state
  nodeState.tasks = nodeState.tasks.filter(
    (task) => data.task.question !== task.question
  );
  // Broadcast for validation
  broadcast({ data, name, type: "submit-task" });
}
