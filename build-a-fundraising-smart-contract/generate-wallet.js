/** Do not change the code in this file **/

const { generateWallet } = require('./blockchain-helpers');

const newWalletName = process.argv[2];

generateWallet(newWalletName);
