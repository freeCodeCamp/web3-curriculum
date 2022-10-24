import { writeTransactions, getTransactions } from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);

const newTransaction = {
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
transactions.push(newTransaction);
writeTransactions(transactions);