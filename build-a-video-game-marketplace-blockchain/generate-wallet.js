const { getTransactions, writeTransactions, getWallets, writeWallets } = require('./blockchain-helpers');

const EC = require('elliptic').ec;
const ec = new EC('p192');

const newWalletName = process.argv[2];
// Add your code below
