const transaction = JSON.parse(process.env.TRANSACTION);

console.log(`Someone sent a transaction to 'example-contract', here's what it looks like:`);
console.log(transaction);
