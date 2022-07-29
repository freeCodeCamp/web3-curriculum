const { updateContractState } = (await import('./blockchain-helpers.js'));

const contractState = JSON.parse(process.env.CONTRACT_STATE);
const contractAddress = process.env.CONTRACT_ADDRESS;
const args = JSON.parse(process.env.ARGS);

contractState.favoriteNumber = args[0];

console.log(
  `'example-contract' is running its 'set-favorite-number.js' file and updating the 'favoriteNumber' property in its state to ${args[0]}, see it in 'smart-contracts.json'`
);
updateContractState(contractAddress, contractState);
