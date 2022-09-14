# Web3 - Build a Video Game Marketplace Blockchain

## 1

### --description--

For this project, you need to create a blockchain for a video game marketplace where you can buy items from and sell items to the game.

Work within the `build-a-video-game-marketplace` folder, where you are started with some boilerplate code and files. You should not need to change any of the boilerplate code.

The `.json` files will store information about your blockchain, there are functions in `blockchain-helpers.js` for reading from and writing to them. You will need to look at those to see what arguments they need and what they do. They are already included in the files where you need them.

The items you can buy or sell are in `items.json`, along with their purchase prices.

Many of the files are finished for you. You only need to add code in the `init-blockchain.js`, `generate-wallet.js`, `buy-item.js`, `sell-item.js` and `mine-block.js` files, and run terminal commands, to fulfill the user stories below, pass all the tests, and finish the project.

**User Stories:**

1. Your blockchain should be stored in `blockchain.json`. See `example-blockchain.json` for an idea of how it should look

1. You can initialize your blockchain by running `node init-blockchain.js`

1. Running `node init-blockchain.js` should replace everything in `blockchain.json` with an array that has one object (the genesis block). The object should have a `hash` property of `0` (zero/string), and a `previousHash` property of `null`

1. Running `node init-blockchain.js` should replace everything in `transactions.json` with an empty array

1. All your wallet names and their keys should be stored in `wallets.json`. See `example-wallets.json` for an idea of how it should look

1. You should be able to create a wallet by running `node generate-wallet.js <name>`

1. Running `node generate-wallet.js name` should add `name` as a key in `wallets.json` with `publicKey` and `privateKey` properties. The values should be a public and private keypair, in 'hex' format. Use the defined `ec` variable to generate the keypair

1. When you generate a wallet, it should push an object to the end of the `transactions.json` array. The object should have a `buyerAddress` property of `null`, a `sellerAddress` property that is the public key of the new wallet, and a `price` property of `40` (number). This is the game giving you some coins for buying items

1. Running `node mine-block.js` should add an object at the end of the `blockchain.json` array with `hash`, `previousHash`, `nonce`, and `transactions` properties. The `hash` should be created using the defined `sha256` variable by concatenating the `nonce`, the hash of the previous block, and a stringified version of whatever is in the `transactions.json` file (`nonce + previousHash + JSON.stringify(transactions)`). The `previousHash` should be the `hash` of the last block on the chain, the `nonce` should be the number used to find the hash, and the transactions should be whatever is currently in the `transactions.json` file in JSON format.

1. The `hash` of each mined block should start with at least two zeros (`00`). Hint: Increment your `nonce` to search for hash values until you find one

1. After mining a block, your `transactions.json` file should be an empty array

1. Transactions not yet added to the chain should be stored in `transactions.json`. See `example-transactions.json` for an idea of how it should look

1. The address for "the game" should be `null` on all transactions

1. You should be able to buy an item by running `node buy-item.js <privateKey> <item>`. `<privateKey>` is the private key of the wallet address, and `<item>` is the name of the item being purchased

1. When you buy an item, it should add an object to the end of the `transactions.json` array containing these properties and values: `buyerAddress` should be the matching public key for the `<privateKey>` entered, `sellerAddress` should be `null`, `price` should be the purchase price of the item bought, `itemBought` should be the name of the item bought, and `signature` should use the buyer's keypair to sign a concatenation of the `buyerAddress`, `price`, and `itemBought`, in that order, in hex format

1. When buying an item, an object should not be added to `transactions.json` if the buyer address does not have enough funds. Use the `getAddressBalance` helper. Note: The transaction pool is included when calculating the balance

1. You should be able to sell an item by running `node sell-item.js <privateKey> <item>`. `<privateKey>` is the private key of the wallet address, and `<item>` is the name of the item being sold

1. When you sell an item, it should add an object to the end of the `transactions.json` array containing these properties and values: `buyerAddress` should be `null`, `sellerAddress` should the matching public key for the `<privateKey>` entered, `price` should be 5 coins less than the purchase price of the item, `itemSold` should be the name of the item sold, and `signature` should use the seller's keypair to sign a concatenation of the `sellerAddress`, `price`, and `itemSold`, in that order, in hex format

1. When selling an item, an object should not be added to `transactions.json` if the seller address does not have the item they are selling. Use the `getAddressItems` helper. Note: The transaction pool is included when calculating the items

1. Only the transactions created from running the `buy-item.js` or `sell-item.js` files should include a signature

1. Your `wallets.json` file should have at least three wallets

1. Your blockchain should contain at least 10 blocks, at least 20 total transactions, and at least 10 transactions that include a signature

1. Your blockchain should be valid, that includes all the `hash`, `previousHash`, `nonce`, and transaction `signature` values. You should not add any properties that are not described above

Bonus: Create a function to validate your blockchain

Hints:

- You can run `node get-address-info.js <name_of_address>` to get the info for the address
- You can run `node gift-items.js` to give a random item to all the wallet addresses

How to generate a hash:

- You can create a hash string using the `sha256` variable like this: `sha256(<content_to_hash>).toString()`

How to work with keys:

- Generate a keyPair: `ec.genKeyPair()`
- Get hex public key from keypair: `keyPair.getPublic('hex')`
- Get hex private key from keypair: `keyPair.getPrivate('hex')`
- Get keyPair from hex public key: `ec.keyFromPublic(<public_key>, 'hex')`
- Get keyPair from hex private key: `ec.keyFromPrivate(<private_key>)`
- Sign information with keyPair: `keyPair.sign(<content_to_sign>).toDER('hex')`
- Validate signature: `keyPair.verify(<content_signed>, signature)`

Note: Some of the tests may not pass if the tests before them don't. e.g. The `init-blockchain` and `generate-wallet` need to work to pass the tests related to `mine-block`. Likewise, the `sell-item` tests won't pass unless `buy-item` is working

### --tests--

Running `node init-blockchain.js` should replace everything in `blockchain.json` with an array that has one object. The object should have two properties; a `hash` property of `0` (zero/string), and a `previousHash` property of `null`

```js
// test 1
const testFolder = `${testsFolder}/test1`;
await __helpers.copyProjectFiles(projectFolder, testFolder, projectFiles);
await __helpers.runCommand('node init-blockchain.js', testFolder);
const blockchain = await __helpers.getJsonFile(`${testFolder}/blockchain.json`);

assert.equal(blockchain.length, 1, 'The blockchain should have one block');
assert.equal(
  blockchain[0].hash,
  '0',
  "The genesis block should have a hash of '0'"
);
assert.isNull(
  blockchain[0].previousHash,
  'The genesis block should have a previousHash of null'
);
```

Running `node init-blockchain.js` should replace everything in `transactions.json` with an empty array

```js
// test 2
const testFolder = `${testsFolder}/test2`;
await __helpers.copyProjectFiles(projectFolder, testFolder, projectFiles);
await __helpers.runCommand('echo "[1]" > transactions.json', testFolder);
await __helpers.runCommand('node init-blockchain.js', testFolder);
const transactions = await __helpers.getJsonFile(
  `${testFolder}/transactions.json`
);

assert.isArray(transactions, 'The transactions should be an array');
assert.equal(
  transactions.length,
  0,
  'The transactions should be an empty array'
);
```

Running `node generate-wallet.js user_xyz123` should add `user_xyz123` as a key in `wallets.json` with `publicKey` and `privateKey` properties. The values should be a public and private keypair, in 'hex' format. Use the defined `ec` variable to generate the keypair

```js
// test 3
const testFolder = `${testsFolder}/test3`;
await __helpers.copyProjectFiles(projectFolder, testFolder, projectFiles);
await __helpers.runCommand('node generate-wallet.js user_xyz123', testFolder);
const wallets = await __helpers.getJsonFile(`${testFolder}/wallets.json`);
const { publicKey, privateKey } = wallets.user_xyz123;
const publicKeyFromPrivate = await __helpers.getPublicKeyFromPrivate(
  privateKey
);

assert.equal(
  publicKeyFromPrivate,
  publicKey,
  "Generating a wallet should add the name to 'wallets.json' with 'privateKey' and 'publicKey' values that are a matching keypair"
);
```

When you generate a wallet, it should add a transaction at the end of the `transactions.json` array. The transaction should have a `buyerAddress` property of `null`, a `sellerAddress` property that is the public key of the new wallet, and a `price` property of `40`

```js
// test 4
const testFolder = `${testsFolder}/test4`;
await __helpers.copyProjectFiles(projectFolder, testFolder, projectFiles);
await __helpers.runCommand('node generate-wallet.js user_xyz123', testFolder);
const wallets = await __helpers.getJsonFile(`${testFolder}/wallets.json`);
const transactions = await __helpers.getJsonFile(
  `${testFolder}/transactions.json`
);
const latestTransaction = transactions[transactions.length - 1];

assert.isNull(
  latestTransaction.buyerAddress,
  'The buyerAddress should be `null`'
);
assert.equal(latestTransaction.price, 40, 'The price should be `40`');
assert.equal(
  latestTransaction.sellerAddress,
  wallets.user_xyz123.publicKey,
  'The sellerAddress should be the public key of the new wallet'
);
```

Running `node mine-block.js` should add an object at the end of the `blockchain.json` array with the correct `hash`, `previousHash`, `nonce`, and `transactions` properties.

```js
// test 5
const testFolder = `${testsFolder}/test5`;
await __helpers.copyProjectFiles(projectFolder, testFolder, projectFiles);
await __helpers.runCommand('node init-blockchain.js', testFolder);
await __helpers.runCommand('node generate-wallet.js user_xyz123', testFolder);

const blockchain1 = await __helpers.getJsonFile(
  `${testFolder}/blockchain.json`
);
const transactions1 = await __helpers.getJsonFile(
  `${testFolder}/transactions.json`
);

await __helpers.runCommand('node mine-block.js', testFolder);

const blockchain2 = await __helpers.getJsonFile(
  `${testFolder}/blockchain.json`
);
const currentBlock = blockchain2[blockchain2.length - 1];
const previousBlock = blockchain2[blockchain2.length - 2];
const { nonce, previousHash, transactions } = currentBlock;
const recreatedHash = await __helpers.generateHash(
  nonce + previousHash + JSON.stringify(transactions)
);

assert.equal(
  blockchain1.length,
  blockchain2.length - 1,
  'The blockchain should have one more block than before'
);

assert.property(
  currentBlock,
  'hash',
  "The new block should have a 'hash' property"
);
assert.property(
  currentBlock,
  'previousHash',
  "The new block should have a 'previousHash' property"
);
assert.property(
  currentBlock,
  'nonce',
  "The new block should have a 'nonce' property"
);
assert.property(
  currentBlock,
  'transactions',
  "The new block should have a 'transactions' property"
);

assert.match(
  currentBlock.hash,
  /^00/,
  "The 'hash' of the new block should start with two zeros ('00')"
);

assert.equal(
  currentBlock.hash,
  recreatedHash,
  "The 'hash' of the new block should be able to be recreated with 'sha256(nonce + previousHash + JSON.stringify(transactions)).toString()'"
);

assert.equal(
  currentBlock.previousHash,
  previousBlock.hash,
  "The 'previousHash' of the new block should match the 'hash' of the block before it"
);

assert.typeOf(
  currentBlock.nonce,
  'number',
  "The 'nonce' of the new block should be a number"
);

assert.equal(
  JSON.stringify(transactions1),
  JSON.stringify(transactions),
  "The 'transactions' of the new block should match what was in 'transactions.json' before the block was mined"
);
```

After you run `node mine-block`, your `transactions.json` file should be an empty array.

```js
// test 6
const testFolder = `${testsFolder}/test6`;
await __helpers.copyProjectFiles(projectFolder, testFolder, projectFiles);
await __helpers.runCommand('node init-blockchain.js', testFolder);
await __helpers.runCommand('node generate-wallet.js user_xyz123', testFolder);

const transactions1 = await __helpers.getJsonFile(
  `${testFolder}/transactions.json`
);
if (transactions1.length == 0) {
  await __helpers.runCommand('echo "[1]" > transactions.json', testFolder);
}
await __helpers.runCommand('node mine-block.js', testFolder);
const transactions = await __helpers.getJsonFile(
  `${testFolder}/transactions.json`
);

assert.isArray(
  transactions,
  'After you mine a block, your `transactions.json` file should be an array'
);
assert.isEmpty(
  transactions,
  'After you mine a block, your `transactions.json` file should be an empty array'
);
```

Running `node buy-item.js <address-privateKey> <item>` should add a transaction at the end of the `transactions.json` array with the correct `buyerAddress`, `sellerAddress`, `price`, `itemBought`, and `signature` properties. Note: You may need to pass the balance check test right below this (test 8) for this to pass

```js
// test 7
const testFolder = `${testsFolder}/test7`;
await __helpers.copyProjectFiles(projectFolder, testFolder, projectFiles);
await __helpers.runCommand('node init-blockchain.js', testFolder);
await __helpers.runCommand('node generate-wallet.js user_xyz123', testFolder);
await __helpers.runCommand('node mine-block.js', testFolder);

const wallets = await __helpers.getJsonFile(`${testFolder}/wallets.json`);
const publicKey = wallets.user_xyz123.publicKey;
const privateKey = wallets.user_xyz123.privateKey;
const transactions1 = await __helpers.getJsonFile(
  `${testFolder}/transactions.json`
);

await __helpers.runCommand(`node buy-item.js ${privateKey} icon`, testFolder);

const transactions2 = await __helpers.getJsonFile(
  `${testFolder}/transactions.json`
);
const lastTransaction = transactions2[transactions2.length - 1];
const { buyerAddress, sellerAddress, price, itemBought, signature } =
  lastTransaction;
const recreatedSignature = await __helpers.generateSignature(
  privateKey,
  buyerAddress + price + itemBought
);

assert.equal(
  transactions1.length + 1,
  transactions2.length,
  "Buying an item should add an object to the 'transactions.json' array"
);

assert.property(
  lastTransaction,
  'buyerAddress',
  "The new transaction should have a 'buyerAddress' property"
);
assert.property(
  lastTransaction,
  'sellerAddress',
  "The new transaction should have a 'sellerAddress' property"
);
assert.property(
  lastTransaction,
  'price',
  "The new transaction should have a 'price' property"
);
assert.property(
  lastTransaction,
  'itemBought',
  "The new transaction should have a 'itemBought' property"
);
assert.property(
  lastTransaction,
  'signature',
  "The new transaction should have a 'signature' property"
);

assert.equal(
  buyerAddress,
  publicKey,
  "The 'buyerAddress' should be the matching public key for the private key entered"
);
assert.isNull(sellerAddress, "The 'sellerAddress' should be 'null'");

assert.equal(price, 10, "The 'price' should be the price of the item bought");

assert.equal(
  itemBought,
  'icon',
  "The 'itemBought' should be the name of the item bought"
);

assert.equal(
  signature,
  recreatedSignature,
  "The 'signature' should be able to be recreated with 'keyPair.sign(buyerAddress + price + itemBought).toDER('hex')'"
);
```

Running `node buy-item.js <address-privateKey> <item>` should not add a transaction if that address doesn't have enough funds to buy the item

```js
// test 8
const testFolder = `${testsFolder}/test7`;
await __helpers.copyProjectFiles(projectFolder, testFolder, projectFiles);
await __helpers.runCommand('node init-blockchain.js', testFolder);
await __helpers.runCommand('node generate-wallet.js user_xyz123', testFolder);

const wallets = await __helpers.getJsonFile(`${testFolder}/wallets.json`);
const privateKey = wallets.user_xyz123.privateKey;

await __helpers.runCommand(`node buy-item.js ${privateKey} skin`, testFolder);
await __helpers.runCommand(`node buy-item.js ${privateKey} skin`, testFolder);

const transactions = await __helpers.getJsonFile(
  `${testFolder}/transactions.json`
);

assert.equal(
  transactions.length,
  2,
  "You should not be able to buy an item if you don't have the funds"
);
```

Running `node sell-item.js <address-privateKey> <item>` should add a transaction at the end of the `transactions.json` array with the correct `buyerAddress`, `sellerAddress`, `price`, `itemSold`, and `signature` properties. Note: You may need to pass the item check test right below this (test 10) for this to pass

```js
// test 9
const testFolder = `${testsFolder}/test9`;
await __helpers.copyProjectFiles(projectFolder, testFolder, projectFiles);

await __helpers.runCommand('node init-blockchain.js', testFolder);
await __helpers.runCommand('node generate-wallet.js user_xyz123', testFolder);

const wallets = await __helpers.getJsonFile(`${testFolder}/wallets.json`);
const publicKey = wallets.user_xyz123.publicKey;
const privateKey = wallets.user_xyz123.privateKey;

await __helpers.runCommand(`node buy-item.js ${privateKey} icon`, testFolder);
await __helpers.runCommand('node mine-block.js', testFolder);

const transactions1 = await __helpers.getJsonFile(
  `${testFolder}/transactions.json`
);

await __helpers.runCommand(`node sell-item.js ${privateKey} icon`, testFolder);

const transactions2 = await __helpers.getJsonFile(
  `${testFolder}/transactions.json`
);
const lastTransaction = transactions2[transactions2.length - 1];
const { buyerAddress, sellerAddress, price, itemSold, signature } =
  lastTransaction;
const recreatedSignature = await __helpers.generateSignature(
  privateKey,
  sellerAddress + price + itemSold
);

assert.equal(
  transactions1.length + 1,
  transactions2.length,
  "Selling an item should add an object to the 'transactions.json' array"
);

assert.property(
  lastTransaction,
  'buyerAddress',
  "The new transaction should have a 'buyerAddress' property"
);
assert.property(
  lastTransaction,
  'sellerAddress',
  "The new transaction should have a 'sellerAddress' property"
);
assert.property(
  lastTransaction,
  'price',
  "The new transaction should have a 'price' property"
);
assert.property(
  lastTransaction,
  'itemSold',
  "The new transaction should have a 'itemSold' property"
);
assert.property(
  lastTransaction,
  'signature',
  "The new transaction should have a 'signature' property"
);

assert.isNull(buyerAddress, "The 'buyerAddress' should be 'null'");

assert.equal(
  sellerAddress,
  publicKey,
  "The 'sellerAddress' should be the matching public key for the private key entered"
);

assert.equal(
  price,
  5,
  "The 'price' should be 5 coins less than the purchase price of the item"
);

assert.equal(
  itemSold,
  'icon',
  "The 'itemSold' should be the name of the item sold"
);

assert.equal(
  signature,
  recreatedSignature,
  "The 'signature' should be able to be recreated with 'keyPair.sign(sellerAddress + price + itemSold).toDER('hex')'"
);
```

Running `node sell-item.js <address-privateKey> <item>` should not add a transaction if that address doesn't have that item to sell

```js
// test 10
const testFolder = `${testsFolder}/test10`;
await __helpers.copyProjectFiles(projectFolder, testFolder, projectFiles);
await __helpers.runCommand('node init-blockchain.js', testFolder);
await __helpers.runCommand('node generate-wallet.js user_xyz123', testFolder);

const wallets = await __helpers.getJsonFile(`${testFolder}/wallets.json`);
const privateKey = wallets.user_xyz123.privateKey;

await __helpers.runCommand(`node sell-item.js ${privateKey} skin`, testFolder);

const transactions = await __helpers.getJsonFile(
  `${testFolder}/transactions.json`
);

assert.equal(
  transactions.length,
  1,
  "You should not be able to sell an item if you don't have that item"
);
```

You should have at least three wallets in your `wallets.json` file, each with a `publicKey` and `privateKey` of a keypair generated by the defined `ec` variable

```js
// test 11
const wallets = await __helpers.getJsonFile(`${projectFolder}/wallets.json`);
const walletNames = Object.keys(wallets);
walletNames.forEach(name => {
  if (!wallets[name].privateKey || !wallets[name].publicKey) {
    assert(false);
  }
});

assert.isAtLeast(
  walletNames.length,
  3,
  "You should have at least three wallets in 'wallets.json'"
);
```

Your blockchain should have at least 10 blocks

```js
// test 12
const blockchain = await __helpers.getJsonFile(
  `${projectFolder}/blockchain.json`
);
assert.isArray(blockchain, 'Your blockchain should be an array');
assert.isAtLeast(
  blockchain.length,
  10,
  'You should have at least 10 blocks in your blockchain'
);
```

Your blockchain should have at least 20 transactions

```js
// test 13
const blockchain = await __helpers.getJsonFile(
  `${projectFolder}/blockchain.json`
);
const numberOfTransactions = blockchain.reduce((total, block) => {
  return block.transactions ? total + block.transactions.length : total;
}, 0);
assert.isAtLeast(
  numberOfTransactions,
  20,
  'You should have at least 20 transactions in your blockchain'
);
```

Your blockchain should have at least 10 transactions with signatures

```js
// test 14
const blockchain = await __helpers.getJsonFile(
  `${projectFolder}/blockchain.json`
);
let signedTransactions = 0;

for (let i = 0; i < blockchain.length; i++) {
  const transactions = blockchain[i].transactions || [];

  for (let j = 0; j < transactions.length; j++) {
    if (transactions[j].hasOwnProperty('signature')) {
      signedTransactions++;
    }
  }
}

assert.isAtLeast(
  signedTransactions,
  10,
  'You should have at least 10 signed transactions in your blockchain'
);
```

All the hashes and signatures on your blockchain should be valid

```js
// test 15
const blockchain = await __helpers.getJsonFile(
  `${projectFolder}/blockchain.json`
);

// loop over blocks
for (let i = 1; i < blockchain.length; i++) {
  const previousBlock = blockchain[i - 1];
  const { hash, previousHash, nonce, transactions = [] } = blockchain[i];

  // validate previous hash
  assert.equal(
    previousHash,
    previousBlock.hash,
    `The 'previousHash' of block ${i+1} should match the 'hash' of block ${i}`
  );

  // validate hash format
  assert.match(
    hash,
    /^00/,
    `The 'hash' of block ${i+1} should start with two zeros ('00')`
  );

  // validate block hash
  const recreatedHash = await __helpers.generateHash(
    nonce + previousHash + JSON.stringify(transactions)
  );
  assert.equal(
    recreatedHash,
    hash,
    `The 'hash' of block ${i+1} should be able to be recreated with 'sha256(nonce + previousHash + JSON.stringify(transactions)).toString()'`
  );

  // loop over transactions
  for (let j = 0; j < transactions.length; j++) {
    // validate buy signatures
    if (
      transactions[j].hasOwnProperty('signature') &&
      transactions[j].hasOwnProperty('itemBought')
    ) {
      const { buyerAddress, price, itemBought, signature } = transactions[j];
      const validSignature = await __helpers.validateSignature(
        buyerAddress,
        buyerAddress + price + itemBought,
        signature
      );

      assert.isTrue(
        validSignature,
        `The buy signature on transaction ${j+1} of block ${i+1} should be able to be verified with 'keyPair.verify(buyerAddress + price + itemBought, signature)'`
      );
    }

    // validate sell signatures
    if (
      transactions[j].hasOwnProperty('signature') &&
      transactions[j].hasOwnProperty('itemSold')
    ) {
      const { sellerAddress, price, itemSold, signature } = transactions[j];
      const validSignature = await __helpers.validateSignature(
        sellerAddress,
        sellerAddress + price + itemSold,
        signature
      );

      assert.isTrue(
        validSignature,
        `The sell signature on transaction ${j+1} of block ${i+1} should be able to be verified with 'keyPair.verify(sellerAddress + price + itemSold, signature)'`
      );
    }
  }
}

assert.isNotEmpty(blockchain);
```

### --before-all--

```js
global.root = '.';
global.projectFolder = `${root}/build-a-video-game-marketplace-blockchain`;
global.testsFolder = `${projectFolder}/.tests`;
global.projectFiles = [
  'blockchain-helpers.js',
  'blockchain.json',
  'buy-item.js',
  'generate-wallet.js',
  'get-address-info.js',
  'init-blockchain.js',
  'items.json',
  'mine-block.js',
  'sell-item.js',
  'transactions.json',
  'wallets.json'
];
```

## --fcc-end--
