const { addTransaction, updateContractState } = (await import('./blockchain-helpers.js'));

const contractState = JSON.parse(process.env.CONTRACT_STATE);
const contractAddress = process.env.CONTRACT_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;
const creatorAddress = process.env.CREATOR_ADDRESS;
const transaction = JSON.parse(process.env.TRANSACTION);
// Add your code below

const { fromAddress, amount } = transaction;

const newDonation = {
  fromAddress,
  amount
};

contractState.donations.push(newDonation);
contractState.balance += amount;
contractState.funds.raised += amount;

// if contract fulfilled
if (contractState.funds.raised >= contractState.funds.goal) {
  console.log(`Contract fulfilled, you raised ${contractState.funds.raised} tokens on your goal of ${contractState.funds.goal} tokens`);

  // send tx with all funds to me
  // set status and other state variables
  addTransaction(privateKey, creatorAddress, contractState.balance);
  contractState.balance = 0;
  contractState.status = "closed";
} else {
  console.log(`You have raised ${contractState.funds.raised} tokens on your goal of ${contractState.funds.goal} tokens`)
}

// update contract state
updateContractState(contractAddress, contractState);
