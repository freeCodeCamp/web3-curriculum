const transaction = JSON.parse(process.env.TRANSACTION);

console.log(`Someone sent a transaction to 'example-contract', it is running its 'on-transaction.js' file, here's what the transaction looks like:`);
console.log(transaction);
