/** Do not change code in this file **/
import { readFileSync, writeFileSync } from "fs";

/** blockchain helpers **/
function getBlockchain() {
  const blockchainFile = readFileSync("./blockchain.json");
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync("./blockchain.json", blockchainString);
}

const _getBlockchain = getBlockchain;
export { _getBlockchain as getBlockchain };
const _writeBlockchain = writeBlockchain;
export { _writeBlockchain as writeBlockchain };

/** transaction helpers **/
function getTransactions() {
  const transactionsFile = readFileSync("./transactions.json");
  const transactions = JSON.parse(transactionsFile);
  return transactions;
}

function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);
  writeFileSync("./transactions.json", transactionsString);
}

const _getTransactions = getTransactions;
export { _getTransactions as getTransactions };
const _writeTransactions = writeTransactions;
export { _writeTransactions as writeTransactions };

/** wallet helpers **/
function getWallets() {
  const walletsFile = readFileSync("./wallets.json");
  const wallets = JSON.parse(walletsFile);
  return wallets;
}

function writeWallets(wallets) {
  const walletsString = JSON.stringify(wallets, null, 2);
  writeFileSync("./wallets.json", walletsString);
}

function getWalletAddressFromName(name) {
  const wallets = getWallets();
  return wallets[name].publicKey;
}

const _getWallets = getWallets;
export { _getWallets as getWallets };
const _writeWallets = writeWallets;
export { _writeWallets as writeWallets };
const _getWalletAddressFromName = getWalletAddressFromName;
export { _getWalletAddressFromName as getWalletAddressFromName };

/** item helpers **/
function getRandomItem() {
  const itemsFile = readFileSync("./items.json");
  const items = JSON.parse(itemsFile);
  const itemKeys = Object.keys(items);
  const randomItem = itemKeys[Math.floor(Math.random() * itemKeys.length)];
  return randomItem;
}

function getItemPrice(item) {
  const itemsFile = readFileSync("./items.json");
  const items = JSON.parse(itemsFile);
  return items[item];
}

const _getRandomItem = getRandomItem;
export { _getRandomItem as getRandomItem };
const _getItemPrice = getItemPrice;
export { _getItemPrice as getItemPrice };

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
      const { buyerAddress, sellerAddress, price = 0 } = transactions[j];
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
    const { buyerAddress, sellerAddress, price = 0 } = transactions[i];
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
    icon: 0,
    spray: 0,
    pose: 0,
    emote: 0,
    skin: 0,
  };

  // loop over blocks
  for (let i = 1; i < blockchain.length; i++) {
    const { transactions } = blockchain[i];

    // loop over transactions in block
    for (let j = 0; j < transactions.length; j++) {
      const {
        buyerAddress,
        sellerAddress,
        itemBought = null,
        itemSold = null,
      } = transactions[j];

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
    const {
      buyerAddress,
      sellerAddress,
      itemBought = null,
      itemSold = null,
    } = transactions[i];

    if (buyerAddress === address && itemBought) {
      items[itemBought] += 1;
    }

    if (sellerAddress === address && itemSold) {
      items[itemSold] -= 1;
    }
  }

  return items;
}

const _getAddressBalance = getAddressBalance;
export { _getAddressBalance as getAddressBalance };
const _getAddressItems = getAddressItems;
export { _getAddressItems as getAddressItems };
