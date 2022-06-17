# Web3 - Build a Web3 Client-Side Package for Your dApp

## 1

### --description--

You will be building a client-side package in the form of a class that can be used to interact with a Web3 provider.

**User Stories:**

Your `Web3` class should have the following methods:

```ts
setClientAddress(address: string): void
```

```ts
call(rpcCall: Record<string, any>): Promise<Record<string, any>>
```

```ts
createSmartContract(idl: Record<string, any>): Promise<Record<string, any>>
```

```ts
getBalance(address: string): Promise<number>
```

```ts
transfer(to: string, amount: number): Promise<Record<string, any>>
```

```ts
createIDL(wasmJs: any, id: number): Promise<Record<string, any>>
```

### --tests--

Your package should export a class with the handle `Web3`.

```js

```

Your `Web3` class should have a `provider` property that is an instance of `URL` constructed from the initialiser argument.

```js

```

Your `Web3` class should have a `setClientAddress` method that takes a `string` as an argument and sets the `address` property of the class to the argument.

```js

```

Your `Web3` class should have an asynchronous method with the handle `call`.

```js

```

The `call` method should make a `POST /call-smart-contract` request to the `href` of `this.provider`.

```js

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

```

Your `Web3` class should have an asynchronous method with the handle `getBalance`.

```js

```

Your `Web3` class should have an asynchronous method with the handle `transfer`.

```js

```

Your `Web3` class should have an asynchronous method with the handle `createIDL`.

```js

```

`createIDL` should make a `POST /idl` request to the `href` of `this.provider`, with the `idl` argument as the body.

```js

```

## --fcc-end--
