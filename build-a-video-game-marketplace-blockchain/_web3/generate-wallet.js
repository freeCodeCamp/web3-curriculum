import {
  getTransactions,
  writeTransactions,
  getWallets,
  writeWallets
} from './blockchain-helpers.js';

import EC from 'elliptic';
const ec = new EC.ec('p192');

const newWalletName = process.argv[2];
// Add your code below

let wallets = getWallets();
const transactions = getTransactions();

const keyPair = ec.genKeyPair();

const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

wallets[newWalletName] = { publicKey, privateKey };

writeWallets(wallets);

const rewardTransaction = {
  buyerAddress: null,
  sellerAddress: publicKey,
  price: 40
}

transactions.push(rewardTransaction);
writeTransactions(transactions);
