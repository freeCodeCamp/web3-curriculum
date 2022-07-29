/** Do not change the code in this file **/
import { readFileSync, writeFileSync } from 'fs';

/*** TRANSACTION HELPERS ***/
function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);
  writeFileSync('./transactions.json', transactionsString);
}

function getTransactions() {
  const transactionsFile = readFileSync('./transactions.json');
  const transactions = JSON.parse(transactionsFile);
  return transactions;
}

const _writeTransactions = writeTransactions;
export { _writeTransactions as writeTransactions };
const _getTransactions = getTransactions;
export { _getTransactions as getTransactions };
