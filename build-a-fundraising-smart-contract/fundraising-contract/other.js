const { addTransaction, updateContractState } = require('./blockchain-helpers');

const contractState = JSON.parse(process.env.CONTRACT_STATE);
const contractAddress = process.env.CONTRACT_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;
const creatorAddress = process.env.CREATOR_ADDRESS;
const blockchainLength = JSON.parse(process.env.TRANSACTION);
const args = JSON.parse(process.env.ARGS);
