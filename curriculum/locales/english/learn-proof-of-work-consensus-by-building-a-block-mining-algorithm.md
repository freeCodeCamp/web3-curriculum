# Web3 - Learn Proof of Work Consensus by Building a Block Mining Algorithm

## 1

### --description--

You left the last tutorial after creating your own blockchain. The blockchain is still in the blockchain.json file. For a quick recap on the process, add a new transaction to the pool that sends X coinds to Y...

run `node add-transaction.js You Me 2`

### --tests--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 2

### --description--

Add a new block...

run `node add-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 3

### --description--

run `node validate-chain.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 4

### --description--

Instead of just adding blocks, you will learn how they are mined.

run `mv add-block.js mine-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 5

### --description--

run `npm install crypto-js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 6

### --description--

In `mine-block.js`...

add `const SHA256 = require('crypto-js/sha256');`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 7

### --description--

add `const hash = SHA256('password').toString();`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 8

### --description--

add `console.log(hash)`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 9

### --description--

comment out `writeBlockchain(blockchain);` & `writeTransactions([rewardTransaction]);`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 10

### --description--

run `node mine-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 11

### --description--

run `node mine-block.js` again

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 12

### --description--

Change `password` to `passwords`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 13

### --description--

run `node mine-block.js` again

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 14

### --description--

Change `passwords` to `previousBlock.hash + JSON.stringify(transactions)`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 15

### --description--

run `node mine-block.js` again

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 16

### --description--

remove `Math.random()` and use `hash`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 17

### --description--

uncomment the two `write`'s

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 18

### --description--

run `node add-transaction.js You Me 4`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 19

### --description--

run `node mine-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 20

### --description--

run `node add-transaction.js You Me 6`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 21

### --description--

run `node mine-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 22

### --description--

change the `hash` to `let hash = '';`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 23

### --description--

add `let nonce = 0;`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 24

### --description--

add `while(!hash.startsWith('0')) {}` with the `console.log(hash)` in it

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 25

### --description--

add `nonce++;`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 26

### --description--

add `hash = SHA256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 27

### --description--

change the `console.log` to ``console.log(`nonce = ${nonce}`);``

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 28

### --description--

add ``console.log(`hash = ${hash}`)``

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 29

### --description--

comment out the two `write`'s

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 30

### --description--

run node add-transaction.js You Me 8

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 31

### --description--

run `node mine-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 32

### --description--

add `const difficulty = 2;`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 33

### --description--

add `.repeat(difficulty)`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 34

### --description--

run `node-mine-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 35

### --description--

change `difficulty` to `3`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 36

### --description--

run `node mine-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 37

### --description--

change difficulty to `4`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 38

### --description--

run `node mine-block.js` again

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 39

### --description--

add `nonce` to `newBlock`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 40

### --description--

add `const rewardTransaction = {}`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 41

### --description--

add `fromAddress: null`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 42

### --description--

add `toAddress: Me`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 43

### --description--

add `amount: 50`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 44

### --description--

uncomment two `write`'s

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 45

### --description--

change to `writeTransaction([rewardTransaction]);`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 46

### --description--

run `node init-blockchain.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 47

### --description--

run `node add-transaction You Me 12`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 48

### --description--

run `node add-transaction You Me 16`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 49

### --description--

change difficulty back to `2`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 50

### --description--

run `node mine-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 51

### --description--

run `node add-transaction Me You 20`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 52

### --description--

run `node mine-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 53

### --description--

run `node add-transaction Me You 10`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 54

### --description--

run `node mine-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 55

### --description--

Remove the two `console.log()`'s

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 56

### --description--

In `blockchain-helpers.js` -> isValidChain

add `const SHA256 = require('crypto-js/sha256');`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 57

### --description--

add comment

```
// loop through blocks
```

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 58

### --description--

add comment

```
validate previous hash
```

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 59

### --description--

add comment

```
validate block hash
```

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 60

### --description--

get nonce, hash and transactions from current block

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 61

### --description--

add `const testBlockHash = SHA256(currentBlock.nonce + previousBlock.hash + JSON.stringify(currentBlock.transactions)).toString();`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 62

### --description--

add `if (testBlockHash != currentBlock.hash) {}`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 63

### --description--

add `return false;`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 64

### --description--

run `node validate-chain.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 65

### --description--

tamper with nonce

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 66

### --description--

run `node validate-chain.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 67

### --description--

untamper nonce

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 68

### --description--

run `node validate-chain.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 69

### --description--

in add-transaction.js

add const SHA256 = require('crypto-js/sha256');

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 70

### --description--

add const hash = SHA256(fromAddress + toAddress + amount).toString()

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 71

### --description--

add hash to newTransaction

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 72

### --description--

run node init-blockchain.js

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 73

### --description--

run node add-transaction.js Me You 15

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 74

### --description--

run node add-transaction.js Me You 25

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 75

### --description--

run `node mine-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 76

### --description--

run node add-transaction.js You Me 4

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 77

### --description--

run node add-transaction.js You Me 8

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 78

### --description--

run `node mine-block.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 79

### --description--

In blockchain-helpers.js -> isValidChain()

add comment // loop over transactions

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 80

### --description--

add

```
for (let j = 0; j < transactions.length; j++) {}
```

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 81

### --description--

add

```
const { fromAddress, toAddress, amount, hash } = transactions[j];
```

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 82

### --description--

add comment // don't validate reward transaction

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 83

### --description--

add if (fromAddress) {}

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 84

### --description--

add comment 

```
// validate transaction hash
```

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 85

### --description--

add const testTransactionHash = SHA256(fromAddress + toAddress + amount).toString();

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 86

### --description--

add empty 

```
if (testTransactionHash != hash) {}
```

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 87

### --description--

add return false;

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 88

### --description--

run `node validate-chain.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 89

### --description--

tamper with transaction

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 90

### --description--

run `node validate-chain.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 91

### --description--

change transaction back

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 92

### --description--

run `node validate-chain.js`

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 93

### --description--

In blockchain-helpers.js - getAddressBalance

add function getAddressBalance(address) {}

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 94

### --description--

add const blockchain = getBlockchain();

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 95

### --description--

add let balance = 0;

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 96

### --description--

add comment // loop over blocks

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 97

### --description--

add for (let i = 1; i < blockchain.length; i++) {}

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 98

### --description--

add const { transactions } = blockchain[i]; 

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 99

### --description--

add comment // loop over transactions

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 100

### --description--

add for (let j = 0; j < transactions.length; j++) {

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 101

### --description--

add const { fromAddress, toAddress, amount } = transactions[j]

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 102

### --description--

add if (fromAddress === address) {}

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 103

### --description--

add balance -= amount;

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 104

### --description--

add if (toAddress === address) {

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 105

### --description--

add balance += amount;

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 106

### --description--

add return balance;

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 107

### --description--

add module.exports.getAddressBalance = getAddressBalance;

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 108

### --description--

touch get-address-balance.js

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 109

### --description--

in get-address-balance.js
add const { getAddressBalance } = require('./blockchain-helpers');

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 110

### --description--

add const nameOfAddress = process.argv[2];

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 111

### --description--

add const balance = getAddressBalance(nameOfAddress);

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 112

### --description--

add console.log(`The balance for ${nameOfAddress} is ${balance}`);

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 113

### --description--

run node get-address-balance.js Me

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 114

### --description--

run node get-address-balance.js You

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 115

### --description--

add getAddressBalance to import

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 116

### --description--

add const addressBalance = getAddressBalance(fromAddress);

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 117

### --description--

add if (addressBalance >= amount) {}

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 118

### --description--

add else { console.log('You do not have enough funds to make that transaction'); }

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 119

### --description--

run node add-transaction Me You 100

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 120

### --description--

run node add-transaction Me You 10

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 121

### --description--

in init-blockchain.js

add writeTransactions to import

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 122

### --description--

add writeTransactions([])

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 123

### --description--

run node init-blockchain

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 124

### --description--

run node mine-block x2

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--

## 125

### --description--

run node add-transaction + same args

### --test--

Auto-pass test

```js
assert(true);
```

### --seed--

#### --cmd--
