import { writeFile, readFile } from 'fs/promises';

export async function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  await writeFile('node/data/blockchain.json', blockchainString);
}

export async function readBlockchain() {
  const blockchainString = await readFile('node/data/blockchain.json');
  return JSON.parse(blockchainString);
}

export async function getSmartContract(id) {
  const blockchain = await readBlockchain();
  for (const block of blockchain.reverse()) {
    for (const smartContract of block.smartContracts) {
      if (smartContract.id === id) {
        return smartContract;
      }
    }
  }
  return null;
}
