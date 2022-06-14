# Web3 - Build a Web3 Client-Side Package for Your dApp

## 1

### --description--

You will be building a client-side package in the form of a class that can be used to interact with a Web3 provider.

**User Stories:**

-

### --tests--

Your package should export a class with the handle `Web3`.

```js

```

Your `Web3` class should be initialised with a `URL` parseable argument.

```js

```

Your `Web3` class should have a `provider` property that is an instance of `URL` constructed from the only initialiser argument.

```js

```

Your `Web3` class should have an asynchronous method with the handle `call`.

```js

```

`call` should accept one argument which is an RPC object literal.

```js

```

Your `Web3` class should have a method with the handle `createSmartContract`.?

```js

```

Your `Web3` class should have an asynchronous method with the handle `getBalance`.

```js

```

`getBalance` should accept one argument which is a string pointing to an account.

```js

```

Your `Web3` class should have an asynchronous method with the handle `transfer`.

```js

```

`transfer` should accept two arguments. The first is a string pointing to the desired recipient account. The second is a number representing the amount to transfer.

```js

```

Your `Web3` class should have an asynchronous method with the handle `createIDL`.

```js

```

`createIDL` should accept one argument which is an object literal representing the IDL of a smart contract.

```js

```

`createIDL` should make a `POST /idl` request to the `href` of `this.provider`, with the `idl` argument as the body.

```js

```

## --fcc-end--
