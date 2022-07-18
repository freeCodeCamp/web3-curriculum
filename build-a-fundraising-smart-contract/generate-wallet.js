/** Do not change the code in this file **/

import { generateWallet } from './blockchain-helpers.js';

const newWalletName = process.argv[2];

generateWallet(newWalletName);
