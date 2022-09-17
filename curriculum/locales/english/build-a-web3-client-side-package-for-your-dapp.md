# Web3 - Build a Web3 Client-Side Package for Your dApp

## 1

### --description--

You will be building a client-side package in the form of a class that can be used to interact with a Web3 provider. The Web3 provider is a REST API your package will be making requests to in the form of _RPC_ calls.

**Instruction**:

You should work entirely within the `build-a-web3-client-side-package-for-your-dapp/` directory.

You have been given boilerplate in `web3/index.js`.

The `node/` directory should **not** be altered.

An example provider exists in `node/provider.js`.<br />
An example client using your `Web3` package exists in `client/`.<br />
An example _IDL_ exists in `node/idl.json`.

**User Stories:**

Your `Web3` class should implement the following methods:

```ts
setClientAddress(address: string): void
```

1. `setClientAddress` should set the class `address` property to the given address.

```ts
call(rpcCall: Record<string, any>): Promise<Record<string, any>>
```

2. `call` should accept an RPC call object literal.
3. `call` should make a `POST /call-smart-contract` to the `href` of the `provider` property.

- The `body` of the `POST` should be the RPC call object literal and the `address` property of the `Web3` class.

4. `call` should return the `result` property of the `HTTP` response, or throw an error if the response contains an `error` property.

```ts
initSmartContract(idl: Record<string, any>): Record<string, any>>
```

5. `initSmartContract` should accept an IDL object literal, and return the contract instance of callable methods.

- The callable methods should return a promise resolving to the result of the `call` method.

- Here is an example of the input and its output:

```js
const IDL = {
  id: 20,
  instructions: [
    {
      handle: 'getFavouriteNumber',
      args: ['string']
    },
    {
      handle: 'setFavouriteNumber',
      args: ['string', 'number']
    }
  ]
};
const web3 = new Web3();
const smartContract = web3.initSmartContract(IDL);
await smartContract.setFavouriteNumber('my_address', 24);
const favouriteNumber = await smartContract.getFavouriteNumber('my_address');
assert.equal(favouriteNumber, 24);
```

```ts
getBalance(address?: string): Promise<number>
```

6. `getBalance` should accept an address, and return a promise that resolves with the balance of the given address.
7. `getBalance` should make a `POST /get-balance` to the `href` of the `provider` property.

- The `body` of the `POST` should be the `address` parameter, if one exists, or the `address` property of the `Web3` class.

8. `getBalance` should return the `result` property of the `HTTP` response, or throw an error if the response contains an `error` property.

```ts
transfer({from, to, amount}: {from?: string; to: string; amount: number;}): Promise<Record<string, any>>
```

9. `transfer` should accept an object literal with the following properties:

- `from`: the address to send the funds from.
  - If this is not provided, the `address` property of the `Web3` class should be used.
- `to`: the address to send the funds to.
- `amount`: the amount of funds to send.

10. `transfer` should return a promise that resolves with the result of the transfer.
11. `transfer` should make a `POST /transfer` to the `href` of the `provider` property.

- The `body` of the `POST` should be the function parameter.

12. `transfer` should return the `result` property of the `HTTP` response, or throw an error if the response contains an `error` property.

**Notes**:

An _IDL_ describes a contract's interface. Specifically, it describes the callable methods on a contract, as well as the expected types of its parameters.

The `URL` API is useful for constructing the URLs for the requests:

- https://developer.mozilla.org/en-US/docs/Web/API/URL/URL

### --tests--

Your package should export a class with the handle `Web3`.

```js
// 1
assert.exists(Web3);
```

Your `Web3` class should have a `provider` property that is an instance of `URL` constructed from the initialiser argument.

```js
// 2
const web3 = new Web3('http://localhost:3001');
assert.instanceOf(web3.provider, URL);
assert.equal(web3.provider.href, 'http://localhost:3001/');
```

Your `Web3` class should have a `setClientAddress` method that takes a `string` as an argument and sets the `address` property of the class to the argument. _Other tests depend on this API_

```js
// 3
const web3 = new Web3('http://localhost:3001');
assert.isFunction(web3.setClientAddress);
web3.setClientAddress('Tom_the_tomnificent');
assert.equal(web3.address, 'Tom_the_tomnificent');
```

Your `Web3` class should have an asynchronous method with the handle `call`.

```js
// 4
const web3 = new Web3('http://localhost:3001');
assert.isFunction(web3.call);
```

The `call` method should make a `POST /call-smart-contract` request to the `href` of `this.provider`.

```js
// 5
const rpc = {
  method: 'get_contract_account',
  args: [],
  id: 0
};
const web3 = new Web3('http://localhost:3001');
web3.setClientAddress('fcc_test_5');
try {
  await web3.call(rpc);
} catch (e) {}
const tests = await (await fetch('http://localhost:3001/tests')).json();
assert(
  tests.some(t => t.url === '/call-smart-contract'),
  '`new Web3(provider).call()` should make a `POST /call-smart-contract` request to `this.provider`'
);
```

The `POST /call-smart-contract` request should have a body including the JSON stringified version of the RPC object literal.

```js
// 6
const rpc = {
  method: 'test_6',
  args: [],
  id: 0
};
const web3 = new Web3('http://localhost:3001');
web3.setClientAddress('fcc_test_6');
try {
  await web3.call(rpc);
} catch (e) {}
const tests = await (await fetch('http://localhost:3001/tests')).json();
const test = tests.find(t => t.body?.method === 'test_6');
assert.deepInclude(test?.body, { ...rpc });
```

The `POST /call-smart-contract` request should have a `Content-Type` header set to `application/json`.

```js
// 7
const rpc = {
  method: 'test_7',
  args: [],
  id: 0
};
const web3 = new Web3('http://localhost:3001');
try {
  await web3.call(rpc);
} catch (e) {}
const tests = await (await fetch('http://localhost:3001/tests')).json();
const test = tests.find(t => t.body?.method === 'test_7');
assert.deepInclude(test.headers, { 'content-type': 'application/json' });
```

The `POST /call-smart-contract` request should have a body including the JSON stringified version of `{address: this.address}`.

```js
// 8
const rpc = {
  method: 'test_8',
  args: [],
  id: 0
};
const web3 = new Web3('http://localhost:3001');
web3.setClientAddress('fcc_test_8');
assert.equal(
  web3.address,
  'fcc_test_8',
  '`setClientAddress` should set `this.address`'
);
try {
  await web3.call(rpc);
} catch (e) {}
const tests = await (await fetch('http://localhost:3001/tests')).json();
const test = tests.find(t => t.body?.address === 'fcc_test_8');
assert.exists(test);
assert.deepInclude(test?.body, { address: 'fcc_test_8' });
```

The `call` method should return a promise that resolves with the `result` property of the response body.

```js
// 9
const rpc = {
  method: 'get_contract_account',
  args: [],
  id: 0
};

const web3 = new Web3('http://localhost:3001');
web3.setClientAddress('fcc_test_9');
let response;
try {
  response = await web3.call(rpc);
} catch (e) {}
assert.deepEqual(response, { total_clicks: 0, clickers: [] });
```

If the response body contains an `error` property, `call` throws an `Error` with the value of the `error` property.

```js
// 10
const web3 = new Web3('http://localhost:3001');
try {
  await web3.call({ test: 'todo' });
  assert.fail("'call' should have thrown");
} catch (e) {
  if (e instanceof AssertionError) {
    throw e;
  }
  assert.equal(e.message, "Smart contract with id 'undefined' not found");
}
```

Your `Web3` class should have an asynchronous method with the handle `initSmartContract`.

```js
// 11
const web3 = new Web3('http://localhost:3001');
assert.isFunction(web3.initSmartContract);
```

The `initSmartContract` method should return an object literal including a `set_click` property, when called with the example `idl`.

```js
// 12
const web3 = new Web3('http://localhost:3001');
const smartContract = web3.initSmartContract(
  (
    await import(
      '../../build-a-web3-client-side-package-for-your-dapp/node/idl.json',
      { assert: { type: 'json' } }
    )
  ).default
);
assert.isObject(smartContract);
assert.exists(smartContract.set_click);
```

The `initSmartContract` method should return an object literal including a `get_contract_account` property, when called with the example `idl`.

```js
// 13
const web3 = new Web3('http://localhost:3001');
const smartContract = web3.initSmartContract(
  (
    await import(
      '../../build-a-web3-client-side-package-for-your-dapp/node/idl.json',
      { assert: { type: 'json' } }
    )
  ).default
);
assert.isObject(smartContract);
assert.exists(smartContract.get_contract_account);
```

The `set_click` property should be a function.

```js
// 14
const web3 = new Web3('http://localhost:3001');
const smartContract = web3.initSmartContract(
  (
    await import(
      '../../build-a-web3-client-side-package-for-your-dapp/node/idl.json',
      { assert: { type: 'json' } }
    )
  ).default
);
assert.isFunction(smartContract.set_click);
```

The `get_contract_account` property should be a function.

```js
// 15
const web3 = new Web3('http://localhost:3001');
const smartContract = web3.initSmartContract(
  (
    await import(
      '../../build-a-web3-client-side-package-for-your-dapp/node/idl.json',
      { assert: { type: 'json' } }
    )
  ).default
);
assert.isFunction(smartContract.get_contract_account);
```

The `set_click` function should validate that one argument of type `string` is passed, when called. Validation is done by throwing an `Error` if the argument is not a string.

```js
// 16
const web3 = new Web3('http://localhost:3001');
const smartContract = web3.initSmartContract(
  (
    await import(
      '../../build-a-web3-client-side-package-for-your-dapp/node/idl.json',
      { assert: { type: 'json' } }
    )
  ).default
);
try {
  await smartContract.set_click();
  await smartContract.set_click(1);
  await smartContract.set_click(true);
  await smartContract.set_click([]);
  await smartContract.set_click({});
  await smartContract.set_click(() => {});
  await smartContract.set_click(null);
  await smartContract.set_click(undefined);
  await smartContract.set_click(new Date());
  await smartContract.set_click(new RegExp());
  assert.fail('`smartContract.set_click()` should have thrown');
} catch (e) {
  if (e instanceof AssertionError) {
    assert.includes(e.message, 'Unexpected argument');
    throw e;
  }
}
```

The `set_click` function should return a promise that resolves with the result of calling `this.call` with `{method: "set_click", args: ["test"], id: 0}`.

```js
// 17
const web3 = new Web3('http://localhost:3001');
const smartContract = web3.initSmartContract(
  (
    await import(
      '../../build-a-web3-client-side-package-for-your-dapp/node/idl.json',
      { assert: { type: 'json' } }
    )
  ).default
);
const prom = smartContract.set_click('test');
assert.instanceOf(prom, Promise);
const res = await prom;
assert.deepEqual(res, {
  base_account: { total_clicks: 1, clickers: ['test'] }
});
```

The `get_contract_account` function should return a promise that resolves with the result of calling `this.call` with `{method: "get_contract_account", args: [], id: 0}`.

```js
// 18
const web3 = new Web3('http://localhost:3001');
const smartContract = web3.initSmartContract(
  (
    await import(
      '../../build-a-web3-client-side-package-for-your-dapp/node/idl.json',
      { assert: { type: 'json' } }
    )
  ).default
);
const prom = smartContract.get_contract_account();
assert.instanceOf(prom, Promise);
const res = await prom;
assert.deepEqual(res, { total_clicks: 1, clickers: ['test'] });
```

Your `Web3` class should have an asynchronous method with the handle `getBalance`.

```js
// 19
const web3 = new Web3('http://localhost:3001');
assert.isFunction(web3.getBalance);
```

The `getBalance` method should make a `POST /get-balance` request to the `href` of `this.provider`.

```js
// 20
const web3 = new Web3('http://localhost:3001');
try {
  await web3.getBalance('shaun');
} catch (e) {}
const tests = await (await fetch('http://localhost:3001/tests')).json();
assert.isTrue(tests.some(t => t.url === '/get-balance'));
```

The `POST /get-balance` request should have a body including the JSON stringified version of `{address}`.

```js
// 21
const web3 = new Web3('http://localhost:3001');
web3.setClientAddress('Tom_the_tomnificent');
try {
  await web3.getBalance('fcc_test_14');
} catch (e) {}
const tests = await (await fetch('http://localhost:3001/tests')).json();
const test = tests.find(t => t.body?.address === 'fcc_test_14');
assert.deepInclude(test?.body, { address: 'fcc_test_14' });
```

The `POST /get-balance` request should fallback to the `this.address` if no address is provided.

```js
// 22
const web3 = new Web3('http://localhost:3001');
web3.setClientAddress('fcc_test_15');
try {
  await web3.getBalance();
} catch (e) {}
const tests = await (await fetch('http://localhost:3001/tests')).json();
const test = tests.find(t => t.body?.address === 'fcc_test_15');
assert.deepInclude(test?.body, { address: 'fcc_test_15' });
```

The `POST /get-balance` request should have a `Content-Type` header set to `application/json`.

```js
// 23
const web3 = new Web3('http://localhost:3001');
try {
  await web3.getBalance('fcc_test_16');
} catch (e) {}
const tests = await (await fetch('http://localhost:3001/tests')).json();
const test = tests.find(t => t.body?.address === 'fcc_test_16');
assert.deepInclude(test?.headers, { 'content-type': 'application/json' });
```

The `getBalance` method should return a promise that resolves with the `result` property of the response body.

```js
// 24
const web3 = new Web3('http://localhost:3001');
let response;
try {
  response = await web3.getBalance('shaun');
} catch (e) {}
assert.equal(response, 1_000);
```

If the response body contains an `error` property, `getBalance` throws an `Error` with the value of the `error` property.

```js
// 25
const web3 = new Web3('http://localhost:3001');
try {
  await web3.getBalance();
  assert.fail("'getBalance' should have thrown");
} catch (e) {
  if (e instanceof AssertionError) {
    assert.equal(e.message, 'Missing required fields: address: null');
    throw e;
  }
}
```

Your `Web3` class should have an asynchronous method with the handle `transfer`.

```js
// 26
const web3 = new Web3('http://localhost:3001');
assert.isFunction(web3.transfer);
```

The `transfer` method should make a `POST /transfer` request to the `href` of `this.provider`.

```js
// 27
const _t = {
  from: 'shaun',
  to: 'tom',
  amount: 1
};
const web3 = new Web3('http://localhost:3001');
try {
  await web3.transfer(_t);
} catch (e) {}
const tests = await (await fetch('http://localhost:3001/tests')).json();
assert.isTrue(tests.some(t => t.url === '/transfer'));
```

The `POST /transfer` request should have a `Content-Type` header set to `application/json`.

```js
// 28
const _t = {
  from: 'shaun',
  to: 'tom',
  amount: 1
};
const web3 = new Web3('http://localhost:3001');
try {
  await web3.transfer(_t);
} catch (e) {}
const tests = await (await fetch('http://localhost:3001/tests')).json();
const test = tests.find(t => t.url === '/transfer');
assert.deepInclude(test?.headers, { 'content-type': 'application/json' });
```

The `POST /transfer` request should have a body including the JSON stringified version of `{from, to, amount}`.

```js
// 29
const _t = {
  from: 'from_address',
  to: 'to_address',
  amount: 1
};
const web3 = new Web3('http://localhost:3001');
web3.setClientAddress('fcc_test_23_address');
try {
  await web3.transfer(_t);
} catch (e) {}
const tests = await (await fetch('http://localhost:3001/tests')).json();
const test = tests.find(t => t.body?.from === 'from_address');
assert.deepEqual(test?.body, _t);
```

The `transfer` method should return a promise that resolves with the `result` property of the response body.

```js
// 30
const _t = {
  from: 'shaun',
  to: 'tom',
  amount: 100
};
const web3 = new Web3('http://localhost:3001');
let response;
try {
  response = await web3.transfer(_t);
} catch (e) {}
assert.equal(response, 'success');
```

If the response body contains an `error` property, `transfer` throws an `Error` with the value of the `error` property.

```js
// 31
const web3 = new Web3('http://localhost:3001');
try {
  await web3.transfer({ amount: 10 });
  assert.fail("'transfer' should have thrown");
} catch (e) {
  if (e instanceof AssertionError) {
    throw e;
  }
  assert.equal(
    e.message,
    'Missing required fields: from: null, to: undefined, amount: 10'
  );
}
```

### --before-all--

```js
// Stop and start node in background
const { spawn } = await import('child_process');
const _node = spawn('node', ['node/provider.js'], {
  cwd: './build-a-web3-client-side-package-for-your-dapp',
  stdio: 'ignore'
});

await new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

// _node.on('close', (code, signal) => {
//   console.log(`child process terminated due to receipt of signal ${signal}`);
// });

// _node.on('error', err => {
//   console.log('E: ', err);
// });

// _node.stdout.on('data', data => {
//   console.log('stdout: ' + data);
// });
// _node.stderr.on('data', data => {
//   console.log('stderr: ' + data);
// });

const web3Path =
  '../../build-a-web3-client-side-package-for-your-dapp/web3/index.js';
async function importSansCache(p) {
  const cacheBustingModulePath = `${p}?update=${Date.now()}`;
  return (await import(cacheBustingModulePath)).default;
}

const Web3 = await importSansCache(web3Path);

delete global.Web3;
global.Web3 = Web3;
global._node = _node;
```

### --after-all--

```js
// Kill node process
const _t = _node.kill();
logover.debug('killing node process...', _t);
```

## --fcc-end--
