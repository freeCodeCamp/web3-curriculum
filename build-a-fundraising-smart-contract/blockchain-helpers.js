/** Do not change the code in this file **/
const fs = require('fs');
const sha256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('p192');



/*** FILE SYSTEM HELPERS ***/
function getFolderContents(folder) {
  const folderContents = fs.readdirSync(folder);
  return folderContents;
}

function getFileContents(filename) {
  const fileContents = fs.readFileSync(filename, 'utf-8');
  return fileContents;
}

module.exports.getFolderContents = getFolderContents;
module.exports.getFileContents = getFileContents;



/*** WALLET HELPERS ***/
function getWallets() {
  const walletsFile = fs.readFileSync('./wallets.json');
  const wallets = JSON.parse(walletsFile);
  return wallets;
}

function getRandomWalletAddress() {
  const wallets = getWallets();

  const keys = Object.keys(wallets);
  const random = keys[Math.floor(Math.random() * keys.length)]

  if (random && wallets[random].hasOwnProperty('publicKey')) {
    return wallets[random].publicKey
  } else {
    return null;
  }
}

function generateWallet(name) {
  const keyPair = ec.genKeyPair();

  const publicKey = keyPair.getPublic('hex');
  const privateKey = keyPair.getPrivate('hex');

  const walletsFile = fs.readFileSync('./wallets.json');
  let wallets = JSON.parse(walletsFile);

  if (!wallets.hasOwnProperty(name)) {
    wallets[name] = {}
    wallets[name].publicKey = publicKey;
    wallets[name].privateKey = privateKey;
    wallets = JSON.stringify(wallets, null, 2);

    fs.writeFileSync('./wallets.json', wallets)
  }
}

function getWalletAddressFromName(name) {
  const walletsFile = fs.readFileSync('./wallets.json');
  const wallets = JSON.parse(walletsFile);

  return wallets[name];
}

function getAddressBalance(address) {
  let balance = 0;
  const blockchain = getBlockchain();

  // loop over blocks
  for (let i = 1; i < blockchain.length; i++) {
    const { transactions } = blockchain[i];

    // loop over transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j];
      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }

  const transactions = getTransactions();

  // loop over transaction pool
  for (let i = 0; i < transactions.length; i++) {
    const { fromAddress, toAddress, amount } = transactions[i];
    if (fromAddress === address) {
      balance -= amount;
    }

    if (toAddress === address) {
      balance += amount;
    }
  }

  return balance;
}

function writeContractWallets(contractWallets) {
  const contractWalletsString = JSON.stringify(contractWallets, null, 2);
  fs.writeFileSync('./contract-wallets.json', contractWalletsString);
}

function getContractWallets() {
  const contractWalletsFile = fs.readFileSync('./contract-wallets.json');
  const contractWallets = JSON.parse(contractWalletsFile);
  return contractWallets;
}

function getContractWalletAddressFromName(name) {
  const contractWalletsFile = fs.readFileSync('./contract-wallets.json');
  const contractWallets = JSON.parse(contractWalletsFile);

  return contractWallets[name];
}

function getContractWalletFromAddress(address) {
  const contractWallets = getContractWallets();
  const contractNames = Object.keys(contractWallets);
  const contractName = contractNames.find(name => {
    if (contractWallets[name].hasOwnProperty('publicKey')) {
      return contractWallets[name].publicKey === address;
    }
  });

  return contractWallets[contractName];
}

module.exports.getWallets = getWallets;
module.exports.getRandomWalletAddress = getRandomWalletAddress;
module.exports.generateWallet = generateWallet;
module.exports.getWalletAddressFromName = getWalletAddressFromName;
module.exports.getAddressBalance = getAddressBalance;
module.exports.writeContractWallets = writeContractWallets;
module.exports.getContractWallets = getContractWallets;
module.exports.getContractWalletAddressFromName = getContractWalletAddressFromName;
module.exports.getContractWalletFromAddress = getContractWalletFromAddress;



/*** BLOCKCHAIN HELPERS ***/
function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  fs.writeFileSync('./blockchain.json', blockchainString);
}

function getBlockchain() {
  const blockchainFile = fs.readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

function isValidChain() {
  const blockchain = getBlockchain();

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, previousHash, nonce, transactions, smartContracts } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return "A previous block hash is not valid";
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions) + JSON.stringify(smartContracts)).toString();
    if (testBlockHash != hash) {
      return "A block hash is not valid";
    }

    // loop over transactions
    for (let j = 1; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount, hash, signature } = transactions[j];

      // don't validate transactions from null
      if (fromAddress) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (testTransactionHash != hash) {
          return "A transaction hash is not valid";
        }

        // validate transaction signature
        const keyPair = ec.keyFromPublic(fromAddress, 'hex');
        const validSignature = keyPair.verify(testTransactionHash, signature);
        if (!validSignature) {
          return "A transaction signature is not valid";
        }
      }
    }
  }

  return true;
}

module.exports.writeBlockchain = writeBlockchain;
module.exports.getBlockchain = getBlockchain;
module.exports.isValidChain = isValidChain;



/*** TRANSACTION HELPERS ***/
function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);
  fs.writeFileSync('./transactions.json', transactionsString);
}

function getTransactions() {
  const transactionsFile = fs.readFileSync('./transactions.json');
  const transactions = JSON.parse(transactionsFile);
  return transactions;
}

function addTransaction(privateKey, toAddress, amount) {
  const keyPair = ec.keyFromPrivate(privateKey);
  const fromAddress = keyPair.getPublic('hex');

  if (toAddress === fromAddress) {
    console.log('Error creating transaction. A transaction cannot have the same sender and reciever address.');
    process.exit();
  }

  if (!Number.isInteger(amount)) {
    console.log('Error creating transaction. A transaction cannot have an amount that is not an integer.');
    process.exit();
  }

  if (amount < 0) {
    console.log('Error creating transaction. A transaction cannot have an amount less than zero.');
    process.exit();
  }

  // make sure address has enough tokens to send (transaction pool is included in balance)
  const addressBalance = getAddressBalance(fromAddress);
  if (addressBalance < amount) {
    console.log(`Error creating transaction. The sending address, ${fromAddress}, has a balance of ${addressBalance} and cannot send ${amount} tokens.`)
    process.exit();
  }

  const transactions = getTransactions();

  const hash = sha256(fromAddress + toAddress + amount).toString();
  const signature = keyPair.sign(hash).toDER('hex');

  const newTransaction = {
    fromAddress,
    toAddress,
    amount,
    hash,
    signature
  }

  transactions.push(newTransaction);
  writeTransactions(transactions);

  // if sent to contract address, run on-transaction.js
  const contract = getContract(toAddress);
  if (contract && contract.address && contract.state.status === "open") {
    const contractWallets = getContractWallets();
    const contractNames = Object.keys(contractWallets);
    const contractName = contractNames.find(name => {
      if (contractWallets[name].hasOwnProperty('publicKey')) {
        return contractWallets[name].publicKey === contract.address;
      }
    });

    if (!contractWallets.hasOwnProperty(contractName) || !contractWallets[contractName].hasOwnProperty('privateKey') || !contractWallets[contractName].hasOwnProperty('publicKey')) {
      console.log(`Error adding transaction. Could not find contract wallet for the contract address, '${contract.address}'. You should not manually modify the 'contract-wallets.json' file. You may need to re-initialize your blockchain and try again.`);
      process.exit();
    }

    process.env.PRIVATE_KEY = contractWallets[contractName].privateKey;
    process.env.CONTRACT_STATE = JSON.stringify(contract.state);
    process.env.CONTRACT_ADDRESS = contract.address;
    process.env.CREATOR_ADDRESS = contract.creatorAddress;
    process.env.TRANSACTION = JSON.stringify(newTransaction);

    // only run the function if it exists
    if (contract.functions.hasOwnProperty('on-transaction.js')) {
      eval(contract.functions['on-transaction.js']);
    }
  }
}

module.exports.writeTransactions = writeTransactions;
module.exports.getTransactions = getTransactions;
module.exports.addTransaction = addTransaction;



/*** SMART CONTRACT HELPERS ***/
function writeSmartContracts(smartContracts) {
  const smartContractsString = JSON.stringify(smartContracts, null, 2);
  fs.writeFileSync('./smart-contracts.json', smartContractsString);
}

function getSmartContracts() {
  const smartContractsFile = fs.readFileSync('./smart-contracts.json');
  const smartContracts = JSON.parse(smartContractsFile);
  return smartContracts;
}

function getContract(contractAddress) {
  // get the latest contract state from the blockchain
  const blockchain = getBlockchain();
  const latestContract = blockchain.reduce((currentContract, nextBlock) => {
    if (nextBlock.smartContracts) {
      nextBlock.smartContracts.forEach(contract => {
        if (contract.address === contractAddress) {

          // first occurrence of contract
          if (!currentContract.hasOwnProperty('address')) {
            Object.keys(contract).forEach(key => currentContract[key] = contract[key]);

            // contract found and added, only update state after that
          } else if (contract.hasOwnProperty('state')) {
            currentContract.state = contract.state;
          }
        }
      });
    }
    return currentContract;
  }, {});

  // add contract pool to latest contract state
  const smartContracts = getSmartContracts();
  smartContracts.forEach(contract => {
    if (contract.address === contractAddress) {
      if (!latestContract.hasOwnProperty('address')) {
        Object.keys(contract).forEach(key => latestContract[key] = contract[key]);

      } else if (latestContract.hasOwnProperty('state')) {
        latestContract.state = contract.state;
      }
    }
  });

  return latestContract.hasOwnProperty('address') ? latestContract : null;
}

function getContractAddresses() {
  const addresses = [];
  // loop over blockchain
  const blockchain = getBlockchain();
  blockchain.forEach(block => {
    if (block.smartContracts) {
      block.smartContracts.forEach(contract => {
        if (contract.hasOwnProperty('address') && !addresses.includes(contract.address)) {
          addresses.push(contract.address);
        }
      });
    }
  })

  // loop over contract pool
  const smartContracts = getSmartContracts();
  smartContracts.forEach(contract => {
    if (contract.hasOwnProperty('address') && !addresses.includes(contract.address)) {
      addresses.push(contract.address);
    }
  });

  return addresses;
}

function updateContractState(address, state) {
  const smartContracts = getSmartContracts();
  const contract = getContract(address);

  if (!contract.hasOwnProperty('state') || !contract.state.hasOwnProperty('status') || contract.state.status != 'open') {
    console.log('You cannot update the state of a contract that is not open.')
    process.exit();
  }

  const oldKeys = Object.keys(contract.state).sort();
  const newKeys = Object.keys(state).sort();

  if (JSON.stringify(oldKeys) != JSON.stringify(newKeys)) {
    console.log(`Error updating state for contract with address ${address}. The new state must have the same properties as the old state.`);
    process.exit();
  }

  newKeys.forEach((key, index) => {
    if (state[newKeys[index]] === undefined) {
      console.log(`Error updating state for contract with address ${address}. All properties of the new state must be defined.`);
      process.exit();
    }
  });

  const newState = {
    address,
    state
  }

  smartContracts.push(newState);
  writeSmartContracts(smartContracts);
}

module.exports.writeSmartContracts = writeSmartContracts;
module.exports.getSmartContracts = getSmartContracts;
module.exports.getContract = getContract;
module.exports.getContractAddresses = getContractAddresses;
module.exports.updateContractState = updateContractState;
