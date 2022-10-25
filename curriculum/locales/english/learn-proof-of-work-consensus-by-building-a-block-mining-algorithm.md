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

A new block was added to your blockchain that includes your transaction and the transaction pool is empty again. Run `node validate-chain.js` in the terminal to make sure your chain is still valid.
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

Instead of adding blocks, you will learn how they are mined. Rename your `add-block.js` file to `mine-block.js`

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

Your blocks have a `hash` property that is a random number converted to a string. You will turn these into real hash values. Run `npm install crypto-js` in your project folder to help with that.

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

The `sha256` method turned the `password` string you passed to it into a 256 bit hash that is 64 characters long. Run the command again.

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

It output the same hash. Given the same input, the hash function will always produce same the output. Change `password` to `passwords`.

### --tests--

You should have `const hash = sha256('passwords').toString();` right above your log to the console

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 14

### --description--

Run the file again.

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

## 15

### --description--

The hash that was printed is completely different. Changing a single character in the input will completely change the output.

The input string can be any length. Change `passwords` to a concatenation of the `previousBlock.hash` and `JSON.stringify(transactions)` so your hash is created using information from the block you are mining.

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

Open `transactions.json` and run `node add-transaction.js You Me 4` in the terminal to add a new transaction to your transaction pool.

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

Open your `blockchain.json` file, scroll to the bottom, and mine a new block.

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

Now you are using an actual hash for new blocks that is created from the information in the block. Add a new transaction that sends `6` tokens from `You` to `Me`.

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

Each block will have a unique hash since the information used to create it will never be the same.

The process of mining a block is to keep changing the input of the hash function until you find a hash that fits a pattern you are looking for. A _nonce_ is used to do this. Add a `let nonce` variable above your `hash` declaration that is set to `0` (zero/integer).

### --tests--

You should have `let nonce = 0` above your `hash` declaration

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 24

### --description--

Add your `nonce` as the part of the string used to create the hash. Also, change your `hash` declaraction to use the `let` keyword.

### --tests--

You should have `let hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();` right below your `nonce` declaration

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 25

### --description--

You want your `hash` to start with a zero. Create a `while` loop that checks if `!hash.startsWith('0')` and put your `console.log` in the loop.

### --tests--

You should have `while (!hash.startsWith('0')) { }` below your `hash` declaration

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

If your initial hash starts with zero, you will not enter this loop. If it doesn't you want to look for a new hash until it does. At the top of your loop, increment your `nonce` with the `++` operator.

### --tests--

You should have `nonce++;` at the top of your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 27

### --description--

Below that, redefine your `hash` so that it creates a new hash using the same information as the original definition.

### --tests--

You should have `hash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();` in your `while` loop

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

Run your file.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The last line of your terminal output should print `hash = <hash>`, with `<hash>` being a hash that starts with one zero

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 33

### --description--

It went through your loop until it found a hash that starts with zero. The only difference when creating those values was the `nonce`, all the other info was the same.

Add a `const difficulty` variable above your loop. Give it a value of `2`.

### --tests--

You should have `const difficulty = 2` above your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 34

### --description--

In the condition of your `while` loop, add `.repeat(difficulty)` so that the hash needs to start with two zeros.

### --tests--

You should have `!hash.startsWith('0'.repeat(difficulty))` as your `while` loop condition

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 35

### --description--

Run your file again.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The last line of your terminal output should print `hash = <hash>`, with `<hash>` being a hash that starts with two zeros

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 36

### --description--

That one took quite a few more tries since it's harder to find a hash that starts with two zeros. Change the `difficulty` to `3`.

### --tests--

You should have `const difficulty = 3;` above your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 37

### --description--

Run the file again.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The last line of your terminal output should print `hash = <hash>`, with `<hash>` being a hash that starts with three zeros

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 38

### --description--

At the time of writing this, the `hash` for a block on a popular blockchain needs to start with 19 zeros, and takes trillions of guesses to find a nonce that will produce a hash. Change your `difficulty` to `4`.

### --tests--

You should have `const difficulty = 4;` above your `while` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 39

### --description--

Run `node mine-block.js` again. This one may take a little longer.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 40

### --description--

This is how the proof of work consensus method for adding blocks to a blockchain works. If you have a `nonce` that will produce the `hash` needed, it proves that you have spent computing power needed to find it.

Add the `nonce` property and value to your `newBlock`.

### --tests--

You should have a `nonce` property in the `newBlock` object set to the value of `nonce`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 41

### --description--

Because proof of work takes a lot of resources to find the nonce, the person that finds it is rewarded. Add a `const rewardTransaction` below your `newBlock` object, set it to an empty object literal.

### --tests--

You should have `const rewardTransaction = {}` below your `newBlock` object

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 42

### --description--

Add a `fromAddress` property to your new object. The reward transaction will add new tokens to your blockchain and won't have a sender, so set the value to `null`.

### --tests--

Your `rewardTransaction` object should have a `fromAddress: null` property

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 43

### --description--

Since you are the only person here mining blocks, give it a `toAddress` property set to `Me`.

### --tests--

Your `rewardTransaction` object should have a `toAddress: 'Me'` property

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 44

### --description--

Add an `amount` of `50` to the object for the reward amount.

### --tests--

Your `rewardTransaction` object should have an `amount: 50` property

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 45

### --description--

Uncomment the two places where you write to files.

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

## 46

### --description--

Change where you write the `transactions.json` file so it writes an array with your reward transaction as the only item.

### --tests--

You should have `writeTransaction([rewardTransaction])` at the bottom of your file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 50

### --description--

Lastly, change the difficulty of mining blocks back to `2` so it doesn't take too long to mine a block.

### --tests--

You should have `const difficulty = 2` in your `mine-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 47

### --description--

You will add more validation later on that verifies all your block hashes, making your existing blocks invalid. So you need to re-initialize your blockchain. First, open your `init-blockchain.js` file and import the `writeTransactions` function at the top with the other import.

### --tests--

You should have `import { writeBlockchain, writeTransactions } from 'blockchain-helpers.js';` at the top of your `init-blockchain.js` file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 47

### --description--

At the bottom of the file, use the function to write an empty array to your `transactions.json` file.

### --tests--

You should have `writeTransactions([])` at the bottom of your `init-blockchain.js` file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 47

### --description--

Run your command to re-initialize your blockchain.

### --tests--

You should run `node init-blockchain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `blockchain.json` file should be an empty array

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an emtpy array

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 48

### --description--

Open your `transactions.json` so you can see it, and use the terminal to add a transaction that sends `12` tokens from `You` to `Me`.

### --tests--

You should run `node add-transactions.js You Me 12` in the terminal

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

## 49

### --description--

Add another one, using the same two addresses, but send `16` tokens this time.

### --tests--

You should run `node add-transactions.js You Me 16` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with two transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 51

### --description--

Open your `blockchain.json` file, I recommend keeping it open next to the `transactions.json` file so you can see both. Then, mine a new block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `blockchain.json` file should be an array with one block (object)

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your block should have a `hash` that starts with two zeros

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your block should have a `nonce`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 52

### --description--

Your new block has a `hash` that starts with two zeros, and the `nonce` used to create it is included in the block. A reward transaction was added to the transaction pool. It will be added to the blockchain when the next block is mined. Add a transaction that sends `20` tokens from `Me` to `You`

### --tests--

You should run `node add-transactions.js Me You 20` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with two transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 53

### --description--

Mine another block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `blockchain.json` file should be an array with one block (object)

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your block should have a `hash` that starts with two zeros

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your block should have a `nonce`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 54

### --description--

This is fun. Add another transaction that sends `10` tokens from `Me` to `You`.

### --tests--

You should run `node add-transactions.js Me You 10` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with two transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 55

### --description--

Mine another block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `blockchain.json` file should be an array with one block (object)

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your block should have a `hash` that starts with two zeros

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your block should have a `nonce`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 56

### --description--

You are getting it. Remove the two `console.log` statements in your block mining file.

### --tests--

You should not have any `console.log` statements in your `mine-block.js` file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 57

### --description--

Now, you need to make it so your blockchain validates all the hash values. Open your `blockchain-helpers.js` file, and import the `sha256` function at the top of the file like you did in your `mine-block.js` file

### --tests--

You should have `import sha256 from 'crypto-js/sha256.js';` at the top of your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 58

### --description--

The `isValidChain` function is getting a little big. Add a few comments to help keep track of what is happening. Above the `for` loop, add `loop through blocks` as a single line comment

### --tests--

You should have `// loop through blocks` above the `for` loop in the `isValidChain` function of your `blockchain-helpers.js` file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 59

### --description--

Add another one that says `validate previous hash` above your `if` statement.

### --tests--

You should have `// validate previous hash` above your `if` statement

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 60

### --description--

Add one more that says `validate block hash` below the `if` statement, but inside the `for` loop.

### --tests--

You should have `// validate block hash` below your `if` statement

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 61

### --description--

In order to validate the hash of each block, you need all the information used to create it. Where you get the `previousHash` from the current block, also destruct the `nonce`, `hash`, and `transactions` from it.

### --tests--

You should descruct `nonce` from `blockchain[i]` in your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

You should descruct `hash` from `blockchain[i]` in your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

You should descruct `transactions` from `blockchain[i]` in your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 62

### --description--

Now you need to recreate the `hash` and see if matches the actual hash. Below your `validate block hash` comment, create a `const testBlockHash` variable that creates a hash using the `sha256` function in the same way that the hash is created when you mine the block.

Here's a reminder of the syntax: `sha256(<content>).toString();`. The content should be a concatenation of the `nonce`, the `hash` of the previous block, and a stringified version of the `transactions`

### --tests--

You should have `const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();` below your `validate block hash` comment

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 63

### --description--

Now you have recreated the hash using the same info. Below that, add an empty `if` condition that checks if that hash is not equal (`!=`) to the `hash` of the current block.

### --tests--

You should have `if (testBlockHash != hash) { }` at the bottom of your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 64

### --description--

If the hashes don't match, return `false`.

### --tests--

You should have `return false;` in the `if` condition for when the block hashes don't match

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 65

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
assert(false);
```

## 66

### --description--

All your blocks are valid. In your `blockchain.json` file, add a `.1` to the end of the `nonce` of the latest block.

### --tests--

The `nonce` of the last block in `blockchain.json` should end with `.1`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 67

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
assert(false);
```

## 68

### --description--

The hash validation didn't work because once block didn't have correct `nonce` needed to recreate the hash. Remove the `.1` you added.

### --tests--

The `nonce` of the last block in `blockchain.json` should not end with `.1`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your blockchain should be valid

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 69

### --description--

Validate it one more time to make sure it's valid.

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
assert(false);
```

## 70

### --description--

Awesome. Transaction also include a unique hash. You will add that next. Open your `add-transaction.js` file and import the `sha256` function at the top.

### --tests--

You should have `import sha256 from 'crypto-js/sha256.js';` at the top of your `add-transaction.js` file

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 71

### --description--

Above your `newTransaction` declaration, create a `const hash` variable that creates a hash using a concatenation of the `fromAddress`, `toAddress`, and `amount`. Here's a reminder of the syntax: `sha256(<content>).toString();`.

### --tests--

You should have `const hash = sha256(fromAddress + toAddress + amount).toString();` above your `newTransaction` declaration

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 72

### --description--

Add a `hash` property to the `newTransaction` object.

### --tests--

Your `newTransaction` object should have a `hash` property

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 73

### --description--

You will need to validate these as well, so re-initalize your blockchain again.

### --tests--

You should run `node init-blockchain.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `blockchain.json` file should be an empty array

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an emtpy array

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 74

### --description--

Open your two JSON files, so you can see both of them. Then, add a transaction that sends `15` tokens from `Me` to `You`.

### --tests--

You should run `node add-transactions.js Me You 15` in the terminal

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

## 75

### --description--

The transaction now includes its own unique hash created from the information in the transaction. Add another one that sends `25` tokens using the same two addresses.

### --tests--

You should run `node add-transactions.js Me You 25` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with two transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 76

### --description--

Mine a block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `blockchain.json` file should be an array with two blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 77

### --description--

Add a transaction that sends `5` tokens from `You` to `Me`.

### --tests--

You should run `node add-transactions.js You Me 5` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with two transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The second transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 78

### --description--

Add another one that sends `10` tokens using the same two addresses.

### --tests--

You should run `node add-transactions.js You Me 10` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with three transactions (objects) in it

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

The third transaction should have the correct three properties and values

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 79

### --description--

Mine another block.

### --tests--

You should run `node mine-block.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `blockchain.json` file should be an array with three blocks (objects)

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

Your `transactions.json` file should be an array with one transaction (object)

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 80

### --description--

Now you need to validate all the transaction hashes. In your `blockchain-helpers.js` function, find the `isValidChain` function again and add a `loop over transactions` comment at the bottom of the `for` loop so you can go through all the transactions of each block.

### --tests--

You should have `// validate previous hash` at the bottom of your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 81

### --description--

Below the comment, add another `for` loop, similar to the one used for looping over the blocks. Use `let j = 0` to initialize the loop, and have it go while `j < transactions.length`.

### --tests--

You should have `for (let j = 0; j < transactions.length; j++) { }` below your `loop over transactions` comment

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 82

### --description--

In your loop, destruct the only four properties from the current transaction.

### --tests--

You should have `const { fromAddress, toAddress, amount, hash } = transactions[j];` at the top of your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 83

### --description--

Below that, add a `don't validate reward transaction` comment.

### --tests--

You should have `// don't validate reward transaction` at the bottom of your `for` loop

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 84

### --description--

The `fromAddress` is `null` for reward transactions, so add an `if (fromAddress)` statement that is empty for now.

### --tests--

You should have `if (fromAddress) { }` below your `don't validate reward transaction` comment

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 85

### --description--

Add a `validate transaction hash` comment in your `if` statement.

### --tests--

You should have `// validate transaction hash` in your `if (fromAddress)` statement

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 86

### --description--

Below the new comment, add a `const testTransactionHash` variable that creates new hash in the same way the hash was created when the transaction was added.

### --tests--

You should have `const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();` below your `validate transaction hash` comment

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 87

### --description--

Next, add an empty `if` condition that checks the new hash is not equal to the original hash.

### --tests--

You should have `if (testTransactionHash != hash) { }` below your `testTransactionHash` declaration

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 88

### --description--

If the hashes don't match, return `false`.

### --tests--

You should have `return false;` in the `if` condition for when the transaction hashes don't match

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 89

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
assert(false);
```

## 90

### --description--

In the `blockchain.json` file, change the amount of the most recent transaction to `1000`.

### --tests--

The most recent transaction in your blockchain should have an `amount` of `1000`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 91

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
assert(false);
```

## 92

### --description--

The transaction hash validation doesn't pass because someone tampered with a transaction amount. Change the amount back to `10`.

### --tests--

The most recent transaction in your blockchain should have an `amount` of `10`

```js
await new Promise(res => setTimeout(res, 1000));
assert(false);
```

## 93

### --description--

Validate your chain again to make sure it's valid again.

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
assert(false);
```

## 94

### --description--

There's one last thing you are going to do here, create a function to get 
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
