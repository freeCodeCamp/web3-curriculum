const contractState = JSON.parse(process.env.CONTRACT_STATE);

console.log(`'Running the 'get-favorite-number.js' file in the 'example-contract'`);
console.log(`The favorite number of the 'example-contract' is ${contractState.favoriteNumber}`);
