const { addTransaction, updateContractState } = (await import('./blockchain-helpers.js'));

const contractState = JSON.parse(process.env.CONTRACT_STATE);
const contractAddress = process.env.CONTRACT_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;
const creatorAddress = process.env.CREATOR_ADDRESS;
const blockchainLength = process.env.BLOCKCHAIN_LENGTH;
// Add your code below

if (blockchainLength >= 7) {
  // add a tx back to all donors
  contractState.donations.forEach(donation => {
    addTransaction(privateKey, donation.fromAddress, donation.amount);
    contractState.balance -= donation.amount;
  });

  contractState.status = 'closed';

  updateContractState(contractAddress, contractState);
} 
