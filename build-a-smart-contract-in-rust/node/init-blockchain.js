import { writeBlockchain } from './utils.js';

export async function initBlockchain() {
  const genesisBlock = {
    hash: 0,
    previousHash: null,
    smartContracts: []
  };

  const blockchain = [genesisBlock];
  await writeBlockchain(blockchain);
}

await initBlockchain();
