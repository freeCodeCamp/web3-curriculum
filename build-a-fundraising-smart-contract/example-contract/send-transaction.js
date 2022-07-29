const { addTransaction } = (await import('./blockchain-helpers.js'));

const privateKey = process.env.PRIVATE_KEY;
const toAddress =
  '04f1c5e5a2f85e384ece781c8ecfdbeddb87c055d2e9c88db14bd5582805a798576f89c2b7b2d7933cd32a1ec3dc2ae44d';

console.log(
  `'example-contract' is running its 'send-transaction.js' file and is sending a transaction, see it in 'transactions.json'`
);
addTransaction(privateKey, toAddress, 0);
