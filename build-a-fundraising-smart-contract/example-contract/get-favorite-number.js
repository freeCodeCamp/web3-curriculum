const contractState = JSON.parse(process.env.CONTRACT_STATE);

console.log(`The favorite number of the 'example-contract' is ${contractState.favoriteNumber}`);
