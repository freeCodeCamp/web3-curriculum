# Build a Fundraising Smart Contract

## 1

### --description--

You need to create and deploy a smart contract on this blockchain to raise funds for your startup. The goal is to raise 150 tokens before the seventh block is mined.

You are started with some boilerplate code and files, you should not need to change any of the boilerplate code. The `fundraising-contract` folder is where you need to create your smart contract. The `initial-state.json` file is the initial state of an object your contract will store. All the `.js` files in that folder will be files the contract can run. The `on-transaction.js` file will run immediately after a transaction is sent to the address of your contract. The `on-new-block.js` file will run immediately after a new block is mined. Note: contract files will only run if its `status` variable is set to `open`.

The only two helper functions your contract files can use are `addTransaction(<private_key_of_contract>, <public_key_of_recipient>, <amount>)` and `updateContractState(<contract_address>, <new_state>)`. They are already added in your contract starter files. Note that the import path is relative to the root of the project, not the contract folder.

There's a number of variables that will be passed to your contract files, the ones available in `on-trasction.js` and `on-new-block.js` are already defined there. The variables in `other.js` are what is available to use any other `.js` files in your contract.

After you code your contract, deploy it by running `node deploy-contract.js <contract_folder> <private_key_of_creator>`. It will create an address for the contract in `contract-wallets.json`, put the contract itself in `smart-contracts.json`, and get added to the blockchain (`blockchain.json`) the next time you mine a block (run `node mine-block.js`). After it's deployed, you can run the contract files with `node run-contract.js <address_of_contract> <file_to_run> <optional_arguments>`. Note: All terminal commands must be run from the projects folder.

Mining a block creates a rewards transaction with a random address from `wallets.json` as the receiver.

Fulfill the user stories below, pass all the tests, and finish the project.

**User Stories:**

1. The initial state object of your contract should have a `status` set to `open`, and a `description` set to `Smart contract`. Add as many other properties as you need to fulfill the goal of your contract

1. You should complete and deploy the `fundraising-contract` to the blockchain so that it takes donations to try and raise 150 tokens

1. Your contract should have a `get-description.js` file that uses `console.log` to print the `description` from the current state object of the contract like this: `Here's the description of the fundraising-contract: <description_here>`

1. Your contract should have an `update-description.js` file that updates the description variable stored in the contract state to whatever argument is passed to it

1. If enough funds are sent to the contract address to meet the 150 token goal before the seventh block is mined, your contract creates a transaction that sends all the funds raised from the contract to the address of the contract creator

1. If enough funds are not raised to meet the 150 token goal before the seventh block is mined, your contract creates transactions to send all the funds back to the addresses that donated them

1. After your contract raises its goal or the seventh block is mined, the `status` property in your state object should be set to `closed`

1. Your contract should have raised the funds necessary to meet the goal in time

1. The final state object of your contract should have a `status` property set to `closed` and a `description` property set to `Smart contract to raise funds for my start up.`

1. Your blockchain should have at least six blocks

1. Your blockchain should be valid, that includes all the `hash`, `previousHash`, `nonce`, and transaction `signature` values

Bonus: Create a file in your contract to destroy the contract (change its state to "closed" and refund all previous donations)

Hints:
There's an `example-contract` for you to play with. To see what it can do, keep an eye on your `.json` files and run these commands:
1. `node init-blockchain.js` to re-initialize the blockchain files
1. `node deploy-contract.js example-contract <a_private_key_from_wallets.json>` to deploy the example contract. It will add an address for it in `contract-addresses.json` and add the contract to the contract pool (`smart-contracts.json`)
1. `node mine-block.js` to mine the next block and add the contract to the blockchain (`blockchain.json`). You will see a message from the contract running it's `on-new-block.js` file
1. `node add-transaction.js <private_key_from_wallets.json> <example_contract_address> 0` to send a transaction to the contract. The contract will run the `on-transaction.js` file and display a message
1. `node run-contract.js <example_contract_address> get-state.js` to get the state of the `example-contract`
1. `node run-contract.js <example_contract_address> set-favorite-number.js 11` to update the value of `favoriteNumber` in the contract state

TODO: Add smart contracts to validation and block hashes
TODO: include boilerplate files in repo so we only have to copy the folder each time?

Note: Some of the tests may not pass if the tests before them don't.

### --tests--

Your `initial-state.json` file should have a `status` property set to `open` and a `description` property set to `Smart contract`

```js
// test 1
const initialState = await __helpers.getJsonFile(`../fundraising-contract/initial-state.json`);

assert(initialState.status === 'open', "Your 'initial-state.json' file should have a 'status' property that set to 'open'")
assert(initialState.description === 'Smart contract', "Your 'initial-state.json' file should have a 'description' property set to 'Smart contract'");
```

Your `fundraising-contract` should be deployed and mined to the blockchain
```js
// test 2
const contractWallets = await __helpers.getJsonFile(`../contract-wallets.json`);
const contractAddress = contractWallets[Object.keys(contractWallets).find(key => /fundraising-contract/g.test(key))]?.publicKey || null;
const contract = await __helpers.getContract(contractAddress, '..', false);

assert(!!contract);
```

You should have a `get-description.js` file in your contract folder

```js
// test 3
const fileExists = await __helpers.fileExists('../fundraising-contract/get-description.js');
assert(!!fileExists);
```

Running the `get-description.js` function in your deployed contract should console log only the `description` from current state object of the contract like this: `Here's the description of the fundraising-contract: <description_here>`

```js
// test 4
const cwd = '../.tests/test4';
await __helpers.copyProjectFiles(cwd);
await __helpers.runCommand('node init-blockchain.js', { cwd });
const wallets = await __helpers.getJsonFile(`${cwd}/wallets.json`);
const privateKey = wallets['Me'].privateKey;
await __helpers.runCommand(`node deploy-contract.js fundraising-contract ${privateKey}`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });
const contractWallets = await __helpers.getJsonFile(`${cwd}/contract-wallets.json`);
const contractAddress = contractWallets[Object.keys(contractWallets).find(key => /fundraising-contract/g.test(key))]?.publicKey || null;
const contract = await __helpers.getContract(contractAddress, cwd);
const output = await __helpers.getCommandOutput(`node run-contract.js ${contractAddress} get-description.js`, cwd);
const re = new RegExp(`Here's the description of the fundraising contract: ${contract.state.description}`, 'g');

assert(re.test(output));
```

You should have an `update-description.js` file in your contract folder

```js
// test 5
const fileExists = await __helpers.fileExists('../fundraising-contract/update-description.js');
assert(!!fileExists);
```

Running the `update-description.js` function in your deployed contract, with a string as the argument, should update the `description` property in your contract state to the argument

```js
// test 6
const cwd = '../.tests/test6';
await __helpers.copyProjectFiles(cwd);
await __helpers.runCommand('node init-blockchain.js', { cwd });
const wallets = await __helpers.getJsonFile(`${cwd}/wallets.json`);
const privateKey = wallets['Me'].privateKey;
await __helpers.runCommand(`node deploy-contract.js fundraising-contract ${privateKey}`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });
const contractWallets = await __helpers.getJsonFile(`${cwd}/contract-wallets.json`);
const contractAddress = contractWallets[Object.keys(contractWallets).find(key => /fundraising-contract/g.test(key))]?.publicKey || null;
await __helpers.runCommand(`node run-contract.js ${contractAddress} update-description.js "New description"`, { cwd });
const contract = await __helpers.getContract(contractAddress, cwd);
assert(contract.state.description === "New description");
```

Running the commands to deploy your contract and send it the 150 tokens before the seventh block is mined should create a transaction that sends all the funds donated from the contract to the address of the contract creator

```js
// test 7
const cwd = '../.tests/test7';
await __helpers.copyProjectFiles(cwd);
await __helpers.runCommand('node init-blockchain.js', { cwd });
const wallets = await __helpers.getJsonFile(`${cwd}/wallets.json`);
await __helpers.runCommand(`node deploy-contract.js fundraising-contract ${wallets['Me'].privateKey}`, { cwd });

const tx = [{
  "fromAddress": null,
  "toAddress": wallets['You'].publicKey,
  "amount": 200
}];
await __helpers.writeJsonFile(`${cwd}/transactions.json`, tx);
await __helpers.runCommand(`node mine-block.js`, { cwd });

const contractWallets = await __helpers.getJsonFile(`${cwd}/contract-wallets.json`);

const contractAddress = contractWallets['fundraising-contract']?.publicKey;
await __helpers.runCommand(`node add-transaction.js ${wallets['You'].privateKey} ${contractAddress} 200`, { cwd });

const transactions = await __helpers.getJsonFile(`${cwd}/transactions.json`);
const lastTransaction = transactions[transactions.length-1];

assert(lastTransaction.fromAddress === contractAddress && lastTransaction.toAddress === wallets['Me'].publicKey, "After raising the funding goal, your contract should add a transaction, from itself, to the contract creator");
assert(lastTransaction.amount === 200, "After raising the funding goal, your contract should add a transaction with the total amount raised");
```

Running the above commands should set the `status` variable of your contract state to `closed`

```js
// test 8
const cwd = '../.tests/test8';
await __helpers.copyProjectFiles(cwd);
await __helpers.runCommand('node init-blockchain.js', { cwd });
const wallets = await __helpers.getJsonFile(`${cwd}/wallets.json`);
await __helpers.runCommand(`node deploy-contract.js fundraising-contract ${wallets['Me'].privateKey}`, { cwd });

const tx = [{
  "fromAddress": null,
  "toAddress": wallets['You'].publicKey,
  "amount": 200
}];
await __helpers.writeJsonFile(`${cwd}/transactions.json`, tx);
await __helpers.runCommand(`node mine-block.js`, { cwd });

const contractWallets = await __helpers.getJsonFile(`${cwd}/contract-wallets.json`);

const contractAddress = contractWallets['fundraising-contract']?.publicKey;
await __helpers.runCommand(`node add-transaction.js ${wallets['You'].privateKey} ${contractAddress} 200`, { cwd });
const contract = await __helpers.getContract(contractAddress, cwd);

assert(contract.state.status === 'closed', "After raising the funding goal, the 'status' property in your contract state should be set to 'closed'");
```

Running the commands to deploy your contract and mine seven blocks before the 150 tokens are raised should create a transaction for each donation it received, sending the donation back to the original donor

```js
// test 9
const cwd = '../.tests/test9';
await __helpers.copyProjectFiles(cwd);
await __helpers.runCommand('node init-blockchain.js', { cwd });
const wallets = await __helpers.getJsonFile(`${cwd}/wallets.json`);
await __helpers.runCommand(`node deploy-contract.js fundraising-contract ${wallets['Me'].privateKey}`, { cwd });

const tx = [{
  "fromAddress": null,
  "toAddress": wallets['You'].publicKey,
  "amount": 27
},{
  "fromAddress": null,
  "toAddress": wallets['I'].publicKey,
  "amount": 44
}];

await __helpers.writeJsonFile(`${cwd}/transactions.json`, tx);
await __helpers.runCommand(`node mine-block.js`, { cwd });


const contractWallets = await __helpers.getJsonFile(`${cwd}/contract-wallets.json`);
const contractAddress = contractWallets['fundraising-contract'].publicKey;
await __helpers.runCommand(`node add-transaction.js ${wallets['You'].privateKey} ${contractAddress} 27`, { cwd });
await __helpers.runCommand(`node add-transaction.js ${wallets['I'].privateKey} ${contractAddress} 44`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });

const transactions = await __helpers.getJsonFile(`${cwd}/transactions.json`);
const youTx = transactions.find(tx => {
  return tx.fromAddress === contractAddress && tx.toAddress === wallets['You'].
  publicKey && tx.amount === 27
});
const iTx = transactions.find(tx => tx.fromAddress === contractAddress && tx.toAddress === wallets['I'].publicKey && tx.amount === 44);

assert(youTx && iTx, "If your contract hasn't raised its goal after the seventh block is mined, it should add a transaction for each donation it received to send the funds back to the address that donated it");
```

Running the above commands should set the `status` variable of your contract state to `closed`

```js
// test 10
const cwd = '../.tests/test10';
await __helpers.copyProjectFiles(cwd);
await __helpers.runCommand('node init-blockchain.js', { cwd });
const wallets = await __helpers.getJsonFile(`${cwd}/wallets.json`);
await __helpers.runCommand(`node deploy-contract.js fundraising-contract ${wallets['Me'].privateKey}`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });
await __helpers.runCommand(`node mine-block.js`, { cwd });

const contractWallets = await __helpers.getJsonFile(`${cwd}/contract-wallets.json`);
const contractAddress = contractWallets['fundraising-contract'].publicKey;
const contract = await __helpers.getContract(contractAddress, cwd);

assert(contract.state.status === 'closed', "If your contract hasn't raised its goal after the seventh block is mined, the 'status' property in your contract state should be set to 'closed'");
```

Your blockchain should have at least six blocks

```js
// test 11
const blockchain = await __helpers.getJsonFile(`../blockchain.json`);
assert(blockchain.length >= 6);
```

Your contract should have had at least 150 tokens sent to it, and it should have added a transaction sending all the tokens to the contract creator address

```js
// test 12
const blockchain = await __helpers.getJsonFile('../blockchain.json');
const contractWallets = await __helpers.getJsonFile(`../contract-wallets.json`);
const contractAddress = contractWallets[Object.keys(contractWallets).find(key => /fundraising-contract/g.test(key))].publicKey || null;
const contract = await __helpers.getContract(contractAddress, '..');

let raised = 0;
let txToCreator = false;

// loop over blocks
for (let i = 1; i < blockchain.length; i++) {
  const { transactions = [] } = blockchain[i];

  // loop over transactions
  for (let j = 0; j < transactions.length; j++) {
    const { toAddress, fromAddress, amount } = transactions[j];

    if (toAddress === contractAddress) {
      raised += amount;
    }

    if (fromAddress === contractAddress && toAddress === contract.creatorAddress && amount === raised) {
      txToCreator = true;
    }
  }
}

assert(raised >= 150, "There should be at least 150 tokens sent to your contract address");
assert(!!txToCreator, "There should be a single transaction sending all the raised funds to the address of the contract creator");
```

The current state object for your deployed contract should have a `status` property set to `closed` and a description set to `Smart contract to raise funds for my start up.`

```js
// test 13
const contractWallets = await __helpers.getJsonFile(`../contract-wallets.json`);
const contractAddress = contractWallets[Object.keys(contractWallets).find(key => /fundraising-contract/g.test(key))]?.publicKey || null;
const contract = await __helpers.getContract(contractAddress, '..', false);

assert(contract.state.status === 'closed', "Your current contract state should have a 'status' of 'closed'");
assert(contract.state.description === 'Smart contract to raise funds for my start up.', "Your current contract state should have a 'description' of 'Smart contract to raise funds for my start up.'")
```

All the hashes and signatures on your blockchain should be valid

```js
// test 14
const blockchain = await __helpers.getJsonFile('../blockchain.json');

// loop over blocks
for (let i = 1; i < blockchain.length; i++) {
  const previousBlock = blockchain[i-1];
  const { hash, previousHash, nonce, transactions = [], smartContracts = [] } = blockchain[i];

  // validate previous hash
  if (previousHash !== previousBlock.hash) {
    assert(false, "Except for the genesis block, the 'previousHash' value of each block should match the 'hash' of the block before it");
  }

  // validate hash format
  if (!hash.startsWith('00')) {
    assert(false, "Except for the genesis block, the 'hash' of each block should start with two zeros ('00')");
  }

  // validate block hash
  const recreatedHash = await __helpers.generateHash(nonce + previousHash + JSON.stringify(transactions) + JSON.stringify(smartContracts));
  if (recreatedHash != hash) {
    assert(false, "Except for the genesis block, the 'hash' of each block should be able to be recreated with 'sha256(nonce + previousHash + JSON.stringify(transactions) + JSON.stringify(smartContracts)).toString()'");
  }

  // loop over transactions
  for (let j = 0; j < transactions.length; j++) {

    // validate transaction signatures
    if (transactions[j].hasOwnProperty('signature')) {

      const { toAddress, fromAddress, amount, signature } = transactions[j];
      const validSignature = await __helpers.validateSignature(fromAddress, fromAddress + toAddress + amount, signature);

      if (!validSignature) {
        assert(false, "All transaction signatures should be able to be verified with keyPair.verify(hash, signature)");
      }
    }
  }
}

assert(blockchain.length > 0);
```

## --fcc-end--
