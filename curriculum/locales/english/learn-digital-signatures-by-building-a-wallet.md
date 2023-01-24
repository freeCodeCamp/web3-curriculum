# Web3 - Learn Digital Signatures by Building a Wallet

## 1

### --description--

For this project, you will work in the `learn-digital-signatures-by-building-a-wallet` folder. Open a bash terminal and use `cd` to change into it.

If the tests don't pass, close any open **bash** terminals, open a new one, and run the command again.

### --tests--

You should use the change directory (`cd`) command in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*cd/);
```

You should be in the `learn-digital-signatures-by-building-a-wallet` folder in your terminal

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'learn-digital-signatures-by-building-a-wallet');
```

## 2

### --description--

In the previous courses, you created a blockchain, learned how blocks are mined, and how hashes are created and used. Your blockchain is still in the `blockchain.json` file and the transactions are in `transactions.json`. For a quick recap, run `node get-address-balance.js Me` in the terminal to check the balance for the account.

### --tests--

You should run `node get-address-balance.js Me` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node get-address-balance.js Me');
```

The terminal output should include `The balance for Me is 60`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('get-address-balance.js Me');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /The balance for Me is 60/);
```

## 3

### --description--

That account has `60` tokens. Open your `transactions.json` file, so you can see the transaction pool, and run `node add-transaction.js Me You 35` to create a new transaction.

### --tests--

You should run `node add-transaction.js Me You 35` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js Me You 35');
```

Your `transactions.json` file should be an array with three transactions (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 3);
```

The third transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.equal(fileContents[2]?.fromAddress, 'Me');
assert.equal(fileContents[2]?.toAddress, 'You');
assert.equal(fileContents[2]?.amount, 35);
```

## 4

### --description--

The transaction includes the hashes you added in the last course. Open your `blockchain.json` file alongside the transactions file, scroll to the bottom of it, and run `node mine-block.js` to mine a new block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with five blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 5);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": null,
    "toAddress": "Me",
    "amount": 50
  },
  {
    "hash": "187116b5a916e63287cdb275a2e6cab646fde335639f820a0e4531ad444ea7b8",
    "fromAddress": "Me",
    "toAddress": "I",
    "amount": 5
  },
  {
    "hash": "73c77ed36802dc96e50c9da7632e38c842fc316ec16595b7b57a8ce4ac0d21ef",
    "fromAddress": "Me",
    "toAddress": "You",
    "amount": 35
  }
]
```

## 5

### --description--

Blocks include the hash and nonce you added. Run `node validate-chain.js` to make sure all the info on your blockchain is valid.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
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
    "hash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "nonce": 39,
    "previousHash": "0",
    "transactions": []
  },
  {
    "hash": "00c23c20fec7b56b1f9701c07387d8f501e1901b467ca414e2a4d23712dd845f",
    "nonce": 930,
    "previousHash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "Me",
        "amount": 50
      }
    ]
  },
  {
    "hash": "006d0fd2f22fbb1701fc4c90f2ee5ea032092da5cb26bff259b9fce552ac8cf9",
    "nonce": 40,
    "previousHash": "00c23c20fec7b56b1f9701c07387d8f501e1901b467ca414e2a4d23712dd845f",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "Me",
        "amount": 50
      },
      {
        "hash": "35e19e0b0532e0073d20125e2818c5751507c63feb5954726e4c101e27752a12",
        "fromAddress": "Me",
        "toAddress": "You",
        "amount": 40
      }
    ]
  },
  {
    "hash": "00104e870bdd0e00b90d92b172f3d8cca5d565d269f361b0b1080a66a8d07482",
    "nonce": 27,
    "previousHash": "006d0fd2f22fbb1701fc4c90f2ee5ea032092da5cb26bff259b9fce552ac8cf9",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "Me",
        "amount": 50
      },
      {
        "hash": "187116b5a916e63287cdb275a2e6cab646fde335639f820a0e4531ad444ea7b8",
        "fromAddress": "Me",
        "toAddress": "I",
        "amount": 5
      },
      {
        "hash": "73c77ed36802dc96e50c9da7632e38c842fc316ec16595b7b57a8ce4ac0d21ef",
        "fromAddress": "Me",
        "toAddress": "You",
        "amount": 35
      }
    ]
  }
]
```

#### --"transactions.json"--

```js
[
  {
    "fromAddress": null,
    "toAddress": "Me",
    "amount": 50
  }
]
```

## 6

### --description--

For this project, you will add a command to generate wallets and use the wallet addresses for the transactions on your blockchain. First, create a `generate-wallet.js` file.

### --tests--

`generate-wallet.js` should exist in your `learn-digital-signatures-by-building-a-wallet` directory

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-digital-signatures-by-building-a-wallet');
assert.include(folder, 'generate-wallet.js');
```

## 7

### --description--

Each wallet address will have a keypair that consists of a public and private key. The public key will be a persons address and used for transactions. Run `npm install elliptic` in the terminal. This package will help you generate and work with these keys.

### --tests--

You should run `npm install elliptic` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'npm install elliptic');
```

### --seed--

#### --"generate-wallet.js"--

```js

```

## 8

### --description--

Open your `generate-wallet.js` file, and import `EC` from `elliptic` at the top. `EC` stands for "elliptic curve". You don't need to know much about it for this, but they are the set of solutions for a mathematical equation of a certain type.

### --tests--

You should have `import EC from 'elliptic';` at the top of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const myImport = imports?.find(i => i.source?.value === 'elliptic');
const ecImport = myImport?.specifiers?.find(s => s.local?.name === 'EC');
assert.equal(ecImport?.local?.name, 'EC');
```

## 9

### --description--

Below that, create a new `const ec` variable, and set it to `new EC.ec('p192');`. `p192` is the type of elliptic curve you will use to generate the keys for your wallets.

### --tests--

You should have `const ec = new EC.ec('p192');` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s*ec\s*=\s*new\s+EC\s*\.\s*ec\s*\(\s*('|"|`)p192\1\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

```

## 10

### --description--

A keypair is generated using information from the graph of the elliptic curve. Create keypair by adding a `const keyPair` variable and setting it to `ec.genKeyPair()`.

### --tests--

You should have `const keyPair = ec.genKeyPair();` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+keyPair\s*=\s*ec\s*\.\s*genKeyPair\s*\(\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');

```

## 11

### --description--

Get the public key from your keypair, in hex format, by creating a `const publicKey` variable and setting the value to `keyPair.getPublic('hex')`.

### --tests--

You should have `const publicKey = keyPair.getPublic('hex');` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+publicKey\s*=\s*keyPair\s*\.\s*getPublic\s*\(\s*('|"|`)hex\1\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();

```

## 12

### --description--

Create a `const privateKey` variable and use the `getPrivate` method on your keypair to get the private key in hex format, similar to how you got the public key.

### --tests--

You should have `const privateKey = keyPair.getPrivate('hex');` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+privateKey\s*=\s*keyPair\s*\.\s*getPrivate\s*\(\s*('|"|`)hex\1\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');

```

## 13

### --description--

Now, you've extracted the two keys from the keypair. Below that, add a log to the console that prints `Public Key: <publicKey>` using a template literal.

### --tests--

You should have ``console.log(`Public Key: ${publicKey}`);`` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /console\s*\.\s*log\s*\(\s*`Public Key: \${\s*publicKey\s*}`\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

```

## 14

### --description--

Add another log to print the private key in the same fashion so you can see what the keys look like.

### --tests--

You should have ``console.log(`Private Key: ${privateKey}`);`` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /console\s*\.\s*log\s*\(\s*`Private Key: \${\s*privateKey\s*}`\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);

```

## 15

### --description--

Run `node generate-wallet.js` to see what happens.

### --tests--

You should run `node generate-wallet.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node generate-wallet.js');
```

The terminal output should include `Public Key:` and `Private Key:`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Public Key:/);
assert.match(lastOutput, /Private Key:/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

```

## 16

### --description--

You can see your two keys in the console. You can freely share your public key, but you need to keep your private key a secret. You can create a new keypair when you know one of the two keys. Create a `const keyPair2` variable and set the value to `ec.keyFromPrivate(privateKey, 'hex')` to generate a keypair using the private key.

### --tests--

You should have `const keyPair2 = ec.keyFromPrivate(privateKey, 'hex');` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+keyPair2\s*=\s*ec\s*\.\s*keyFromPrivate\s*\(\s*privateKey\s*,\s*('|"|`)hex\1\s*\)\s*;?\s*$/);
```

## 17

### --description--

Extract the public key from `keyPair2`, like you did for the first keypair, into a `const publicKey2` variable.

### --tests--

You should have `const publicKey2 = keyPair2.getPublic('hex');` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+publicKey2\s*=\s*keyPair2\s*\.\s*getPublic\s*\(\s*('|"|`)hex\1\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPrivate(privateKey, 'hex');

```

## 18

### --description--

Add a log that prints `Public Key 2: <publicKey2>` using a template literal.

### --tests--

You should have ``console.log(`Public Key 2: ${publicKey2}`);`` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /console\s*\.\s*log\s*\(\s*`Public Key 2: \${\s*publicKey2\s*}`\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPrivate(privateKey, 'hex');
const publicKey2 = keyPair2.getPublic('hex');

```

## 19

### --description--

Below that, create a `const privateKey2` variable and set the value to the private key of `keyPair2`.

### --tests--

You should have `const privateKey2 = keyPair2.getPrivate('hex');` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+privateKey2\s*=\s*keyPair2\s*\.\s*getPrivate\s*\(\s*('|"|`)hex\1\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPrivate(privateKey, 'hex');
const publicKey2 = keyPair2.getPublic('hex');

console.log(`Public Key 2: ${publicKey2}`);

```

## 20

### --description--

Add another log to print `privateKey2` like you did with `publicKey2`

### --tests--

You should have ``console.log(`Private Key 2: ${privateKey2}`);`` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /console\s*\.\s*log\s*\(\s*`Private Key 2: \${\s*privateKey2\s*}`\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPrivate(privateKey, 'hex');
const publicKey2 = keyPair2.getPublic('hex');

console.log(`Public Key 2: ${publicKey2}`);

const privateKey2 = keyPair2.getPrivate('hex');

```

## 21

### --description--

Run your file.

### --tests--

You should run `node generate-wallet.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node generate-wallet.js');
```

The terminal output should include `Public Key:`, `Private Key:`, `Public Key 2:`, and `Private Key 2:`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Public Key:/);
assert.match(lastOutput, /Private Key:/);
assert.match(lastOutput, /Public Key 2:/);
assert.match(lastOutput, /Private Key 2:/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPrivate(privateKey, 'hex');
const publicKey2 = keyPair2.getPublic('hex');

console.log(`Public Key 2: ${publicKey2}`);

const privateKey2 = keyPair2.getPrivate('hex');

console.log(`Private Key 2: ${privateKey2}`);

```

## 22

### --description--

The keys match. Using the private key to generate `keyPair2`, you are able to easily find the matching public key. Change your `keyPair2` declaration to use the `keyFromPublic` method and pass it the `publicKey`.

### --tests--

You should have `const keyPair2 = ec.keyFromPublic(publicKey, 'hex');` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+keyPair2\s*=\s*ec\s*\.\s*keyFromPublic\s*\(\s*publicKey\s*,\s*('|"|`)hex\1\s*\)\s*;?/);
```

## 23

### --description--

Run the file again.

### --tests--

You should run `node generate-wallet.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node generate-wallet.js');
```

The terminal output should print `Cannot read properties of null`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 2];
assert.match(lastOutput, /Cannot read properties of null/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPublic(publicKey, 'hex');
const publicKey2 = keyPair2.getPublic('hex');

console.log(`Public Key 2: ${publicKey2}`);

const privateKey2 = keyPair2.getPrivate('hex');

console.log(`Private Key 2: ${privateKey2}`);

```

## 24

### --description--

It gave you an error. This is the importance of the elliptic curve algorithm used to create the keys and why you need to keep your private key a secret. When using the public key to generate a keypair, you cannot easily find the matching private key. But if you know the private key, you can easily find the matching public key. Delete your last two console log statements, and the `publickKey2` and `privateKey2` declarations.

### --tests--

You should have `const keyPair2 = ec.keyFromPublic(publicKey, 'hex');` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+keyPair2\s*=\s*ec\s*\.\s*keyFromPublic\s*\(\s*publicKey\s*,\s*('|"|`)hex\1\s*\)\s*;?\s*$/);
```

You should only have two console log statements

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const e = babelised.getExpressionStatements().filter(e => e.expression?.callee?.object?.name === 'console' && e.expression?.callee?.property?.name === 'log');
assert.lengthOf(e, 2);
```

You should not have a `publicKey2` variable

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const v = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'publicKey2');
assert.isUndefined(v);
```

You should not have a `privateKey2` variable

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const v = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'privateKey2');
assert.isUndefined(v);
```

## 25

### --description--

In a blockchain, your private key is needed to sign transactions. Add a `const signature` variable, and set it to `keyPair.sign('message')`

### --tests--

You should have `const signature = keyPair.sign('message');` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+signature\s*=\s*keyPair\s*\.\s*sign\s*\(\s*('|"|`)message\1\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPublic(publicKey, 'hex');

```

## 26

### --description--

Add `.toDER('hex')` to the signature declaration to turn it into a readable format.

### --tests--

You should have `const signature = keyPair.sign('message').toDER('hex');` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+signature\s*=\s*keyPair\s*\.\s*sign\s*\(\s*('|"|`)message\1\s*\)\s*\.\s*toDER\s*\(\s*('|"|`)hex\2\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPublic(publicKey, 'hex');
const signature = keyPair.sign('message');

```

## 27

### --description--

Below that, log `Signature: <signature>` to the console using a template literal.

### --tests--

You should have ``console.log(`Signature: ${signature}`);`` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /console\s*\.\s*log\s*\(\s*`Signature: \${\s*signature\s*}`\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPublic(publicKey, 'hex');
const signature = keyPair.sign('message').toDER('hex');

```

## 28

### --description--

Run the file again.

### --tests--

You should run `node generate-wallet.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node generate-wallet.js');
```

The terminal output should include `Public Key:`, `Private Key:`, and `Signature:`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Public Key:/);
assert.match(lastOutput, /Private Key:/);
assert.match(lastOutput, /Signature:/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPublic(publicKey, 'hex');
const signature = keyPair.sign('message').toDER('hex');

console.log(`Signature: ${signature}`);

```

## 29

### --description--

Now you have used the generated keypair to sign a piece of information. Add a `const verifiedSignature` variable and set the value to `keyPair.verify('message', signature)` to verify that the signature.

### --tests--

You should have `const verifiedSignature = keyPair.verify('message', signature);` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+verifiedSignature\s*=\s*keyPair\s*\.\s*verify\s*\(\s*('|"|`)message\1\s*,\s*signature\s*\)\s*;?\s*$/);
```

## 30

### --description--

That will use the signature and keypair to make sure that the information was signed by someone with the private key of the keypair. Log `Verified: <verifiedSignature>` to the console using a template literal.

### --tests--

You should have ``console.log(`Verified: ${verifiedSignature}`);`` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /console\s*\.\s*log\s*\(\s*`Verified: \${\s*verifiedSignature\s*}`\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPublic(publicKey, 'hex');
const signature = keyPair.sign('message').toDER('hex');

console.log(`Signature: ${signature}`);

const verifiedSignature = keyPair.verify('message', signature);

```

## 31

### --description--

Run the file again.

### --tests--

You should run `node generate-wallet.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node generate-wallet.js');
```

The terminal output should include `Public Key:`, `Private Key:`, `Signature:`, and `Verified: true`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Public Key:/);
assert.match(lastOutput, /Private Key:/);
assert.match(lastOutput, /Signature:/);
assert.match(lastOutput, /Verified: true/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPublic(publicKey, 'hex');
const signature = keyPair.sign('message').toDER('hex');

console.log(`Signature: ${signature}`);

const verifiedSignature = keyPair.verify('message', signature);

console.log(`Verified: ${verifiedSignature}`);

```

## 32

### --description--

The same keypair was used to sign and verify the information, so the signature is valid. Change the `keyPair.sign` to use `keyPair2`.

### --tests--

You should have `const signature = keyPair2.sign('message').toDER('hex');` in your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+signature\s*=\s*keyPair2\s*\.\s*sign\s*\(\s*('|"|`)message\1\s*\)\s*\.\s*toDER\s*\(\s*('|"|`)hex\2\s*\)\s*;?/);
```

## 33

### --description--

Run the file again.

### --tests--

You should run `node generate-wallet.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node generate-wallet.js');
```

The terminal output should print `Cannot read properties of null`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 2];
assert.match(lastOutput, /Cannot read properties of null/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPublic(publicKey, 'hex');
const signature = keyPair2.sign('message').toDER('hex');

console.log(`Signature: ${signature}`);

const verifiedSignature = keyPair.verify('message', signature);

console.log(`Verified: ${verifiedSignature}`);

```

## 34

### --description--

This time you got an error because the keypair used to sign the information was created using the public key. That keypair doesn't know the private key so it couldn't sign the information. Change the signature back to use the first keypair.

### --tests--

You should have `const signature = keyPair.sign('message').toDER('hex');` in your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+signature\s*=\s*keyPair\s*\.\s*sign\s*\(\s*('|"|`)message\1\s*\)\s*\.\s*toDER\s*\(\s*('|"|`)hex\2\s*\)\s*;?/);
```

## 35

### --description--

Change the line where you verify the signature to use `keyPair2`.

### --tests--

You should have `const verifiedSignature = keyPair2.verify('message', signature);` in your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+verifiedSignature\s*=\s*keyPair2\s*\.\s*verify\s*\(\s*('|"|`)message\1\s*,\s*signature\s*\)\s*;?/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPublic(publicKey, 'hex');
const signature = keyPair.sign('message').toDER('hex');

console.log(`Signature: ${signature}`);

const verifiedSignature = keyPair.verify('message', signature);

console.log(`Verified: ${verifiedSignature}`);

```

## 36

### --description--

Run the file again.

### --tests--

You should run `node generate-wallet.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node generate-wallet.js');
```

The terminal output should include `Public Key:`, `Private Key:`, `Signature:`, and `Verified: true`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Public Key:/);
assert.match(lastOutput, /Private Key:/);
assert.match(lastOutput, /Signature:/);
assert.match(lastOutput, /Verified: true/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPublic(publicKey, 'hex');
const signature = keyPair.sign('message').toDER('hex');

console.log(`Signature: ${signature}`);

const verifiedSignature = keyPair2.verify('message', signature);

console.log(`Verified: ${verifiedSignature}`);

```

## 37

### --description--

It worked that time using the keypair generated from the public key. In order to verify a signature, you can use a keypair that doesn't know the private key. So when you sign a transaction with your private key, the blockchain can use your public key to make sure someone with that private key created the transaction. Change the last `message` to `messages`.

### --tests--

You should have `const verifiedSignature = keyPair2.verify('messages', signature);` in your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+verifiedSignature\s*=\s*keyPair2\s*\.\s*verify\s*\(\s*('|"|`)messages\1\s*,\s*signature\s*\)\s*;?/);
```

## 38

### --description--

Run the file again.

### --tests--

You should run `node generate-wallet.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node generate-wallet.js');
```

The terminal output should include `Public Key:`, `Private Key:`, `Signature:`, and `Verified: false`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Public Key:/);
assert.match(lastOutput, /Private Key:/);
assert.match(lastOutput, /Signature:/);
assert.match(lastOutput, /Verified: false/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const keyPair2 = ec.keyFromPublic(publicKey, 'hex');
const signature = keyPair.sign('message').toDER('hex');

console.log(`Signature: ${signature}`);

const verifiedSignature = keyPair2.verify('messages', signature);

console.log(`Verified: ${verifiedSignature}`);

```

## 39

### --description--

Lastly, when the information signed doesn't match, the signature will not be verified. Delete everything from the `keyPair2` declaration and below.

### --tests--

You should have ``console.log(`Private Key: ${privateKey}`);`` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /console\s*\.\s*log\s*\(\s*`Private Key: \${\s*privateKey\s*}`\s*\)\s*;?\s*$/);
```

You should only have two console log statements

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const e = babelised.getExpressionStatements().filter(e => e.expression?.callee?.object?.name === 'console' && e.expression?.callee?.property?.name === 'log');
assert.lengthOf(e, 2);
```

You should not have a `keyPair2` variable

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const v = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'keyPair2');
assert.isUndefined(v);
```

You should not have a `signature` variable

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const v = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'signature');
assert.isUndefined(v);
```

You should not have a `verifiedSignature` variable

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const v = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'verifiedSignature');
assert.isUndefined(v);
```

## 40

### --description--

Enough playing around. Lets generate the wallets. Create a `wallets.json` file to store the wallets.

### --tests--

`wallets.json` should exist in your `learn-digital-signatures-by-building-a-wallet` directory

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-digital-signatures-by-building-a-wallet');
assert.include(folder, 'wallets.json');
```

### --seed--

#### --"generate-wallet.js"--

```js
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

```

## 41

### --description--

Open your new file and add an empty JSON object to it.

### --tests--

You should have `{}` in your `wallets.json` file

```js
await new Promise(res => setTimeout(res, 1000));
const wallets = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/wallets.json');
assert.deepEqual(wallets, {});
```

### --seed--

#### --"wallets.json"--

```js

```

## 42

### --description--

At the top of the generate wallet file, import `{ readFileSync }` from the `fs` module so you can write new wallets to the file.

### --tests--

You should have `import { readFileSync } from 'fs';` at the top of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const myImport = imports?.find(i => i.source?.value === 'fs');
assert.equal(myImport?.specifiers[0]?.imported?.name, 'readFileSync');
```

### --seed--

#### --"wallets.json"--

```js
{}
```

## 43

### --description--

You will give your wallet a name through the command line when you create it. At the bottom of the file, add a `const newWalletName` variable and set it to the command line argument (`process.argv[2]`).

### --tests--

You should have `const newWalletName = process.argv[2]` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+newWalletName\s*=\s*process\s*\.\s*argv\s*\[\s*2\s*\]\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import { readFileSync } from 'fs';
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

```

## 44

### --description--

At the bottom of the file, add a `const walletsFile` variable that uses the `readFileSync` method to read the content of the wallets file. Use `./wallets.json` as the path.

### --tests--

You should have `const walletsFile = readFileSync('./wallets.json');` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /const\s+walletsFile\s*=\s*readFileSync\s*\(\s*('|"|`)(\.\/)?wallets\.json\1\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import { readFileSync } from 'fs';
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const newWalletName = process.argv[2];

```

## 45

### --description--

Below that, use `let` to create a `wallets` variable. Use `JSON.parse` to set the value to the parsed content of the `walletsFile` variable.

### --tests--

You should have `let wallets = JSON.parse(walletsFile);` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /let\s+wallets\s*=\s*JSON\s*\.\s*parse\s*\(\s*walletsFile\s*\)\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import { readFileSync } from 'fs';
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const newWalletName = process.argv[2];
const walletsFile = readFileSync('./wallets.json');

```

## 46

### --description--

You only want to add a new wallet if the name doesn't already exist. Add an empty `if` condition that checks if the `wallets` variable doesn't have a property of the `newWalletName`. Use the `hasOwnProperty` method.

### --tests--

You should have `if (!wallets.hasOwnProperty(newWalletName)) {}` at the bottom of your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
assert.match(fileContents, /if\s*\(\s*!\s*wallets\s*\.\s*hasOwnProperty\s*\(\s*newWalletName\s*\)\s*\)\s*{\s*}\s*;?\s*$/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import { readFileSync } from 'fs';
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const newWalletName = process.argv[2];
const walletsFile = readFileSync('./wallets.json');
let wallets = JSON.parse(walletsFile);

```

## 47

### --description--

The public key for a wallet will be used as the address for where transactions are sent and received. In the `if` condition, add the new name as a key in the `wallets` object. Set the value to the public key.

### --tests--

You should have `wallets[newWalletName] = publicKey;` in your `if` statement

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const i = babelised.getType('IfStatement');
const code = babelised?.generateCode(i[0]);
assert.match(code, /{\s*wallets\[newWalletName\] = publicKey;\s*}/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import { readFileSync } from 'fs';
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const newWalletName = process.argv[2];
const walletsFile = readFileSync('./wallets.json');
let wallets = JSON.parse(walletsFile);

if (!wallets.hasOwnProperty(newWalletName)) {

}

```

## 48

### --description--

You added the new wallet address, now you need to stringify the wallets and write that back to the file. Within the `if` statement, use `JSON.stringify(wallets, null, 2)` to redefine the `wallets` variable.

### --tests--

You should have `wallets = JSON.stringify(wallets, null, 2);` at the bottom of your `if` statement

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const i = babelised.getType('IfStatement');
const code = babelised?.generateCode(i[0]);
assert.match(code, /wallets = JSON\.stringify\(wallets, null, 2\);\s*}/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import { readFileSync } from 'fs';
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const newWalletName = process.argv[2];
const walletsFile = readFileSync('./wallets.json');
let wallets = JSON.parse(walletsFile);

if (!wallets.hasOwnProperty(newWalletName)) {
  wallets[newWalletName] = publicKey;

}

```

## 49

### --description--

At the top of the file, import the `writeFileSync` function from the `fs` module with the other function so you can write your wallets to the file.

### --tests--

You should import `{ writeFileSync }` from `fs` at the top of your `generate-wallet.js` file with the other import

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const myImport = imports?.find(i => i.source?.value === 'fs');
const i = myImport?.specifiers?.find(s => s.imported?.name === 'writeFileSync');
assert.equal(i.imported?.name, 'writeFileSync');
```

### --seed--

#### --"generate-wallet.js"--

```js
import { readFileSync } from 'fs';
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const newWalletName = process.argv[2];
const walletsFile = readFileSync('./wallets.json');
let wallets = JSON.parse(walletsFile);

if (!wallets.hasOwnProperty(newWalletName)) {
  wallets[newWalletName] = publicKey;
  wallets = JSON.stringify(wallets, null, 2);

}

```

## 50

### --description--

Finally, use the `writeFileSync` method to write the wallets back to the `wallets.json` file at the bottom of the `if` statement.

### --tests--

You should have `writeFileSync('./wallets.json', wallets);` at the bottom of your `if` statement

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const i = babelised.getType('IfStatement');
const code = babelised?.generateCode(i[0]);
assert.match(code, /writeFileSync\(('|"|`)(\.\/)?wallets\.json\1\s*,\s*wallets\s*\);\s*}/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import { readFileSync, writeFileSync } from 'fs';
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const newWalletName = process.argv[2];
const walletsFile = readFileSync('./wallets.json');
let wallets = JSON.parse(walletsFile);

if (!wallets.hasOwnProperty(newWalletName)) {
  wallets[newWalletName] = publicKey;
  wallets = JSON.stringify(wallets, null, 2);

}

```

## 51

### --description--

Make sure you have your `wallets.json` file open and run `node generate-wallet.js Me` in the terminal to create a wallet for `Me`

### --tests--

You should run `node generate-wallet.js Me` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node generate-wallet.js Me');
```

You should have a key of `Me` in the `wallets.json` file with a public key for its value

```js
await new Promise(res => setTimeout(res, 1000));
const wallets = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/wallets.json');
assert.containsAllKeys(wallets, 'Me');
assert.match(wallets.Me, /\w{20,}/);
```

The terminal output should print `Private Key: <privateKey>`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Private Key: \w{20,}/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import { readFileSync, writeFileSync } from 'fs';
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

console.log(`Public Key: ${publicKey}`);
console.log(`Private Key: ${privateKey}`);

const newWalletName = process.argv[2];
const walletsFile = readFileSync('./wallets.json');
let wallets = JSON.parse(walletsFile);

if (!wallets.hasOwnProperty(newWalletName)) {
  wallets[newWalletName] = publicKey;
  wallets = JSON.stringify(wallets, null, 2);
  writeFileSync('./wallets.json', wallets);
}

```

## 52

### --description--

Do not clear the terminal. `Me` was added to the file with the public key as the address. Create a `my-private-keys.txt` file to store the private keys.

### --tests--

`my-private-keys.txt` should exist in your `learn-digital-signatures-by-building-a-wallet` directory

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-digital-signatures-by-building-a-wallet');
assert.include(folder, 'my-private-keys.txt');
```

### --seed--

#### --"wallets.json"--

```js
{
  "Me": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7"
}
```

## 53

### --description--

Copy the **private key** for `Me` from the terminal output and paste it into the `my-private-keys.txt` file with `Me` in front of it like this: `Me: <privateKey>`

### --tests--

You should have `Me: <private_key>` in your `my-private-keys.txt` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/my-private-keys.txt');
assert.match(fileContents, /Me: \w{20,}\s*$/);
```

### --seed--

#### --"my-private-keys.txt"--

```js

```

## 54

### --description--

Make sure you can see your `wallets.json` file and then create another wallet for `You`.

### --tests--

You should run `node generate-wallet.js You` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node generate-wallet.js You');
```

You should have a key of `You` in the `wallets.json` file with a public key for its value

```js
await new Promise(res => setTimeout(res, 1000));
const wallets = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/wallets.json');
assert.containsAllKeys(wallets, 'You');
assert.match(wallets.You, /\w{20,}/);
```

The terminal output should print `Private Key: <privateKey>`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /Private Key: \w{20,}/);
```

### --seed--

#### --"my-private-keys.txt"--

```js
Me: 56a4c0f54522352f4dc9331fda43b39187e14fe721f374a7

```

## 55

### --description--

Copy and paste the private key for `You` to the `my-private-keys.txt` in the same way that you did for `Me`.

### --tests--

You should have `You: <private_key>` at the bottom of your `my-private-keys.txt` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/my-private-keys.txt');
assert.match(fileContents, /You: \w{20,}\s*$/);
```

### --seed--

#### --"wallets.json"--

```js
{
  "Me": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
  "You": "04344c7ef2b078982b55b6fa537adb62eb184bf80ef9ec629b17443cf920fe0d80ebc9681945485e60bf8f29e0b86f7b26"
}
```

## 56

### --description--

In the generate wallet file, remove the two console log statements and the `privateKey` declaration.

### --tests--

You should not have any console log statements in your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const e = babelised.getExpressionStatements().filter(e => e.expression?.callee?.object?.name === 'console' && e.expression?.callee?.property?.name === 'log');
assert.lengthOf(e, 0);
```

You should not have a `privateKey` variable in your `generate-wallet.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/generate-wallet.js');
const babelised = await __helpers.babeliser(fileContents);
const v = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'privateKey');
assert.isUndefined(v);
```

### --seed--

#### --"my-private-keys.txt"--

```js
Me: 56a4c0f54522352f4dc9331fda43b39187e14fe721f374a7
You: 6dc681959dd899231786a3cdce51af7cb547859d56425536
```

## 57

### --description--

Make sure you can see the `wallets.json` file and create another wallet for `Fred`.

### --tests--

You should run `node generate-wallet.js Fred` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node generate-wallet.js Fred');
```

You should have a key of `Fred` in the `wallets.json` file with a public key for its value

```js
await new Promise(res => setTimeout(res, 1000));
const wallets = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/wallets.json');
assert.containsAllKeys(wallets, 'Fred');
assert.match(wallets.Fred, /\w{20,}/);
```

### --seed--

#### --"generate-wallet.js"--

```js
import { readFileSync, writeFileSync } from 'fs';
import EC from 'elliptic';

const ec = new EC.ec('p192');
const keyPair = ec.genKeyPair();
const publicKey = keyPair.getPublic('hex');

const newWalletName = process.argv[2];
const walletsFile = readFileSync('./wallets.json');
let wallets = JSON.parse(walletsFile);

if (!wallets.hasOwnProperty(newWalletName)) {
  wallets[newWalletName] = publicKey;
  wallets = JSON.stringify(wallets, null, 2);
  writeFileSync('./wallets.json', wallets);
}

```

## 58

### --description--

This time, you don't get to see the private key, but you can still see the public one in the wallets file. Create one more wallet for `Wilma`.

### --tests--

You should run `node generate-wallet.js Wilma` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node generate-wallet.js Wilma');
```

You should have a key of `Wilma` in the `wallets.json` file with a public key for its value

```js
await new Promise(res => setTimeout(res, 1000));
const wallets = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/wallets.json');
assert.containsAllKeys(wallets, 'Wilma');
assert.match(wallets.Wilma, /\w{20,}/);
```

### --seed--

#### --"wallets.json"--

```js
{
  "Me": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
  "You": "04344c7ef2b078982b55b6fa537adb62eb184bf80ef9ec629b17443cf920fe0d80ebc9681945485e60bf8f29e0b86f7b26",
  "Fred": "048d078b667b7510393131f003386bd0df2e8ad14c817c6390e24835fd102fe2b7c61f985ca8b51a3dfacc4c2933642d2a"
}
```

## 59

### --description--

Imagine these two wallets as not yours. You will be able to send transactions to their addresses, but not from them since you don't know their private keys. Next, you will make it easier to work with these addresses. Open your `blockchain-helpers.js` file and export a new `getWalletAddressFromName` function that takes `name` as an argument. Keep the function empty for now.

### --tests--

You should have `export function getWalletAddressFromName(name) {}` in your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const { getWalletAddressFromName } = (await import(`../../learn-digital-signatures-by-building-a-wallet/blockchain-helpers.js?update=${Date.now()}`));
assert.isFunction(getWalletAddressFromName);
const babelised = await __helpers.babeliser(getWalletAddressFromName.toString());
assert.equal(babelised?.parsedCode?.program?.body[0]?.params[0]?.name, 'name');
```

### --seed--

#### --"wallets.json"--

```js
{
  "Me": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
  "You": "04344c7ef2b078982b55b6fa537adb62eb184bf80ef9ec629b17443cf920fe0d80ebc9681945485e60bf8f29e0b86f7b26",
  "Fred": "048d078b667b7510393131f003386bd0df2e8ad14c817c6390e24835fd102fe2b7c61f985ca8b51a3dfacc4c2933642d2a",
  "Wilma": "04a6dfb947014ecc2f355d837deb7558ccbc69882ca05505936fdd8d37317b7268320390c8b99f06e5286aedfc1597f5aa"
}
```

## 60

### --description--

At the top of the new function, create a `const walletsFile` variable that uses `readFileSync` to read the wallets.

### --tests--

You should have `const walletsFile = readFileSync('./wallets.json');` at the top of your `getWalletAddressFromName` function

```js
await new Promise(res => setTimeout(res, 1000));
const { getWalletAddressFromName } = (await import(`../../learn-digital-signatures-by-building-a-wallet/blockchain-helpers.js?update=${Date.now()}`));
const babelised = await __helpers.babeliser(getWalletAddressFromName.toString());
const code = babelised?.generateCode(babelised?.parsedCode);
assert.match(code, /const walletsFile = readFileSync\(('|"|`)(\.\/)?wallets\.json\1\);/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import sha256 from 'crypto-js/sha256.js';
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

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, nonce, previousHash, transactions } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return false;
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
    if (hash != testBlockHash) {
      return false;
    }

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { hash, fromAddress, toAddress, amount } = transactions[j];

      // don't validate reward transactions
      if (fromAddress !== null) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (hash != testTransactionHash) {
          return false;
        }

      }
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

export function getAddressBalance(address) {
  const blockchain = getBlockchain();
  let balance = 0;

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) { 
    const { transactions } = blockchain[i];

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j];

      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }

  return balance;
}

export function getWalletAddressFromName(name) {

}

```

## 61

### --description--

Below that, create a `const wallets` variable that parses the file into JSON.

### --tests--

You should have `const wallets = JSON.parse(walletsFile);` at the bottom of your `getWalletAddressFromName` function

```js
await new Promise(res => setTimeout(res, 1000));
const { getWalletAddressFromName } = (await import(`../../learn-digital-signatures-by-building-a-wallet/blockchain-helpers.js?update=${Date.now()}`));
const babelised = await __helpers.babeliser(getWalletAddressFromName.toString());
const code = babelised?.generateCode(babelised?.parsedCode);
assert.match(code, /const wallets = JSON\.parse\(walletsFile\);\s*}/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import sha256 from 'crypto-js/sha256.js';
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

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, nonce, previousHash, transactions } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return false;
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
    if (hash != testBlockHash) {
      return false;
    }

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { hash, fromAddress, toAddress, amount } = transactions[j];

      // don't validate reward transactions
      if (fromAddress !== null) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (hash != testTransactionHash) {
          return false;
        }

      }
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

export function getAddressBalance(address) {
  const blockchain = getBlockchain();
  let balance = 0;

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) { 
    const { transactions } = blockchain[i];

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j];

      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }

  return balance;
}

export function getWalletAddressFromName(name) {
  const walletsFile = readFileSync('./wallets.json');

}

```

## 62

### --description--

Finally, use the `name` variable to return the public key (address) of the wallet passed to the function.

### --tests--

You should have `return wallets[name];` at the bottom of your `getWalletAddressFromName` function

```js
await new Promise(res => setTimeout(res, 1000));
const { getWalletAddressFromName } = (await import(`../../learn-digital-signatures-by-building-a-wallet/blockchain-helpers.js?update=${Date.now()}`));
const babelised = await __helpers.babeliser(getWalletAddressFromName.toString());
const code = babelised?.generateCode(babelised?.parsedCode);
console.log(code);
assert.match(code, /return wallets\[name\];\s*}/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import sha256 from 'crypto-js/sha256.js';
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

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, nonce, previousHash, transactions } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return false;
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
    if (hash != testBlockHash) {
      return false;
    }

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { hash, fromAddress, toAddress, amount } = transactions[j];

      // don't validate reward transactions
      if (fromAddress !== null) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (hash != testTransactionHash) {
          return false;
        }

      }
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

export function getAddressBalance(address) {
  const blockchain = getBlockchain();
  let balance = 0;

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) { 
    const { transactions } = blockchain[i];

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j];

      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }

  return balance;
}

export function getWalletAddressFromName(name) {
  const walletsFile = readFileSync('./wallets.json');
  const wallets = JSON.parse(walletsFile);

}

```

## 63

### --description--

Now you have a function for getting a wallet address from a name. Create a `get-address.js` file.

### --tests--

`get-address.js` should exist in your `learn-digital-signatures-by-building-a-wallet` directory

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory('learn-digital-signatures-by-building-a-wallet');
assert.include(folder, 'get-address.js');
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import sha256 from 'crypto-js/sha256.js';
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

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, nonce, previousHash, transactions } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return false;
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
    if (hash != testBlockHash) {
      return false;
    }

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { hash, fromAddress, toAddress, amount } = transactions[j];

      // don't validate reward transactions
      if (fromAddress !== null) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (hash != testTransactionHash) {
          return false;
        }

      }
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

export function getAddressBalance(address) {
  const blockchain = getBlockchain();
  let balance = 0;

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) { 
    const { transactions } = blockchain[i];

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j];

      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }

  return balance;
}

export function getWalletAddressFromName(name) {
  const walletsFile = readFileSync('./wallets.json');
  const wallets = JSON.parse(walletsFile);
  return wallets[name];
}

```

## 64

### --description--

At the top of the new file, import your `getWalletAddressFromName` function.

### --tests--

You should have `import { getWalletAddressFromName } from './blockchain-helpers.js';` at the top of your `get-address.js` file 

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/get-address.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const myImport = imports?.find(i => i.source?.value === './blockchain-helpers.js');
assert.equal(myImport?.specifiers[0]?.imported?.name, 'getWalletAddressFromName');
```

### --seed--

#### --"get-address.js"--

```js

```

## 65

### --description--

Below that, create a `const addressName` variable that is the command line argument.

### --tests--

You should have `const addressName = process.argv[2];` at the bottom of your `get-address.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/get-address.js');
assert.match(fileContents, /const\s+addressName\s*=\s*process\s*\.\s*argv\s*\[\s*2\s*\]\s*;?\s*$/);
```

### --seed--

#### --"get-address.js"--

```js
import { getWalletAddressFromName } from './blockchain-helpers.js';

```

## 66

### --description--

Next, create a `const address` variable uses your function to set it to the wallet address of the command line argument.

### --tests--

You should have `const address = getWalletAddressFromName(addressName)` at the bottom of your `get-address.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/get-address.js');
assert.match(fileContents, /const\s+address\s*=\s*getWalletAddressFromName\s*\(\s*addressName\s*\)\s*;?\s*$/);
```

### --seed--

#### --"get-address.js"--

```js
import { getWalletAddressFromName } from './blockchain-helpers.js';

const addressName = process.argv[2];

```

## 67

### --description--

At the bottom of the file, log `The public address for <name> is <publicKey>` using a template literal.

### --tests--

You should have ``console.log(`The public address for ${addressName} is ${address}`)`` at the bottom of your `get-address.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/get-address.js');
assert.match(fileContents, /console\s*\.\s*log\s*\(\s*`The public address for \${\s*addressName\s*} is \${\s*address\s*}`\s*\)\s*;?\s*$/);
```

### --seed--

#### --"get-address.js"--

```js
import { getWalletAddressFromName } from './blockchain-helpers.js';

const addressName = process.argv[2];
const address = getWalletAddressFromName(addressName);

```

## 68

### --description--

Run your file and get the public address for `Me`.

### --tests--

You should run `node get-address.js Me` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node get-address.js Me');
```

The terminal should output should include `The public address for Me is <public_key>`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('add-transaction.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /The public address for Me is \w{20,}/);
```

### --seed--

#### --"get-address.js"--

```js
import { getWalletAddressFromName } from './blockchain-helpers.js';

const addressName = process.argv[2];
const address = getWalletAddressFromName(addressName);

console.log(`The public address for ${addressName} is ${address}`);

```

## 69

### --description--

Your function is working, you can see the address for `Me` in the terminal. Your blockchain currently uses names when storing transactions. You will change that so it uses the public keys. Open your `add-transaction.js` file and import your function at the top.

### --tests--

You should import `{ getWalletAddressFromName }` from `'./blockchain-helpers.js';` at the top of your `add-transaction.js` file 

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const myImport = imports?.find(i => i.source?.value === './blockchain-helpers.js');
const i = myImport?.specifiers?.find(s => s.imported?.name === 'getWalletAddressFromName');
assert.equal(i.imported?.name, 'getWalletAddressFromName');
```

## 70

### --description--

Change the `toAddress` variable to `toAddressName` so you can use a name in the command as the recipient.

### --tests--

You should have `const toAddressName = process.argv[3];` in your `add-transaction.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
assert.match(fileContents, /const\s+toAddressName\s*=\s*process\s*\.\s*argv\s*\[\s*3\s*\]\s*;?/);
```

You should not have a `toAddress` variable in your `add-transaction.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
const babelised = await __helpers.babeliser(fileContents);
const v = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'toAddress');
assert.isUndefined(v);
```

### --seed--

#### --"add-transaction.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import { 
  writeTransactions,
  getTransactions,
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddress = process.argv[3];
const amount = parseInt(process.argv[4]);

const hash = sha256(fromAddress + toAddress + amount).toString();

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}
```

## 71

### --description--

Below the `amount` variable, create a `const toAddress` variable that gets the public key of the recipient using your function and `toAddressName`.

### --tests--

You should have `const toAddress = getWalletAddressFromName(toAddressName);` in your `add-transactions.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
assert.match(fileContents, /const\s+toAddress\s*=\s*getWalletAddressFromName\s*\(\s*toAddressName\s*\)\s*;?/);
```

### --seed--

#### --"add-transaction.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import { 
  writeTransactions,
  getTransactions,
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddressName = process.argv[3];
const amount = parseInt(process.argv[4]);

const hash = sha256(fromAddress + toAddress + amount).toString();

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}
```

## 72

### --description--

Open your `transactions.json` file and run `node add-transaction Me Fred 10` in the terminal to create a new transaction.

### --tests--

You should run `node add-transaction.js Me Fred 10` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node add-transaction.js Me Fred 10');
```

Your `transactions.json` file should be an array with two transactions (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
const wallets = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/wallets.json');
assert.equal(fileContents[1]?.fromAddress, 'Me');
assert.equal(fileContents[1]?.toAddress, wallets['Fred']);
assert.equal(fileContents[1]?.amount, 10);
```

### --seed--

#### --"add-transaction.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import { 
  writeTransactions,
  getTransactions,
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddressName = process.argv[3];
const amount = parseInt(process.argv[4]);
const toAddress = getWalletAddressFromName(toAddressName);

const hash = sha256(fromAddress + toAddress + amount).toString();

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}
```

## 73

### --description--

The new transaction used the public address for `Fred`, but the `fromAddress` is still using a name. To make a transaction, you will be passing a private key to this command, getting a keypair from it, and then use its public key as the address. Import `EC` from `elliptic` at the top of the file.

### --tests--

You should have `import EC from 'elliptic';` at the top of your `add-transaction.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const myImport = imports?.find(i => i.source?.value === 'elliptic');
const ecImport = myImport?.specifiers?.find(s => s.local?.name === 'EC');
assert.equal(ecImport?.local?.name, 'EC');
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": null,
    "toAddress": "Me",
    "amount": 50
  },
  {
    "hash": "6e327efd4d5e81b73aab211f12c6681c1a7207d88bb371b80e6ade971c39f270",
    "fromAddress": "Me",
    "toAddress": "048d078b667b7510393131f003386bd0df2e8ad14c817c6390e24835fd102fe2b7c61f985ca8b51a3dfacc4c2933642d2a",
    "amount": 10
  }
]
```

## 74

### --description--

Below your imports, create a `const ec` variable that creates a new `p192` elliptic curve. See your `generate-wallet.js` for the syntax.

### --tests--

You should have `const ec = new EC.ec('p192');` in your `add-transaction.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
assert.match(fileContents, /const\s*ec\s*=\s*new\s+EC\s*\.\s*ec\s*\(\s*('|"|`)p192\1\s*\)\s*;?/);
```

### --seed--

#### --"add-transaction.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { 
  writeTransactions,
  getTransactions,
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const fromAddress = process.argv[2];
const toAddressName = process.argv[3];
const amount = parseInt(process.argv[4]);
const toAddress = getWalletAddressFromName(toAddressName);

const hash = sha256(fromAddress + toAddress + amount).toString();

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}
```

## 75

### --description--

Change the `fromAddress` variable to `fromPrivateKey`.

### --tests--

You should have `const fromPrivateKey = process.argv[2];` in your `add-transaction.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
assert.match(fileContents, /const\s+fromPrivateKey\s*=\s*process\s*\.\s*argv\s*\[\s*2\s*\]\s*;?/);
```

You should not have a `fromAddress` variable in your `add-transaction.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
const babelised = await __helpers.babeliser(fileContents);
const v = babelised.getVariableDeclarations().find(v => v.declarations[0]?.id?.name === 'fromAddress');
assert.isUndefined(v);
```

### --seed--

#### --"add-transaction.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { 
  writeTransactions,
  getTransactions,
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const ec = new EC.ec('p192');

const fromAddress = process.argv[2];
const toAddressName = process.argv[3];
const amount = parseInt(process.argv[4]);
const toAddress = getWalletAddressFromName(toAddressName);

const hash = sha256(fromAddress + toAddress + amount).toString();

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}
```

## 76

### --description--

Above your `hash` declaration, create a new `const fromKeyPair` variable. Set the value to a keypair using the `ec.keyFromPrivate` method. The method needs a private key and the format, `hex`.

### --tests--

You should have `const fromKeyPair = ec.keyFromPrivate(fromPrivateKey, 'hex');` in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
assert.match(fileContents, /const\s+fromKeyPair\s*=\s*ec\s*\.\s*keyFromPrivate\s*\(\s*fromPrivateKey\s*,\s*('|"|`)hex\1\s*\)\s*;?\s*const\s+hash/);
```

### --seed--

#### --"add-transaction.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { 
  writeTransactions,
  getTransactions,
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const ec = new EC.ec('p192');

const fromPrivateKey = process.argv[2];
const toAddressName = process.argv[3];
const amount = parseInt(process.argv[4]);
const toAddress = getWalletAddressFromName(toAddressName);

const hash = sha256(fromAddress + toAddress + amount).toString();

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}
```

## 77

### --description--

Below that, create a `const fromAddress` variable set to the public key of the keypair in `hex` format. You can use `<keyPair>.getPublic('hex')`.

### --tests--

You should have `const fromAddress = fromKeyPair.getPublic('hex');` in your file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
assert.match(fileContents, /const\s+fromAddress\s*=\s*fromKeyPair\s*\.\s*getPublic\s*\(\s*('|"|`)hex\1\s*\)\s*;?\s*const\s+hash/);
```

### --seed--

#### --"add-transaction.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { 
  writeTransactions,
  getTransactions,
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const ec = new EC.ec('p192');

const fromPrivateKey = process.argv[2];
const toAddressName = process.argv[3];
const amount = parseInt(process.argv[4]);
const toAddress = getWalletAddressFromName(toAddressName);

const fromKeyPair = ec.keyFromPrivate(fromPrivateKey, 'hex');

const hash = sha256(fromAddress + toAddress + amount).toString();

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}
```

## 78

### --description--

Below the `fromAddress` variable, log the `fromAddress` to the console so you can make sure it's working.

### --tests--

You should have `console.log(fromAddress);` in your `add-transaction.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
assert.match(fileContents, /fromAddress[\s\S]*?console\s*\.\s*log\s*\(\s*fromAddress\s*\)\s*;?/);
```

### --seed--

#### --"add-transaction.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { 
  writeTransactions,
  getTransactions,
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const ec = new EC.ec('p192');

const fromPrivateKey = process.argv[2];
const toAddressName = process.argv[3];
const amount = parseInt(process.argv[4]);
const toAddress = getWalletAddressFromName(toAddressName);

const fromKeyPair = ec.keyFromPrivate(fromPrivateKey, 'hex');
const fromAddress = fromKeyPair.getPublic('hex');

const hash = sha256(fromAddress + toAddress + amount).toString();

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}
```

## 79

### --description--

Open your `my-private-keys.txt` file and copy the private key for `Me`. Then run `node add-transaction.js <Me_privateKey> Fred 1000` in the terminal, using the private key you copied to send a transaction from `Me`.

### --tests--

You should run `node add-transaction.js <Me_privateKey> Fred 1000` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand.replace(/\s+/g, ' ').trim(), /node add-transaction.js \w{20,} Fred 1000/);
```

The terminal should output should print `You do not have enough funds to make that transaction`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('add-transaction.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /You do not have enough funds to make that transaction/);
```

### --seed--

#### --"add-transaction.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { 
  writeTransactions,
  getTransactions,
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const ec = new EC.ec('p192');

const fromPrivateKey = process.argv[2];
const toAddressName = process.argv[3];
const amount = parseInt(process.argv[4]);
const toAddress = getWalletAddressFromName(toAddressName);

const fromKeyPair = ec.keyFromPrivate(fromPrivateKey, 'hex');
const fromAddress = fromKeyPair.getPublic('hex');
console.log(fromAddress);

const hash = sha256(fromAddress + toAddress + amount).toString();

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}
```

## 80

### --description--

Open the `wallets.json` file and look at the public key for `Me`. It should match the log to the console. So you used the private key for `Me` to make a transaction and got their public key from it, which will be the `fromAddress`. Remove that log to the console.

### --tests--

You should only have one console log statement in your `add-transaction.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
const babelised = await __helpers.babeliser(fileContents);
const e = babelised.getExpressionStatements().filter(e => e.expression?.callee?.object?.name === 'console' && e.expression?.callee?.property?.name === 'log');
assert.lengthOf(e, 1);
```

## 81

### --description--

Next, you will add a signature to the transaction by signing the `hash` with the keypair. Below the `hash` declaration, create a `const signature` variable. Set the value to use the keypair to sign the `hash` and turn it into `hex` format. Here's how it looks: `<keyPair>.sign(<data>).toDER('hex')`.

### --tests--

You should have `const signature = fromKeyPair.sign(hash).toDER('hex');` above the `newTransaction` declaration

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
assert.match(fileContents, /const\s+signature\s*=\s*fromKeyPair\s*\.\s*sign\s*\(\s*hash\s*\)\s*\.\s*toDER\s*\(\s*('|"|`)hex\1\s*\)\s*;?\s*const\s+newTransaction/);
```

### --seed--

#### --"add-transaction.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { 
  writeTransactions,
  getTransactions,
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const ec = new EC.ec('p192');

const fromPrivateKey = process.argv[2];
const toAddressName = process.argv[3];
const amount = parseInt(process.argv[4]);
const toAddress = getWalletAddressFromName(toAddressName);

const fromKeyPair = ec.keyFromPrivate(fromPrivateKey, 'hex');
const fromAddress = fromKeyPair.getPublic('hex');

const hash = sha256(fromAddress + toAddress + amount).toString();

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}
```

## 82

### --description--

Remember from earlier, that you couldn't sign information with a keypair generated from a public key. That's why you need to provide your private key when making a transaction. Add `signature` to `newTransaction`.

### --tests--

You should have `signature` as a property in your `newTransaction` object

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/add-transaction.js');
const babelised = await __helpers.babeliser(fileContents);
const newTxVar = babelised.getVariableDeclarations().find(v => {
  return v.declarations[0]?.id?.name === 'newTransaction';
});
const signProp = newTxVar?.declarations[0]?.init?.properties?.find(p => p.key?.name === 'signature');
assert.equal(signProp?.key?.name, 'signature');
assert.equal(signProp?.value?.name, 'signature');
```

### --seed--

#### --"add-transaction.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { 
  writeTransactions,
  getTransactions,
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const ec = new EC.ec('p192');

const fromPrivateKey = process.argv[2];
const toAddressName = process.argv[3];
const amount = parseInt(process.argv[4]);
const toAddress = getWalletAddressFromName(toAddressName);

const fromKeyPair = ec.keyFromPrivate(fromPrivateKey, 'hex');
const fromAddress = fromKeyPair.getPublic('hex');

const hash = sha256(fromAddress + toAddress + amount).toString();

const signature = fromKeyPair.sign(hash).toDER('hex');

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}
```

## 83

### --description--

Make your `transactions.json` file visible and add a transaction that send zero from `Me` to `Fred`. Make sure to use the private key for `Me`.

### --tests--

You should run `node add-transaction.js <Me_privateKey> Fred 0` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand.replace(/\s+/g, ' ').trim(), /node add-transaction.js \w{20,} Fred 0/);
```

Your `transactions.json` file should be an array with three transactions (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 3);
```

The third transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
const wallets = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/wallets.json');
assert.equal(fileContents[2]?.fromAddress, wallets.Me);
assert.equal(fileContents[2]?.toAddress, wallets.Fred);
assert.equal(fileContents[2]?.amount, 0);
```

### --seed--

#### --"add-transaction.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { 
  writeTransactions,
  getTransactions,
  getAddressBalance,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const ec = new EC.ec('p192');

const fromPrivateKey = process.argv[2];
const toAddressName = process.argv[3];
const amount = parseInt(process.argv[4]);
const toAddress = getWalletAddressFromName(toAddressName);

const fromKeyPair = ec.keyFromPrivate(fromPrivateKey, 'hex');
const fromAddress = fromKeyPair.getPublic('hex');

const hash = sha256(fromAddress + toAddress + amount).toString();

const signature = fromKeyPair.sign(hash).toDER('hex');

const newTransaction = {
  hash,
  fromAddress,
  toAddress,
  amount,
  signature
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
  transactions.push(newTransaction);
  writeTransactions(transactions);
} else {
  console.log('You do not have enough funds to make that transaction')
}
```

## 84

### --description--

Now there's a signature in the transaction you can use to verify the sender. Mine a block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with six blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 6);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": null,
    "toAddress": "Me",
    "amount": 50
  },
  {
    "hash": "6e327efd4d5e81b73aab211f12c6681c1a7207d88bb371b80e6ade971c39f270",
    "fromAddress": "Me",
    "toAddress": "048d078b667b7510393131f003386bd0df2e8ad14c817c6390e24835fd102fe2b7c61f985ca8b51a3dfacc4c2933642d2a",
    "amount": 10
  },
  {
    "hash": "8ec40ebb5e7759c65400d390cd3fb514137e8214813d58a62de6b2ba5da13f16",
    "fromAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
    "toAddress": "048d078b667b7510393131f003386bd0df2e8ad14c817c6390e24835fd102fe2b7c61f985ca8b51a3dfacc4c2933642d2a",
    "amount": 0,
    "signature": "30350218652df504f86c4d80b76c13fab6e6d87f6d3fe22da6692ec7021900bd6b7439a44ef27066a8f5c25064e27a2ae6248549713e23"
  }
]
```

## 85

### --description--

The reward transaction is still using `Me` as the recipient. Open your `mine-block.js` file and import your `getWalletAddressFromName` function at the top with the other imports.

### --tests--

You should import `{ getWalletAddressFromName }` from `'./blockchain-helpers.js';` at the top of your `mine-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const myImport = imports?.find(i => i.source?.value === './blockchain-helpers.js');
const i = myImport?.specifiers?.find(s => s.imported.name === 'getWalletAddressFromName');
assert.equal(i.imported?.name, 'getWalletAddressFromName');
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
    "hash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "nonce": 39,
    "previousHash": "0",
    "transactions": []
  },
  {
    "hash": "00c23c20fec7b56b1f9701c07387d8f501e1901b467ca414e2a4d23712dd845f",
    "nonce": 930,
    "previousHash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "Me",
        "amount": 50
      }
    ]
  },
  {
    "hash": "006d0fd2f22fbb1701fc4c90f2ee5ea032092da5cb26bff259b9fce552ac8cf9",
    "nonce": 40,
    "previousHash": "00c23c20fec7b56b1f9701c07387d8f501e1901b467ca414e2a4d23712dd845f",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "Me",
        "amount": 50
      },
      {
        "hash": "35e19e0b0532e0073d20125e2818c5751507c63feb5954726e4c101e27752a12",
        "fromAddress": "Me",
        "toAddress": "You",
        "amount": 40
      }
    ]
  },
  {
    "hash": "00104e870bdd0e00b90d92b172f3d8cca5d565d269f361b0b1080a66a8d07482",
    "nonce": 27,
    "previousHash": "006d0fd2f22fbb1701fc4c90f2ee5ea032092da5cb26bff259b9fce552ac8cf9",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "Me",
        "amount": 50
      },
      {
        "hash": "187116b5a916e63287cdb275a2e6cab646fde335639f820a0e4531ad444ea7b8",
        "fromAddress": "Me",
        "toAddress": "I",
        "amount": 5
      },
      {
        "hash": "73c77ed36802dc96e50c9da7632e38c842fc316ec16595b7b57a8ce4ac0d21ef",
        "fromAddress": "Me",
        "toAddress": "You",
        "amount": 35
      }
    ]
  },
  {
    "hash": "009da7fd0bc4d97030edd9f9aa3946fbc85770b5ff495b7f306c01d417c58610",
    "nonce": 84,
    "previousHash": "00104e870bdd0e00b90d92b172f3d8cca5d565d269f361b0b1080a66a8d07482",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "Me",
        "amount": 50
      },
      {
        "hash": "6e327efd4d5e81b73aab211f12c6681c1a7207d88bb371b80e6ade971c39f270",
        "fromAddress": "Me",
        "toAddress": "048d078b667b7510393131f003386bd0df2e8ad14c817c6390e24835fd102fe2b7c61f985ca8b51a3dfacc4c2933642d2a",
        "amount": 10
      },
      {
        "hash": "8ec40ebb5e7759c65400d390cd3fb514137e8214813d58a62de6b2ba5da13f16",
        "fromAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "toAddress": "048d078b667b7510393131f003386bd0df2e8ad14c817c6390e24835fd102fe2b7c61f985ca8b51a3dfacc4c2933642d2a",
        "amount": 0,
        "signature": "30350218652df504f86c4d80b76c13fab6e6d87f6d3fe22da6692ec7021900bd6b7439a44ef27066a8f5c25064e27a2ae6248549713e23"
      }
    ]
  }
]
```

#### --"transactions.json"--

```js
[
  {
    "fromAddress": null,
    "toAddress": "Me",
    "amount": 50
  }
]
```

## 86

### --description--

Above the `rewardTransaction` declaration, create a `const rewardAddress` variable and set it to the public address for `Me` using your function.

### --tests--

You should have `const rewardAddress = getWalletAddressFromName('Me');` above your `rewardTransaction` declaration

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/mine-block.js');
assert.match(fileContents, /const\s+rewardAddress\s*=\s*getWalletAddressFromName\s*\(\s*('|"|`)Me\1\s*\)\s*;?\s*const\s+rewardTransaction/);
```

### --seed--

#### --"mine-block.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import { 
  getBlockchain,
  writeBlockchain,
  getTransactions,
  writeTransactions,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];
const transactions = getTransactions();

let nonce = 0;
let hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
const difficulty = 2;

while (!hash.startsWith('0'.repeat(difficulty))) {
  nonce++;
  hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
}

const newBlock = {
  hash,
  nonce,
  previousHash: previousBlock.hash,
  transactions
}

const rewardTransaction = {
  fromAddress: null,
  toAddress: 'Me',
  amount: 50
}

blockchain.push(newBlock);
writeBlockchain(blockchain);
writeTransactions([rewardTransaction]);
```

## 87

### --description--

In the `rewardTransaction`, change the `toAddress` from `Me` to the public key for `Me` using the `rewardAddress` variable.

### --tests--

You should have `toAddress: rewardAddress` in your `rewardTransaction` object

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/mine-block.js');
const babelised = await __helpers.babeliser(fileContents);
const txVar = babelised.getVariableDeclarations().find(v => {
  return v.declarations[0]?.id?.name === 'rewardTransaction';
});
const prop = txVar?.declarations[0]?.init?.properties?.find(p => p.key?.name === 'toAddress');
assert.equal(prop?.key?.name, 'toAddress');
assert.equal(prop?.value?.name, 'rewardAddress');
```

### --seed--

#### --"mine-block.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import { 
  getBlockchain,
  writeBlockchain,
  getTransactions,
  writeTransactions,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];
const transactions = getTransactions();

let nonce = 0;
let hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
const difficulty = 2;

while (!hash.startsWith('0'.repeat(difficulty))) {
  nonce++;
  hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
}

const newBlock = {
  hash,
  nonce,
  previousHash: previousBlock.hash,
  transactions
}

const rewardAddress = getWalletAddressFromName('Me');
const rewardTransaction = {
  fromAddress: null,
  toAddress: 'Me',
  amount: 50
}

blockchain.push(newBlock);
writeBlockchain(blockchain);
writeTransactions([rewardTransaction]);
```

## 88

### --description--

Make sure you can see your blockchain and transactions files, and then re-initialize your blockchain so you don't have any transactions that use names.

### --tests--

You should run `node init-blockchain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node init-blockchain.js');
```

Your `blockchain.json` file should be an array with one block (object)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

Your `transactions.json` file should be an empty array

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 0);
```

### --seed--

#### --"mine-block.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import { 
  getBlockchain,
  writeBlockchain,
  getTransactions,
  writeTransactions,
  getWalletAddressFromName
} from './blockchain-helpers.js';

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length - 1];
const transactions = getTransactions();

let nonce = 0;
let hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
const difficulty = 2;

while (!hash.startsWith('0'.repeat(difficulty))) {
  nonce++;
  hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
}

const newBlock = {
  hash,
  nonce,
  previousHash: previousBlock.hash,
  transactions
}

const rewardAddress = getWalletAddressFromName('Me');
const rewardTransaction = {
  fromAddress: null,
  toAddress: rewardAddress,
  amount: 50
}

blockchain.push(newBlock);
writeBlockchain(blockchain);
writeTransactions([rewardTransaction]);
```

## 89

### --description--

Mine two new blocks to add some tokens to your blockchain.

### --tests--

You should run `node mine-block.js` in the terminal twice

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with three blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 3);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
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

#### --"transactions.json"--

```js
[]
```

## 90

### --description--

The reward transactions are using the public address for `Me` now. Add a transaction that sends 40 tokens from `Me` to `You`. Be sure to use the private key from for `Me` from your `my-private-keys.txt` file again.

### --tests--

You should run `node add-transaction.js <Me_privateKey> You 40` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand.replace(/\s+/g, ' ').trim(), /node add-transaction.js \w{20,} You 40/);
```

Your `transactions.json` file should be an array with two transactions (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
const wallets = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/wallets.json');
assert.equal(fileContents[1]?.fromAddress, wallets.Me);
assert.equal(fileContents[1]?.toAddress, wallets.You);
assert.equal(fileContents[1]?.amount, 40);
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
    "hash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "nonce": 39,
    "previousHash": "0",
    "transactions": []
  },
  {
    "hash": "00e82d9a260d72e26b2f47a78f06f31ef12b00b173526a14d4139b869e14fa1e",
    "nonce": 209,
    "previousHash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "amount": 50
      }
    ]
  }
]
```

#### --"transactions.json"--

```js
[
  {
    "fromAddress": null,
    "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
    "amount": 50
  }
]
```

## 91

### --description--

Mine another block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with four blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 4);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": null,
    "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
    "amount": 50
  },
  {
    "hash": "1b6fe1ddcf9452ec34b7de874387ca3ca49e40d053b491594d81fef9dc22efbe",
    "fromAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
    "toAddress": "04344c7ef2b078982b55b6fa537adb62eb184bf80ef9ec629b17443cf920fe0d80ebc9681945485e60bf8f29e0b86f7b26",
    "amount": 40,
    "signature": "3035021900d3f981b88bf68d4a9c77663d632b5570561958a462356871021872073afbd63ba2716d3daa2c9d4b082342671b27e192fa96"
  }
]
```

## 92

### --description--

Add a transaction that sends `25` from `Me` to Wilma.

### --tests--

You should run `node add-transaction.js <Me_privateKey> Wilma 25` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand.replace(/\s+/g, ' ').trim(), /node add-transaction.js \w{20,} Wilma 25/);
```

Your `transactions.json` file should be an array with two transactions (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 2);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
const wallets = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/wallets.json');
assert.equal(fileContents[1]?.fromAddress, wallets.Me);
assert.equal(fileContents[1]?.toAddress, wallets.Wilma);
assert.equal(fileContents[1]?.amount, 25);
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
    "hash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "nonce": 39,
    "previousHash": "0",
    "transactions": []
  },
  {
    "hash": "00e82d9a260d72e26b2f47a78f06f31ef12b00b173526a14d4139b869e14fa1e",
    "nonce": 209,
    "previousHash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "amount": 50
      }
    ]
  },
  {
    "hash": "007fdab6853b9165643b993e4b1a3f2528d15924e6e4c2284da9b99dab24bb20",
    "nonce": 223,
    "previousHash": "00e82d9a260d72e26b2f47a78f06f31ef12b00b173526a14d4139b869e14fa1e",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "amount": 50
      },
      {
        "hash": "1b6fe1ddcf9452ec34b7de874387ca3ca49e40d053b491594d81fef9dc22efbe",
        "fromAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "toAddress": "04344c7ef2b078982b55b6fa537adb62eb184bf80ef9ec629b17443cf920fe0d80ebc9681945485e60bf8f29e0b86f7b26",
        "amount": 40,
        "signature": "3035021900d3f981b88bf68d4a9c77663d632b5570561958a462356871021872073afbd63ba2716d3daa2c9d4b082342671b27e192fa96"
      }
    ]
  }
]
```

#### --"transactions.json"--

```js
[
  {
    "fromAddress": null,
    "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
    "amount": 50
  }
]
```

## 93

### --description--

Add one more that sends `3` from `You` to `Fred`. Be sure to use the correct private key.

### --tests--

You should run `node add-transaction.js <You_privateKey> Fred 3` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand.replace(/\s+/g, ' ').trim(), /node add-transaction.js \w{20,} Fred 3/);
```

Your `transactions.json` file should be an array with three transactions (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 3);
```

The third transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
const wallets = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/wallets.json');
assert.equal(fileContents[2]?.fromAddress, wallets.You);
assert.equal(fileContents[2]?.toAddress, wallets.Fred);
assert.equal(fileContents[2]?.amount, 3);
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": null,
    "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
    "amount": 50
  },
  {
    "hash": "19ed167e8083547b1e1a7da500c4fff7d7c1dbb4b75db2c5f36c95dcbd6b8ac8",
    "fromAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
    "toAddress": "04a6dfb947014ecc2f355d837deb7558ccbc69882ca05505936fdd8d37317b7268320390c8b99f06e5286aedfc1597f5aa",
    "amount": 25,
    "signature": "3035021900f9ad78fd6526b14e06e1ce518346339e8550f93acf7d3eac02182ea59a50b784064e6a404c6918a6634a01d265d98911675c"
  }
]
```

## 94

### --description--

Mine another block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node mine-block.js');
```

Your `blockchain.json` file should be an array with five blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 5);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/transactions.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 1);
```

### --seed--

#### --"transactions.json"--

```js
[
  {
    "fromAddress": null,
    "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
    "amount": 50
  },
  {
    "hash": "19ed167e8083547b1e1a7da500c4fff7d7c1dbb4b75db2c5f36c95dcbd6b8ac8",
    "fromAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
    "toAddress": "04a6dfb947014ecc2f355d837deb7558ccbc69882ca05505936fdd8d37317b7268320390c8b99f06e5286aedfc1597f5aa",
    "amount": 25,
    "signature": "3035021900f9ad78fd6526b14e06e1ce518346339e8550f93acf7d3eac02182ea59a50b784064e6a404c6918a6634a01d265d98911675c"
  },
  {
    "hash": "21629a1452a73992eb500e0cd5d54824bd66bf8e26d6366a8b4d0ad6385edd94",
    "fromAddress": "04344c7ef2b078982b55b6fa537adb62eb184bf80ef9ec629b17443cf920fe0d80ebc9681945485e60bf8f29e0b86f7b26",
    "toAddress": "048d078b667b7510393131f003386bd0df2e8ad14c817c6390e24835fd102fe2b7c61f985ca8b51a3dfacc4c2933642d2a",
    "amount": 3,
    "signature": "30350218752474807bd6b3b39861b9a75dcd59fba033b1c08f848293021900a0b8439859232479c20a126cea7aa54227de3975b1b1eefb"
  }
]
```

## 95

### --description--

There's a few more things to do. The command to get a balance is looking for named addresses on your blockchain and not keys. Open your `get-address-balance.js` file and import your `getWalletAddressFromName` function at the top.

### --tests--

You should import `{ getWalletAddressFromName }` from `'./blockchain-helpers.js';` at the top of your `get-address-balance.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/get-address-balance.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const myImport = imports?.find(i => i.source?.value === './blockchain-helpers.js');
const i = myImport?.specifiers?.find(s => s.imported?.name === 'getWalletAddressFromName');
assert.equal(i.imported?.name, 'getWalletAddressFromName');
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
    "hash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "nonce": 39,
    "previousHash": "0",
    "transactions": []
  },
  {
    "hash": "00e82d9a260d72e26b2f47a78f06f31ef12b00b173526a14d4139b869e14fa1e",
    "nonce": 209,
    "previousHash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "amount": 50
      }
    ]
  },
  {
    "hash": "007fdab6853b9165643b993e4b1a3f2528d15924e6e4c2284da9b99dab24bb20",
    "nonce": 223,
    "previousHash": "00e82d9a260d72e26b2f47a78f06f31ef12b00b173526a14d4139b869e14fa1e",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "amount": 50
      },
      {
        "hash": "1b6fe1ddcf9452ec34b7de874387ca3ca49e40d053b491594d81fef9dc22efbe",
        "fromAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "toAddress": "04344c7ef2b078982b55b6fa537adb62eb184bf80ef9ec629b17443cf920fe0d80ebc9681945485e60bf8f29e0b86f7b26",
        "amount": 40,
        "signature": "3035021900d3f981b88bf68d4a9c77663d632b5570561958a462356871021872073afbd63ba2716d3daa2c9d4b082342671b27e192fa96"
      }
    ]
  },
  {
    "hash": "00bb0a896f8a99715aa7292a44aae2eeb6e5979b11f2a6a8cbe1007aa7b266ba",
    "nonce": 251,
    "previousHash": "007fdab6853b9165643b993e4b1a3f2528d15924e6e4c2284da9b99dab24bb20",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "amount": 50
      },
      {
        "hash": "19ed167e8083547b1e1a7da500c4fff7d7c1dbb4b75db2c5f36c95dcbd6b8ac8",
        "fromAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "toAddress": "04a6dfb947014ecc2f355d837deb7558ccbc69882ca05505936fdd8d37317b7268320390c8b99f06e5286aedfc1597f5aa",
        "amount": 25,
        "signature": "3035021900f9ad78fd6526b14e06e1ce518346339e8550f93acf7d3eac02182ea59a50b784064e6a404c6918a6634a01d265d98911675c"
      },
      {
        "hash": "21629a1452a73992eb500e0cd5d54824bd66bf8e26d6366a8b4d0ad6385edd94",
        "fromAddress": "04344c7ef2b078982b55b6fa537adb62eb184bf80ef9ec629b17443cf920fe0d80ebc9681945485e60bf8f29e0b86f7b26",
        "toAddress": "048d078b667b7510393131f003386bd0df2e8ad14c817c6390e24835fd102fe2b7c61f985ca8b51a3dfacc4c2933642d2a",
        "amount": 3,
        "signature": "30350218752474807bd6b3b39861b9a75dcd59fba033b1c08f848293021900a0b8439859232479c20a126cea7aa54227de3975b1b1eefb"
      }
    ]
  }
]
```

#### --"transactions.json"--

```js
[
  {
    "fromAddress": null,
    "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
    "amount": 50
  }
]
```

## 96

### --description--

Between the `nameOfAddress` and `balance` variables, create a `const address` variable and use your function to get the public address for the name passed in from the command line.

### --tests--

You should have `const address = getWalletAddressFromName(nameOfAddress);` between the two variables

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/get-address-balance.js');
assert.match(fileContents, /const\s+address\s*=\s*getWalletAddressFromName\s*\(\s*nameOfAddress\s*\)\s*;?\s*const\s+balance/);
```

### --seed--

#### --"get-address-balance.js"--

```js
import { getAddressBalance, getWalletAddressFromName } from './blockchain-helpers.js';

const nameOfAddress = process.argv[2];
const balance = getAddressBalance(nameOfAddress);

console.log(`The balance for ${nameOfAddress} is ${balance}`);
```

## 97

### --description--

In the `balance` declaration, change `nameOfAddress` to `address`.

### --tests--

You should have `const balance = getAddressBalance(address);` in your `get-address-balance.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/get-address-balance.js');
assert.match(fileContents, /const\s+balance\s*=\s*getAddressBalance\s*\(\s*address\s*\)\s*;?/);
```

### --seed--

#### --"get-address-balance.js"--

```js
import { getAddressBalance, getWalletAddressFromName } from './blockchain-helpers.js';

const nameOfAddress = process.argv[2];
const address = getWalletAddressFromName(nameOfAddress);
const balance = getAddressBalance(nameOfAddress);

console.log(`The balance for ${nameOfAddress} is ${balance}`);
```

## 98

### --description--

Run the script to get the balance for `Me`.

### --tests--

You should run `node get-address-balance.js Me` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node get-address-balance.js Me');
```

The terminal output should print `The balance for Me is 85`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /The balance for Me is 85/);
```

### --seed--

#### --"get-address-balance.js"--

```js
import { getAddressBalance, getWalletAddressFromName } from './blockchain-helpers.js';

const nameOfAddress = process.argv[2];
const address = getWalletAddressFromName(nameOfAddress);
const balance = getAddressBalance(address);

console.log(`The balance for ${nameOfAddress} is ${balance}`);
```

## 99

### --description--

Check the balance for `You`.

### --tests--

You should run `node get-address-balance.js You` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node get-address-balance.js You');
```

The terminal output should print `The balance for You is 37`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /The balance for You is 37/);
```

## 100

### --description--

Check `Fred`'s balance.

### --tests--

You should run `node get-address-balance.js Fred` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node get-address-balance.js Fred');
```

The terminal output should print `The balance for Fred is 3`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /The balance for Fred is 3/);
```

## 101

### --description--

Lastly, check `Wilma`'s

### --tests--

You should run `node get-address-balance.js Wilma` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node get-address-balance.js Wilma');
```

The terminal output should print `The balance for Wilma is 25`

```js
await new Promise(res => setTimeout(res, 1000));
const output = await __helpers.getTerminalOutput();
const splitOutput = output.split('generate-wallet.js');
const lastOutput = splitOutput[splitOutput.length - 1];
assert.match(lastOutput, /The balance for Wilma is 25/);
```

## 102

### --description--

The last thing you need to do is validate all the transaction signatures. Open your `blockchain-helpers.js` file and find the `isValidChain` function. Right below where you validate the transaction hash, add a `validate signature` comment.

### --tests--

You should have `// validate signature` in the correct spot of your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-digital-signatures-by-building-a-wallet/blockchain-helpers.js?update=${Date.now()}`));
assert.isFunction(isValidChain);
assert.match(isValidChain.toString(), /\/\/\s*validate\s+signature\s*}\s*}\s*}\s*return\s+true/);
```

## 103

### --description--

You are going to generate a keypair with the public key of the sender and validate the signature on each transaction. At the top of the file, import `EC` from the elliptic package.

### --tests--

You should have `import EC from 'elliptic';` at the top of the `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/blockchain-helpers.js');
const babelised = await __helpers.babeliser(fileContents);
const imports = babelised.getImportDeclarations();
const myImport = imports?.find(i => i.source?.value === 'elliptic');
const ecImport = myImport?.specifiers?.find(s => s.local?.name === 'EC');
assert.equal(ecImport?.local?.name, 'EC');
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import sha256 from 'crypto-js/sha256.js';
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

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, nonce, previousHash, transactions } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return false;
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
    if (hash != testBlockHash) {
      return false;
    }

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { hash, fromAddress, toAddress, amount } = transactions[j];

      // don't validate reward transactions
      if (fromAddress !== null) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (hash != testTransactionHash) {
          return false;
        }

        // validate signature

      }
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

export function getAddressBalance(address) {
  const blockchain = getBlockchain();
  let balance = 0;

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) { 
    const { transactions } = blockchain[i];

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j];

      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }

  return balance;
}

export function getWalletAddressFromName(name) {
  const walletsFile = readFileSync('./wallets.json');
  const wallets = JSON.parse(walletsFile);
  return wallets[name];
}
```

## 104

### --description--

Below your imports, create a new `const ec` variable and set it to a new `p192` elliptic curve.

### --tests--

You should have `const ec = new EC.ec('p192');` below the imports in your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('learn-digital-signatures-by-building-a-wallet/blockchain-helpers.js');
const babelised = await __helpers.babeliser(fileContents);
const v = babelised.getVariableDeclarations().find(v => v.scope.includes('global') && v.declarations[0]?.id?.name === 'ec');
assert.equal(v.kind, 'const');
assert.equal(v.declarations[0]?.id?.name, 'ec');
assert.equal(v.declarations[0]?.init?.type, 'NewExpression');
assert.equal(v.declarations[0]?.init?.callee?.object?.name, 'EC');
assert.equal(v.declarations[0]?.init?.callee?.property?.name, 'ec');
assert.equal(v.declarations[0].init.arguments[0].value, 'p192');
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
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

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, nonce, previousHash, transactions } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return false;
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
    if (hash != testBlockHash) {
      return false;
    }

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { hash, fromAddress, toAddress, amount } = transactions[j];

      // don't validate reward transactions
      if (fromAddress !== null) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (hash != testTransactionHash) {
          return false;
        }

        // validate signature

      }
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

export function getAddressBalance(address) {
  const blockchain = getBlockchain();
  let balance = 0;

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) { 
    const { transactions } = blockchain[i];

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j];

      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }

  return balance;
}

export function getWalletAddressFromName(name) {
  const walletsFile = readFileSync('./wallets.json');
  const wallets = JSON.parse(walletsFile);
  return wallets[name];
}
```

## 105

### --description--

Back in the `isValidChain` function where you loop over the transactions, add `signature` where you destructure the variables from each transaction.

### --tests--

You should destruct `signature` from `transactions[j]` in your `for` loop with the rest of the properties

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-digital-signatures-by-building-a-wallet/blockchain-helpers.js?update=${Date.now()}`));
const babelised = await __helpers.babeliser(isValidChain.toString());
const forLoops = babelised.getType('ForStatement');
const forLoop = forLoops.find(l => l.init?.declarations[0]?.id?.name === 'j');
const body = forLoop?.body?.body[0];
const decs = body?.declarations[0];
const props = decs?.id?.properties;
const hash = props?.find(p => p.key?.name === 'hash' && p.value?.name === 'hash');
const from = props?.find(p => p.key?.name === 'fromAddress' && p.value?.name === 'fromAddress');
const to = props?.find(p => p.key?.name === 'toAddress' && p.value?.name === 'toAddress');
const amount = props?.find(p => p.key?.name === 'amount' && p.value?.name === 'amount');
const signature = props?.find(p => p.key?.name === 'signature' && p.value?.name === 'signature');
assert.equal(forLoop?.body?.body[0]?.kind, 'const');
assert.equal(hash?.key?.name, 'hash');
assert.equal(from?.key?.name, 'fromAddress');
assert.equal(to?.key?.name, 'toAddress');
assert.equal(amount?.key?.name, 'amount');
assert.equal(signature?.key?.name, 'signature');
assert.equal(`${decs?.init?.object?.name}[${decs?.init?.property?.name}]`, 'transactions[j]');
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { writeFileSync, readFileSync } from 'fs';

const ec = new EC.ec('p192');

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

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, nonce, previousHash, transactions } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return false;
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
    if (hash != testBlockHash) {
      return false;
    }

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { hash, fromAddress, toAddress, amount } = transactions[j];

      // don't validate reward transactions
      if (fromAddress !== null) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (hash != testTransactionHash) {
          return false;
        }

        // validate signature

      }
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

export function getAddressBalance(address) {
  const blockchain = getBlockchain();
  let balance = 0;

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) { 
    const { transactions } = blockchain[i];

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j];

      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }

  return balance;
}

export function getWalletAddressFromName(name) {
  const walletsFile = readFileSync('./wallets.json');
  const wallets = JSON.parse(walletsFile);
  return wallets[name];
}
```

## 106

### --description--

Below your `validate signature` comment, create a `const publicKeyPair` variable. Set the value to a keypair generated from the public key (`fromAddress`) of the transaction. Make sure to tell the method the key will be in `hex` format.

### --tests--

You should have `const publicKeyPair = ec.keyFromPublic(fromAddress, 'hex');` below your `validate signature` comment

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-digital-signatures-by-building-a-wallet/blockchain-helpers.js?update=${Date.now()}`));
assert.isFunction(isValidChain);
assert.match(isValidChain.toString(), /\/\/\s*validate\s+signature\s*const\s+publicKeyPair\s*=\s*ec\s*\.\s*keyFromPublic\s*\(\s*fromAddress\s*,\s*('|"|`)hex\1\s*\)\s*;?\s*}\s*}\s*}\s*return\s+true/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { writeFileSync, readFileSync } from 'fs';

const ec = new EC.ec('p192');

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

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, nonce, previousHash, transactions } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return false;
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
    if (hash != testBlockHash) {
      return false;
    }

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { hash, fromAddress, toAddress, amount, signature } = transactions[j];

      // don't validate reward transactions
      if (fromAddress !== null) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (hash != testTransactionHash) {
          return false;
        }

        // validate signature

      }
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

export function getAddressBalance(address) {
  const blockchain = getBlockchain();
  let balance = 0;

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) { 
    const { transactions } = blockchain[i];

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j];

      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }

  return balance;
}

export function getWalletAddressFromName(name) {
  const walletsFile = readFileSync('./wallets.json');
  const wallets = JSON.parse(walletsFile);
  return wallets[name];
}
```

## 107

### --description--

Below that, create a `const verifiedSignature` variable. Use it to see if the `hash` has been signed with the keypair.

### --tests--

You should have `const verifiedSignature = publicKeyPair.verify(hash, signature);` below your `publicKeyPair` variable

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-digital-signatures-by-building-a-wallet/blockchain-helpers.js?update=${Date.now()}`));
assert.isFunction(isValidChain);
assert.match(isValidChain.toString(), /const\s+verifiedSignature\s*=\s*publicKeyPair\s*\.\s*verify\s*\(\s*hash\s*,\s*signature\s*\)\s*;?\s*}\s*}\s*}\s*return\s+true/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { writeFileSync, readFileSync } from 'fs';

const ec = new EC.ec('p192');

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

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, nonce, previousHash, transactions } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return false;
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
    if (hash != testBlockHash) {
      return false;
    }

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { hash, fromAddress, toAddress, amount, signature } = transactions[j];

      // don't validate reward transactions
      if (fromAddress !== null) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (hash != testTransactionHash) {
          return false;
        }

        // validate signature
        const publicKeyPair = ec.keyFromPublic(fromAddress, 'hex');

      }
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

export function getAddressBalance(address) {
  const blockchain = getBlockchain();
  let balance = 0;

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) { 
    const { transactions } = blockchain[i];

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j];

      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }

  return balance;
}

export function getWalletAddressFromName(name) {
  const walletsFile = readFileSync('./wallets.json');
  const wallets = JSON.parse(walletsFile);
  return wallets[name];
}
```

## 108

### --description--

Add an `if` condition that checks if `!verifiedSignature`. If it's not valid, return `false`.

### --tests--

You should have `if (!verifiedSignature) { return false; }` below your `verifiedSignature` variable

```js
await new Promise(res => setTimeout(res, 1000));
const { isValidChain } = (await import(`../../learn-digital-signatures-by-building-a-wallet/blockchain-helpers.js?update=${Date.now()}`));
assert.isFunction(isValidChain);
assert.match(isValidChain.toString(), /if\s*\(\s*!\s*verifiedSignature\s*\)\s*{\s*return\s+false\s*;?\s*}\s*}\s*}\s*}\s*return\s+true/);
```

### --seed--

#### --"blockchain-helpers.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { writeFileSync, readFileSync } from 'fs';

const ec = new EC.ec('p192');

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

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, nonce, previousHash, transactions } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return false;
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
    if (hash != testBlockHash) {
      return false;
    }

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { hash, fromAddress, toAddress, amount, signature } = transactions[j];

      // don't validate reward transactions
      if (fromAddress !== null) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (hash != testTransactionHash) {
          return false;
        }

        // validate signature
        const publicKeyPair = ec.keyFromPublic(fromAddress, 'hex');
        const verifiedSignature = publicKeyPair.verify(hash, signature);

      }
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

export function getAddressBalance(address) {
  const blockchain = getBlockchain();
  let balance = 0;

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) { 
    const { transactions } = blockchain[i];

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j];

      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }

  return balance;
}

export function getWalletAddressFromName(name) {
  const walletsFile = readFileSync('./wallets.json');
  const wallets = JSON.parse(walletsFile);
  return wallets[name];
}
```

## 109

### --description--

Run your script to validate the chain.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
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

#### --"blockchain-helpers.js"--

```js
import sha256 from 'crypto-js/sha256.js';
import EC from 'elliptic';
import { writeFileSync, readFileSync } from 'fs';

const ec = new EC.ec('p192');

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

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) {
    const previousBlock = blockchain[i - 1];
    const { hash, nonce, previousHash, transactions } = blockchain[i];

    // validate previous hash
    if (previousHash !== previousBlock.hash) {
      return false;
    }

    // validate block hash
    const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
    if (hash != testBlockHash) {
      return false;
    }

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { hash, fromAddress, toAddress, amount, signature } = transactions[j];

      // don't validate reward transactions
      if (fromAddress !== null) {

        // validate transaction hash
        const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
        if (hash != testTransactionHash) {
          return false;
        }

        // validate signature
        const publicKeyPair = ec.keyFromPublic(fromAddress, 'hex');
        const verifiedSignature = publicKeyPair.verify(hash, signature);
        if (!verifiedSignature) {
          return false;
        }
      }
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

export function getAddressBalance(address) {
  const blockchain = getBlockchain();
  let balance = 0;

  // loop through blocks
  for (let i = 1; i < blockchain.length; i++) { 
    const { transactions } = blockchain[i];

    // loop through transactions
    for (let j = 0; j < transactions.length; j++) {
      const { fromAddress, toAddress, amount } = transactions[j];

      if (fromAddress === address) {
        balance -= amount;
      }

      if (toAddress === address) {
        balance += amount;
      }
    }
  }

  return balance;
}

export function getWalletAddressFromName(name) {
  const walletsFile = readFileSync('./wallets.json');
  const wallets = JSON.parse(walletsFile);
  return wallets[name];
}
```

## 110

### --description--

Open your `blockchain.json` file and add a `0` (zero) to the end of the last signature value.

### --tests--

Your `blockchain.json` file should be an array with five blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/blockchain.json');
assert.isArray(fileContents);
assert.lengthOf(fileContents, 5);
```

The fifth block should have three transactions (objects)

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/blockchain.json');
assert.isArray(fileContents);
assert.isArray(fileContents[4]?.transactions);
assert.lengthOf(fileContents[4]?.transactions, 3);
```

The signature of the last transaction in the `blockchain.json` file should end with a zero

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/blockchain.json');
const sign = fileContents[4]?.transactions[2]?.signature;
assert.equal(sign[sign.length - 1], '0');
```

## 111

### --description--

Validate your chain again.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
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
    "hash": "0",
    "previousHash": null
  },
  {
    "hash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "nonce": 39,
    "previousHash": "0",
    "transactions": []
  },
  {
    "hash": "00e82d9a260d72e26b2f47a78f06f31ef12b00b173526a14d4139b869e14fa1e",
    "nonce": 209,
    "previousHash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "amount": 50
      }
    ]
  },
  {
    "hash": "007fdab6853b9165643b993e4b1a3f2528d15924e6e4c2284da9b99dab24bb20",
    "nonce": 223,
    "previousHash": "00e82d9a260d72e26b2f47a78f06f31ef12b00b173526a14d4139b869e14fa1e",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "amount": 50
      },
      {
        "hash": "1b6fe1ddcf9452ec34b7de874387ca3ca49e40d053b491594d81fef9dc22efbe",
        "fromAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "toAddress": "04344c7ef2b078982b55b6fa537adb62eb184bf80ef9ec629b17443cf920fe0d80ebc9681945485e60bf8f29e0b86f7b26",
        "amount": 40,
        "signature": "3035021900d3f981b88bf68d4a9c77663d632b5570561958a462356871021872073afbd63ba2716d3daa2c9d4b082342671b27e192fa96"
      }
    ]
  },
  {
    "hash": "00bb0a896f8a99715aa7292a44aae2eeb6e5979b11f2a6a8cbe1007aa7b266ba",
    "nonce": 251,
    "previousHash": "007fdab6853b9165643b993e4b1a3f2528d15924e6e4c2284da9b99dab24bb20",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "amount": 50
      },
      {
        "hash": "19ed167e8083547b1e1a7da500c4fff7d7c1dbb4b75db2c5f36c95dcbd6b8ac8",
        "fromAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "toAddress": "04a6dfb947014ecc2f355d837deb7558ccbc69882ca05505936fdd8d37317b7268320390c8b99f06e5286aedfc1597f5aa",
        "amount": 25,
        "signature": "3035021900f9ad78fd6526b14e06e1ce518346339e8550f93acf7d3eac02182ea59a50b784064e6a404c6918a6634a01d265d98911675c"
      },
      {
        "hash": "21629a1452a73992eb500e0cd5d54824bd66bf8e26d6366a8b4d0ad6385edd94",
        "fromAddress": "04344c7ef2b078982b55b6fa537adb62eb184bf80ef9ec629b17443cf920fe0d80ebc9681945485e60bf8f29e0b86f7b26",
        "toAddress": "048d078b667b7510393131f003386bd0df2e8ad14c817c6390e24835fd102fe2b7c61f985ca8b51a3dfacc4c2933642d2a",
        "amount": 3,
        "signature": "30350218752474807bd6b3b39861b9a75dcd59fba033b1c08f848293021900a0b8439859232479c20a126cea7aa54227de3975b1b1eefb0"
      }
    ]
  }
]
```

## 112

### --description--

Remove the zero from the signature you added in your blockchain file.

### --tests--

The signature of the last block in the `blockchain.json` file should not end with a zero

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getJsonFile('learn-digital-signatures-by-building-a-wallet/blockchain.json');
const sign = fileContents[4]?.transactions[2]?.signature;
assert.notEqual(sign[sign.length - 1], '0');
```

## 113

### --description--

This is the last step. Congratulations on gettings this far. Validate your chain one last time.

### --tests--

You should run `node validate-chain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand.replace(/\s+/g, ' ').trim(), 'node validate-chain.js');
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
    "hash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "nonce": 39,
    "previousHash": "0",
    "transactions": []
  },
  {
    "hash": "00e82d9a260d72e26b2f47a78f06f31ef12b00b173526a14d4139b869e14fa1e",
    "nonce": 209,
    "previousHash": "009b0ffdf8024c9fad6291d8b00915d23965a6ed55ba8ed680549076152705fb",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "amount": 50
      }
    ]
  },
  {
    "hash": "007fdab6853b9165643b993e4b1a3f2528d15924e6e4c2284da9b99dab24bb20",
    "nonce": 223,
    "previousHash": "00e82d9a260d72e26b2f47a78f06f31ef12b00b173526a14d4139b869e14fa1e",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "amount": 50
      },
      {
        "hash": "1b6fe1ddcf9452ec34b7de874387ca3ca49e40d053b491594d81fef9dc22efbe",
        "fromAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "toAddress": "04344c7ef2b078982b55b6fa537adb62eb184bf80ef9ec629b17443cf920fe0d80ebc9681945485e60bf8f29e0b86f7b26",
        "amount": 40,
        "signature": "3035021900d3f981b88bf68d4a9c77663d632b5570561958a462356871021872073afbd63ba2716d3daa2c9d4b082342671b27e192fa96"
      }
    ]
  },
  {
    "hash": "00bb0a896f8a99715aa7292a44aae2eeb6e5979b11f2a6a8cbe1007aa7b266ba",
    "nonce": 251,
    "previousHash": "007fdab6853b9165643b993e4b1a3f2528d15924e6e4c2284da9b99dab24bb20",
    "transactions": [
      {
        "fromAddress": null,
        "toAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "amount": 50
      },
      {
        "hash": "19ed167e8083547b1e1a7da500c4fff7d7c1dbb4b75db2c5f36c95dcbd6b8ac8",
        "fromAddress": "048a83263129f2f42fbab6e838ca3b592f1cc6d132ecd0d5d01fef8438da93af0f3a7dd04682da2eaca9d5a9b3147859a7",
        "toAddress": "04a6dfb947014ecc2f355d837deb7558ccbc69882ca05505936fdd8d37317b7268320390c8b99f06e5286aedfc1597f5aa",
        "amount": 25,
        "signature": "3035021900f9ad78fd6526b14e06e1ce518346339e8550f93acf7d3eac02182ea59a50b784064e6a404c6918a6634a01d265d98911675c"
      },
      {
        "hash": "21629a1452a73992eb500e0cd5d54824bd66bf8e26d6366a8b4d0ad6385edd94",
        "fromAddress": "04344c7ef2b078982b55b6fa537adb62eb184bf80ef9ec629b17443cf920fe0d80ebc9681945485e60bf8f29e0b86f7b26",
        "toAddress": "048d078b667b7510393131f003386bd0df2e8ad14c817c6390e24835fd102fe2b7c61f985ca8b51a3dfacc4c2933642d2a",
        "amount": 3,
        "signature": "30350218752474807bd6b3b39861b9a75dcd59fba033b1c08f848293021900a0b8439859232479c20a126cea7aa54227de3975b1b1eefb"
      }
    ]
  }
]
```

## --fcc-end--
