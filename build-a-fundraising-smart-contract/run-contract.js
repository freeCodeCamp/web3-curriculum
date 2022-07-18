/** Do not change the code in this file **/

// syntax:
// node run-contract.js <contract_address> <function> <args>

// example:
// node run-contract.js 04454f81e4e6cbcdc12c67bdee92eae88146817b5aa6ef8b7774a14b2e9804964ae0518943f7dfff691de0c945805af0c4 get-funds.js

import {
  getBlockchain,
  getContract,
  getContractWalletFromAddress
} from './blockchain-helpers.js';

const contractAddress = process.argv[2];
const functionToRun = process.argv[3];
const args = process.argv.slice(4);

const contract = getContract(contractAddress);

if (!contract.hasOwnProperty('address')) {
  console.log(`Contract address '${contractAddress}' not found!`);
  process.exit();
}

if (
  !contract.hasOwnProperty('functions') ||
  !contract.functions.hasOwnProperty(functionToRun)
) {
  console.log(
    `Function '${functionToRun}' on contract address ${contractAddress} not found!`
  );
  process.exit();
}

if (
  functionToRun == 'on-transaction.js' ||
  functionToRun == 'on-new-block.js'
) {
  console.log(`You cannot manually run '${functionToRun}'`);
  process.exit();
}

const contractWallet = getContractWalletFromAddress(contract.address);
if (contractWallet.hasOwnProperty('privateKey')) {
  process.env.PRIVATE_KEY = contractWallet.privateKey;
}

process.env.CONTRACT_STATE = JSON.stringify(contract.state);
process.env.CONTRACT_ADDRESS = contract.address;
process.env.CREATOR_ADDRESS = contract.creatorAddress;
process.env.ARGS = JSON.stringify(args);
process.env.BLOCKCHAIN_LENGTH = getBlockchain().length;

eval(`(async () => { ${contract.functions[functionToRun]} })();`);
