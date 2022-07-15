/** Do not change the code in this file **/
const {
  writeBlockchain,
  writeSmartContracts,
  writeTransactions,
  writeContractWallets
} = require('./blockchain-helpers');

const genesisBlock = {
  hash: 0,
  previousHash: null
}

const blockchain = [genesisBlock];
writeBlockchain(blockchain);
writeSmartContracts([]);
writeTransactions([]);
writeContractWallets({});
