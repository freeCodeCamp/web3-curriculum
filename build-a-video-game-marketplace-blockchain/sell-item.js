const { getAddressItems, getItemPrice, getTransactions, writeTransactions } = require('./blockchain-helpers');

const EC = require('elliptic').ec;
const ec = new EC('p192');

const sellerPrivateKey = process.argv[2];
const itemSold = process.argv[3];
// Add your code below
