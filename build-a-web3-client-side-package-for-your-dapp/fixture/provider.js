import express from 'express';
import logover, { info, error, debug } from 'logover';
import { readFile, writeFile } from 'fs/promises';
import { mine_block } from '../blockchain/pkg/blockchain.js';
import { clearInterval } from 'timers';
logover({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
});

let canWriteToTransactions = true;

const loc = p => new URL(p, import.meta.url).pathname;
const CHAIN_PATH = loc('data/chain.json');
const TRANSACTIONS_PATH = loc('data/transactions.json');

const PROGRAM_ACCOUNT = 'shaun';

const _tests = [];

try {
  await init();
} catch (e) {
  error('Unable to initialise blockchain:\n');
  throw new Error(e);
}

const app = express();

app.use(express.json());
app.use(express.static(loc('../client')));
app.use(express.static(loc('../')));

app.get('/', (req, res) => {
  const client = loc('client/index.html');
  res.sendFile(client);
});

app.post('/call-smart-contract', async (req, res) => {
  _tests.push({ body: req.body, url: req.url, headers: req.headers });
  const { id, method, args, address } = req.body;

  if (![id, method, address].filter(Boolean).length === 3) {
    res.status(400).json({
      error: `Missing required fields: id: ${id}, method: ${method}, address: ${address}`
    });
    return;
  }

  try {
    const result = await callSmartContract(id, method, args, address);
    res.json({ result });
  } catch (e) {
    error(e);
    res.status(500).json({ error: e.message });
  }
});

app.post('/get-balance', async (req, res) => {
  _tests.push({ body: req.body, url: req.url, headers: req.headers });
  const { address } = req.body;

  if (!address) {
    res
      .status(400)
      .json({ error: `Missing required fields: address: ${address}` });
    return;
  }

  const balance = await getBalance(address);
  if (!balance) {
    return res.status(404).json({ error: 'Account not found' });
  }
  return res.json({ result: balance });
});

app.post('/transfer', async (req, res) => {
  _tests.push({ body: req.body, url: req.url, headers: req.headers });
  const { from, to, amount } = req.body;

  if ([from, to, amount].filter(Boolean).length !== 3) {
    res.status(400).json({
      error: `Missing required fields: from: ${from}, to: ${to}, amount: ${amount}`
    });
    return;
  }
  await addTransaction(transfer(from, to, amount));
  res.json({ result: 'success' });
});

async function pollTransactionFile() {
  let interval;
  await new Promise((res, _) => {
    interval = setInterval(() => {
      if (canWriteToTransactions) {
        canWriteToTransactions = false;
        res();
      }
    }, 300);
  });
  clearInterval(interval);
}

app.get('/tests', (req, res) => {
  res.json(_tests);
});

app.delete('/tests', (req, res) => {
  _tests.splice(0, _tests.length);
  res.status(200).json({});
});

// Start a server listening on port 3001
const PORT = 3001;
app.listen(PORT, () => {
  info(`Test server at http://localhost:${PORT}`);
});

async function getChain() {
  const chain = await readFile(CHAIN_PATH, 'utf-8');
  return JSON.parse(chain);
}

const MICRO_SECOND = 1000;
async function callSmartContract(smartContractId, method, args, callerAddress) {
  const smartContract = await getSmartContractById(smartContractId);
  if (!smartContract) throw new Error('Smart contract not found');
  await createPkg(Buffer.from(smartContract.pkg));
  const contract = await getSmartContract('build_a_smart_contract_in_rust');
  const context = JSON.parse(await getSmartContractContext(smartContractId));
  const start = performance.now();
  const res = contract[method](context, ...args);

  if (method.startsWith('set')) {
    await setContext(smartContract.id, res);
  }
  const end = performance.now();

  const cost = calculateCost(MICRO_SECOND * (end - start));
  debug(`Calling '${method}' cost '${cost}' tokens`);
  debug('Result: ', res);
  await addTransaction(transfer(callerAddress, PROGRAM_ACCOUNT, cost));

  return res;
}

async function getSmartContractById(id) {
  const chain = await getChain();
  for (let i = chain.length - 1; i >= 0; i--) {
    const block = chain[i];
    const smartContract = block.data.smart_contracts.find(
      smartContract => smartContract.id === id && smartContract.pkg
    );
    if (smartContract) {
      return smartContract;
    }
  }
  return null;
}

function calculateCost(num) {
  return Math.max(Math.round(num), 1);
}

async function addTransaction(data) {
  await pollTransactionFile();

  const transactionsFile = await readFile(TRANSACTIONS_PATH);
  const transactions = JSON.parse(transactionsFile.toString());
  transactions.push(data);

  await writeFile(TRANSACTIONS_PATH, JSON.stringify(transactions));
  await mine();

  canWriteToTransactions = true;
}

async function getBalance(address) {
  const chain = await getChain();
  for (let i = chain.length - 1; i >= 0; i--) {
    const block = chain[i];
    const account = block.data.accounts.find(
      account => account.address === address
    );
    if (account) {
      return account.balance;
    }
  }
  return null;
}

async function mine() {
  try {
    const transactions = await readFile(TRANSACTIONS_PATH);
    const chain = await getChain();
    if (transactions.length > 0) {
      const updatedChain = mine_block(
        chain,
        JSON.parse(transactions.toString())
      );
      info('New block mined');

      await writeFile(CHAIN_PATH, JSON.stringify(updatedChain));
      await writeFile(TRANSACTIONS_PATH, JSON.stringify([]));
    } else {
      debug('No transactions to mine');
    }
  } catch (e) {
    error(e.message);
  }
}

async function deploy(contractOwner, pkg, state = {}) {
  try {
    await addTransaction(
      addSmartContract({
        pkg,
        base_account: contractOwner,
        context: JSON.stringify(state)
      })
    );
  } catch (e) {
    error(e);
  }
}

function addSmartContract(smartContract) {
  return {
    AddSmartContract: smartContract
  };
}

async function getSmartContractContext(id) {
  try {
    const chain = await getChain();
    for (let i = chain.length - 1; i >= 0; i--) {
      const block = chain[i];
      const smartContract = block.data.smart_contracts.find(
        smartContract => smartContract.id === id
      );
      if (smartContract) {
        return smartContract.context;
      }
    }
  } catch (e) {
    error(e);
  }
}

async function setContext(id, state = {}) {
  try {
    await addTransaction(setSmartContractContext(id, JSON.stringify(state)));
  } catch (e) {
    error(e);
  }
}
function setSmartContractContext(id, context) {
  return {
    SetSmartContractContext: {
      id,
      context
    }
  };
}

function transfer(from, to, amount) {
  return {
    Transfer: {
      from,
      to,
      amount
    }
  };
}

async function init() {
  info('Initializing...');
  // Clear chain and transactions
  await writeFile(CHAIN_PATH, JSON.stringify([]));
  await writeFile(TRANSACTIONS_PATH, JSON.stringify([]));

  // Add genesis block
  await mine();

  // Add test addresses
  await addTransaction({ AddAccount: 'ahmad' });
  await addTransaction({ AddAccount: 'mrugesh' });
  await addTransaction({ AddAccount: 'quincy' });
  await addTransaction({ AddAccount: 'tom' });

  const pkg = await readFile(loc('data/contract.json'));

  await createPkg(pkg);
  const contract = await getSmartContract('build_a_smart_contract_in_rust');
  const context = contract.initialise();

  await deploy(PROGRAM_ACCOUNT, pkg, context);
  await mine();
  info('Initialization complete');
}

async function createPkg(pkg) {
  const PATH_TO_TEMP_DIR = loc('./data/tmp');
  const files = JSON.parse(pkg);
  for (const file of files) {
    const filePath = `${PATH_TO_TEMP_DIR}/${file.name}`;
    await writeFile(filePath, Buffer.from(file.buffer));
  }
}

async function getSmartContract(name) {
  const PATH_TO_TEMP_DIR = loc('./data/tmp');
  const wasm = await import(PATH_TO_TEMP_DIR + '/' + name + '.js');
  return wasm;
}
