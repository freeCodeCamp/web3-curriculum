import { mineBlock } from './mine-block.js';
import { getSmartContract } from './utils.js';
const smartContractId = parseInt(process.argv[2]);
const functionHandle = process.argv[3];
const functionArgs = process.argv.slice(4);

const contract = await getSmartContract(smartContractId);

if (!contract) {
  console.error(`Smart contract with id ${smartContractId} not found`);
  process.exit(1);
} else {
  const smartContract = (await import(contract.pathToPkg)).default;
  const res = smartContract[functionHandle](contract.state, ...functionArgs);
  contract.state = res;
  await mineBlock([contract]);
}
