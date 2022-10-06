const { writeBlockchain } = require('./blockchain-helpers');

const genesisBlock = {
  hash: 0,
  previousHash: null
}

const blockchain = [genesisBlock];

writeBlockchain(blockchain);
