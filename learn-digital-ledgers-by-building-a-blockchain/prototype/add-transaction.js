const { getTransactions, writeTransactions } = require('./blockchain-helpers');

const transactions = getTransactions();

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);

const newTransaction = {
  fromAddress,
  toAddress,
  amount
}

transactions.push(newTransaction);
writeTransactions(transactions);
