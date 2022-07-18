const { updateContractState } = (await import('./blockchain-helpers.js'));

const contractState = JSON.parse(process.env.CONTRACT_STATE);
const contractAddress = process.env.CONTRACT_ADDRESS;
const args = JSON.parse(process.env.ARGS);

contractState.description = args[0];

console.log(`Updating the 'description' property in the 'fundraising-contract' to ${args[0]}, see it in 'smart-contracts.json'`);
updateContractState(contractAddress, contractState);
