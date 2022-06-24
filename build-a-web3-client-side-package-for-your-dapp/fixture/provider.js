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
app.use(express.static(loc("../client")));
app.use(express.static(loc("../")));

app.get("/", (req, res) => {
  const client = loc("client/index.html");
  res.sendFile(client);
});

app.post("/call-smart-contract", async (req, res) => {
  const { id, method, args, address } = req.body;

  if (![id, method, address].filter(Boolean).length) {
    res
      .status(400)
      .json({ error: `Missing required fields: ${(id, method, address)}` });
    return;
  }

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
  info(`Test server at http://localhost:${PORT}`);
});

async function getChain() {
  // Open chain from ./chain.json
  const chain = await readFile(CHAIN_PATH, "utf8");
  return JSON.parse(chain);
}

const MICRO_SECOND = 1000;
async function callSmartContract(smartContractId, method, args, callerAddress) {
  const smartContract = await getSmartContractById(smartContractId);
  if (!smartContract) throw new Error("Smart contract not found");
  debug(smartContract);
  await createPkg(Buffer.from(smartContract.pkg));
  const contract = await getSmartContract("build_a_smart_contract_in_rust");
  const context = JSON.parse(smartContract.context);
  const start = performance.now();
  const res = contract[method](context, ...args);

  // Smart Contract function is a set method - alters blockchain state
  // Else, function is a view method - does not alter blockchain state
  if (method.startsWith("set")) {
    // Re-deploy contract with new state
    await setContext(smartContract.id, res);
  }
  const end = performance.now();

  const cost = calculateCost(MICRO_SECOND * (end - start));
  debug(`Calling '${method}' cost '${cost}' tokens`);
  debug("Result: ", res);
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
    const chain = await getChain();
    if (transactions.length > 0) {
      const updatedChain = mine_block(chain, JSON.parse(transactions));

      await writeFile(CHAIN_PATH, JSON.stringify(updatedChain));
      await writeFile(TRANSACTIONS_PATH, JSON.stringify([]));
    } else {
      debug("No transactions to mine");
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
        context: JSON.stringify(state),
      })
    );
  } catch (e) {
    error(e);
  }
}

function addSmartContract(smartContract) {
  return {
    AddSmartContract: smartContract,
  };
}

async function setContext(id, state = {}) {
  debug("setContext: ", id, state);
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
      context,
    },
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

  // Add test addresses
  await addTransaction({ AddAccount: "ahmad" });
  await addTransaction({ AddAccount: "mrugesh" });
  await addTransaction({ AddAccount: "quincy" });
  await addTransaction({ AddAccount: "tom" });

  const pkg = await readFile(loc("data/contract.json"));

  await createPkg(pkg);
  const contract = await getSmartContract("build_a_smart_contract_in_rust");
  const context = contract.initialise();

  await deploy(PROGRAM_ACCOUNT, pkg, context);
  await mine();
}

async function createPkg(pkg) {
  const PATH_TO_TEMP_DIR = loc("./data/tmp");
  const files = JSON.parse(pkg);
  for (const file of files) {
    // Write file to temp dir
    const filePath = `${PATH_TO_TEMP_DIR}/${file.name}`;
    await writeFile(filePath, Buffer.from(file.buffer));
  }
}

async function getSmartContract(name) {
  const PATH_TO_TEMP_DIR = loc("./data/tmp");
  const wasm = await import(PATH_TO_TEMP_DIR + "/" + name + ".js");
  return wasm;
}

// Rate limit watch callback

const RATE_LIMIT_WATCH_INTERVAL = 2000;
let shouldMine = true;

watch(TRANSACTIONS_PATH, async () => {
  if (shouldMine) {
    const transactions = await readFile(TRANSACTIONS_PATH, "utf8");
    if (transactions.length > 0) {
      info("Mining a new block...");
      shouldMine = false;
      await mine();
      info("New block mined!");
      setTimeout(() => {
        shouldMine = true;
      }, RATE_LIMIT_WATCH_INTERVAL);
    }
  }
});
