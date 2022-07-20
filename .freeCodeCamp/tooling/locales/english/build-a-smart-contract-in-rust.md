# Web3 - Build a Smart Contract in Rust

## 1

### --description--

You will build a Smart Contract using Rust.

You are started with Rust library consisting of all the unit and integration tests you are expected to pass. The boilerplate already contains the necessary crates to complete the user stories.

You will be required to define structs and functions matching those used in the tests.

**Commands**

- Run all unit tests: `cargo test --lib`
- Run all integration tests: `wasm-pack test --firefox --headless`

_Note: You need to run the tests from within the library directory._

**User Stories:**

- Your smart contract uses `wasm-pack` to compile the Rust code to JavaScript for Nodejs
- Your smart contract exports an `initialise` function that returns `Result<JsValue, JsError>`
  - This function takes no arguments
  - This function returns a `Context` wrapped in a `JsValue`
- Your smart contract exports a `set_click` function that returns `Result<JsValue, JsError>`
  - This function accepts a `JsValue` with the `Context` type
  - This function also accepts a `String` as the second argument which is the address of the user who clicked the button
- Your smart contract exports a `get_contract_account` function that returns `Result<JsValue, JsError>`

**Useful Resources:**

- [WebAssembly - Rust Programming Language](https://www.rust-lang.org/what/wasm)
- [RustWASM Book](https://rustwasm.github.io/docs/book/)
- [Compiling from Rust to WebAssembly - WebAssembly | MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)
- [wasm-bindgen guide](https://rustwasm.github.io/wasm-bindgen/)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/)

### --tests--

Your smart contract should pass all `lib::tests` unit tests.

```js
const { stdout } = await __helpers.getCommandOutput(
  'cargo test --lib lib::tests',
  __projectLoc
);
assert.match(stdout, /test result: ok/);
```

Your smart contract should pass all `initialise` integration tests.

```js
// Execute `wasm-pack test --firefox --headless -- --test mine_block`, and pipe output to tests client
const { stdout } = await __helpers.getCommandOutput(
  'wasm-pack test --firefox --headless -- --test initialise',
  __projectLoc
);
assert.match(stdout, /test result: ok/);
```

Your smart contract should pass all `set_click` integration tests.

```js
// Execute `wasm-pack test --firefox --headless -- --test mine_block`, and pipe output to tests client
const { stdout } = await __helpers.getCommandOutput(
  'wasm-pack test --firefox --headless -- --test set_click',
  __projectLoc
);
assert.match(stdout, /test result: ok/);
```

Your smart contract should pass all `get_contract_account` integration tests.

```js
// Execute `wasm-pack test --firefox --headless -- --test mine_block`, and pipe output to tests client
const { stdout } = await __helpers.getCommandOutput(
  'wasm-pack test --firefox --headless -- --test get_contract_account',
  __projectLoc
);
assert.match(stdout, /test result: ok/);
```

### --before-all--

```js
global.__projectLoc = 'build-a-smart-contract-in-rust';
```

## --fcc-end--
