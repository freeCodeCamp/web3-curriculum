/** Do not change the code in this file **/
import sha256 from 'crypto-js/sha256.js';
import { readBlockchain, writeBlockchain } from './utils.js';

export async function mineBlock(smartContracts) {
  const blockchain = await readBlockchain();
  const previousBlock = blockchain[blockchain.length - 1];

  const difficulty = 2;

  let hash = '';
  let nonce = 0;
  while (!hash.startsWith('0'.repeat(difficulty))) {
    nonce++;
    hash = sha256(
      nonce + previousBlock.hash + JSON.stringify(smartContracts)
    ).toString();
  }

  const newBlock = {
    hash,
    previousHash: previousBlock.hash,
    nonce,
    smartContracts
  };

  blockchain.push(newBlock);
  await writeBlockchain(blockchain);
}
