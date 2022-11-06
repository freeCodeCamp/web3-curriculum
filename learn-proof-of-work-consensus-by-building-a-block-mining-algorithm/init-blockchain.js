import { writeBlockchain } from './blockchain-helpers.js';

const genesisBlock = {
  hash: "0",
  previousHash: null
}

const blockchain = [genesisBlock];
writeBlockchain(blockchain);