import sha256 from 'crypto-js/sha256.js';
import { getBlockchain, writeBlockchain, getTransactions, writeTransactions } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const transactions = getTransactions();

const previousBlock = blockchain[blockchain.length - 1];

let hash = '';
let nonce = 0;
const difficulty = 2;

while (!hash.startsWith('0'.repeat(difficulty))) {
  nonce++;
  hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
  console.log(`nonce = ${nonce}`);
  console.log(`hash = ${hash}`);
}

const newBlock = {
  hash,
  previousHash: previousBlock.hash,
  nonce,
  transactions
};

const rewardTransaction = {
  fromAddress: null,
  toAddress: 'Me',
  amount: 50
}

blockchain.push(newBlock);
writeBlockchain(blockchain);
writeTransactions([rewardTransaction]);
