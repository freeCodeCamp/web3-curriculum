# Web3 - Build a Web3 Client-Side Package for Your dApp

## 1

### --description--

You will be building a client-side package in the form of a class that can be used to interact with a Web3 provider.

The `fixture/` directory should **not** be altered.

An example provider exists in `fixture/provider.js`. An example client using your `Web3` package exists in `fixture/client/`. You can view the client at `http://localhost:3001/`.

**User Stories:**

Your `Web3` class should have the following methods:

```ts
setClientAddress(address: string): void
```

```ts
call(rpcCall: Record<string, any>): Promise<Record<string, any>>
```

```ts
initSmartContract(idl: Record<string, any>): Promise<Record<string, any>>
```

```ts
getBalance(address: string): Promise<number>
```

```ts
transfer(to: string, amount: number): Promise<Record<string, any>>
```

### --tests--

Your package should export a class with the handle `Web3`.

```js
assert.exists(Web3);
```

Your `Web3` class should have a `provider` property that is an instance of `URL` constructed from the initialiser argument.

```js
const web3 = new Web3("http://localhost:3001");
assert.instanceOf(web3.provider, URL);
assert.equal(web3.provider.href, "http://localhost:3001/");
```

Your `Web3` class should have a `setClientAddress` method that takes a `string` as an argument and sets the `address` property of the class to the argument.

```js
const web3 = new Web3("http://localhost:3001");
assert.isFunction(web3.setClientAddress);
web3.setClientAddress("Tom_the_tomnificent");
assert.equal(web3.address, "Tom_the_tomnificent");
```

Your `Web3` class should have an asynchronous method with the handle `call`.

```js
const web3 = new Web3("http://localhost:3001");
assert.isFunction(web3.call);
```

The `call` method should make a `POST /call-smart-contract` request to the `href` of `this.provider`.

```js
const web3 = new Web3("http://localhost:3001");
try {
  await web3.call("todo");
} catch (e) {}
const tests = await (await fetch("http://localhost:3001/tests")).json();
assert.isTrue(tests.some((t) => t.url === "/call-smart-contract"));
```

The `POST /call-smart-contract` request should have a body including the JSON stringified version of the RPC object literal.

```js
const rpc = {
  method: "get_contract_account",
  args: ["test", 1],
  id: 0,
};
const web3 = new Web3("http://localhost:3001");
try {
  await web3.call(rpc);
} catch (e) {}
const tests = await (await fetch("http://localhost:3001/tests")).json();
assert.isTrue(tests.some((t) => t.url === "/call-smart-contract"));
assert.deepEqual(tests[0]?.body, { ...rpc, address: null });
```

The `POST /call-smart-contract` request should have a `Content-Type` header set to `application/json`.

```js
const rpc = {
  method: "todo",
  args: ["test", 1],
  id: 0,
};
const web3 = new Web3("http://localhost:3001");
try {
  await web3.call(rpc);
} catch (e) {}
const tests = await (await fetch("http://localhost:3001/tests")).json();
assert.isTrue(tests.some((t) => t.url === "/call-smart-contract"));
assert.deepEqual(tests[0]?.headers, { "Content-Type": "application/json" });
```

The `POST /call-smart-contract` request should have a body including the JSON stringified version of `{address: this.address}`.

```js
const rpc = {
  method: "todo",
  args: ["test", 1],
  id: 0,
};
const web3 = new Web3("http://localhost:3001");
web3.setClientAddress("Tom_the_tomnificent");
try {
  await web3.call(rpc);
} catch (e) {}
const tests = await (await fetch("http://localhost:3001/tests")).json();
assert.isTrue(tests.some((t) => t.url === "/call-smart-contract"));
assert.deepEqual(tests[0]?.body, { ...rpc, address: "Tom_the_tomnificent" });
```

The `call` method should return a promise that resolves with the object literal of the response body.

```js
const rpc = {
  method: "get_contract_account",
  args: [],
  id: 0,
};
const web3 = new Web3("http://localhost:3001");
const response = await web3.call(rpc);
assert.deepEqual(response, { total_clicks: 0, clickers: [] });
```

If the response body contains an `error` property, `call` throws an `Error` with the value of the `error` property.

```js

```

Your `Web3` class should have an asynchronous method with the handle `initSmartContract`.

```js
const web3 = new Web3("http://localhost:3001");
assert.isFunction(web3.initSmartContract);
```

The `initSmartContract` method should return an object literal consisting of ...

```js

```

Your `Web3` class should have an asynchronous method with the handle `getBalance`.

```js
const web3 = new Web3("http://localhost:3001");
assert.isFunction(web3.getBalance);
```

Your `Web3` class should have an asynchronous method with the handle `transfer`.

```js
const web3 = new Web3("http://localhost:3001");
assert.isFunction(web3.transfer);
```

### --before-all--

```js
await fetch("http://localhost:3001/tests", { method: "DELETE" });
const Web3 = (
  await import(
    "../../build-a-web3-client-side-package-for-your-dapp/web3/index.js"
  )
).default;
global.Web3 = Web3;
```

## --fcc-end--
