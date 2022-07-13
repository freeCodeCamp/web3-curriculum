/** Do not change the code in this file **/

const { getAddressBalance, getWalletAddressFromName } = require('./blockchain-helpers');

const nameOfAddress = process.argv[2];

const wallet = getWalletAddressFromName(nameOfAddress);
const addressBalance = getAddressBalance(wallet.publicKey);

console.log(`\nThe public address for ${nameOfAddress} is: ${wallet.publicKey}`);
console.log(`${nameOfAddress} has a balance of ${addressBalance}`);
