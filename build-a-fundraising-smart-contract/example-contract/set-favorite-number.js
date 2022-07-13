const { updateContractState } = require('./blockchain-helpers');

const contractState = JSON.parse(process.env.CONTRACT_STATE);
const contractAddress = process.env.CONTRACT_ADDRESS;
const args = JSON.parse(process.env.ARGS);

contractState.favoriteNumber = args[0];

console.log(`Updating the 'favoriteNumber' property in the 'example-contract' to ${args[0]}, see it in 'smart-contracts.json'`);
updateContractState(contractAddress, contractState);
