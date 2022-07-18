/** Do not change the code in this file **/
import {
  writeBlockchain,
  writeSmartContracts,
  writeTransactions,
  writeContractWallets
} from './blockchain-helpers.js';

const genesisBlock = {
  hash: 0,
  previousHash: null
};

const blockchain = [genesisBlock];
writeBlockchain(blockchain);
writeSmartContracts([]);
writeTransactions([]);
writeContractWallets({});
