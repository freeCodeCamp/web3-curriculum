# Web3 - Learn Intermediate Rust by Building a Blockchain

## 1

### --description--

You will build a Proof of Stake blockchain using Rust.

This project comes with a boilerplate including the following:

- `/blockchain` - the only directory you will be working in
- `/client` - the directory containing the code for the clientside code
- `/node` - the directory containing the server-side code managing a node in the network

**Commands**

- Run all unit tests: `cargo test --lib`
- Run all integration tests: `wasm-pack test --chrome` or `wasm-pack test --firefox --headless`

**Useful Resources**

- [Rust Course](https://www.freecodecamp.org/news/rust-in-replit/)
- [Rust and WASM](https://rustwasm.github.io/docs/book/)

**Types**

```typescript
type Account = {
  address: string;
  staked: number;
  tokens: number;
}

type Block = {
  data: Account[],
  hash: string,
  id: number,
  nonce: number,
  previous_hash: string,
  timestamp: number,
  next_miner: Account['address'],
  next_validators: Account['address'][],
}

type Chain = Block[];

enum Event = {
  AddAccount = "AddAccount",
  Punish = "Punish",
  Reward= "Reward",
  Stake = "Stake",
  Unstake = "Unstake",
}

type Transfer = {
  Transfer: [string, number]
}

type NodeState = {
  chain: Chain;
  network: Account['address'][];
  transaction_pool: Transaction[];
}

type Transaction = {
  address: Account['address'];
  event: Event | Transfer;
}
```

**User Stories:**

- Your blockchain uses Proof of Stake consensus
- Your blockchain uses `wasm-pack` to compile the Rust code to JavaScript for Nodejs
- Your blockchain exports an `initialise_chain` function that returns `Result<JsValue, JsError>`
- Your blockchain exports a `mine_block` function that returns `Result<JsValue, JsError>`
  - This function accepts a `JsValue` with the `NodeState` type
- Your blockchain exports a `validate_block` function that returns `Result<bool, JsError>`
  - This function accepts a `JsValue` with the `Block[]` type
- Your blockchain passes all unit and integration tests

### --tests--

Your `blockchain` library should pass all `account::tests` unit tests.

```js
const { stdout } = await __helpers.getCommandOutput(
  'cargo test --lib account::tests',
  'blockchain'
);
assert.match(stdout, /test result: ok/);
```

Your `blockchain` library should pass all `block::tests` unit tests.

```js
const { stdout } = await __helpers.getCommandOutput(
  'cargo test --lib block::tests',
  'blockchain'
);
assert.match(stdout, /test result: ok/);
```

Your `blockchain` library should pass all `chain::tests` unit tests.

```js
const { stdout } = await __helpers.getCommandOutput(
  'cargo test --lib chain::tests',
  'blockchain'
);
assert.match(stdout, /test result: ok/);
```

Your `blockchain` library should pass all `lib::tests` unit tests.

```js
const { stdout } = await __helpers.getCommandOutput(
  'cargo test --lib lib::tests',
  'blockchain'
);
assert.match(stdout, /test result: ok/);
```

Your `blockchain` library should pass all `mine_block` integration tests.

```js
// Execute `wasm-pack test --firefox --headless -- --test mine_block`, and pipe output to tests client
const { stdout } = await __helpers.getCommandOutput(
  'wasm-pack test --firefox --headless -- --test mine_block',
  'blockchain'
);
assert.match(stdout, /test result: ok/);
```

Your `blockchain` library should pass all `validate_block` integration tests.

```js
const { stdout } = await __helpers.getCommandOutput(
  'wasm-pack test --firefox --headless -- --test validate_block',
  'blockchain'
);
assert.match(stdout, /test result: ok/);
```

## 2
