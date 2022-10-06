const fs = require('fs');

function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);

  fs.writeFileSync('./blockchain.json', blockchainString);
}

function getBlockchain() {
  const blockchainFile = fs.readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);

  return blockchain;
}

function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);

  fs.writeFileSync('./transactions.json', transactionsString);
}

function getTransactions() {
  const transactionsFile = fs.readFileSync('./transactions.json');
  const transactions = JSON.parse(transactionsFile);

  return transactions;
}

function isValidChain() {
  const blockchain = getBlockchain();
  console.log(blockchain);

  for (let i=1; i< blockchain.length; i++) {
    const previousBlock = blockchain[i-1];
    const { previousHash } = blockchain[i];

    if (previousHash != previousBlock.hash) {
      return false;
    }
  }

  return true;
}

module.exports.writeBlockchain = writeBlockchain;
module.exports.getBlockchain = getBlockchain;
module.exports.writeTransactions = writeTransactions;
module.exports.getTransactions = getTransactions;
module.exports.isValidChain = isValidChain;
