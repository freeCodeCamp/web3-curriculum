const { getAddressBalance, getTransactions, getItemPrice, writeTransactions } = require('./blockchain-helpers');

const EC = require('elliptic').ec;
const ec = new EC('p192');

const buyerPrivateKey = process.argv[2];
const itemBought = process.argv[3];
// Add your code below
