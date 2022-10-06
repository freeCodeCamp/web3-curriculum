const { getBlockchain, writeBlockchain, getTransactions, writeTransactions } = require('./blockchain-helpers');

const blockchain = getBlockchain();
const transactions = getTransactions();

const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random(),
  previousHash: previousBlock.hash,
  transactions
};

blockchain.push(newBlock);

writeBlockchain(blockchain);
writeTransactions([]);