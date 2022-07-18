/** Do not change the code in this file **/

import {
  getAddressBalance,
  getAddressItems,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const nameOfAddress = process.argv[2];

const address = getWalletAddressFromName(nameOfAddress);
const addressBalance = getAddressBalance(address);
const addressItems = getAddressItems(address);

console.log(`\nThe public address for ${nameOfAddress} is: ${address}`);
console.log(
  `${nameOfAddress} has a balance of ${addressBalance}, and these items:`
);
console.log(`${JSON.stringify(addressItems, null, 2)}\n`);
