/** Do not change the code in this file **/

import {
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const nameOfAddress = process.argv[2];

const wallet = getWalletAddressFromName(nameOfAddress);
const addressBalance = getAddressBalance(wallet.publicKey);

console.log(
  `\nThe public address for ${nameOfAddress} is: ${wallet.publicKey}`
);
console.log(`${nameOfAddress} has a balance of ${addressBalance}`);
