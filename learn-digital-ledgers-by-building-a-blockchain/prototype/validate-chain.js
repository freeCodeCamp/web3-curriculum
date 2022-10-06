const { isValidChain } = require('./blockchain-helpers');

if (isValidChain()) {
  console.log('Chain is valid');
} else {
  console.log('Chain is not valid')
}
