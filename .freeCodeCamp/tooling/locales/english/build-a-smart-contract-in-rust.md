# Web3 - Build a Smart Contract in Rust

## 1

### --description--

You will build a Smart Contract using Rust.

This project comes with a boilerplate including the following:

- `/smart-contract` - the only directory you will be working in
- `/client` - the directory containing the code for the clientside code
- `/node` - the directory containing the server-side code managing a node in the network

**Commands**

- Run all unit tests: `cargo test --lib`
- Run all integration tests: `wasm-pack test --chrome` or `wasm-pack test --firefox --headless`

**User Stories:**

- Your smart contract uses `wasm-pack` to compile the Rust code to JavaScript for Nodejs
- Your smart contract exports an `initialise` function that returns `Result<JsValue, JsError>`
  - This function takes no arguments
  - This function returns a `Context` wrapped in a `JsValue`
- Your smart contract exports a `set_click` function that returns `Result<JsValue, JsError>`
  - This function accepts a `JsValue` with the `Context` type
  - This function also accepts a `String` as the second argument which is the address of the user who clicked the button
- Your smart contract exports a `get_contract_account` function that returns `Result<JsValue, JsError>`

### --tests--

Your smart contract should pass all `lib::tests` unit tests.

```js
const { stdout } = await __helpers.getCommandOutput(
  "cargo test --lib lib::tests",
  "../build-a-smart-contract-in-rust"
);
assert.match(stdout, /test result: ok/);
```

Your smart contract should pass all `initialise` integration tests.

```js
// Execute `wasm-pack test --firefox --headless -- --test mine_block`, and pipe output to tests client
const { stdout } = await __helpers.getCommandOutput(
  "wasm-pack test --firefox --headless -- --test initialise",
  "../build-a-smart-contract-in-rust"
);
assert.match(stdout, /test result: ok/);
```

Your smart contract should pass all `set_click` integration tests.

```js
// Execute `wasm-pack test --firefox --headless -- --test mine_block`, and pipe output to tests client
const { stdout } = await __helpers.getCommandOutput(
  "wasm-pack test --firefox --headless -- --test set_click",
  "../build-a-smart-contract-in-rust"
);
assert.match(stdout, /test result: ok/);
```

Your smart contract should pass all `get_contract_account` integration tests.

```js
// Execute `wasm-pack test --firefox --headless -- --test mine_block`, and pipe output to tests client
const { stdout } = await __helpers.getCommandOutput(
  "wasm-pack test --firefox --headless -- --test get_contract_account",
  "../build-a-smart-contract-in-rust"
);
assert.match(stdout, /test result: ok/);
```

## --fcc-end--
