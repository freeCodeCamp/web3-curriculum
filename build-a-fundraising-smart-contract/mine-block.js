/** Do not change the code in this file **/
import {
  getBlockchain,
  getTransactions,
  getSmartContracts,
  writeSmartContracts,
  writeBlockchain,
  writeTransactions,
  getContract,
  getContractAddresses,
  getContractWalletFromAddress,
  getRandomWalletAddress
} from './blockchain-helpers.js';
import sha256 from 'crypto-js/sha256.js';

// don't mine a block without any wallets for reward
const rewardAddress = getRandomWalletAddress();
if (!rewardAddress) {
  console.log(
    `Error mining block. You cannot mine a block without any existing wallets. Run 'node generate-wallet.js <name>' to create one.`
  );
  process.exit();
}

// mine the block
const blockchain = getBlockchain();
const smartContracts = getSmartContracts();
const transactions = getTransactions();

const previousBlock = blockchain[blockchain.length - 1];
let hash = '';
let nonce = 0;
const difficulty = 2;

while (!hash.startsWith('0'.repeat(difficulty))) {
  nonce++;
  hash = sha256(
    nonce +
      previousBlock.hash +
      JSON.stringify(transactions) +
      JSON.stringify(smartContracts)
  ).toString();
}

const newBlock = {
  hash,
  previousHash: previousBlock.hash,
  nonce,
  transactions,
  smartContracts
};

const rewardTransaction = {
  fromAddress: null,
  toAddress: rewardAddress,
  amount: 50
};

blockchain.push(newBlock);

writeBlockchain(blockchain);
writeSmartContracts([]);
writeTransactions([rewardTransaction]);

// run on-new-block for all contracts
const allContractsAddresses = getContractAddresses();

allContractsAddresses.forEach(contractAddress => {
  const contract = getContract(contractAddress);

  // only run if status is "open"
  if (contract && contract.state && contract.state.status === 'open') {
    const contractWallet = getContractWalletFromAddress(contract.address);

    // only run if contract wallet exists
    if (
      contractWallet &&
      contractWallet.hasOwnProperty('publicKey') &&
      contractWallet.hasOwnProperty('privateKey')
    ) {
      process.env.PRIVATE_KEY = contractWallet.privateKey;
      process.env.CONTRACT_ADDRESS = contract.address;
      process.env.CREATOR_ADDRESS = contract.creatorAddress;
      process.env.CONTRACT_STATE = JSON.stringify(contract.state);
      process.env.BLOCKCHAIN_LENGTH = getBlockchain().length;

      // only run the function if it exists
      if (contract.functions.hasOwnProperty('on-new-block.js')) {
        eval(`(async () => { ${contract.functions['on-new-block.js']} })();`);
      }
    }
  }
});
