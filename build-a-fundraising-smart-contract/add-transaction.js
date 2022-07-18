/** Do not change the code in this file **/

// syntax:
// node add-transactions.js <private_key_of_sender> <public_address_of_recipient> <amount>

// example:
// node add-transactions.js 8007344d8eaa1f4c5410412638e68715732dcbefb6168310 04619ca6cafd484a9f1b09f58b651a57fde250330e29c2e4b1152435b63dd5f82f7f06326a1f8fab0ae9ceff6bb9886dd5 50

import { addTransaction } from './blockchain-helpers.js';

const privateKey = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);

addTransaction(privateKey, toAddress, amount);
