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
const Web3 = await import("./index.js");
assert.exists(Web3);
```

Your `Web3` class should have a `provider` property that is an instance of `URL` constructed from the initialiser argument.

```js
const Web3 = await import("./index.js");
const web3 = new Web3("http://localhost:3001");
assert.instanceOf(web3.provider, URL);
assert.equal(web3.provider.href, "http://localhost:3001/");
```

Your `Web3` class should have a `setClientAddress` method that takes a `string` as an argument and sets the `address` property of the class to the argument.

```js
const Web3 = await import("./index.js");
const web3 = new Web3("http://localhost:3001");
assert.isFunction(web3.setClientAddress); // TODO: Is this a thing?
web3.setClientAddress("Tom_the_tomnificent");
assert.equal(web3.address, "Tom_the_tomnificent");
```

Your `Web3` class should have an asynchronous method with the handle `call`.

```js
const Web3 = await import("./index.js");
const web3 = new Web3("http://localhost:3001");
assert.isFunction(web3.call);
```

The `call` method should make a `POST /call-smart-contract` request to the `href` of `this.provider`.

```js
const Web3 = await import("./index.js");
const web3 = new Web3("http://localhost:3001");
await web3.call("todo");
const tests = await (await fetch("http://localhost:3001/tests")).json();
```

The `POST /call-smart-contract` request should have a body including the JSON stringified version of the RPC object literal.

```js

```

The `POST /call-smart-contract` request should have a `Content-Type` header set to `application/json`.

```js

```

The `POST /call-smart-contract` request should have a body including the JSON stringified version of `{address: this.address}`.

```js

```

The `call` method should return a promise that resolves with the object literal of the response body.

```js

```

Your `Web3` class should have a method with the handle `createSmartContract`.?

```js
const Web3 = await import("./index.js");
const web3 = new Web3("http://localhost:3001");
assert.isFunction(web3.createSmartContract);
```

Your `Web3` class should have an asynchronous method with the handle `getBalance`.

```js
const Web3 = await import("./index.js");
const web3 = new Web3("http://localhost:3001");
assert.isFunction(web3.getBalance);
```

Your `Web3` class should have an asynchronous method with the handle `transfer`.

```js
const Web3 = await import("./index.js");
const web3 = new Web3("http://localhost:3001");
assert.isFunction(web3.transfer);
```

## --fcc-end--
