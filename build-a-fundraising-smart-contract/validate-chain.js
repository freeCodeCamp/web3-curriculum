/** Do not change the code in this file **/

const { isValidChain } = require('./blockchain-helpers');

const validChain = isValidChain();
if (validChain === true) {
  console.log('Chain is valid');
} else {
  console.log(validChain);
}
