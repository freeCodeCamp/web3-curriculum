# Web3 - Learn Digital Ledgers by Building a Blockchain

## 1

### --description--

For this project, you will work in the `learn-digital-ledgers-by-building-a-blockchain` folder. Open a bash terminal and use `cd` to change into it.

If the tests don't pass, close any open terminals with the **bash** label, open a new one, and run the command again.

### --tests--

You should use the change directory (`cd`) command in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*cd/);
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

## 2

### --description--

You will be creating a blockchain from scratch using JavaScript. First, create an `init-blockchain.js` file in your `learn-digital-ledgers-by-building-a-blockchain` folder. This will be used to initialize your blockchain.

### --tests--

`init-blockchain.js` should exist in your `learn-digital-ledgers-by-building-a-blockchain` directory

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-digital-ledgers-by-building-a-blockchain');
assert.include(folder, 'init-blockchain.js');
```

## 3

### --description--

Open your new `init-blockchain.js` file and create a `const genesisBlock` variable. Give it a value of an empty object literal to start.

### --tests--

You should have `const genesisBlock = {}` in your `init-blockchain.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/init-blockchain.js');
assert.match(fileContents, /^\s*const\s+genesisBlock\s*=\s*{\s*}\s*;?\s*$/);
```

### --seed--

#### --"init-blockchain.js"--

```js

```

## 4

### --description--

This object will be the first block in your blockchain, also known as the genesis block. Each block has a `hash` property to identify the block. Add that property to your object and give it a value of `0` (zero/string).

### --tests--

You should have a `hash: "0"` property in your `genesisBlock` object

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/init-blockchain.js');
assert.match(fileContents, /^\s*const\s+genesisBlock\s*=\s*{\s*(|'|")hash\1\s*:\s*("|'|`)0\2\s*,?\s*}\s*;?\s*$/);
```

### --seed--

#### --"init-blockchain.js"--

```js
const genesisBlock = {

}
```

## 5

### --description--

Each block also has a `previousHash` property that is the `hash` of the block before it. Add a `previousHash` property to your genesis block. Since this is the first block, there isn't a previous block to get a hash from, so use `null` as the value.

### --tests--

You should have a `previousHash: null` property at the bottom of your `genesisBlock` object

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/init-blockchain.js');
assert.match(fileContents, /^\s*const\s+genesisBlock\s*=\s*{\s*(|'|")hash\1\s*:\s*("|'|`)0\2\s*,\s*(|'|")previousHash\3\s*:\s*null\s*,?\s*}\s*;?\s*$/);
```

### --seed--

#### --"init-blockchain.js"--

```js
const genesisBlock = {
  hash: "0"
}
```

## 6

### --description--

Below your object, create a `const blockchain` variable. Make it an array containing only your genesis block.

### --tests--

You should have `const blockchain = [genesisBlock];` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/init-blockchain.js');
assert.match(fileContents, /const\s+blockchain\s*=\s*\[\s*genesisBlock\s*\]\s*;?\s*$/);
```

### --seed--

#### --"init-blockchain.js"--

```js
const genesisBlock = {
  hash: "0",
  previousHash: null
}
```

## 7

### --description--

At the bottom of your file, log your `blockchain` variable to the console so you can see what it looks like.

### --tests--

You should have `console.log(blockchain);` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/init-blockchain.js');
assert.match(fileContents, /console\s*\.\s*log\s*\(\s*blockchain\s*\)\s*;?\s*$/);
```

### --seed--

#### --"init-blockchain.js"--

```js
const genesisBlock = {
  hash: "0",
  previousHash: null
}

const blockchain = [genesisBlock];
```

## 8

### --description--

In the terminal, enter `node init-blockchain.js` to run the file and see your blockchain.

### --tests--

You should run `node init-blockchain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node init-blockchain.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

### --seed--

#### --"init-blockchain.js"--

```js
const genesisBlock = {
  hash: "0",
  previousHash: null
}

const blockchain = [genesisBlock];
console.log(blockchain);
```

## 9

### --description--

Your blockchain has its first block, but the data isn't saved anywhere. Create a `blockchain-helpers.js` file. This will have some helper functions for reading and writing your blockchain to a file.

### --tests--

`blockchain-helpers.js` should exist in your `learn-digital-ledgers-by-building-a-blockchain` directory

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-digital-ledgers-by-building-a-blockchain');
assert.include(folder, 'blockchain-helpers.js');
```

## 10

### --description--

Open your new `blockchain-helpers.js` file and import `{ writeFileSync }` from the `fs` module so you can write to files.

### --tests--

You should have `import { writeFileSync } from 'fs';` in your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js');
assert.match(fileContents, /^\s*import\s*{\s*writeFileSync\s*}\s*from\s*('|")fs\1\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js

```

## 11

### --description--

Below your import, add an empty `writeBlockchain` function that takes a `blockchain` parameter. Add `export` in front of the function so you can import it elsewhere.

### --tests--

You should export a `writeBlockchain` function from the file

```js
await new Promise(res => setTimeout(res, 1000));
const { writeBlockchain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.isFunction(writeBlockchain);
```

You should have `export function writeBlockchain(blockchain) {}` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js');
assert.match(fileContents, /export\s*function\s*writeBlockchain\s*\(\s*blockchain\s*\)\s*{\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync } from 'fs';
```

## 12

### --description--

The `blockchain` parameter will be what you logged to the console. You want to stringify and format it so you can write it to a file.

In your `writeBlockchain` function, create a `const blockchainString` variable. Use `JSON.stringify` to set its value to a stringified version of the `blockchain` argument. Add `null` and `2`, in that order, as arguments to the `stringify` call to format the string with two spaces.

### --tests--

You should have `const blockchainString = JSON.stringify(blockchain, null, 2);` in your `writeBlockchain` function

```js
await new Promise(res => setTimeout(res, 1000));
const { writeBlockchain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(writeBlockchain.toString(), /{\s*const\s+blockchainString\s*=\s*JSON\s*\.\s*stringify\s*\(\s*blockchain\s*,\s*null\s*,\s*2\s*\)\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync } from 'fs';

export function writeBlockchain(blockchain) {

}
```

## 13

### --description--

`writeFileSync` needs two arguments, a destination, and the content. Below your `blockchainString` variable, use `writeFileSync` to write the string to `./blockchain.json`.

### --tests--

You should have `writeFileSync('./blockchain.json', blockchainString);` at the bottom of your `writeBlockchain` function

```js
await new Promise(res => setTimeout(res, 1000));
const { writeBlockchain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(writeBlockchain.toString(), /writeFileSync\s*\(('|")\.\/blockchain\.json\1\s*,\s*blockchainString\s*\)\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
}
```

## 14

### --description--

The function should be working. Go back to your `init-blockchain.js` file and import the function at the top.

### --tests--

You should have `import { writeBlockchain } from './blockchain-helpers.js';` at the top of your `init-blockchain.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/init-blockchain.js');
assert.match(fileContents, /^import\s*{\s*writeBlockchain\s*}\s*from\s*("|')\.\/blockchain-helpers\.js\1\s*;?/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}
```

## 15

### --description--

At the bottom of the file, call your `writeBlockchain` function, passing it the `blockchain` variable.

### --tests--

You should add `writeBlockchain(blockchain);` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/init-blockchain.js');
assert.match(fileContents, /writeBlockchain\s*\(\s*blockchain\s*\)\s*;?\s*$/);
```

### --seed--

#### --"init-blockchain.js"--

```js
import { writeBlockchain } from './blockchain-helpers.js';

const genesisBlock = {
  hash: "0",
  previousHash: null
}

const blockchain = [genesisBlock];
console.log(blockchain);
```

## 16

### --description--

Remove the console log you added earlier.

### --tests--

You should not have any `console.log` calls in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/init-blockchain.js');
assert.notMatch(fileContents, /console\s*\.\s*log/);
```

Your `blockchain` variable declaration and `writeBlockchain` call shouldn't have anything in between them

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/init-blockchain.js');
assert.match(fileContents, /const\s+blockchain\s*=\s*\[\s*genesisBlock\s*\]\s*;?\s*writeBlockchain\s*\(\s*blockchain\s*\)\s*;?\s*$/);
```

### --seed--

#### --"init-blockchain.js"--

```js
import { writeBlockchain } from './blockchain-helpers.js';

const genesisBlock = {
  hash: "0",
  previousHash: null
}

const blockchain = [genesisBlock];
console.log(blockchain);
writeBlockchain(blockchain);
```

## 17

### --description--

Run the command to initialize your blockchain again to see if it's working.

### --tests--

You should run `node init-blockchain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node init-blockchain.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

You should have a `blockchain.json` as a result of running the command

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-digital-ledgers-by-building-a-blockchain');
assert.include(folder, 'blockchain.json');
```

The `blockchain.json` should contain an array with your `genesisBlock` as its only item

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents);
assert.include(fileContents[0], { hash: "0", previousHash: null });
```

### --seed--

#### --"init-blockchain.js"--

```js
import { writeBlockchain } from './blockchain-helpers.js';

const genesisBlock = {
  hash: "0",
  previousHash: null
}

const blockchain = [genesisBlock];
writeBlockchain(blockchain);
```

## 18

### --description--

Your `blockchain.json` file was created, open it up and take a look. It has your blockchain with the genesis block.

Back in your `blockchain-helpers.js` file, import `readFileSync` next to your other import so you can make another function to read the blockchain file.

### --tests--

You should have `import { writeFileSync, readFileSync } from 'fs';` at the top of your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js');
assert.match(fileContents, /^\s*import\s*{\s*(writeFileSync\s*,\s*readFileSync|readFileSync\s*,\s*writeFileSync)\s*}\s*from\s*('|")fs\2\s*;?/);
```

### --seed--

#### --"blockchain.json"--

```js
[
  {
    "hash": "0",
    "previousHash": null
  }
]
```

## 19

### --description--

Below your `writeBlockchain` function, create an empty `getBlockchain` function and export it like you did with the other one. It doesn't need any parameters.

### --tests--

You should have `export function getBlockchain() {}` at the bottom of your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const { getBlockchain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.isFunction(getBlockchain);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}
```

## 20

### --description--

In your `getBlockchain` function, create a `const blockchainFile` variable that uses `readFileSync` to get the info from your blockchain JSON file.

### --tests--

You should have `const blockchainFile = readFileSync('./blockchain.json')` in your `getBlockchain` function

```js
await new Promise(res => setTimeout(res, 1000));
const { getBlockchain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(getBlockchain.toString(), /const\s+blockchainFile\s*=\s*readFileSync\s*\(\s*('|"|`)(\.\/)?blockchain\.json\1\s*\)\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {

}
```

## 21

### --description--

Your variable is a string. Below it, create a `const blockchain` variable and parse `blockchainFile` into JSON.

### --tests--

You should have `const blockchain = JSON.parse(blockchainFile);` at the bottom of your `getBlockchain` function

```js
await new Promise(res => setTimeout(res, 1000));
const { getBlockchain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(getBlockchain.toString(), /const\s+blockchain\s*=\s*JSON\s*\.\s*parse\s*\(\s*blockchainFile\s*\)\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
}
```

## 22

### --description--

Return the `blockchain` JSON from the function.

### --tests--

You should have `return blockchain;` at the bottom of your `getBlockchain` function

```js
await new Promise(res => setTimeout(res, 1000));
const { getBlockchain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(getBlockchain.toString(), /return\s+blockchain\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
}
```

## 23

### --description--

Next, you will create a way to add more blocks to your chain. Create an `add-block.js` for it.

### --tests--

`add-block.js` should exist in your `learn-digital-ledgers-by-building-a-blockchain` directory

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-digital-ledgers-by-building-a-blockchain');
assert.include(folder, 'add-block.js');
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}
```

## 24

### --description--

In your new `add-block.js` file, import your `getBlockchain` function at the top.

### --tests--

You should have `import { getBlockchain } from './blockchain-helpers.js';` in your `add-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /^import\s*{\s*getBlockchain\s*}\s*from\s*("|')\.\/blockchain-helpers\.js\1\s*;?/);
```

### --seed--

#### --"add-block.js"--

```js

```

## 25

### --description--

Below that, create a `const blockchain` variable and set the value to the result of calling your `getBlockchain` function.

### --tests--

You should have `const blockchain = getBlockchain();` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /const\s+blockchain\s*=\s*getBlockchain\s*\(\s*\)\s*;?\s*$/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain } from './blockchain-helpers.js';
```

## 26

### --description--

Log your `blockchain` variable to the console to make sure it's working.

### --tests--

You should have `console.log(blockchain);` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /console\s*\.\s*log\s*\(\s*blockchain\s*\)\s*;?\s*$/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
```

## 27

### --description--

In the terminal, run `node add-block.js`. It should output what's in your `blockchain.json` file.

### --tests--

You should run `node add-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-block.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
console.log(blockchain);
```

## 28

### --description--

It's working. Create a `const newBlock` variable and set it to an empty object literal. This will be for new blocks that get added to your blockchain.

### --tests--

You should have `const newBlock = {};` at the bottom of your `add-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /const\s+newBlock\s*=\s*{\s*}\s*;?\s*$/);
```

## 29

### --description--

Add a `hash` property to your new block for its identifier. Use `Math.random` and `toString` to make it a random number that is a string.

### --tests--

You should have `hash: Math.random().toString()` in your `newBlock` object

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /const\s+newBlock\s*=\s*{\s*(|'|")hash\1\s*:\s*Math\s*\.\s*random\s*\(\s*\)\s*\.\s*toString\s*\(\s*\),?\s*\s*}\s*;?\s*$/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
console.log(blockchain);

const newBlock = {

}
```

## 30

### --description--

You need to get the `hash` of the previous block for the `previousHash` property of your new block. Above your `newBlock` variable, create a `const previousBlock` variable and set it to the last block of `blockchain`.

### --tests--

You should have `const previousBlock = blockchain[blockchain.length - 1];` in your file above the `const newBlock`

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /const\s+previousBlock\s*=\s*blockchain\s*\[\s*blockchain\s*\.\s*length\s*-\s*1\s*\]/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
console.log(blockchain);

const newBlock = {
  hash: Math.random().toString()
}
```

## 31

### --description--

Add a `previousHash` property to your `newBlock` object. Set the value to the `hash` of the `previousBlock`.

### --tests--

You should have a `previousHash: previousBlock.hash` property in your `newBlock` object

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /const\s+newBlock\s*=\s*{\s*(|'|")hash\1\s*:\s*Math\s*\.\s*random\s*\(\s*\)\s*\.\s*toString\s*\(\s*\)\s*,\s*(|'|")previousHash\2\s*:\s*previousBlock\s*\.\s*hash\s*,?\s*}\s*;?\s*$/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];
console.log(blockchain);

const newBlock = {
  hash: Math.random().toString()
}
```

## 32

### --description--

Below your `newBlock` variable, push the new block to your blockchain array.

### --tests--

You should have `blockchain.push(newBlock);` in at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /blockchain\s*\.\s*push\s*\(\s*newBlock\s*\)\s*;?\s*$/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];
console.log(blockchain);

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash
}
```

## 33

### --description--

Move your `console.log` statement to the bottom.

### --tests--

You should have `console.log(blockchain);` at the bottom of your `add-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /console\s*\.\s*log\s*\(\s*blockchain\s*\)\s*;?\s*$/);
```

You should only have one `console.log` statement in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
const babelised = await __helpers.babeliser(fileContents);
const e = babelised.getExpressionStatements().filter(e => e.expression?.callee?.object?.name === 'console' && e.expression?.callee?.property?.name === 'log');
assert.lengthOf(e, 1);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];
console.log(blockchain);

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash
}

blockchain.push(newBlock);
```

## 34

### --description--

Run your file in the terminal with `node add-block.js`.

### --tests--

You should run `node add-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-block.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

The terminal output should include your blockchain with two blocks

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('add-block.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /^[\s\S]*previousHash[\s\S]*previousHash[\s\S]*$/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash
}

blockchain.push(newBlock);
console.log(blockchain);
```

## 35

### --description--

You have successfully added a second block to your blockchain, but the data is not being saved. Import your `writeBlockchain` function at the top of your `add-block.js` file, next to the other import, so you can write it to the file.

### --tests--

You should have `import { getBlockchain, writeBlockchain } from 'blockchain-helpers.js';` at the top of your `add-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /^\s*import\s*{\s*(getBlockchain\s*,\s*writeBlockchain|writeBlockchain\s*,\s*getBlockchain)\s*}\s*from\s*('|")\.\/blockchain-helpers\.js\2\s*;?/);
```

## 36

### --description--

At the bottom of the file, write your new blockchain so it saves.

### --tests--

You should have `writeBlockchain(blockchain)` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /writeBlockchain\s*\(\s*blockchain\s*\)\s*;?\s*$/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash
}

blockchain.push(newBlock);
console.log(blockchain);
```

## 37

### --description--

Comment out the `console.log` with a single line comment so you can run the file and see if it works.

### --tests--

You should have `// console.log(blockchain)` in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /\/\/[ \t]*console\s*\.\s*log\s*\(\s*blockchain\s*\)/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash
}

blockchain.push(newBlock);
console.log(blockchain);
writeBlockchain(blockchain);
```

## 38

### --description--

Open your `blockchain.json` file so you see it, then run your `add-block.js` file in the terminal so you can see your new block get added.

### --tests--

You should run `node add-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-block.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `blockchain.json` file should be an array with two blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash
}

blockchain.push(newBlock);
// console.log(blockchain);
writeBlockchain(blockchain);
```

## 39

### --description--

Your second block was added. Add two more by running the same command two more times.

### --tests--

You should run `node add-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-block.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `blockchain.json` file should be an array with four blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 4);
```

### --seed--

#### --"blockchain.json"--

```js
[
  {
    "hash": "0",
    "previousHash": null
  },
  {
    "hash": "0.45062045106488546",
    "previousHash": "0"
  }
]
```

## 40

### --description--

Your blockchain is working. Next, you will create a way to make sure it's valid. In your `blockchain-helpers.js` file, export a new empty `isValidChain` function below the others.

### --tests--

You should have `export function isValidChain() {}` at the bottom of your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.isFunction(isValidChain);
```

### --seed--

#### --"blockchain.json"--

```js
[
  {
    "hash": "0",
    "previousHash": null
  },
  {
    "hash": "0.45062045106488546",
    "previousHash": "0"
  },
  {
    "hash": "0.16111842235772156",
    "previousHash": "0.45062045106488546"
  },
  {
    "hash": "0.8158006630142653",
    "previousHash": "0.16111842235772156"
  }
]
```

## 41

### --description--

You will loop over all the blocks in the blockchain and make sure they have the correct properties. First, create a `const blockchain` variable in your new function, use the `getBlockchain` function to set its value to the blockchain.

### --tests--

You should have `const blockchain = getBlockchain();` in your `isValidChain` function

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(isValidChain.toString(), /const\s+blockchain\s*=\s*getBlockchain\s*\(\s*\)\s*;?\s*}\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {

}
```

## 42

### --description--

Below the variable you just created, add an empty `for` loop, using `let i = 1` to initialize it, that loops over the `blockchain` array. You won't need to validate the first block so you can start with `i` as `1`.

### --tests--

You should have `for (let i = 1; i < blockchain.length; i++) {}` at the bottom of your `isValidChain` function

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(isValidChain.toString(), /for\s*\(let\s+i\s*=\s*1\s*;\s*i\s*<\s*blockchain\s*\.\s*length\s*;\s*i\s*\+\+\s*\)\s*{\s*}\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();
}
```

## 43

### --description--

On each block, you need to make sure the `previousHash` matches the `hash` of the block before it. Add a `const previousBlock` variable in your for loop that is set to the block before the current one in the loop (`blockchain[i - 1]`).

### --tests--

You should have `const previousBlock = blockchain[i - 1];` in your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(isValidChain.toString(), /[\s\S]*for[\s\S]*{\s*const\s+previousBlock\s*=\s*blockchain\s*\[\s*i\s*-\s*1\s*\]\s*;?\s*}\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {

  }
}
```

## 44

### --description--

You can get the `hash` of the previous block using that. Create a new `const` that destructs `previousHash` from the current block in the loop (`blockchain[i]`) so you can see if it matches that hash.

### --tests--

You should have `const { previousHash } = blockchain[i];` in your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(isValidChain.toString(), /[\s\S]*for[\s\S]*{[\s\S]*const\s*{\s*previousHash\s*}\s*=\s*blockchain\s*\[\s*i\s*\]\s*;?\s*}\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
  }
}
```

## 45

### --description--

Add an empty `if` condition that checks if the `previousHash` is not equal to the `hash` of the previous block.

### --tests--

You should have `if (previousHash !== previousBlock.hash) {}` in your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(isValidChain.toString(), /[\s\S]*for[\s\S]*{[\s\S]*if\s*\(\s*previousHash\s*!==?\s*previousBlock\s*\.\s*hash\s*\)\s*{\s*}\s*;?\s*}\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { previousHash } = blockchain[i];
  }
}
```

## 46

### --description--

If the hashes aren't equal, return `false`.

### --tests--

You should have `return false` in your `if` condition

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(isValidChain.toString(), /[\s\S]*if[\s\S]*{\s*return\s+false\s*;?\s*}\s*;?\s*}\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { previousHash } = blockchain[i];

    if (previousHash !== previousBlock.hash) {

    }
  }
}
```

## 47

### --description--

Below your loop, after you have checked all the blocks, return `true` since you didn't find any mismatched hash values.

### --tests--

You should have `return true` at the bottom of your `isValidChain` function

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(isValidChain.toString(), /return\s+true\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { previousHash } = blockchain[i];

    if (previousHash !== previousBlock.hash) {
      return false;
    }
  }
}
```

## 48

### --description--

Next, you are going to create a small file to run that function. Create a `validate-chain.js` for it.

### --tests--

`validate-chain.js` should exist in your `learn-digital-ledgers-by-building-a-blockchain` directory

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-digital-ledgers-by-building-a-blockchain');
assert.include(folder, 'validate-chain.js');
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { previousHash } = blockchain[i];

    if (previousHash !== previousBlock.hash) {
      return false;
    }
  }

  return true;
}
```

## 49

### --description--

Open your new `validate-chain.js` file and import the `isValidChain` function you just created at the top.

### --tests--

You should have `import { isValidChain } from 'blockchain-helpers.js'` at the top of your `validate-chain.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/validate-chain.js');
assert.match(fileContents, /^\s*import\s*{\s*isValidChain\s*}\s*from\s*("|')\.\/blockchain-helpers\.js\1\s*;?\s*$/);
```

### --seed--

#### --"validate-chain.js"--

```js

```

## 50

### --description--

Add an `if` condition that runs your `isValidChain` function. Log `Chain is valid` to the console if it's true.

### --tests--

You should have `if (isValidChain()) { console.log('Chain is valid') }` in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/validate-chain.js');
assert.match(fileContents, /if\s*\(\s*isValidChain\s*\(\s*\)\s*\)\s*{\s*console\s*\.\s*log\s*\(('|"|`)Chain is valid\1\s*\)\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"validate-chain.js"--

```js
import { isValidChain } from './blockchain-helpers.js';
```

## 51

### --description--

Add an `else` area that logs `Chain is not valid` to the console if the condition is false.

### --tests--

You should have `else { console.log('Chain is not valid') }` as part of your `if` condition

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/validate-chain.js');
assert.match(fileContents, /}\s*else\s*{\s*console\s*\.log\s*\(\s*('|"|`)Chain is not valid\1\s*\)\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"validate-chain.js"--

```js
import { isValidChain } from './blockchain-helpers.js';

if (isValidChain()) {
  console.log('Chain is valid');
}
```

## 52

### --description--

Run your file to see if your chain is valid.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

The terminal output should log `Chain is valid`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Chain is valid/);
```

### --seed--

#### --"validate-chain.js"--

```js
import { isValidChain } from './blockchain-helpers.js';

if (isValidChain()) {
  console.log('Chain is valid');
} else {
  console.log('Chain is not valid');
}
```

## 53

### --description--

It appears to be working. In your `blockchain.json` file, change the hash of the genesis block from `0` to `1`.

### --tests--

The first object in the `blockchain.json` array should have a `hash` value of `1` (one/string)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents);
assert.include(fileContents[0], { hash: "1" });
```

You should still have four blocks in your `blockchain.json` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 4);
```

## 54

### --description--

Run your validation file again.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

The terminal output should log `Chain is not valid`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Chain is not valid/);
```

### --seed--

#### --"blockchain.json"--

```js
[
  {
    "hash": "1",
    "previousHash": null
  },
  {
    "hash": "0.45062045106488546",
    "previousHash": "0"
  },
  {
    "hash": "0.16111842235772156",
    "previousHash": "0.45062045106488546"
  },
  {
    "hash": "0.8158006630142653",
    "previousHash": "0.16111842235772156"
  }
]
```

## 55

### --description--

Since you manually changed the `hash` of a block, the `previousHash` property doesn't match it anymore, making your chain invalid. Each block needs to properly link to the block before to have a valid chain. Change the `hash` of your genesis block back to `0`.

### --tests--

The first object in the `blockchain.json` array should have a `hash` value of `0` (zero/string)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents);
assert.include(fileContents[0], { hash: "0" });
```

You should still have four blocks in your `blockchain.json` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 4);
```

## 56

### --description--

Run the validation file again.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

The terminal output should log `Chain is valid`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Chain is valid/);
```

### --seed--

#### --"blockchain.json"--

```js
[
  {
    "hash": "0",
    "previousHash": null
  },
  {
    "hash": "0.45062045106488546",
    "previousHash": "0"
  },
  {
    "hash": "0.16111842235772156",
    "previousHash": "0.45062045106488546"
  },
  {
    "hash": "0.8158006630142653",
    "previousHash": "0.16111842235772156"
  }
]
```

## 57

### --description--

Okay, your chain is valid again, but all it does is keep track of the some `hash` and `previousHash` values. Back in `add-block.js`, add a `data` property to your `newBlock`, make it an object literal. This will be for adding transaction information to a block.

### --tests--

Your `newBlock` object should have a `data: {}` property

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
const babelised = await __helpers.babeliser(fileContents);
const newBlockDeclaration = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'newBlock')?.declarations[0]?.init;
assert.equal(newBlockDeclaration?.type, 'ObjectExpression');
const dataProperty = newBlockDeclaration?.properties?.find(p => p.key?.name === 'data');
assert.equal(dataProperty?.value?.type, 'ObjectExpression');
assert.lengthOf(dataProperty?.value?.properties, 0);
```

## 58

### --description--

In the `data` object, add a `fromAddress` property equal to `process.argv[2]`. This will be an argument you pass in the command line when you run the `add-block.js` file

### --tests--

You should have `fromAddress: process.argv[2]` in your `data` object

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /newBlock[\s\S]*data[\s\S]*{\s*(|"|')fromAddress\1\s*:\s*process\s*\.argv\s*\[\s*2\s*]\s*,?\s*}[\s\S*]}/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash,
  data: {

  }
}

blockchain.push(newBlock);
// console.log(blockchain);
writeBlockchain(blockchain);
```

## 59

### --description--

Add a `toAddress` property to the object that is the next command line argument, `process.argv[3]`.

### --tests--

You should have a `toAddress: process.argv[3]` property at the bottom of your `data` object

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /newBlock[\s\S]*data[\s\S]*{[\s\S]*(|"|')toAddress\1\s*:\s*process\s*\.\s*argv\[\s*3\s*\][\s\S]*?}\s*,?\s*\s*}/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash,
  data: {
    fromAddress: process.argv[2]
  }
}

blockchain.push(newBlock);
// console.log(blockchain);
writeBlockchain(blockchain);
```

## 60

### --description--

Lastly, add an `amount` to the object. Make it the next command line argument, but parse it as an integer this time since it will be a number.

### --tests--

You should have a `amount: parseInt(process.argv[4])` property at the bottom of your `data` object

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /newBlock[\s\S]*data[\s\S]*{[\s\S]*(|"|')amount\1\s*:\s*parseInt\s*\(\s*process\s*\.\s*argv\[\s*4\s*\]\s*\)[\s\S]*?}\s*,?\s*}/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash,
  data: {
    fromAddress: process.argv[2],
    toAddress: process.argv[3]
  }
}

blockchain.push(newBlock);
// console.log(blockchain);
writeBlockchain(blockchain);
```

## 61

### --description--

Comment out your `writeBlockchain` call so you can see if this is working before you write to the file.

### --tests--

You should have `// writeBlockchain(blockchain);` in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /\/\/\s*writeBlockchain\s*\(blockchain\s*\)/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash,
  data: {
    fromAddress: process.argv[2],
    toAddress: process.argv[3],
    amount: parseInt(process.argv[4])
  }
}

blockchain.push(newBlock);
// console.log(blockchain);
writeBlockchain(blockchain);
```

## 62

### --description--

Uncomment the log to the console.

### --tests--

You should have `console.log(blockchain);` that is not commented out in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /^\s*console\s*\.\s*log\s*\(\s*blockchain\s*\)\s*;?\s*$/m);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash": previousBlock.hash,
  data: {
    fromAddress: process.argv[2],
    toAddress: process.argv[3],
    amount: parseInt(process.argv[4])
  }
}

blockchain.push(newBlock);
// console.log(blockchain);
// writeBlockchain(blockchain);
```

## 63

### --description--

Run your `add-block.js` file, give it three arguments, `Me`, `You`, and `10` to add a transaction from `Me` to `You`.

### --tests--

You should run `node add-block.js Me You 10` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-block.js Me You 10');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your terminal output should include a block with your `data` object


```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /data/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash,
  data: {
    fromAddress: process.argv[2],
    toAddress: process.argv[3],
    amount: parseInt(process.argv[4])
  }
}

blockchain.push(newBlock);
console.log(blockchain);
// writeBlockchain(blockchain);
```

## 64

### --description--

It looks like it's working. The last block that was logged to the console has a `data` object with the transaction information. Remove the `console.log` statement from the `add-block.js` file.

### --tests--

You should not have a `console.log` statement in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.notMatch(fileContents, /console/);
```

## 65

### --description--

Uncomment the `writeBlockchain` call.

### --tests--

You should have `writeBlockchain(blockchain);` that is not commented out in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /^\s*writeBlockchain\s*\(\s*blockchain\s*\)\s*;?\s*$/m);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash,
  data: {
    fromAddress: process.argv[2],
    toAddress: process.argv[3],
    amount: parseInt(process.argv[4])
  }
}

blockchain.push(newBlock);
// writeBlockchain(blockchain);
```

## 66

### --description--

Open your `blockchain.json` file so you can see it. Then, run the command to add the block again, give it the same three arguments.

### --tests--

You should run `node add-block.js Me You 10` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-block.js Me You 10');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `blockchain.json` file should be an array with five blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 5);
```

The fifth block should have a `data` object with the correct transaction

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.equal(fileContents[4]?.data?.fromAddress, 'Me');
assert.equal(fileContents[4]?.data?.toAddress, 'You');
assert.equal(fileContents[4]?.data?.amount, 10);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash,
  data: {
    fromAddress: process.argv[2],
    toAddress: process.argv[3],
    amount: parseInt(process.argv[4])
  }
}

blockchain.push(newBlock);
writeBlockchain(blockchain);
```

## 67

### --description--

Add another block that sends `20` from `Me` to `You`.

### --tests--

You should run `node add-block.js Me You 20` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-block.js Me You 20');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `blockchain.json` file should be an array with six blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 6);
```

The sixth block should have a `data` object with the correct transaction

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.equal(fileContents[5]?.data?.fromAddress, 'Me');
assert.equal(fileContents[5]?.data?.toAddress, 'You');
assert.equal(fileContents[5]?.data?.amount, 20);
```

### --seed--

#### --"blockchain.json"--

```js
[
  {
    "hash": "0",
    "previousHash": null
  },
  {
    "hash": "0.45062045106488546",
    "previousHash": "0"
  },
  {
    "hash": "0.16111842235772156",
    "previousHash": "0.45062045106488546"
  },
  {
    "hash": "0.8158006630142653",
    "previousHash": "0.16111842235772156"
  },
  {
    "hash": "0.8955003586769703",
    "previousHash": "0.8158006630142653",
    "data": {
      "fromAddress": "Me",
      "toAddress": "You",
      "amount": 10
    }
  }
]
```

## 68

### --description--

Add one more that sends `30` from `Me` to `You`.

### --tests--

You should run `node add-block.js Me You 30` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-block.js Me You 30');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `blockchain.json` file should be an array with seven blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 7);
```

The seventh block should have a `data` object with the correct transaction

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.equal(fileContents[6]?.data?.fromAddress, 'Me');
assert.equal(fileContents[6]?.data?.toAddress, 'You');
assert.equal(fileContents[6]?.data?.amount, 30);
```

### --seed--

#### --"blockchain.json"--

```js
[
  {
    "hash": "0",
    "previousHash": null
  },
  {
    "hash": "0.45062045106488546",
    "previousHash": "0"
  },
  {
    "hash": "0.16111842235772156",
    "previousHash": "0.45062045106488546"
  },
  {
    "hash": "0.8158006630142653",
    "previousHash": "0.16111842235772156"
  },
  {
    "hash": "0.8955003586769703",
    "previousHash": "0.8158006630142653",
    "data": {
      "fromAddress": "Me",
      "toAddress": "You",
      "amount": 10
    }
  },
  {
    "hash": "0.9583680743350331",
    "previousHash": "0.8955003586769703",
    "data": {
      "fromAddress": "Me",
      "toAddress": "You",
      "amount": 20
    }
  }
]
```

## 69

### --description--

Validate your chain to make sure nothing has broken.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

The terminal output should log `Chain is valid`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Chain is valid/);
```

### --seed--

#### --"blockchain.json"--

```js
[
  {
    "hash": "0",
    "previousHash": null
  },
  {
    "hash": "0.45062045106488546",
    "previousHash": "0"
  },
  {
    "hash": "0.16111842235772156",
    "previousHash": "0.45062045106488546"
  },
  {
    "hash": "0.8158006630142653",
    "previousHash": "0.16111842235772156"
  },
  {
    "hash": "0.8955003586769703",
    "previousHash": "0.8158006630142653",
    "data": {
      "fromAddress": "Me",
      "toAddress": "You",
      "amount": 10
    }
  },
  {
    "hash": "0.9583680743350331",
    "previousHash": "0.8955003586769703",
    "data": {
      "fromAddress": "Me",
      "toAddress": "You",
      "amount": 20
    }
  },
  {
    "hash": "0.939029301911428",
    "previousHash": "0.9583680743350331",
    "data": {
      "fromAddress": "Me",
      "toAddress": "You",
      "amount": 30
    }
  }
]
```

## 70

### --description--

Transactions aren't stored usually stored on the blockchain right away, they go into a waiting area known as a transaction pool until a new block is added. You will create this next. In your `blockchain-helpers.js` export a new `writeTransactions` function. Give it a parameter of `transactions` and leave the function empty to start.

### --tests--

You should have `export function writeTransactions(transactions) {}` in your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const { writeTransactions } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.isFunction(writeTransactions);
assert.match(writeTransactions.toString(), /writeTransactions\s*\(\s*transactions\s*\)/);
```

## 71

### --description--

This will be the same as the `writeBlockchain` function, except it will write to a different file. In your new function, create a `const transactionsString` variable. Set the value to a stringified version of the `transaction` argument. Format it using `null` and `2` like you did for the `writeBlockchain` function.

### --tests--

You should have `const transactionsString = JSON.stringify(transactions, null, 2);` in your `writeTransactions` function

```js
await new Promise(res => setTimeout(res, 1000));
const { writeTransactions } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(writeTransactions.toString(), /{\s*const\s+transactionsString\s*=\s*JSON\s*\.\s*stringify\s*\(\s*transactions\s*,\s*null\s*,\s*2\s*\)\s*;?\s*}/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { previousHash } = blockchain[i];

    if (previousHash !== previousBlock.hash) {
      return false;
    }
  }

  return true;
}

export function writeTransactions(transactions) {

}
```

## 72

### --description--

Next, use `writeFileSync` in the function to write that string to `transactions.json`.

### --tests--

You should have `writeFileSync('./transactions.json', transactionsString);` at the bottom of your `writeTransactions` function.

```js
await new Promise(res => setTimeout(res, 1000));
const { writeTransactions } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(writeTransactions.toString(), /writeFileSync\s*\(('|")\.\/transactions\.json\1\s*,\s*transactionsString\s*\)\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { previousHash } = blockchain[i];

    if (previousHash !== previousBlock.hash) {
      return false;
    }
  }

  return true;
}

export function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);
}
```

## 73

### --description--

Transactions will be created separately from blocks. Create an `add-transaction.js` file.

### --tests--

`add-transaction.js` should exist in your `learn-digital-ledgers-by-building-a-blockchain` directory

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-digital-ledgers-by-building-a-blockchain');
assert.include(folder, 'add-transaction.js');
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { previousHash } = blockchain[i];

    if (previousHash !== previousBlock.hash) {
      return false;
    }
  }

  return true;
}

export function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);
  writeFileSync('./transactions.json', transactionsString);
}
```

## 74

### --description--

At the top of your new file, import the `writeTransactions` function you created.

### --tests--

You should have `import { writeTransactions } from 'blockchain-helpers.js';` in your `add-transaction.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
assert.match(fileContents, /^\s*import\s*{\s*writeTransactions\s*}\s*from\s*("|')\.\/blockchain-helpers\.js\1\s*;?\s*$/);
```

### --seed--

#### --"add-transaction.js"--

```js

```

## 75

### --description--

A transaction will consist of the same three pieces of information as the `data` object you created; who it's from, who its to, and an amount. They will be passed in through the command line. Create a `const fromAddress` variable set to the first command line argument.

### --tests--

You should have `const fromAddress = process.argv[2]` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
assert.match(fileContents, /const\s*fromAddress\s*=\s*process\s*\.\s*argv\s*\[\s*2\s*\]\s*;?\s*$/);
```

### --seed--

#### --"add-transaction.js"--

```js
import { writeTransactions } from './blockchain-helpers.js';
```

## 76

### --description--

Similarly, create a `toAddress` variable set to the second command line argument.

### --tests--

You should have `const toAddress = process.argv[3]` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
assert.match(fileContents, /const\s*toAddress\s*=\s*process\s*\.\s*argv\s*\[\s*3\s*\]\s*;?\s*$/);
```

### --seed--

#### --"add-transaction.js"--

```js
import { writeTransactions } from './blockchain-helpers.js';

const fromAddress = process.argv[2];
```

## 77

### --description--

Lastly, add an `amount` variable set to the third command line argument. Parse it as an integer like you did in the `data` object.

### --tests--

You should have `const amount = parseInt(process.argv[4])` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
assert.match(fileContents, /const\s*amount\s*=\s*parseInt\s*\(\s*process\s*\.\s*argv\s*\[\s*4\s*\]\s*\)\s*;?\s*$/);
```

### --seed--

#### --"add-transaction.js"--

```js
import { writeTransactions } from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
```

## 78

### --description--

Now you can create the transaction. Add a `const newTransaction` variable set to an empty object literal.

### --tests--

You should have `const newTransaction = {}` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
assert.match(fileContents, /const\s*newTransaction\s*=\s*{\s*}\s*;?\s*$/);
```

### --seed--

#### --"add-transaction.js"--

```js
import { writeTransactions } from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);
```

## 79

### --description--

Add the three properties to the new transaction.

### --tests--

Your transaction object should have a `fromAddress` property

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
const babelised = await __helpers.babeliser(fileContents);
const transactionDeclaration = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'newTransaction')?.declarations[0]?.init;
const property = transactionDeclaration?.properties?.find(p => p.key?.name === 'fromAddress')
assert.equal(property?.key?.name, 'fromAddress');
assert.equal(property?.value?.name, 'fromAddress');
```

Your transaction object should have a `toAddress` property

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
const babelised = await __helpers.babeliser(fileContents);
const transactionDeclaration = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'newTransaction')?.declarations[0]?.init;
const property = transactionDeclaration?.properties?.find(p => p.key?.name === 'toAddress')
assert.equal(property?.key?.name, 'toAddress');
assert.equal(property?.value?.name, 'toAddress');
```

Your transaction object should have an `amount` property

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
const babelised = await __helpers.babeliser(fileContents);
const transactionDeclaration = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'newTransaction')?.declarations[0]?.init;
const property = transactionDeclaration?.properties?.find(p => p.key?.name === 'amount')
assert.equal(property?.key?.name, 'amount');
assert.equal(property?.value?.name, 'amount');
```

### --seed--

#### --"add-transaction.js"--

```js
import { writeTransactions } from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);

const newTransaction = {

}
```

## 80

### --description--

Add a new `const transactions` variable and set it to an array with your `newTransaction` in it.

### --tests--

You should have `const transactions = [newTransaction];` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
assert.match(fileContents, /const\s*transactions\s*=\s*\[\s*newTransaction\s*\]\s*;?\s*$/);
```

### --seed--

#### --"add-transaction.js"--

```js
import { writeTransactions } from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);

const newTransaction = {
  fromAddress,
  toAddress,
  amount
}
```

## 81

### --description--

Below that, use your `writeTransactions` function to write the transactions to the `transactions.json` file.

### --tests--

You should have `writeTransactions(transactions);` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
assert.match(fileContents, /writeTransactions\s*\(\s*transactions\s*\)\s*;?\s*$/);
```

### --seed--

#### --"add-transaction.js"--

```js
import { writeTransactions } from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);

const newTransaction = {
  fromAddress,
  toAddress,
  amount
}

const transactions = [newTransaction];
```

## 82

### --description--

Run your `add-transaction.js` file in the terminal and give it `You`, `Me`, and `5` as command line arguments to add a transaction from `You` to `Me`.

### --tests--

You should run `node add-transaction.js You Me 5` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 5');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `transactions.json` file should be an array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.equal(fileContents[0]?.fromAddress, 'You');
assert.equal(fileContents[0]?.toAddress, 'Me');
assert.equal(fileContents[0]?.amount, 5);
```

### --seed--

#### --"add-transaction.js"--

```js
import { writeTransactions } from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);

const newTransaction = {
  fromAddress,
  toAddress,
  amount
}

const transactions = [newTransaction];
writeTransactions(transactions);
```

## 83

### --description--

Open up your `transactions.json` file to see the transaction. Add another transaction, but send 15 this time.

### --tests--

You should run `node add-transaction.js You Me 15` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 15');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `transactions.json` file should be an array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.equal(fileContents[0]?.fromAddress, 'You');
assert.equal(fileContents[0]?.toAddress, 'Me');
assert.equal(fileContents[0]?.amount, 15);
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": "You",
    "toAddress": "Me",
    "amount": 5
  }
]
```

## 84

### --description--

The transactions are being overwritten. You need to get the existing transactions and add to them like you did with the blocks. In your `blockchain-helpers.js` file, export a new `getTransactions` function.

### --tests--

You should have `export function getTransactions() {}` in your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const { getTransactions } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.isFunction(getTransactions);
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": "You",
    "toAddress": "Me",
    "amount": 15
  }
]
```

## 85

### --description--

Add a `const transacationsFile` in the function. Use the imported `readFileSync` to set its value to what's in the `transactions.json` file.

### --tests--

You should have `const transactionsFile = readFileSync('./transactions.json');` in your `getTransactions` function

```js
await new Promise(res => setTimeout(res, 1000));
const { getTransactions } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(getTransactions.toString(), /const\s+transactionsFile\s*=\s*readFileSync\s*\(\s*('|"|`)(\.\/)?transactions\.json\1\s*\)\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { previousHash } = blockchain[i];

    if (previousHash !== previousBlock.hash) {
      return false;
    }
  }

  return true;
}

export function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);
  writeFileSync('./transactions.json', transactionsString);
}

export function getTransactions() {

}
```

## 86

### --description--

Add a `const transactions` variable below that. Parse the `transactionsFile` into JSON and set its value to the new variable.

### --tests--

You should have `const transactions = JSON.parse(transactionsFile);` at the bottom of your `getTransactions` function

```js
await new Promise(res => setTimeout(res, 1000));
const { getTransactions } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(getTransactions.toString(), /const\s+transactions\s*=\s*JSON\s*\.\s*parse\s*\(\s*transactionsFile\s*\)\s*;?\s*}\s*;?\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { previousHash } = blockchain[i];

    if (previousHash !== previousBlock.hash) {
      return false;
    }
  }

  return true;
}

export function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);
  writeFileSync('./transactions.json', transactionsString);
}

export function getTransactions() {
  const transactionsFile = readFileSync('./transactions.json');
}
```

## 87

### --description--

Return the transactions from the function.

### --tests--

You should have `return transactions;` at the bottom of your `getTransactions` function

```js
await new Promise(res => setTimeout(res, 1000));
const { getTransactions } = (await import(join(ROOT, `learn-digital-ledgers-by-building-a-blockchain/blockchain-helpers.js?update=${Date.now()}`)));
assert.match(getTransactions.toString(), /return\s+transactions\s*;?\s*}\s*$/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { previousHash } = blockchain[i];

    if (previousHash !== previousBlock.hash) {
      return false;
    }
  }

  return true;
}

export function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);
  writeFileSync('./transactions.json', transactionsString);
}

export function getTransactions() {
  const transactionsFile = readFileSync('./transactions.json');
  const transactions = JSON.parse(transactionsFile);
}
```

## 88

### --description--

Back in the `add-transaction.js` file, add your new function to the imports at the top with the other import.

### --tests--

You should import `getTransactions` at the top of your `add-transaction.js` file with the rest of the imports

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
assert.match(fileContents, /^\s*import\s*{\s*(writeTransactions\s*,\s*getTransactions|getTransactions\s*,\s*writeTransactions)\s*}\s*from\s*('|")\.\/blockchain-helpers\.js\2\s*;?/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import { writeFileSync, readFileSync } from 'fs';

export function writeBlockchain(blockchain) {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain.json', blockchainString);
}

export function getBlockchain() {
  const blockchainFile = readFileSync('./blockchain.json');
  const blockchain = JSON.parse(blockchainFile);
  return blockchain;
}

export function isValidChain() {
  const blockchain = getBlockchain();

  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { previousHash } = blockchain[i];

    if (previousHash !== previousBlock.hash) {
      return false;
    }
  }

  return true;
}

export function writeTransactions(transactions) {
  const transactionsString = JSON.stringify(transactions, null, 2);
  writeFileSync('./transactions.json', transactionsString);
}

export function getTransactions() {
  const transactionsFile = readFileSync('./transactions.json');
  const transactions = JSON.parse(transactionsFile);
  return transactions;
}
```

## 89

### --description--

Change your `const transactions` declaration to get the transactions from the JSON file using your function.

### --tests--

You should have `const transactions = getTransactions();` in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
assert.match(fileContents, /^\s*const\s+transactions\s*=\s*getTransactions\s*\(\s*\)\s*;?$/m);
```

### --seed--

#### --"add-transaction.js"--

```js
import { writeTransactions, getTransactions } from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);

const newTransaction = {
  fromAddress,
  toAddress,
  amount
}

const transactions = [newTransaction];
writeTransactions(transactions);
```

## 90

### --description--

Above where you write the transactions, push your `newTransaction` to the `transactions` array.

### --tests--

You should have `transactions.push(newTransaction);` above your `writeTransactions(transactions);`

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-transaction.js');
assert.match(fileContents, /transactions\s*\.\s*push\s*\(\s*newTransaction\s*\)\s*;?\s*writeTransactions\s*\(transactions\s*\)\s*;?\s*$/);
```

### --seed--

#### --"add-transaction.js"--

```js
import { writeTransactions, getTransactions } from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);

const newTransaction = {
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
writeTransactions(transactions);
```

## 91

### --description--

Now the transactions should accumulate. Open the `transactions.json` file so you can see it. Then, add a new transaction using the command line. Send `25` tokens from `You` to `Me`.

### --tests--

You should run `node add-transaction.js You Me 25` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 25');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `transactions.json` file should be an array with two transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.equal(fileContents[1]?.fromAddress, 'You');
assert.equal(fileContents[1]?.toAddress, 'Me');
assert.equal(fileContents[1]?.amount, 25);
```

### --seed--

#### --"add-transaction.js"--

```js
import { writeTransactions, getTransactions } from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);

const newTransaction = {
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
transactions.push(newTransaction);
writeTransactions(transactions);
```

## 92

### --description--

It works. Add another one that sends `35` tokens to the same addresses.

### --tests--

You should run `node add-transaction.js You Me 35` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 35');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `transactions.json` file should be an array with three transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 3);
```

The third transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.equal(fileContents[2]?.fromAddress, 'You');
assert.equal(fileContents[2]?.toAddress, 'Me');
assert.equal(fileContents[2]?.amount, 35);
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": "You",
    "toAddress": "Me",
    "amount": 15
  },
  {
    "fromAddress": "You",
    "toAddress": "Me",
    "amount": 25
  }
]
```

## 93

### --description--

Now that the transactions are in the transaction pool, you need to add all the transactions to a block when a new one gets added. In your `add-block.js` file, import the `getTransactions` and `writeTransctions` functions at the top with the rest of the imports.

### --tests--

You should import `getTransactions` at the top of the `add-block.js` with the rest of the imports

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /^\s*import\s*({\s*getTransactions\s*,[\s\S*]*}|{[\s\S]*,\s*getTransactions\s*,[\s\S]*}|{[\s\S]*,\s*getTransactions\s*})\s*from\s*('|")\.\/blockchain-helpers\.js\2\s*;?/);
```

You should import `writeTransactions` at the top of the `add-block.js` with the rest of the imports

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /^\s*import\s*({\s*writeTransactions\s*,[\s\S*]*}|{[\s\S]*,\s*writeTransactions\s*,[\s\S]*}|{[\s\S]*,\s*writeTransactions\s*})\s*from\s*('|")\.\/blockchain-helpers\.js\2\s*;?/);
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": "You",
    "toAddress": "Me",
    "amount": 15
  },
  {
    "fromAddress": "You",
    "toAddress": "Me",
    "amount": 25
  },
  {
    "fromAddress": "You",
    "toAddress": "Me",
    "amount": 35
  }
]
```

## 94

### --description--

Add a `const transactions` variable in the `add-block.js` file, make sure it's above the `newBlock` declaration. Use the `getTransactions` function to set its value to what's in the transactions JSON file.

### --tests--

You should have `const transactions = getTransactions();` in your `add-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /const\s+transactions\s*=\s*getTransactions\s*\(\s*\)\s*;?\s*$/m);
```

It should be above the `newBlock` variable

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /const\s+transactions\s*=\s*getTransactions\s*\(\s*\)\s*;?[\s\S]*const\s+newBlock/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain, getTransactions, writeTransactions } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash,
  data: {
    fromAddress: process.argv[2],
    toAddress: process.argv[3],
    amount: parseInt(process.argv[4])
  }
}

blockchain.push(newBlock);
writeBlockchain(blockchain);
```

## 95

### --description--

Remove the `data` property and value from the `newBlock` object.

### --tests--

Your `newBlock` object should not have a `data` property or value

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.notMatch(fileContents, /data/);
```

Your `newBlock` object should have two properties

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
const babelised = await __helpers.babeliser(fileContents);
const newBlockDeclaration = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'newBlock')?.declarations[0]?.init;
assert.equal(newBlockDeclaration?.type, 'ObjectExpression');
assert.lengthOf(newBlockDeclaration?.properties, 2);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain, getTransactions, writeTransactions } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];
const transactions = getTransactions();

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash,
  data: {
    fromAddress: process.argv[2],
    toAddress: process.argv[3],
    amount: parseInt(process.argv[4])
  }
}

blockchain.push(newBlock);
writeBlockchain(blockchain);
```

## 96

### --description--

Add `transactions` as a property in the `newBlock` object. This will just add exactly what's in the transaction pool to the block.

### --tests--

Your `newBlock` should have a `transactions` property

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
const babelised = await __helpers.babeliser(fileContents);
const newBlockDeclaration = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'newBlock')?.declarations[0]?.init;
assert.equal(newBlockDeclaration?.type, 'ObjectExpression');
const transactionsProperty = newBlockDeclaration?.properties?.find(p => p.value?.name === 'transactions')
assert.equal(transactionsProperty?.value?.name, 'transactions');
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain, getTransactions, writeTransactions } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];
const transactions = getTransactions();

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash
}

blockchain.push(newBlock);
writeBlockchain(blockchain);
```

## 97

### --description--

At the bottom, use your `writeTransactions` function to write an empty array to the `transactions.json` file.

### --tests--

You should have `writeTransctions([]);` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-ledgers-by-building-a-blockchain/add-block.js');
assert.match(fileContents, /writeTransactions\s*\(\s*\[\s*\]\s*\)\s*;?\s*$/);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain, getTransactions, writeTransactions } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];
const transactions = getTransactions();

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash,
  transactions
}

blockchain.push(newBlock);
writeBlockchain(blockchain);
```

## 98

### --description--

Open your `blockchain.json` file. Then, run your `add-blocks.js` file with no arguments to add a new block.

### --tests--

You should run `node add-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-block.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `blockchain.json` should be an array with eight blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 8);
```

The eighth block should have a `transactions` array with three transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents[7]?.transactions);
assert.lengthOf(fileContents[7]?.transactions, 3);
```

Your `transactions.json` file should be an empty array

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 0);
```

### --seed--

#### --"add-block.js"--

```js
import { getBlockchain, writeBlockchain, getTransactions, writeTransactions } from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];
const transactions = getTransactions();

const newBlock = {
  hash: Math.random().toString(),
  previousHash: previousBlock.hash,
  transactions
}

blockchain.push(newBlock);
writeBlockchain(blockchain);
writeTransactions([]);
```

## 99

### --description--

The new block was added with all the transactions. Open your `transactions.json` file, all the transactions waiting in the pool were added to that block and the pool is empty. Add a new transaction that sends `2` tokens from `Me` to `You`. Remember that the from address is the first command line argument.

### --tests--

You should run `node add-transaction.js Me You 2` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js Me You 2');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `transactions.json` file should be an array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.equal(fileContents[0]?.fromAddress, 'Me');
assert.equal(fileContents[0]?.toAddress, 'You');
assert.equal(fileContents[0]?.amount, 2);
```

### --seed--

#### --"blockchain.json"--

```js
[
  {
    "hash": "0",
    "previousHash": null
  },
  {
    "hash": "0.45062045106488546",
    "previousHash": "0"
  },
  {
    "hash": "0.16111842235772156",
    "previousHash": "0.45062045106488546"
  },
  {
    "hash": "0.8158006630142653",
    "previousHash": "0.16111842235772156"
  },
  {
    "hash": "0.8955003586769703",
    "previousHash": "0.8158006630142653",
    "data": {
      "fromAddress": "Me",
      "toAddress": "You",
      "amount": 10
    }
  },
  {
    "hash": "0.9583680743350331",
    "previousHash": "0.8955003586769703",
    "data": {
      "fromAddress": "Me",
      "toAddress": "You",
      "amount": 20
    }
  },
  {
    "hash": "0.939029301911428",
    "previousHash": "0.9583680743350331",
    "data": {
      "fromAddress": "Me",
      "toAddress": "You",
      "amount": 30
    }
  },
  {
    "hash": "0.7495656727576048",
    "previousHash": "0.939029301911428",
    "transactions": [
      {
        "fromAddress": "You",
        "toAddress": "Me",
        "amount": 15
      },
      {
        "fromAddress": "You",
        "toAddress": "Me",
        "amount": 25
      },
      {
        "fromAddress": "You",
        "toAddress": "Me",
        "amount": 35
      }
    ]
  }
]
```

#### --"transactions.json"--

```js
[]
```

## 100

### --description--

Add another one that sends `4` this time.

### --tests--

You should run `node add-transaction.js Me You 4` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js Me You 4');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `transactions.json` file should be an array with two transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.equal(fileContents[1]?.fromAddress, 'Me');
assert.equal(fileContents[1]?.toAddress, 'You');
assert.equal(fileContents[1]?.amount, 4);
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": "Me",
    "toAddress": "You",
    "amount": 2
  }
]
```

## 101

### --description--

Add one more that sends `6`.

### --tests--

You should run `node add-transaction.js Me You 6` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js Me You 6');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `transactions.json` file should be an array with three transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 3);
```

The third transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.equal(fileContents[2]?.fromAddress, 'Me');
assert.equal(fileContents[2]?.toAddress, 'You');
assert.equal(fileContents[2]?.amount, 6);
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": "Me",
    "toAddress": "You",
    "amount": 2
  },
  {
    "fromAddress": "Me",
    "toAddress": "You",
    "amount": 4
  }
]
```

## 102

### --description--

You have three transactions waiting. Open your `blockchain.json` and add a new block.

### --tests--

You should run `node add-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-block.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

Your `blockchain.json` should be an array with nine blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 9);
```

The ninth block should have a `transactions` array with three transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/blockchain.json');
assert.isArray(fileContents[8]?.transactions);
assert.lengthOf(fileContents[8]?.transactions, 3);
```

Your `transactions.json` file should be an empty array

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-ledgers-by-building-a-blockchain/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 0);
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": "Me",
    "toAddress": "You",
    "amount": 2
  },
  {
    "fromAddress": "Me",
    "toAddress": "You",
    "amount": 4
  },
  {
    "fromAddress": "Me",
    "toAddress": "You",
    "amount": 6
  }
]
```

## 103

### --description--

This is the last step. Validate your chain one more time. When you are done, feel free to add some more transactions and blocks with your commands.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
```

You should be in the `learn-digital-ledgers-by-building-a-blockchain` folder in your terminal when you run it

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-ledgers-by-building-a-blockchain');
```

The terminal output should log `Chain is valid`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Chain is valid/);
```

### --seed--

#### --"blockchain.json"--

```js
[
  {
    "hash": "0",
    "previousHash": null
  },
  {
    "hash": "0.45062045106488546",
    "previousHash": "0"
  },
  {
    "hash": "0.16111842235772156",
    "previousHash": "0.45062045106488546"
  },
  {
    "hash": "0.8158006630142653",
    "previousHash": "0.16111842235772156"
  },
  {
    "hash": "0.8955003586769703",
    "previousHash": "0.8158006630142653",
    "data": {
      "fromAddress": "Me",
      "toAddress": "You",
      "amount": 10
    }
  },
  {
    "hash": "0.9583680743350331",
    "previousHash": "0.8955003586769703",
    "data": {
      "fromAddress": "Me",
      "toAddress": "You",
      "amount": 20
    }
  },
  {
    "hash": "0.939029301911428",
    "previousHash": "0.9583680743350331",
    "data": {
      "fromAddress": "Me",
      "toAddress": "You",
      "amount": 30
    }
  },
  {
    "hash": "0.7495656727576048",
    "previousHash": "0.939029301911428",
    "transactions": [
      {
        "fromAddress": "You",
        "toAddress": "Me",
        "amount": 15
      },
      {
        "fromAddress": "You",
        "toAddress": "Me",
        "amount": 25
      },
      {
        "fromAddress": "You",
        "toAddress": "Me",
        "amount": 35
      }
    ]
  },
  {
    "hash": "0.13366310229995104",
    "previousHash": "0.7495656727576048",
    "transactions": [
      {
        "fromAddress": "Me",
        "toAddress": "You",
        "amount": 2
      },
      {
        "fromAddress": "Me",
        "toAddress": "You",
        "amount": 4
      },
      {
        "fromAddress": "Me",
        "toAddress": "You",
        "amount": 6
      }
    ]
  }
]
```

#### --"transactions.json"--

```js
[]
```

## --fcc-end--
