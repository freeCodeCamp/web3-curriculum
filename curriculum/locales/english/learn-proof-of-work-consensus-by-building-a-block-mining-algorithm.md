# Web3 - Learn Proof of Work Consensus by Building a Block Mining Algorithm

## 1

### --description--

For this project, you will work in the `learn-proof-of-work-consensus-by-building-a-block-mining-algorithm` folder. Open a bash terminal and use `cd` to change into it.

The tests should run automatically. If they don't, close any open **bash** terminals, open a new one, and run the command again.

### --tests--

You should use the change directory (`cd`) command in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*cd/);
```

You should be in the `learn-proof-of-work-consensus-by-building-a-block-mining-algorithm` folder in your terminal

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-proof-of-work-consensus-by-building-a-block-mining-algorithm');
```

## 2

### --description--

You left the last tutorial after creating your own blockchain. Your blockchain is still in the `blockchain.json` file and the transactions are in `transactions.json`. For a quick recap, open your `transactions.json` file and run `node add-transaction.js You Me 100` in the terminal to add a transaction that sends 100 tokens from `You` to `Me`.

### --tests--

You should run `node add-transaction.js You Me 100` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 100');
```

Your `transactions.json` file should be an array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[0]?.fromAddress, 'You');
assert.equal(fileContents[0]?.toAddress, 'Me');
assert.equal(fileContents[0]?.amount, 100);
```

## 3

### --description--

The transaction was added to the transaction pool. Open your `blockchain.json` file, your blocks are still in there. Scroll to the bottom of it and run `node add-block.js` in the terminal to add a new block.

### --tests--

You should run `node add-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-block.js');
```

Your `blockchain.json` file should be an array with ten blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 10);
```

The tenth block should have a `transactions` array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.isArray(fileContents[9]?.transactions);
assert.lengthOf(fileContents[9]?.transactions, 1);
```

## 4

### --description--

A new block was added to your blockchain that includes your transaction, and the transaction pool is empty again. Run `node validate-chain.js` in the terminal to make sure your chain is still valid.
run `node validate-chain.js`

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
```

The terminal output should log `Chain is valid`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Chain is valid/);
```

## 5

### --description--

This project will teach you how hash values are created and used to validate the content of your blockchain, and how blocks are mined. Rename your `add-block.js` file to `mine-block.js`

### --tests--

You should not have an `add-block.js` file in your project folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm');
assert.notInclude(folder, 'add-block.js');
```

You should have a `mine-block.js` file in your project folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm');
assert.include(folder, 'mine-block.js');
```

## 6

### --description--

Your blocks have a `hash` property that is a random number converted to a string. You will turn these into real hash values. Run `npm install crypto-js` in your project folder to help with that.

### --tests--

You should run `npm install crypto-js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert(lastCommand.replace(/\s+/g, ' ').trim(), 'npm install crypto-js');
```

## 7

### --description--

Open your `mine-block.js` file and import the `sha256` method at the top with `import sha256 from 'crypto-js/sha256.js';`.

### --tests--

You should have `import sha256 from 'crypto-js/sha256.js';` at the top of your `mine-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const sha256Import = imports.find(i => i.specifiers[0]?.local?.name === 'sha256');
assert.equal(sha256Import.specifiers[0]?.local?.name, 'sha256');
assert.equal(sha256Import.source?.value, 'crypto-js/sha256.js')
```

## 8

### --description--

This method takes a string of any length and turns it into a 256 bit hash value that is always 64 characters. Above your `newBlock`, create a `const hash` variable with a value of `sha256('password').toString();`.

### --tests--

You should have `const hash = sha256('password').toString();` in your `mine-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const hashVar = babelised.getVariableDeclarations().find(v => {
  return v.declarations[0]?.id?.name === 'hash';
});
assert.equal(hashVar.kind, 'const');
assert.equal(hashVar.declarations[0]?.id?.name, 'hash');
assert.equal(hashVar.declarations[0]?.init?.callee?.object?.callee?.name, 'sha256');
assert.equal(hashVar.declarations[0]?.init?.callee?.object?.arguments[0]?.value, 'password');
assert.equal(hashVar.declarations[0]?.init?.callee?.property?.loc?.identifierName, 'toString');
```

Your `hash` declaration should be right above the `newBlock` declaration

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /const\s+hash[\s\S]*?toString\s*\(\s*\)\s*;?\s*const\s+newBlock/);
```

## 9

### --description--

Right below that, log your `hash` variable to the console.

### --tests--

You should have `console.log(hash);` right above your `newBlock` variable

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /console\s*\.\s*log\s*\(\s*hash\s*\)\s*;?\s*const\s+newBlock/);
```

Your JavaScript should be valid

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
```

## 10

### --description--

Use single line comments to comment out the two lines at the bottom of the file where you write your blockchain and transaction files. This way, you can see the hash without writing to your files.

### --tests--

You should have `// writeBlockchain(blockchain);` in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const comment = babelised.parsedCode?.comments?.find(c => {
  const commentString = c.value?.replace(/\s+/g, ' ').trim();
  return commentString.includes('writeBlockchain(blockchain)')
})
assert.include(comment.value, 'writeBlockchain(blockchain)');
```

You should have `// writeTransactions([]);` in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const comment = babelised.parsedCode?.comments?.find(c => {
  const commentString = c.value?.replace(/\s+/g, ' ').trim();
  return commentString.includes('writeTransactions([])')
})
assert.include(comment.value, 'writeTransactions([])');
```

## 11

### --description--

Run your `mine-block.js` file in the terminal so you can see what the hashing function does.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your terminal output should print `5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split(/\n/);
const lastOutput = splitOutput[splitOutput.length - 2];
assert.equal(lastOutput, '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');
```

## 12

### --description--

The `sha256` method turned the `password` string you passed to it into a 256 bit hash that is 64 characters long. Run the command again.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your terminal output should print `5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split(/\n/);
const lastOutput = splitOutput[splitOutput.length - 2];
assert.equal(lastOutput, '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');
```

## 13

### --description--

It printed the same hash. Given the same input, the hash function will always produce same the output. Change `password` to `passwords`.

### --tests--

You should have `const hash = sha256('passwords').toString();` in your `mine-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const hashVar = babelised.getVariableDeclarations().find(v => {
  return v.declarations[0]?.id?.name === 'hash';
});
assert.equal(hashVar.kind, 'const');
assert.equal(hashVar.declarations[0]?.id?.name, 'hash');
assert.equal(hashVar.declarations[0]?.init?.callee?.object?.callee?.name, 'sha256');
assert.equal(hashVar.declarations[0]?.init?.callee?.object?.arguments[0]?.value, 'passwords');
assert.equal(hashVar.declarations[0]?.init?.callee?.property?.loc?.identifierName, 'toString');
```

It should be right above your log to the console

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /const\s+hash[\s\S]*?toString\s*\(\s*\)\s*;?\s*console\s*\.\s*log/);
```

## 14

### --description--

Run the file again.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your terminal output should print `3049a1f8327e0215ea924b9e4e04cd4b0ff1800c74a536d9b81d3d8ced9994d3`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split(/\n/);
const lastOutput = splitOutput[splitOutput.length - 2];
assert.equal(lastOutput, '3049a1f8327e0215ea924b9e4e04cd4b0ff1800c74a536d9b81d3d8ced9994d3');
```

## 15

### --description--

The hash is completely different. Changing a single character in the input will completely change the output.

The input string can be any length. Change `passwords` to a concatenation of the `previousBlock.hash` and `JSON.stringify(transactions)` so your hash is created using information from the block you are mining.

### --tests--

You should have `const hash = sha256(previousBlock.hash + JSON.stringify(transactions)).toString();` right above your log to the console

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const hashVar = babelised.getVariableDeclarations().find(v => {
  return v.declarations[0]?.id?.name === 'hash';
});
const declarations = hashVar.declarations[0];
const callee = declarations.init?.callee;
const left = callee.object?.arguments[0]?.left;
const right = callee.object?.arguments[0]?.right;
assert.equal(hashVar.kind, 'const');
assert.equal(declarations.id?.name, 'hash');
assert.equal(callee.object?.callee?.name, 'sha256');
assert.equal(`${left.object?.name}.${left.property?.name}`, 'previousBlock.hash');
assert.equal(callee.object?.arguments[0]?.operator, '+');
assert.equal(`${right.callee?.object?.name}.${right.callee?.property?.name}(${right.arguments[0]?.name})`, 'JSON.stringify(transactions)');
assert.equal(callee.property?.loc?.identifierName, 'toString');
```

## 16

### --description--

Now the string you are passing to the function is potentially quite large because you are using everything in your `transactions.json` file. Run your `mine-block.js` file again.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your terminal output should include a 64 character hash

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split(/\n/);
const lastOutput = splitOutput[splitOutput.length - 2];
assert.match(lastOutput, /[a-zA-Z\d]{64}/);
```

## 17

### --description--

But it still gives a fixed length output. Use your `hash` variable as the `hash` value in your `newBlock` object.

### --tests--

Your `newBlock` variable should have a `hash` property that uses the `hash` variable as its value

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const newBlockVar = babelised.getVariableDeclarations().find(v => {
  return v.declarations[0]?.id?.name === 'newBlock';
});
const newBlockHashProp = newBlockVar.declarations[0]?.init?.properties.find(p => p.key?.name === 'hash');
assert.equal(newBlockHashProp.key?.name, 'hash');
assert.equal(newBlockHashProp.value?.name, 'hash');
```

## 18

### --description--

Uncomment the two places you where you write your files at the bottom that you commented out earlier.

### --tests--

You should have `writeBlockchain(blockchain);` in your file that is not commented out

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const writeBcCall = babelised.getExpressionStatements().find(e => {
  return e.expression?.callee?.name === 'writeBlockchain';
});
assert.equal(writeBcCall.expression?.callee?.name, 'writeBlockchain');
assert.equal(writeBcCall.expression?.arguments[0]?.name, 'blockchain');
```

You should have `writeTransactions([]);` in your file that is not commented out

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const writeTxCall = babelised.getExpressionStatements().find(e => {
  return e.expression?.callee?.name === 'writeTransactions';
});
assert.equal(writeTxCall.expression?.callee?.name, 'writeTransactions');
assert.isArray(writeTxCall.expression?.arguments[0]?.elements);
```

You should not have any comments in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
assert.lengthOf(babelised.parsedCode?.comments, 0);
```

## 19

### --description--

Open `transactions.json` and run `node add-transaction.js You Me 12` in the terminal to add a new transaction to your transaction pool.

### --tests--

You should run `node add-transaction.js You Me 12` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 12');
```

Your `transactions.json` file should be an array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[0]?.fromAddress, 'You');
assert.equal(fileContents[0]?.toAddress, 'Me');
assert.equal(fileContents[0]?.amount, 12);
```

## 20

### --description--

Open your `blockchain.json` file, scroll to the bottom, and mine a new block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with eleven blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 11);
```

The eleventh block should have a `hash` property that is a 64 character long string

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.lengthOf(fileContents[10].hash, 64);
```

## 21

### --description--

Now you are using an actual hash for new blocks that is created from the information in the block. Add a new transaction that sends `24` tokens from `You` to `Me`.

### --tests--

You should run `node add-transaction.js You Me 24` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 24');
```

Your `transactions.json` file should be an array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[0]?.fromAddress, 'You');
assert.equal(fileContents[0]?.toAddress, 'Me');
assert.equal(fileContents[0]?.amount, 24);
```

## 22

### --description--

Mine another block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with twelve blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 12);
```

The twelfth block should have a `hash` property that is a 64 character long string

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.lengthOf(fileContents[11].hash, 64);
```

## 23

### --description--

Each block will have a unique hash since the information used to create it will never be the same.

The process of mining a block is to keep changing the input of the hash function until you find a hash that fits a pattern you are looking for. A _nonce_ is used to do this. In your `mine-block.js file`, add a `let nonce` variable above your `hash` declaration that is set to `0` (zero/integer).

### --tests--

You should have `let nonce = 0;` in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const nonceVar = babelised.getVariableDeclarations().find(v => {
  return v.declarations[0]?.id?.name === 'nonce';
});
assert.equal(nonceVar.kind, 'let');
assert.equal(nonceVar.declarations[0]?.init?.value, 0);
```

It should be right above the `hash` declaration

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /let\s+nonce\s*=\s*0\s*;?\s*const\s+hash/);
```

## 24

### --description--

Add your `nonce` as the first part of the string used to create the hash. Also, change your `hash` declaration to use the `let` keyword.

### --tests--

You should have `let hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();` below your `nonce` declaration

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const hashVar = babelised.getVariableDeclarations().find(v => {
  return v.declarations[0]?.id?.name === 'hash';
});
const declarations = hashVar.declarations[0];
const callee = declarations.init?.callee;
const left = callee.object?.arguments[0]?.left;
const right = callee.object?.arguments[0]?.right;
assert.equal(hashVar.kind, 'let');
assert.equal(declarations.id?.name, 'hash');
assert.equal(callee.object?.callee?.name, 'sha256');
assert.equal(`${left.left?.name} ${left.operator} ${left.right?.object?.name}.${left.right?.property?.name} ${callee.object?.arguments[0]?.operator} ${right.callee?.object?.name}.${right.callee?.property?.name}(${right.arguments[0]?.name})`, "nonce + previousBlock.hash + JSON.stringify(transactions)");
assert.equal(callee.property?.loc?.identifierName, 'toString');
```

## 25

### --description--

You want your `hash` to start with a zero. Create a `while` loop that checks if `!hash.startsWith('0')` and put your `console.log` in the loop.

### --tests--

You should have `while (!hash.startsWith('0')) { }` below your `hash` declaration

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /let\s+hash[\s\S]*while\s*\(\s*!\s*hash\s*\.\s*startsWith\s*\(('|"|`)0\1\s*\)\s*\)\s*{/);
```

You should have `console.log(hash);` in your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /while[\s\S]*?{\s*console\s*\.\s*log\s*\(\s*hash\s*\)\s*;?\s*}/);
```

## 26

### --description--

If your initial hash starts with zero, you will not enter this loop. If it doesn't, you want to look for a new hash until it does. At the top of your loop, increment your `nonce` with the `++` operator.

### --tests--

You should have `nonce++;` at the top of your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const whileLoop = babelised.getType('WhileStatement');
const firstExpression = whileLoop[0].body?.body[0]?.expression;
assert.equal(`${firstExpression.argument?.name}${firstExpression.operator}`, 'nonce++');
```

## 27

### --description--

Below that, redefine your `hash` so that it creates a new hash using the same information as the original definition.

### --tests--

You should have `hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();` as the second expression your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const whileLoop = babelised.getType('WhileStatement');
const secondExp = whileLoop[0].body?.body[1]?.expression;
const callee = secondExp.right?.callee;
const left = callee.object?.arguments[0]?.left;
const right = callee.object?.arguments[0]?.right;
assert.equal(secondExp.left?.name, 'hash');
assert.equal(secondExp.operator, '=');
assert.equal(callee.object?.callee?.name, 'sha256');
assert.equal(`${left.left?.name} ${left.operator} ${left.right?.object?.name}.${left.right?.property?.name} ${callee.object?.arguments[0]?.operator} ${right.callee?.object?.name}.${right.callee?.property?.name}(${right.arguments[0]?.name})`, 'nonce + previousBlock.hash + JSON.stringify(transactions)');
```

## 28

### --description--

Change the log to the console so it prints `nonce = ${nonce}`. Use a template literal.

### --tests--

You should have ``console.log(`nonce = ${nonce}`);`` at the bottom of your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /while[\s\S]*?{[\s\S]*?console\s*\.\s*log\s*\(\s*`nonce = \${\s*nonce\s*}`\s*\)\s*;?\s*}/);
```

## 29

### --description--

Below that, add another log that prints the `hash` in the same fashion.

### --tests--

You should have ``console.log(`hash = ${hash}`)`` at the bottom of your while loop

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /while[\s\S]*?{[\s\S]*?console\s*\.\s*log\s*\(\s*`hash = \${\s*hash\s*}`\s*\)\s*;?\s*}/);
```

You should have two logs to the console in your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const whileLoop = babelised.getType('WhileStatement');
const logs = whileLoop[0].body?.body?.filter(it => it.expression?.callee?.object?.name === 'console' && it.expression?.callee?.property?.name === 'log'
);
assert.lengthOf(logs, 2);
```

## 30

### --description--

Comment out the two places you write to files at the bottom again.

### --tests--

You should have `// writeBlockchain(blockchain);` in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const comment = babelised.parsedCode?.comments?.find(c => {
  const commentString = c.value?.replace(/\s+/g, ' ').trim();
  return commentString.includes('writeBlockchain(blockchain)')
})
assert.include(comment.value, 'writeBlockchain(blockchain)');
```

You should have `// writeTransactions([]);` in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const comment = babelised.parsedCode?.comments?.find(c => {
  const commentString = c.value?.replace(/\s+/g, ' ').trim();
  return commentString.includes('writeTransactions([])')
})
assert.include(comment.value, 'writeTransactions([])');
```

## 31

### --description--

Run your file.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

The last line of your terminal output should print `hash = <hash>`, with `<hash>` being a hash that starts with one zero

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split(/\n/);
const lastOutput = splitOutput[splitOutput.length - 2];
assert.match(lastOutput, /^hash = 0/)
assert.lengthOf(lastOutput.split(' ')[2], 64);
```

## 32

### --description--

It went through your loop until it found a hash that starts with zero. The only difference when creating those values was the `nonce`, all the other info was the same.

Add a `const difficulty` variable above your loop. Give it a value of `2`.

### --tests--

You should have `const difficulty = 2` above your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /const\s+difficulty\s*=\s*2\s*;?\s*while/);
```

## 33

### --description--

In the condition of your `while` loop, add `.repeat(difficulty)` so that the hash needs to start with two zeros.

### --tests--

You should have `!hash.startsWith('0'.repeat(difficulty))` as your `while` loop condition

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /while\s*\(\s*!\s*hash\s*\.\s*startsWith\s*\(('|"|`)0\1\s*\.\s*repeat\s*\(\s*difficulty\s*\)\s*\)\s*\)\s*{/);
```

## 34

### --description--

Run your file again.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

The last line of your terminal output should print `hash = <hash>`, with `<hash>` being a hash that starts with two zeros

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split(/\n/);
const lastOutput = splitOutput[splitOutput.length - 2];
assert.match(lastOutput, /^hash = 00/)
assert.lengthOf(lastOutput.split(' ')[2], 64);
```

## 35

### --description--

That one took more tries since it's harder to find a hash that starts with two zeros. Change the `difficulty` to `3`.

### --tests--

You should have `const difficulty = 3;` above your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /const\s+difficulty\s*=\s*3\s*;?\s*while/);
```

## 36

### --description--

This one may take a little longer. In order to not overload your computer, move the two logs to the console below your `while` loop.

### --tests--

You should not have any `console.log` statements in your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const whileLoop = babelised.getType('WhileStatement');
const logs = whileLoop[0].body?.body?.filter(it => it.expression?.callee?.object?.name === 'console' && it.expression?.callee?.property?.name === 'log'
);
assert.lengthOf(logs, 0);
```

You should have ``console.log(`nonce = ${nonce}`)`` below your while loop

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /while[\s\S]*?{[\s\S]*?}\s*console\s*\.\s*log\s*\(\s*`nonce = \${\s*nonce\s*}`\s*\)/);
```

You should have ``console.log(`hash = ${hash}`)`` below the other log

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /console[\s\S]*?\${\s*nonce\s*}`\)\s*;?\s*console\s*\.\s*log\s*\(\s*`hash = \${\s*hash\s*}`\s*\)/);
```

## 37

### --description--

Run the file again.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

The last line of your terminal output should print `hash = <hash>`, with `<hash>` being a hash that starts with three zeros

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split(/\n/);
const lastOutput = splitOutput[splitOutput.length - 2];
assert.match(lastOutput, /^hash = 000/)
assert.lengthOf(lastOutput.split(' ')[2], 64);
```

## 38

### --description--

That one should have taken quite a few more tries. It runs a lot faster when you don't log each try. Change your `difficulty` to `4`.

### --tests--

You should have `const difficulty = 4;` above your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /const\s+difficulty\s*=\s*4\s*;?\s*while/);
```

## 39

### --description--

At the time of writing this, the `hash` for a block on a popular blockchain needs to start with 19 zeros, and takes trillions of guesses to find a `nonce` that will produce a correct hash. Run `node mine-block.js` again. This one will take a little longer.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

The last line of your terminal output should print `hash = <hash>`, with `<hash>` being a hash that starts with four zeros

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split(/\n/);
const lastOutput = splitOutput[splitOutput.length - 2];
assert.match(lastOutput, /^hash = 0000/)
assert.lengthOf(lastOutput.split(' ')[2], 64);
```

## 40

### --description--

This is how the proof of work consensus method for adding blocks to a blockchain works. If you have a `nonce` that will produce the `hash` needed, it proves that you have spent computing power needed to find it.

Add the `nonce` property and value to your `newBlock`.

### --tests--

You should have a `nonce` property in the `newBlock` object set to the value of `nonce`

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const newBlock = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'newBlock');
const nonce = newBlock.declarations[0]?.init?.properties?.find(p => p.key?.name === 'nonce');
assert.equal(nonce.key?.name, 'nonce');
assert.equal(nonce.value?.name, 'nonce');
```

## 41

### --description--

Because proof of work takes a lot of resources to find the nonce, the person that finds it is rewarded. Add a `const rewardTransaction` below your `newBlock` object, set it to an empty object literal.

### --tests--

You should have `const rewardTransaction = {}` below your `newBlock` object

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /newBlock\s*=\s*{[\s\S]*?}\s*const\s+rewardTransaction\s*=\s*{\s*}/);
```

## 42

### --description--

Add a `fromAddress` property to your new object. The reward transaction will add new tokens to your blockchain and won't have a sender, so set the value to `null`.

### --tests--

Your `rewardTransaction` object should have a `fromAddress: null` as the first property

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const rewardTx = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'rewardTransaction');
const fromAddress = rewardTx.declarations[0]?.init?.properties?.find(p => p.key.name === 'fromAddress');
assert.equal(fromAddress.key?.name, 'fromAddress');
assert.equal(fromAddress.value?.type, 'NullLiteral')
```

## 43

### --description--

Since you are the only person here mining blocks, give it a `toAddress` property set to `Me`.

### --tests--

Your `rewardTransaction` object should have a `toAddress: 'Me'` property

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const rewardTx = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'rewardTransaction');
const toAddress = rewardTx.declarations[0]?.init?.properties[1];
assert.equal(toAddress.key?.name, 'toAddress');
assert.equal(toAddress.value?.value, 'Me')
```

## 44

### --description--

Add an `amount` of `50` to the object for the reward amount.

### --tests--

Your `rewardTransaction` object should have an `amount: 50` as the third property in `rewardTransaction`

```js
await new Promise(res => setTimeout(res, 1000));
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const rewardTx = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'rewardTransaction');
const amount = rewardTx.declarations[0]?.init?.properties[2];
assert.equal(amount.key?.name, 'amount');
assert.equal(amount.value?.value, 50)
```

## 45

### --description--

Uncomment the two places where you write to files.

### --tests--

You should have `writeBlockchain(blockchain);` in your file that is not commented out

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const writeBcCall = babelised.getExpressionStatements().find(e => {
  return e.expression?.callee?.name === 'writeBlockchain';
});
assert.equal(writeBcCall.expression.callee.name, 'writeBlockchain');
assert.equal(writeBcCall.expression.arguments[0].name, 'blockchain');
```

You should have `writeTransactions([]);` in your file that is not commented out

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const writeTxCall = babelised.getExpressionStatements().find(e => {
  return e.expression?.callee?.name === 'writeTransactions';
});
assert.equal(writeTxCall.expression?.callee?.name, 'writeTransactions');
assert.isArray(writeTxCall.expression?.arguments[0]?.elements);
assert.lengthOf(writeTxCall.expression?.arguments[0]?.elements, 0);
```

You should not have any comments in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
assert.lengthOf(babelised.parsedCode.comments, 0);
```

## 46

### --description--

Change where you write the `transactions.json` file so it writes an array with your reward transaction as the only item.

### --tests--

You should have `writeTransaction([rewardTransaction])` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const writeTxCall = babelised.getExpressionStatements().find(e => {
  return e.expression?.callee?.name === 'writeTransactions';
});
assert.lengthOf(writeTxCall.expression?.arguments[0]?.elements, 1);
assert.equal(writeTxCall.expression?.arguments[0]?.elements[0]?.name, 'rewardTransaction');
```

## 47

### --description--

Lastly, change the difficulty of mining blocks back to `2` so it doesn't take too long to mine a block.

### --tests--

You should have `const difficulty = 2` in your `mine-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.match(fileContents, /const\s+difficulty\s*=\s*2\s*;?\s*while/);
```

## 48

### --description--

You will add more validation later that verifies all the block hashes, making your existing blocks invalid. So you need to re-initialize your blockchain. First, open your `init-blockchain.js` file and import the `writeTransactions` function at the top next to the other import.

### --tests--

You should have `import { writeBlockchain, writeTransactions } from 'blockchain-helpers.js';` at the top of your `init-blockchain.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/init-blockchain.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const writeTx = imports[0]?.specifiers?.find(s => s.imported?.name === 'writeTransactions');
assert.equal(writeTx.imported?.name, 'writeTransactions');
assert.equal(writeTx.local?.name, 'writeTransactions');
assert.equal(imports[0]?.source?.value, './blockchain-helpers.js')
```

## 49

### --description--

At the bottom of the file, use the function to write an empty array to your `transactions.json` file.

### --tests--

You should have `writeTransactions([])` at the bottom of your `init-blockchain.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/init-blockchain.js');
assert.match(fileContents, /writeTransactions\s*\(\s*\[\s*\]\s*\)\s*;?\s*$/);
```

## 50

### --description--

Run your command to re-initialize your blockchain.

### --tests--

You should run `node init-blockchain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node init-blockchain.js');
```

Your `blockchain.json` file should be an array with one block (object), the genesis block

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

Your `transactions.json` file should be an empty array

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 0);
```

## 51

### --description--

Your blockchain should only have the genesis block again, and the transaction pool should be empty. Open your `transactions.json` so you can see it, and use the terminal to add a transaction that sends `12` tokens from `You` to `Me`.

### --tests--

You should run `node add-transaction.js You Me 12` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 12');
```

Your `transactions.json` file should be an array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[0]?.fromAddress, 'You');
assert.equal(fileContents[0]?.toAddress, 'Me');
assert.equal(fileContents[0]?.amount, 12);
```

## 52

### --description--

Add another one, using the same two addresses, but send `16` tokens this time.

### --tests--

You should run `node add-transaction.js You Me 16` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 16');
```

Your `transactions.json` file should be an array with two transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[1]?.fromAddress, 'You');
assert.equal(fileContents[1]?.toAddress, 'Me');
assert.equal(fileContents[1]?.amount, 16);
```

## 53

### --description--

Open your `blockchain.json` file, I recommend keeping it open next to the `transactions.json` file so you can see both. Then, mine a new block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with two blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

The second block should have a `hash` that starts with two zeros

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.property(fileContents[1], 'hash');
assert.match(fileContents[1].hash, /^00/);
```

The block should have a `nonce`

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.property(fileContents[1], 'nonce');
```

Your `transactions.json` file should be an array with one transaction (object), the reward transaction

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[0]?.fromAddress, null);
assert.equal(fileContents[0]?.toAddress, 'Me');
assert.equal(fileContents[0]?.amount, 50);
```

## 54

### --description--

Your new block has a `hash` that starts with two zeros, and the `nonce` used to create it is included in the block, it should be `1191`. Also, a reward transaction was added to the transaction pool. It will be added to the blockchain when the next block is mined. Add a transaction that sends `20` tokens from `You` to `Me`

### --tests--

You should run `node add-transaction.js You Me 20` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 20');
```

Your `transactions.json` file should be an array with two transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[1]?.fromAddress, 'You');
assert.equal(fileContents[1]?.toAddress, 'Me');
assert.equal(fileContents[1]?.amount, 20);
```

## 55

### --description--

Mine another block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with three blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 3);
```

The third block should have a `hash` that starts with two zeros

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.property(fileContents[2], 'hash');
assert.match(fileContents[2].hash, /^00/);
```

The block should have a `nonce`

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.property(fileContents[2], 'nonce');
```

## 56

### --description--

This is fun. Add another transaction that sends `10` tokens from `You` to `Me`.

### --tests--

You should run `node add-transaction.js You Me 10` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 10');
```

Your `transactions.json` file should be an array with two transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[1]?.fromAddress, 'You');
assert.equal(fileContents[1]?.toAddress, 'Me');
assert.equal(fileContents[1]?.amount, 10);
```

## 57

### --description--

Mine another block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with four blocks (object)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 4);
```

The fourth block should have a `hash` that starts with two zeros

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.property(fileContents[3], 'hash');
assert.match(fileContents[3].hash, /^00/);
```

The block should have a `nonce`

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.property(fileContents[3], 'nonce');
```

## 58

### --description--

You are getting it. Remove the two `console.log` statements in your block mining file.

### --tests--

You should not have any `console.log` statements in your `mine-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/mine-block.js');
assert.notMatch(fileContents, /console/);
```

## 59

### --description--

Now, you need to make it so your blockchain validates all the hash values. Open your `blockchain-helpers.js` file, and import the `sha256` function at the top of the file like you did in your `mine-block.js` file.

### --tests--

You should have `import sha256 from 'crypto-js/sha256.js';` at the top of your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain-helpers.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const sha256Import = imports.find(i => i.specifiers[0]?.local?.name === 'sha256');
assert.equal(sha256Import.specifiers[0]?.local?.name, 'sha256');
assert.equal(sha256Import.source?.value, 'crypto-js/sha256.js')
```

## 60

### --description--

The `isValidChain` function is getting a little big. Add a few comments to help keep track of what is happening. Above the `for` loop, add `loop through blocks` as a single line comment.

### --tests--

You should have `// loop through blocks` above the `for` loop in the `isValidChain` function of your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain-helpers.js?update=${Date.now()}`));
const babelised = await __helpers.babeliser(isValidChain.toString());
const bc = babelised.getVariableDeclarations().find(v => {
  return v.declarations[0]?.id?.name === 'blockchain';
});
assert.equal(bc.trailingComments[0]?.value?.trim(), 'loop through blocks');
```

## 61

### --description--

Add another one that says `validate previous hash` above your `if` statement.

### --tests--

You should have `// validate previous hash` above your `if` statement

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain-helpers.js?update=${Date.now()}`));
assert.match(isValidChain.toString(), /\/\/\s*validate\s+previous\s+hash\s+if/)
```

## 62

### --description--

Add one more that says `validate block hash` below the `if` statement, and inside the `for` loop.

### --tests--

You should have `// validate block hash` below your `if` statement

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain-helpers.js?update=${Date.now()}`));
assert.match(isValidChain.toString(), /\/\/\s*validate\s+block\s+hash\s*}\s*return\s+true\s*;?\s*}/)
```

## 63

### --description--

In order to validate the hash of each block, you need all the information used to create it. Where you get the `previousHash` from the current block, also destruct the `nonce`, `hash`, and `transactions` from it.

### --tests--

You should destruct `nonce` from `blockchain[i]` in your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain-helpers.js?update=${Date.now()}`));
const babelised = await __helpers.babeliser(isValidChain.toString());
const vars = babelised.getVariableDeclarations();
const props = vars[3].declarations[0].id.properties;
const prop = props.find(p => p.key?.name === 'nonce');
assert.equal(prop.key?.name, 'nonce');
```

You should destruct `hash` from `blockchain[i]` in your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain-helpers.js?update=${Date.now()}`));
const babelised = await __helpers.babeliser(isValidChain.toString());
const vars = babelised.getVariableDeclarations();
const props = vars[3].declarations[0].id.properties;
const prop = props.find(p => p.key?.name === 'hash');
assert.equal(prop.key?.name, 'hash');
```

You should destruct `transactions` from `blockchain[i]` in your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain-helpers.js?update=${Date.now()}`));
const babelised = await __helpers.babeliser(isValidChain.toString());
const vars = babelised.getVariableDeclarations();
const props = vars[3].declarations[0].id.properties;
const prop = props.find(p => p.key?.name === 'transactions');
assert.equal(prop.key?.name, 'transactions');
```

You should destruct `previousHash` from `blockchain[i]` in your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain-helpers.js?update=${Date.now()}`));
const babelised = await __helpers.babeliser(isValidChain.toString());
const vars = babelised.getVariableDeclarations();
const props = vars[3].declarations[0].id.properties;
const prop = props.find(p => p.key?.name === 'previousHash');
assert.equal(prop.key?.name, 'previousHash');
```

## 64

### --description--

Now you need to recreate the `hash` and see if matches the actual hash. Below your `validate block hash` comment, create a `const testBlockHash` variable that creates a hash using the `sha256` function in the same way that the hash is created when you mine the block.

Here's a reminder of the syntax: `sha256(<content>).toString();`. The content should be a concatenation of the `nonce`, the `hash` of the previous block, and a stringified version of `transactions`.

### --tests--

You should have `const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();` below your `validate block hash` comment

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain-helpers.js?update=${Date.now()}`));
const babelised = await __helpers.babeliser(isValidChain.toString());
const vars = babelised.getVariableDeclarations();
const testHash = vars.find(v => v.declarations[0]?.id?.name === 'testBlockHash');
const callee = testHash.declarations[0].init?.callee;
const left = callee.object?.arguments[0]?.left;
const right = callee.object?.arguments[0]?.right;
assert.equal(testHash.kind, 'const');
assert.equal(testHash.declarations[0].id?.name, 'testBlockHash');
assert.equal(callee.object?.callee?.name, 'sha256');
assert.equal(`${left.left?.name} ${left.operator} ${left.right?.object?.name}.${left.right?.property?.name} ${callee.object?.arguments[0]?.operator} ${right.callee?.object?.name}.${right.callee?.property?.name}(${right.arguments[0]?.name})`, 'nonce + previousBlock.hash + JSON.stringify(transactions)');
assert.equal(callee.property?.name, 'toString');
```

## 65

### --description--

You have recreated the hash using the same info. Below that, add an empty `if` condition that checks if the `hash` of the current block is not equal (`!=`) to the recreated hash.

### --tests--

You should have `if (hash != testBlockHash) { }` at the bottom of your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain-helpers.js?update=${Date.now()}`));
assert.match(isValidChain.toString(), /testBlockHash[\s\S]*?toString\s*\(\s*\)\s*;?\s*if\s*\(\s*hash\s*!==?\s*testBlockHash\s*\)\s*{\s*}\s*}\s*return\s+true\s*;?\s*}/);
```

## 66

### --description--

If the hashes don't match, return `false`.

### --tests--

You should have `return false;` in the `if` condition for when the block hashes don't match

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain-helpers.js?update=${Date.now()}`));
assert.match(isValidChain.toString(), /if\s*\(\s*hash\s*!==?\s*testBlockHash\s*\)\s*{\s*return\s+false\s*;?\s*}\s*}\s*return\s+true\s*;?\s*}/);
```

## 67

### --description--

Use the terminal to see if your chain is valid.
run `node validate-chain.js`

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
```

The terminal output should log `Chain is valid`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Chain is valid/);
```

## 68

### --description--

All your blocks are valid. In your `blockchain.json` file, that last block should have a `nonce` of `135`. Change it to `130`. If you have a different `nonce`, you can reset the step to get back on track.

### --tests--

The `nonce` of the fourth block in `blockchain.json` should be `130`

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.property(fileContents[3], 'nonce');
assert.equal(fileContents[3].nonce, 130);
```

## 69

### --description--

Run the validation command again.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
```

The terminal output should log `Chain is not valid`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Chain is not valid/);
```

## 70

### --description--

The validation didn't work because one block didn't have correct `nonce` needed to recreate the hash. Change the `nonce` back to `135` so your chain is valid again.

### --tests--

The `nonce` of the fourth block in `blockchain.json` should be `135`.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.property(fileContents[3], 'nonce');
assert.equal(fileContents[3].nonce, 135);
```

## 71

### --description--

Validate it one more time.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
```

The terminal output should log `Chain is valid`. If it's not, reset the step and try again

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Chain is valid/);
```

## 72

### --description--

Awesome. Transactions also include a unique hash, you will add that next. Open your `add-transaction.js` file and import the `sha256` function at the top.

### --tests--

You should have `import sha256 from 'crypto-js/sha256.js';` at the top of your `add-transaction.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/add-transaction.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const sha256Import = imports.find(i => i.specifiers[0]?.local?.name === 'sha256');
assert.equal(sha256Import.specifiers[0]?.local?.name, 'sha256');
assert.equal(sha256Import.source?.value, 'crypto-js/sha256.js');
```

## 73

### --description--

Above your `newTransaction` declaration, create a `const hash` variable that creates a hash using a concatenation of the `fromAddress`, `toAddress`, and `amount`. Here's a reminder of the syntax: `sha256(<content>).toString();`.

### --tests--

You should have `const hash = sha256(fromAddress + toAddress + amount).toString();` in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/add-transaction.js');
const babelised = await __helpers.babeliser(fileContents);
const hashVar = babelised.getVariableDeclarations().find(v => {
  return v.declarations[0]?.id?.name === 'hash';
});
const callee = hashVar.declarations[0].init.callee;
const left = callee.object.arguments[0].left;
const right = callee.object.arguments[0].right;
assert.equal(hashVar.kind, 'const');
assert.equal(hashVar.declarations[0]?.id?.name, 'hash');
assert.equal(callee.object?.callee?.name, 'sha256');
assert.equal(hashVar.kind, 'const');
assert.equal(`${left.left?.name} ${left.operator} ${left.right?.name} ${callee.object?.arguments[0]?.operator} ${right.name}`, 'fromAddress + toAddress + amount');
assert.equal(callee.property?.name, 'toString');
```

Your `hash` variable should be between the `amount` and `newTransactions` declarations

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/add-transaction.js');
assert.match(fileContents, /amount[\s\S]*?const\s+hash[\s\S]*?newTransaction/);
```

## 74

### --description--

Add a `hash` property to the `newTransaction` object.

### --tests--

Your `newTransaction` object should have a `hash` as the first property with the `hash` variable as the value

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/add-transaction.js');
const babelised = await __helpers.babeliser(fileContents);
const newTx = babelised.getVariableDeclarations().find(v => {
  return v.declarations[0]?.id?.name === 'newTransaction';
});
const prop = newTx.declarations[0]?.init?.properties[0];

assert.equal(prop.key?.name, 'hash');
assert.equal(prop.value?.name, 'hash');
```

## 75

### --description--

You will need to validate these as well, so re-initialize your blockchain again.

### --tests--

You should run `node init-blockchain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node init-blockchain.js');
```

Your `blockchain.json` file should be an array with one block (object), the genesis block

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

Your `transactions.json` file should be an empty array

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 0);
```

## 76

### --description--

Open your two JSON files so you can see both of them. Then, add a transaction that sends `15` tokens from `You` to `Me`.

### --tests--

You should run `node add-transaction.js You Me 15` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 15');
```

Your `transactions.json` file should be an array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[0]?.fromAddress, 'You');
assert.equal(fileContents[0]?.toAddress, 'Me');
assert.equal(fileContents[0]?.amount, 15);
```

## 77

### --description--

The transaction now includes its own unique hash created from the information in the transaction. Add another one that sends `25` tokens using the same two addresses.

### --tests--

You should run `node add-transaction.js You Me 25` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 25');
```

Your `transactions.json` file should be an array with two transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[1]?.fromAddress, 'You');
assert.equal(fileContents[1]?.toAddress, 'Me');
assert.equal(fileContents[1]?.amount, 25);
```

## 78

### --description--

Mine a block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with two blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

## 79

### --description--

Add a transaction that sends `5` tokens from `You` to `Me`.

### --tests--

You should run `node add-transaction.js You Me 5` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 5');
```

Your `transactions.json` file should be an array with two transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[1]?.fromAddress, 'You');
assert.equal(fileContents[1]?.toAddress, 'Me');
assert.equal(fileContents[1]?.amount, 5);
```

## 80

### --description--

Add another one that sends `10` tokens using the same two addresses.

### --tests--

You should run `node add-transaction.js You Me 10` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 10');
```

Your `transactions.json` file should be an array with three transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 3);
```

The third transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[2]?.fromAddress, 'You');
assert.equal(fileContents[2]?.toAddress, 'Me');
assert.equal(fileContents[2]?.amount, 10);
```

## 81

### --description--

Mine another block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with three blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 3);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

## 82

### --description--

Now there's hashes everywhere. Next, you will validate all the transaction hashes. In your `blockchain-helpers.js` function, find the `isValidChain` function again and add a `loop over transactions` comment at the bottom of the `for` loop so you can go through all the transactions in each block.

### --tests--

You should have `// loop over transactions` at the bottom of your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 83

### --description--

Below the comment, add an empty `for` loop, similar to the one used for looping over the blocks. Use `let j = 0` to initialize the loop, and have it go while `j < transactions.length`.

### --tests--

You should have `for (let j = 0; j < transactions.length; j++) { }` below your `loop over transactions` comment

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 84

### --description--

In your loop, destruct the only four properties from the current transaction.

### --tests--

You should have `const { fromAddress, toAddress, amount, hash } = transactions[j];` at the top of your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 85

### --description--

Below that, add a `don't validate reward transactions` comment.

### --tests--

You should have `// don't validate reward transactions` at the bottom of your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 86

### --description--

The `fromAddress` is `null` for reward transactions, so add an `if (fromAddress)` statement that is empty for now.

### --tests--

You should have `if (fromAddress) { }` below your `don't validate reward transaction` comment

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 87

### --description--

Add a `validate transaction hash` comment in your `if` statement.

### --tests--

You should have `// validate transaction hash` in your `if (fromAddress)` statement

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 88

### --description--

Below the new comment, add a `const testTransactionHash` variable that creates new hash in the same way the hash was created when the transaction was added.

### --tests--

You should have `const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();` below your `validate transaction hash` comment

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 89

### --description--

Next, add an empty `if` condition that checks if the hash of the current transactions is not equal to the recreated hash.

### --tests--

You should have `if (hash != testTransactionHash) { }` below your `testTransactionHash` declaration

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 90

### --description--

If the hashes don't match, return `false`.

### --tests--

You should have `return false;` in the `if` condition for when the transaction hashes don't match

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 91

### --description--

Validate your chain.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
```

The terminal output should log `Chain is valid`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Chain is valid/);
```

## 92

### --description--

It looks like it's working. In the `blockchain.json` file, change the `amount` of the most recent transaction to `1000`.

### --tests--

The most recent transaction in your blockchain should have an `amount` of `1000`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 93

### --description--

Validate your chain again.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
```

The terminal output should log `Chain is not valid`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Chain is not valid/);
```

## 94

### --description--

The transaction hash isn't valid because someone tampered with a transaction amount. Change the amount back to `10`.

### --tests--

The most recent transaction in your blockchain should have an `amount` of `10`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 95

### --description--

Validate your chain again to make sure it's valid.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
```

The terminal output should log `Chain is valid`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('validate-chain.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Chain is valid/);
```

## 96

### --description--

There's one more thing to do here, make it so you can't send transactions unless you have enough tokens. In the `blockchain-helpers.js` file, export a new `getAddressBalance` function. Have it accept an `address` parameter, and leave the function empty for now.

### --tests--

You should have `export function getAddressBalance(address) { }` in your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 97

### --description--

In the new function, create a `const blockchain` variable set to the blockchain.

### --tests--

You should have `const blockchain = getBlockchain();` in your `getAddressBalance` function

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 98

### --description--

Create a `let balance` variable that is set to `0` (zero/integer).

### --tests--

You should have `let balance = 0;` at the bottom of your `getAddressBalance` function

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 99

### --description--

To find a balance, you need to loop over all the blocks and transactions, see if any of transaction addresses match the address passed to the function, and add or subtract the amount. Add a `loop over blocks` comment below your `balance` variable.

### --tests--

You should have a `// loop over blocks` comment at the bottom of your `getAddressBalance` function

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 100

### --description--

You know the genesis block doesn't have any transactions, so create a `for` loop that goes through all except the first block. Give it the same structure as the other loop that goes over the blocks.

### --tests--

You should have `for (let i = 1; i < blockchain.length; i++) { }` at the bottom of your `getAddressBalance` function

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 101

### --description--

You only need to see all the transactions. So, in the `for` loop, destruct `transactions` from the current block like you did in the validation function.

### --tests--

You should have `const { transactions } = blockchain[i];` in your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 102

### --description--

Below that, add a `loop over transactions` comment.

### --tests--

You should have `// loop over transactions` at the bottom of your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 103

### --description--

Add another `for` loop that loops over the transactions. Give it the same structure you used in the validation function.

### --tests--

You should have `for (let j = 0; j < transactions.length; j++) { }` at the bottom of your loop that goes over the blocks

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 104

### --description--

You only need the addresses and the amount from the current transaction, so destruct everything but the `hash` from current transaction.

### --tests--

You should have `const { fromAddress, toAddress, amount } = transactions[j];` in your loop that goes over the transactions

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 105

### --description--

Add an empty `if` condition that checks if the `fromAddress` equals the address passed to the function.

### --tests--

You should have `if (fromAddress === address) { }` at the bottom of your transaction loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 106

### --description--

This is for if the address is sending their tokens to someone. So in the `if` statement, use `-=` to subract the `amount` from `balance`.

### --tests--

You should have `balance -= amount;` in your `if` statement

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 107

### --description--

Next, add another `if` statement that checks if the address is receiving the tokens.

### --tests--

You should have `if (toAddress === address) { }` at the bottom of your transaction loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 108

### --description--

In the statement, use `+=` to add the `amount` to the `balance`.

### --tests--

You should have `balance += amount;` in the new `if` statement

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 109

### --description--

After you have gone through all the blocks, return the `balance`.

### --tests--

You should have `return balance;` at the bottom of your `getAddressBalance` function

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 110

### --description--

Create a `get-address-balance.js` file so you can run this on the command line.

### --tests--

You should have a `get-address-balance.js` file in your project folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm');
assert.include(folder, 'get-address-balance.js');
```

## 111

### --description--

Open the new file and import your `getAddressBalance` function from the helpers file.

### --tests--

You should have `const { getAddressBalance } = require('./blockchain-helpers.js');` in your `get-address-balance.js` function.

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 112

### --description--

Below that, create a `const nameOfAddress` variable that is set to the first command line argument (`process.argv[2]`).

### --tests--

You should have `const nameOfAddress = process.argv[2];` at the bottom of your `get-address-balance.js` file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 113

### --description--

Below that, create a `const balance` variable. Use the `getAddressBalance` function to set the value to the balance of the address passed through the command line.

### --tests--

You should have `const balance = getAddressBalance(nameOfAddress);` at the bottom of your `get-address-balance.js` file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 114

### --description--

Use a template literal to log `The balance for <nameOfAddress> is <balance>` to the console.

### --tests--

You should have ``console.log(`The balance for ${nameOfAddress} is ${balance}`);`` at the bottom of your `get-address-balance.js` file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 115

### --description--

Time to see if it works. In the terminal, run your file to see a balance and pass it `Me` as a parameter.

### --tests--

You should run `node get-address-balance.js Me` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node get-address-balance.js Me');
```

The terminal output should include `The balance for Me is 105`. If it doesn't reset the step and try again

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 116

### --description--

It looks like it works. `Me` has a balance of `105`. Note that the transaction pool is not currently included when finding a balance. Next, check the balance of `You`.

### --tests--

You should run `node get-address-balance.js You` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node get-address-balance.js You');
```

The terminal should output `The balance for You is -55`. If it doesn't reset the step and try again

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 117

### --description--

`You` has a negative balance. That shouldn't be allowed. At the top of your `add-transaction.js` file, import the `getAddressBalance` function with the rest of the imported helper functions.

### --tests--

You should import `getAddressBalance` at the top of `add-transaction.js` with the rest of the imports

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 118

### --description--

You only want to add the transaction if the `fromAddress` has enough funds. Above where you `push` the new transaction, create a `const addressBalance` variable and set the value to the balance of the `fromAddress`.

### --tests--

You should have `const addressBalance = getAddressBalance(fromAddress);` above `transactions.push(newTransaction);`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 119

### --description--

Below that, add an `if` statement that checks if the balance is greater than or equal to the amount they are trying to send. Put the `transactions.push` and `writeTransactions` lines in it.

### --tests--

You should have an `if (addressBalance >= amount)` as the last block of code in your file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

`transactions.push(newTransaction);` should be the first line in the `if` statement

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

`writeTransactions(transactions);` should be the second line in the `if` statement

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 120

### --description--

Add an `else` area to the `if` statement. Log `You do not have enough funds to make that transaction` to the console if the address doesn't have enough to make the transaction.

### --tests--

You should have `else { console.log('You do not have enough funds to make that transaction'); }` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 121

### --description--

The people using your blockchain have been sending tokens they don't have. Re-initialize it one more time.

### --tests--

You should run `node init-blockchain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node init-blockchain.js');
```

Your `blockchain.json` file should be an array with one block (object), the genesis block

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

Your `transactions.json` file should be an empty array

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 0);
```

## 122

### --description--

Try to add a transaction that sends `45` tokens from `Me` to `You`.

### --tests--

You should run `node add-transaction.js Me You 45` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js You Me 45');
```

The terminal should output `You do not have enough funds to make that transaction`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an empty array

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 0);
```

## 123

### --description--

Use the terminal to check the balance of `Me`.

### --tests--

You should run `node get-address-balance.js Me` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node get-address-balance.js Me');
```

The terminal should output `The balance for Me is 0`. If it doesn't reset the step and try again

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 124

### --description--

Check the balance of `You`.

### --tests--

You should run `node get-address-balance.js You` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node get-address-balance.js You');
```

The terminal should output `The balance for You is 0`. If it doesn't reset the step and try again

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 125

### --description--

No tokens exist on your blockchain since you re-intialized it and nobody has any tokens. Mine a block to add a reward transaction.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with two blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.equal(fileContents[0]?.fromAddress, null);
assert.equal(fileContents[0]?.toAddress, 'Me');
assert.equal(fileContents[0]?.amount, 50);
```

## 126

### --description--

The transaction pool isn't included when checking a balance. Mine another block to add the reward transaction and the first tokens to your blockchain.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with three blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 3);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-proof-of-work-consensus-by-building-a-block-mining-algorithm/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

## --fcc-end--
