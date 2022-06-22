/**
 * Provider needs to:
 * 1. Handle HTTP requests from clients
 * 2. Act as a single node in the blockchain
 *
 * The Provider expects the following requests:
 * - GET /
 * - POST /call-smart-contract
 * - POST /get-balance
 * - POST /transfer
 *
 *
 */

import logover, { info } from "logover";
import { readFile, writeFile } from "fs/promises";
import express from "express";
logover({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
});

const PROGRAM_ACCOUNT = "shaun";

const _tests = [];

const app = express();

app.use(express.json());
app.use(express.static("client"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
});

app.post("/call-smart-contract", async (req, res) => {
  const { id, method, args } = req.body;

  // TODO: Add req to _tests
});

app.post("/get-balance", async (req, res) => {});

app.post("/transfer", async (req, res) => {});

app.get("/tests", (req, res) => {
  res.json(_tests);
});

// Start a server listening on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  info(`Test server on port ${PORT}`);
});

async function getChain() {
  // Open chain from ./chain.json
  const chain = await readFile("./chain.json", "utf8");
  return JSON.parse(chain);
}

async function callSmartContract(smartContractId, method, args, callerAddress) {
  try {
    const smartContract = await getSmartContractById(id);
    const buf = Buffer.from(smartContract.byte_code);
    const wasmModule = await WebAssembly.instantiate(buf);
    const start = performance.now();
    const res = wasmModule.instance.exports[method](...args);
    const end = performance.now();
    const cost = calculateCost(MICRO_SECOND * (end - start));
    debug(`Calling '${method}' cost '${cost}' tokens`);
    debug(`Result: ${res}`);
    addTransaction({
      transfer: { from: callerAddress, to: PROGRAM_ACCOUNT, amount: cost },
    });
    return res;
  } catch (e) {
    console.error(e);
    return null;
  }
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
  const transactionsFile = await readFile("./transactions.json", "utf8");
  const transactions = JSON.parse(transactionsFile);
  transactions.push(data);
  await writeFile("./transactions.json", JSON.stringify(transactions));
}
