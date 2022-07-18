/** Do not change the code in this file **/

import { isValidChain } from './blockchain-helpers.js';

const validChain = isValidChain();
if (validChain === true) {
  console.log('Chain is valid');
} else {
  console.log(validChain);
}
