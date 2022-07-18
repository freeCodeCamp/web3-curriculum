/** Do not change the code in this file **/

// syntax:
// node deploy-contract.js <contract-folder> <creator-private-key>

// example:
// node deploy-contract.js smart-contract 8007344d8eaa1f4c5410412638e68715732dcbefb6168310

import {
  getFileContents,
  getFolderContents,
  getWallets,
  getSmartContracts,
  writeSmartContracts,
  writeContractWallets,
  getContractWallets
} from './blockchain-helpers.js';
import EC from 'elliptic';
const ec = new EC.ec('p192');

const contractFolder = process.argv[2];
const creatorPrivateKey = process.argv[3];

if (!contractFolder || !creatorPrivateKey) {
  console.log(
    'You cannot deploy a smart contract without providing the contract folder and your private key.'
  );
  process.exit();
}

// check that creatorPrivateKey is in wallets.json
const wallets = getWallets();

const walletNames = Object.keys(wallets);
const walletName = walletNames.find(name => {
  if (wallets[name].hasOwnProperty('privateKey')) {
    return wallets[name].privateKey === creatorPrivateKey;
  }
});

if (
  !wallets[walletName] ||
  !wallets[walletName].publicKey ||
  !wallets[walletName].privateKey
) {
  console.log(
    `Could not find wallet for that private key. You should not manually modify the 'wallets.json' file. You can create a wallet by running 'node generate-wallet.js <name>'`
  );
  process.exit();
}

const smartContracts = getSmartContracts();

// create new keypair for contract address
const contractKeyPair = ec.genKeyPair();
const contractPublicKey = contractKeyPair.getPublic('hex');
const contractPrivateKey = contractKeyPair.getPrivate('hex');

// get creator address
const keyPair = ec.keyFromPrivate(creatorPrivateKey);
const creatorAddress = keyPair.getPublic('hex');

// get contract files
const contractFiles = getFolderContents(contractFolder);
const contractFunctions = {};

// initial variables for contract
const initialState = JSON.parse(
  getFileContents(`${contractFolder}/initial-state.json`)
);

// add all .js files to contract functions
contractFiles.forEach(file => {
  if (file.endsWith('.js')) {
    const fileContents = getFileContents(`${contractFolder}/${file}`);
    contractFunctions[file] = fileContents;
  }
});

// add contract address to wallet
let contractWallets = getContractWallets();

if (contractWallets.hasOwnProperty(contractFolder)) {
  console.log(
    `Error generating contract address. Your contract folder name already exists in 'contract-wallets.json'. You may need to re-initialize your blockchain and try again.`
  );
  process.exit();
}

contractWallets[contractFolder] = {};
contractWallets[contractFolder].publicKey = contractPublicKey;
contractWallets[contractFolder].privateKey = contractPrivateKey;

writeContractWallets(contractWallets);

// write contract to pool
const newContract = {
  address: contractPublicKey,
  creatorAddress,
  functions: contractFunctions,
  state: initialState
};

smartContracts.push(newContract);
writeSmartContracts(smartContracts);

console.log(
  `Your contract has been deployed at the address '${contractPublicKey}'. It will be added to the blockchain when the next block is mined.`
);
