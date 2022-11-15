import express from 'express';
import { Logger } from 'logover';
import {
  deploySmartContract,
  initialiseBlockchain,
  transfer,
  getAccount,
  callSmartContract
} from './utils.js';

const logover = new Logger({ level: 'debug' });

logover.info('Starting provider...');

const app = express();

app.use(express.json());

const _tests = [];

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
    res.contentType('application/json');
    res.json({ result });
  } catch (e) {
    logover.error(e);
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

  const balance = (await getAccount(address))?.balance;
  if (!balance) {
    return res.status(404).json({ error: 'Account not found' });
  }
  res.contentType('application/json');
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
  try {
    await transfer({ from, to, amount });
    res.contentType('application/json');
    res.json({ result: 'success' });
  } catch (e) {
    logover.error(e);
    res.status(400).json({ error: e.message });
  }
});

app.get('/tests', (req, res) => {
  res.json(_tests);
});

app.delete('/tests', (req, res) => {
  _tests.splice(0, _tests.length);
  res.status(200).json({});
});

const PORT = 3001;

app.listen(PORT, () => {
  logover.info(`Provider listening on port ${PORT}`);
});

// ----------------------
// BLOCKCHAIN STUFFS
// ----------------------

await initialiseBlockchain();
await deploySmartContract();
