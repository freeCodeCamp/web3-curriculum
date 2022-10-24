import sha256 from 'crypto-js/sha256.js';
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, previousHash, nonce, transactions } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return false;
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
    if (testBlockHash != hash) {
      return false;
    }

    // loop over transactions
    for (let j = 1; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount, hash } = transactions[j];

      // don't validate reward transactions
      if (fromAddress) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (testTransactionHash != hash) {
          return false;
        }
      }
    }
  }

  return true;
}

export function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);
  writeFileSync('./transactions.json', transactionsString);
}

export function getTransactions() {
  const transactionsFile = readFileSync('./transactions.json');
  const transactions = JSON.parse(transactionsFile);
  return transactions;
}

export function getAddressBalance(address) {
  const blockchain = getBlockchain();
  let balance = 0;

  // loop over blocks
  for (let i = 1; i < blockchain.length; i++) {
    const { transactions } = blockchain[i]; 

    // loop over transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j]

      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }
  return balance;
}
