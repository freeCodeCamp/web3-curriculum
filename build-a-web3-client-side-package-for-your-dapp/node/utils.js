import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';
import { Logger } from 'logover';
import sha256 from 'crypto-js/sha256.js';

const logover = new Logger({ level: 'debug' });

/**
 * Synchronously overwrites `blockchain` to `node/blockchain.json`
 * @param {Array<object>} blockchain
 */
export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('node/blockchain.json', blockchainString, 'utf8');
}

/**
 * Synchronously reads `blockchain` from `node/blockchain.json`
 * @returns {Array<object>} blockchain
 */
export function readBlockchain() {
  const blockchainString = readFileSync('node/blockchain.json', 'utf8');
  return JSON.parse(blockchainString);
}

/**
 * Get a smart contract deployed on the blockchain by its `id`
 * @param {number} id The id of the smart contract deployed on the blockchain
 * @returns {null | object}`null` if the smart contract is not found. Otherwise, returns the smart contract object literal
 */
export function getSmartContract(id) {
  const blockchain = readBlockchain();
  for (const block of blockchain.reverse()) {
    for (const smartContract of block.smartContracts) {
      if (smartContract.id === id) {
        return smartContract;
      }
    }
  }
  return null;
}

/**
 * Calls the smart contract function with the given `id`
 * @param {number} id The id of the smart contract deployed on the blockchain
 * @param {string} functionHandle The name of the function to call
 * @param {Array<any>} functionArgs The arguments to pass to the function
 * @returns The result of the function call
 *
 * @throws {Error} If the smart contract is not found
 */
export async function callSmartContract(id, functionHandle, functionArgs) {
  const contract = getSmartContract(id);

  if (!contract) {
    logover.error(`Smart contract with id '${id}' not found`);
    throw new Error(`Smart contract with id '${id}' not found`);
  } else {
    const smartContract = (await import(contract.pathToPkg)).default;
    const res = smartContract[functionHandle](contract.state, ...functionArgs);
    if (functionHandle.startsWith('set')) {
      contract.state = res;
      mineBlock({ smartContracts: [contract] });
    }
    return res;
  }
}

/**
 * Mine a new block with the given state
 * @param {Array} smartContracts An array of smart contract objects
 * @param {Array} accounts An array of accounts
 */
export function mineBlock({ smartContracts = [], accounts = [] }) {
  const blockchain = readBlockchain();
  const previousBlock = blockchain[blockchain.length - 1];

  const difficulty = 2;

  let hash = '';
  let nonce = 0;
  while (!hash.startsWith('0'.repeat(difficulty))) {
    nonce++;
    hash = sha256(
      nonce +
        previousBlock.hash +
        JSON.stringify(smartContracts) +
        JSON.stringify(accounts)
    ).toString();
  }

  const newBlock = {
    hash,
    previousHash: previousBlock.hash,
    nonce,
    smartContracts,
    accounts
  };

  blockchain.push(newBlock);
  writeBlockchain(blockchain);
}

/**
 * Deploys the `node/pkg` smart contract package to the blockchain, and mines a new block
 */
export async function deploySmartContract() {
  const relPathToPkg = 'node/pkg/build_a_smart_contract_in_rust.js';

  try {
    const pathToPkg = join('..', relPathToPkg);
    const pkg = (await import(pathToPkg)).default;
    const initialised = pkg.initialise();
    const smartContract = {
      pathToPkg,
      state: initialised,
      id: 0
    };
    mineBlock({ smartContracts: [smartContract] });
    logover.info(`Smart contract deployed with id: ${smartContract.id}`);
  } catch (e) {
    logover.error('Unable to deploy smart contract: ');
    throw new Error(e);
  }
}

/**
 * Overwrites the blockchain with the genesis block
 */
export async function initialiseBlockchain() {
  const genesisBlock = {
    hash: 0,
    previousHash: null,
    smartContracts: [],
    accounts: [
      {
        address: 'program_account',
        balance: 1_000_000_000
      },
      {
        address: 'shaun',
        balance: 1_000
      },
      {
        address: 'tom',
        balance: 1_000
      }
    ]
  };

  const blockchain = [genesisBlock];
  writeBlockchain(blockchain);
}

/**
 * Mines a new block with the given transfer
 * @param {string} from The address of the sender
 * @param {string} to The address of the receiver
 * @param {number} amount The amount to send
 */
export function transfer({ from, to, amount }) {
  const fromAccount = getAccount(from);
  const toAccount = getAccount(to);
  if (!fromAccount || !toAccount) {
    logover.error(`Accounts not found: ${from} and ${to}`);
    throw new Error(`Accounts not found: ${from} and ${to}`);
  }
  if (fromAccount.balance < amount) {
    logover.warn(
      `'${fromAccount.address}' has insufficient funds: ${fromAccount.balance} < ${amount}`
    );
  }
  fromAccount.balance -= amount;
  toAccount.balance += amount;
  mineBlock({ accounts: [fromAccount, toAccount] });
}

/**
 * Gets the account with the given address
 * @param {string} address
 * @returns {null | object}`null` if the account is not found. Otherwise, returns the account object literal
 */
export function getAccount(address) {
  const blockchain = readBlockchain();
  let account = null;
  for (const block of blockchain.reverse()) {
    for (const account of block.accounts) {
      if (account.address === address) {
        return account;
      }
    }
  }
  return account;
}
