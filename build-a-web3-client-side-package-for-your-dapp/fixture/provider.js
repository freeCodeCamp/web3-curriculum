import { watch } from "fs";
import express from "express";
import logover, { info, error, debug } from "logover";
import { readFile, writeFile } from "fs/promises";
import { mine_block } from "./blockchain/pkg/blockchain.js";
logover({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
});

const loc = (p) => new URL(p, import.meta.url).pathname;
const CHAIN_PATH = loc("data/chain.json");
const TRANSACTIONS_PATH = loc("data/transactions.json");

const PROGRAM_ACCOUNT = "shaun";

const _tests = [];

try {
  await init();
} catch (e) {
  error("Unable to initialise blockchain:\n");
  throw new Error(e);
}

const app = express();

app.use(express.json());
app.use(express.static("client"));

app.get("/", (req, res) => {
  const client = loc("client/index.html");
  debug(client);
  res.sendFile(client);
});

app.post("/call-smart-contract", async (req, res) => {
  const { id, method, args, address } = req.body;

  try {
    const result = await callSmartContract(id, method, args, address);
    res.json({ result });
  } catch (e) {
    error(e);
    res.status(500).json({ error: e.message });
  }
  // TODO: Add req to _tests
});

app.post("/get-balance", async (req, res) => {
  const { address } = req.body;
  const balance = await getBalance(address);
  if (!balance) {
    return res.status(404).json({ error: "Account not found" });
  }
  return res.json({ result: balance });
});

app.post("/transfer", async (req, res) => {
  const { from, to, amount } = req.body;
  addTransaction(transfer(from, to, amount));
});

app.get("/tests", (req, res) => {
  res.json(_tests);
});

// Start a server listening on port 3001
const PORT = 3001;
app.listen(PORT, () => {
  info(`Test server on port ${PORT}`);
});

async function getChain() {
  // Open chain from ./chain.json
  const chain = await readFile(CHAIN_PATH, "utf8");
  return JSON.parse(chain);
}

async function callSmartContract(smartContractId, method, args, callerAddress) {
  const smartContract = await getSmartContractById(smartContractId);
  const buf = Buffer.from(smartContract.byte_code);
  const wasmModule = await WebAssembly.instantiate(buf);
  const context = smartContract.context;

  const start = performance.now();
  const res = wasmModule.instance.exports[method](context, ...args);

  // Smart Contract function is a set method - alters blockchain state
  // Else, function is a view method - does not alter blockchain state
  if (method.startsWith("set")) {
    // Re-deploy contract with new state
    await deploy(smartContract.base_account, smartContract.byte_code, res);
  }
  const end = performance.now();

  const cost = calculateCost(MICRO_SECOND * (end - start));
  debug(`Calling '${method}' cost '${cost}' tokens`);
  debug(`Result: ${res}`);
  addTransaction(transfer(callerAddress, PROGRAM_ACCOUNT, cost));

  return res;
}

async function getSmartContractById(id) {
  const chain = await getChain();
  for (let i = chain.length - 1; i >= 0; i--) {
    const block = chain[i];
    const smartContract = block.data.smart_contracts.find(
      (smartContract) => smartContract.id === id
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
  const transactionsFile = await readFile(TRANSACTIONS_PATH, "utf8");
  const transactions = JSON.parse(transactionsFile);
  transactions.push(data);
  await writeFile(TRANSACTIONS_PATH, JSON.stringify(transactions));
}

async function getBalance(address) {
  const chain = await getChain();
  for (let i = chain.length - 1; i >= 0; i--) {
    const block = chain[i];
    const account = block.data.accounts.find(
      (account) => account.address === address
    );
    if (account) {
      return account.balance;
    }
  }
  return null;
}

async function mine() {
  try {
    const transactions = await readFile(TRANSACTIONS_PATH, "utf8");
    const chain = await readFile(CHAIN_PATH, "utf8");
    const updatedChain = mine_block(
      JSON.parse(chain),
      JSON.parse(transactions)
    );

    await writeFile(CHAIN_PATH, JSON.stringify(updatedChain));
    await writeFile(TRANSACTIONS_PATH, JSON.stringify([]));
  } catch (e) {
    error(e);
  }
}

async function deploy(contractOwner, byteCode, state = {}) {
  try {
    await addTransaction(
      addSmartContract({
        byte_code: byteCode.toJSON().data,
        base_account: contractOwner,
        context: state,
      })
    );
  } catch (e) {
    console.error(e);
  }
}

function addSmartContract(smartContract) {
  return {
    AddSmartContract: smartContract,
  };
}

function transfer(from, to, amount) {
  return {
    Transfer: {
      from,
      to,
      amount,
    },
  };
}

async function init() {
  // Clear chain and transactions
  await writeFile(CHAIN_PATH, JSON.stringify([]));
  await writeFile(TRANSACTIONS_PATH, JSON.stringify([]));

  // Add genesis block
  await mine();

  const { initialise } = await import(
    "./pkg/build_a_smart_contract_in_rust.js"
  );
  const context = initialise();
  debug(context);

  const byteCode = await readFile(
    loc("pkg/build_a_smart_contract_in_rust_bg.wasm")
  );
  await deploy(PROGRAM_ACCOUNT, byteCode, context);
}

watch(TRANSACTIONS_PATH, { interval: 1000 }, async () => {
  info("Mining a new block...");
  await mine();
  info("New block mined!");
});
