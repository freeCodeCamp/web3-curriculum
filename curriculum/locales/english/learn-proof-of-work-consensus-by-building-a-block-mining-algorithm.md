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

You should run `node add-transactions.js You Me 100` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 3

### --description--

The transaction was added to the transaction pool. Open your `blockchain.json` file, your blocks are still in there. Scroll to the bottom of it and run `node add-block.js` in the terminal to add a new block.

### --tests--

You should run `node add-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `blockchain.json` should be an array with ten blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false)
```

The tenth block should have a `transactions` array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 4

### --description--

A new block was added to your blockchain. Run `node validate-chain.js` in the terminal to make sure your chain is still valid.
run `node validate-chain.js`

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
assert(false);
```

The terminal output should log `Chain is valid`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 5

### --description--

Instead of just adding blocks, you will learn how they are mined. Rename your `add-block.js` file to `mine-block.js`

### --tests--

You should not have a `add-block.js` file in your project folder

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

You should have a `mine-block.js` file in your project folder

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 6

### --description--

Your blocks have a `hash` property that is a random number. You will turn these into actual hash values. Run `npm install crypto-js` in your project folder so you can create do that.

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 7

### --description--

Open your `mine-block.js` file and import the `sha256` method at the top with `import sha256 from 'crypto-js/sha256.js';`.

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 8

### --description--

This method takes a string of any length and turns it into a 256 bit hash value that is always 64 characters. Above your `newBlock`, create a `const hash` variable with a value of `sha256('password').toString();`.

### --tests--

You should have `const hash = sha256('password').toString();` right above your `newBlock` variable

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 9

### --description--

Right below that, log your `hash` variable to the console.
add `console.log(hash)`

### --tests--

You should have `console.log(hash);` right above your `newBlock` variable

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 10

### --description--

Use single line comments to comment out the two lines at the bottom of the file where you write your blockchain and transactions. This way, you can test your hash functions without writing to your files.

### --tests--

You should have `// writeBlockchain(blockchain);` in your file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

You should have `// writeTransactions([]);` in your file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 11

### --description--

Run your `mine-block.js` file in the terminal so you can see what the hashing function does.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your terminal output should include a hash

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 12

### --description--

The `sha256` method turned the `password` string you passed to it, into a cryptic 256 bit hash that is 64 characters long. Run the command again.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your terminal output should include a hash

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 13

### --description--

The output included that same hash. Given the same input, the hash function will always produce the output. Change `password` to `passwords`.

### --tests--

You should have `const hash = sha256('passwords').toString();` right above your log to the console

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 14

### --description--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your terminal output should include a hash

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 15

### --description--

Now that you changed the input to the function, the hash output is completely different, but still fixed to 64 characters. Change `passwords` to a concatenation of the `previousBlock.hash` and `JSON.stringify(transactions)` so your hash is created using information from the block you are mining.

### --tests--

You should have `const hash = sha256(previousBlock.hash + JSON.stringify(transactions)).toString();` right above your log to the console

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 16

### --description--

Now the string you are passing to the function is potentially quite large because you are using everything in your `transactions.json` file. Run your `mine-block.js` file again.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your terminal output should include a hash

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 17

### --description--

But it still gives a fixed length output. Replace the `hash` value in your `newBlock` to use the new `hash` variable.

### --tests--

Your `newBlock` variable should have a `hash` property that uses the `hash` variable as its value

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 18

### --description--

Uncomment the two places you where you write your files at the bottom that you commented out earlier.

### --tests--

You should have `writeBlockchain(blockchain);` in your file that is not commented out

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

You should have `writeTransactions([]);` in your file that is not commented out

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 19

### --description--

Run `node add-transaction.js You Me 4` in the terminal to add a new transaction to your transaction pool.

### --tests--

You should run `node add-transactions.js You Me 4` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 20

### --description--

Open your `blockchain.json` file and mine a new block. 

### --tests--

You should run `node add-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `blockchain.json` should be an array with eleven blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false)
```

The eleventh block should have a `hash` property that is a 64 character long string

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 21

### --description--

Your new block, at the bottom of `blockchain.json`, has a cryptic `hash` value created using the information from the block. Add a new transaction that sends `6` tokens from `You` to `Me`.

### --tests--

You should run `node add-transactions.js You Me 6` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with one transaction (object) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 22

### --description--

Mine another block.

### --tests--

You should run `node add-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `blockchain.json` should be an array with twelve blocks (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false)
```

The twelvth block should have a `hash` property that is a 64 character long string

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 23

### --description--

The latest block at the bottom of `blockchain.json` has a different hash because the information used to create it was different. Change your `const hash` declaration to use the `let` keyword and set the value to an empty string.

### --tests--

You should have `let hash = '';` above your log to the console

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

You should only have one `hash` variable

```js
await new Promise(res => setTimeout(res, 1000));
assert(false)
```

## 24

### --description--

The process of mining a block is to keep changing the input of the hash function until you find a hash that fits a pattern you are looking for. A _nonce_ is used to do this. Add a `let nonce` variable below your `hash` declaration that is set to `0` (zero/integer).

### --tests--

You should have `let nonce = 0;` right above your log to the console

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 25

### --description--

Add a `while` loop that checks if `!hash.startsWith('0')`. Put your `console.log(hash)` in the loop. This loop will continue to run until you find a hash that starts with a `0` (zero).

### --tests--

You should have `while (!hash.startsWith('0')) { }` below your `nonce` declaration

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

You should have `console.log(hash);` in your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 26

### --description--

At the top of your loop, increment your `nonce` with the `++` operator.

### --tests--

You should have `nonce++;` at the start of your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 27

### --description--

Below that, redefine your `hash` so that it creates a hash using the `sha256` method from a concatenation of your `nonce`, the hash of the previous block, and a stringified version of what is in the transactions file. Here's a reminder of the syntax: `sha256(<content>).toString();`

### --tests--

You should have `hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();` in your while loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The `console.log(hash);` should be at the bottom of your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 28

### --description--

Change the log to the console so it prints `nonce = ${nonce}`. Use a template literal.

`console.log` to ``console.log(`nonce = ${nonce}`);``

### --tests--

You should have ``console.log(`nonce = ${nonce}`);`` at the bottom of your while loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 29

### --description--

Below that, add another log that prints the `hash` in the same fashion.

### --tests--

You should have ``console.log(`hash = ${hash}`)`` at the bottom of your while loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 30

### --description--

Comment out the two places you write to files at the bottom again.

### --tests--

You should have `// writeBlockchain(blockchain);` in your file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

You should have `// writeTransactions([]);` in your file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 31

### --description--

Add a transaction that sends `8` tokens from `You` to `Me`

Delete this? We don't even write to the tx file.

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 32

### --description--

Run your `mine-block.js` file.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your terminal output should include a hash

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 33

### --description--

add `const difficulty = 2;`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 34

### --description--

add `.repeat(difficulty)`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 35

### --description--

run `node-mine-block.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 36

### --description--

change `difficulty` to `3`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 37

### --description--

run `node mine-block.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 38

### --description--

change difficulty to `4`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 39

### --description--

run `node mine-block.js` again

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 40

### --description--

add `nonce` to `newBlock`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 41

### --description--

add `const rewardTransaction = {}`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 42

### --description--

add `fromAddress: null`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 43

### --description--

add `toAddress: Me`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 44

### --description--

add `amount: 50`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 45

### --description--

uncomment two `write`'s

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 46

### --description--

change to `writeTransaction([rewardTransaction]);`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 47

### --description--

run `node init-blockchain.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 48

### --description--

run `node add-transaction You Me 12`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 49

### --description--

run `node add-transaction You Me 16`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 50

### --description--

change difficulty back to `2`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 51

### --description--

run `node mine-block.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 52

### --description--

run `node add-transaction Me You 20`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 53

### --description--

run `node mine-block.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 54

### --description--

run `node add-transaction Me You 10`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 55

### --description--

run `node mine-block.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 56

### --description--

Remove the two `console.log()`'s

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 57

### --description--

In `blockchain-helpers.js` -> isValidChain

add `const SHA256 = require('crypto-js/sha256');`
new: `import sha256 from 'crypto-js/sha256.js';`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 58

### --description--

add comment

```
// loop through blocks
```

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 59

### --description--

add comment

```
validate previous hash
```

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 60

### --description--

add comment

```
validate block hash
```

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 61

### --description--

get nonce, hash and transactions from current block

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 62

### --description--

add `const testBlockHash = SHA256(currentBlock.nonce + previousBlock.hash + JSON.stringify(currentBlock.transactions)).toString();`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 63

### --description--

add `if (testBlockHash != currentBlock.hash) {}`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 64

### --description--

add `return false;`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 65

### --description--

run `node validate-chain.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 66

### --description--

tamper with nonce

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 67

### --description--

run `node validate-chain.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 68

### --description--

untamper nonce

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 69

### --description--

run `node validate-chain.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 70

### --description--

in add-transaction.js

add const SHA256 = require('crypto-js/sha256');

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 71

### --description--

add const hash = SHA256(fromAddress + toAddress + amount).toString()

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 72

### --description--

add hash to newTransaction

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 73

### --description--

run node init-blockchain.js

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 74

### --description--

run node add-transaction.js Me You 15

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 75

### --description--

run node add-transaction.js Me You 25

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 76

### --description--

run `node mine-block.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 77

### --description--

run node add-transaction.js You Me 4

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 78

### --description--

run node add-transaction.js You Me 8

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 79

### --description--

run `node mine-block.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 80

### --description--

In blockchain-helpers.js -> isValidChain()

add comment // loop over transactions

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 81

### --description--

add

```
for (let j = 0; j < transactions.length; j++) {}
```

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 82

### --description--

add

```
const { fromAddress, toAddress, amount, hash } = transactions[j];
```

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 83

### --description--

add comment // don't validate reward transaction

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 84

### --description--

add if (fromAddress) {}

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 85

### --description--

add comment 

```
// validate transaction hash
```

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 86

### --description--

add const testTransactionHash = SHA256(fromAddress + toAddress + amount).toString();

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 87

### --description--

add empty 

```
if (testTransactionHash != hash) {}
```

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 88

### --description--

add return false;

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 89

### --description--

run `node validate-chain.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 90

### --description--

tamper with transaction

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 91

### --description--

run `node validate-chain.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 92

### --description--

change transaction back

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 93

### --description--

run `node validate-chain.js`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 94

### --description--

In blockchain-helpers.js - getAddressBalance

add function getAddressBalance(address) {}
new: `export function getAddressBalance(address) {}`

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 95

### --description--

add const blockchain = getBlockchain();

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 96

### --description--

add let balance = 0;

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 97

### --description--

add comment // loop over blocks

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 98

### --description--

add for (let i = 1; i < blockchain.length; i++) {}

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 99

### --description--

add const { transactions } = blockchain[i]; 

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 100

### --description--

add comment // loop over transactions

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 101

### --description--

add for (let j = 0; j < transactions.length; j++) {

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 102

### --description--

add const { fromAddress, toAddress, amount } = transactions[j]

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 103

### --description--

add if (fromAddress === address) {}

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 104

### --description--

add balance -= amount;

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 105

### --description--

add if (toAddress === address) {

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 106

### --description--

add balance += amount;

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 107

### --description--

add return balance;

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```


## 108

### --description--

touch get-address-balance.js

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 109

### --description--

in get-address-balance.js
add const { getAddressBalance } = require('./blockchain-helpers');

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 110

### --description--

add const nameOfAddress = process.argv[2];

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 111

### --description--

add const balance = getAddressBalance(nameOfAddress);

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 112

### --description--

add console.log(`The balance for ${nameOfAddress} is ${balance}`);

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 113

### --description--

run node get-address-balance.js Me

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 114

### --description--

run node get-address-balance.js You

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 115

### --description--

add getAddressBalance to import

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 116

### --description--

add const addressBalance = getAddressBalance(fromAddress);

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 117

### --description--

add if (addressBalance >= amount) {}

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 118

### --description--

add else { console.log('You do not have enough funds to make that transaction'); }

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 119

### --description--

run node add-transaction Me You 100

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 120

### --description--

run node add-transaction Me You 10

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 121

### --description--

in init-blockchain.js

add writeTransactions to import

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 122

### --description--

add writeTransactions([])

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 123

### --description--

run node init-blockchain

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 124

### --description--

run node mine-block x2

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 125

### --description--

run node add-transaction + same args

### --tests--

Auto-pass test

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## --fcc-end--
