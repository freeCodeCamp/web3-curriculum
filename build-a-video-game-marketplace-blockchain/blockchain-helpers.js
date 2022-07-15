/** Do not change code in this file **/
const fs = require('fs');



/** blockchain helpers **/
function getBlockchain() {
  const blockchainFile = fs.readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  fs.writeFileSync('./blockchain.json', blockchainString);
}

module.exports.getBlockchain = getBlockchain;
module.exports.writeBlockchain = writeBlockchain;



/** transaction helpers **/
function getTransactions() {
  const transactionsFile = fs.readFileSync('./transactions.json');
  const transactions = JSON.parse(transactionsFile);
  return transactions;
}

function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);
  fs.writeFileSync('./transactions.json', transactionsString);
}

module.exports.getTransactions = getTransactions;
module.exports.writeTransactions = writeTransactions;



/** wallet helpers **/
function getWallets() {
  const walletsFile = fs.readFileSync('./wallets.json');
  const wallets = JSON.parse(walletsFile);
  return wallets;
}

function writeWallets(wallets) {
  const walletsString = JSON.stringify(wallets, null, 2);
  fs.writeFileSync('./wallets.json', walletsString);
}

function getWalletAddressFromName(name) {
  const wallets = getWallets();
  return wallets[name].publicKey;
}

module.exports.getWallets = getWallets;
module.exports.writeWallets = writeWallets;
module.exports.getWalletAddressFromName = getWalletAddressFromName;



/** item helpers **/
function getRandomItem() {
  const itemsFile = fs.readFileSync('./items.json');
  const items = JSON.parse(itemsFile);
  const itemKeys = Object.keys(items);
  const randomItem = itemKeys[Math.floor(Math.random() * itemKeys.length)];
  return randomItem;
}

function getItemPrice(item) {
  const itemsFile = fs.readFileSync('./items.json');
  const items = JSON.parse(itemsFile);
  return items[item];
}

module.exports.getRandomItem = getRandomItem;
module.exports.getItemPrice = getItemPrice;



/** address helpers **/
function getAddressBalance(address) {
  const blockchain = getBlockchain();
  const transactions = getTransactions();
  let balance = 0;

  // loop over blocks
  for (let i = 1; i < blockchain.length; i++) {
    const { transactions } = blockchain[i];

    // loop over transactions
    for (let j = 0; j < transactions.length; j++) {
      const { buyerAddress, sellerAddress, price = 0 } = transactions[j]
      if (buyerAddress === address) {
        balance -= price;
      }

      if (sellerAddress === address) {
        balance += price;
      }
    }
  }

  // loop over transaction pool
  for (let i = 0; i < transactions.length; i++) {
    const { buyerAddress, sellerAddress, price = 0 } = transactions[i]
    if (buyerAddress === address) {
      balance -= price;
    }

    if (sellerAddress === address) {
      balance += price;
    }
  }

  return balance;
}

function getAddressItems(address) {
  const blockchain = getBlockchain();
  const transactions = getTransactions();

  let items = {
    "icon": 0,
    "spray": 0,
    "pose": 0,
    "emote": 0,
    "skin": 0
  };

  // loop over blocks
  for (let i = 1; i < blockchain.length; i++) {
    const { transactions } = blockchain[i];

    // loop over transactions in blockchain
    for (let j = 0; j < transactions.length; j++) {
      const { buyerAddress, sellerAddress, itemBought = null, itemSold = null } = transactions[j];

      if (buyerAddress === address && itemBought) {
        items[itemBought] += 1;
      }

      if (sellerAddress === address && itemSold) {
        items[itemSold] -= 1;
      }
    }
  }

  // loop over transaction pool
  for (let i = 0; i < transactions.length; i++) {
    const { buyerAddress, sellerAddress, itemBought = null, itemSold = null } = transactions[i];

    if (buyerAddress === address && itemBought) {
      items[itemBought] += 1;
    }

    if (sellerAddress === address && itemSold) {
      items[itemSold] -= 1;
    }
  }

  return items;
}

module.exports.getAddressBalance = getAddressBalance;
module.exports.getAddressItems = getAddressItems;
