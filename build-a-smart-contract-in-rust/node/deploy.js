import { join } from 'path';
import { initBlockchain } from './init-blockchain.js';
import { mineBlock } from './mine-block.js';

await initBlockchain();

const relPathToPkg = process.argv[2];

try {
  const pathToPkg = join('..', relPathToPkg);
  const pkg = (await import(pathToPkg)).default;
  const initialised = pkg.initialise();
  const smartContract = {
    pathToPkg,
    state: initialised,
    id: 0
  };
  await mineBlock([smartContract]);
  console.info(`Smart contract deployed with id: ${smartContract.id}`);
} catch (e) {
  console.error('Unable to deploy smart contract: ');
  throw new Error(e);
}
