import sha256 from 'crypto-js/sha256.js';
import { getBlockchain, writeBlockchain, getTransactions, writeTransactions } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];
const transactions = getTransactions();

let nonce = 0;
let hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
const difficulty = 2;

while (!hash.startsWith('0'.repeat(difficulty))) {
  nonce++;
  hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
}

const newBlock = {
  hash,
  nonce,
  previousHash: previousBlock.hash,
  transactions
}

const rewardTransaction = {
  fromAddress: null,
  toAddress: 'Me',
  amount: 50
}

blockchain.push(newBlock);
writeBlockchain(blockchain);
writeTransactions([rewardTransaction]);