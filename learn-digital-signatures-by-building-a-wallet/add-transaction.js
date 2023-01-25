import sha256 from 'crypto-js/sha256.js';
import { writeTransactions, getTransactions, getAddressBalance } from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);

const hash = sha256(fromAddress + toAddress + amount).toString();

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}