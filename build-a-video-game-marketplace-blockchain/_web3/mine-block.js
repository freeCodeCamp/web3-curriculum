import {
  getBlockchain,
  getTransactions,
  writeBlockchain,
  writeTransactions
} from './blockchain-helpers.js';

import sha256 from 'crypto-js/sha256.js';
// Add your code below

const blockchain = getBlockchain();
const transactions = getTransactions();

const previousBlock = blockchain[blockchain.length - 1];

let hash = '';
let nonce = 0;
const difficulty = 2;

while (!hash.startsWith('0'.repeat(difficulty))) {
  nonce++;
  hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
}

const newBlock = {
  hash,
  previousHash: previousBlock.hash,
  nonce,
  transactions
};

blockchain.push(newBlock);
writeBlockchain(blockchain);
writeTransactions([]);
