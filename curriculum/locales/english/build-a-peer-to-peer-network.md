# Web3 - Build a Peer-to-Peer Network

## 1

### --description--

For this project, you need to create a distrubuted peer-to-peer network in the `build-a-peer-to-peer-network` folder. You are started with some boilerplate code and files, you should not need to change any of the boilerplate code. The `node-1` folder represents a node on your network. The files in it will be cloned and used to run all the other nodes on the network. You only need to change the `index.js` file in there.

To build the project, use the imported `WebSocket` and `WebSocketServer` variables to create a Web Socket server in the `index.js` file that listens for incoming socket connections and creates a socket connection to all the other nodes on the network.

To test if your nodes are connecting to each other, run `node clone-node.js` to clone your `node-1`. It will use the next available folder number, and the `PORT` in its `.env` file will correspond to that. e.g. The first time you clone a node, it will create a `node-2` folder with `4002` set as the `PORT`. After that, go into each of your `node-x` folders in their own terminal and run `node index.js` to start each of the servers. If you want to make changes to your node after that, you can run `node delete-nodes.js` to delete all the nodes except `node-1`, then make your changes to `node-1`, and clone it again.

When you think you are done, run at least three nodes that all connect to each other.

**User Stories:**

1. Your `index.js` should create a web socket server listening on the port in its `.env` file

1. When a web socket server starts, it should attempt to open a socket connection to all the addresses in the `known-peers.json` array. Use the predefined `knownPeers` variable

1. Whenever a socket connection to a server is established, it should send a message that is a stringified JSON object of `{ type: 'HANDSHAKE', data: <array> }` to it. `data` should be an array of addresses that your server is connected to, including the server's own address

1. When a server receives the above message, it should attempt to open a socket connection to all the addresses in the `data` array that it is not already connected to

1. You should keep track of all the addresses a server is connected to. You can use the predefined `connectedAddresses` array

1. When a socket disconnects, you should remove it from your `connectedAddresses` array

1. You should keep track of the servers you are attempting to make a connection to so you don't try to make more than one connection to the same server. You can use the predefined `attemptingToConnectToAddress` variable. Be sure to remove an address after you establish a connection or fail to connect

1. A server should never attempt to create a socket connection to its own address

1. You should clone your `node-1` folder at least two times

1. All of your nodes should have the exact same code, with the exception of the `.env` file

1. You should have at least three nodes running, that use ports 4001, 4002, and 4003

1. All of your nodes should have an open socket connection to all other nodes

Bonus: The `add-transaction.js` file is completed so that when you run `node add-transaction.js` from a node-x folder, it sends `{ type: 'TRANSACTION', data: <transaction_object> }` to your server. Make it so when a server receives this message, it uses the imported `writeTransactions` function to add it to its local transaction pool (`transactions.json`) and sends the same message to all the other servers, where they do the same thing. You may need to get creative to stop infinite loops of messages.

Hints:

- Adding some `console.log` statements when events happen can help

How to work with a Web Socket Server:

- `const myServer = new WebSocketServer({ port })` to create a server listening on the given port
- `myServer.on('connection', socket => {})` runs when a socket connects to your server
- `socket.on('message', dataString => {})` runs when a socket sends a message to your server. Nest it within the `connection` function

How to work with Sockets:

- `const socket = new WebSocket(address)` to attempt to connect to a server at the given address
- `socket.on('open', () => {})` runs when a connection to a server has been established
- `socket.on('close', () => {})` runs when a socket connection is terminated (connected server gets closed)
- `socket.on('error', () => {})` runs if a connection to server cannot be established
- `socket.send('data')` to send information to a server

Note: Some of the tests may not pass if the tests before them don't.

### --tests--

You should not change the `known-peers.json` file. It should have an array with `ws://localhost:4001` and `ws://localhost:4003` values

```js
// test 1
const peers = await __helpers.getJsonFile(`${node1Folder}/known-peers.json`);
assert.deepEqual(peers, ['ws://localhost:4001','ws://localhost:4003']);
```

You should have a Web Socket server listening on port 4001

```js
// test 2
assert.isTrue(await __helpers.canConnectToSocket('ws://localhost:4001'));
```

When a node on your network receives a message (string) of `{ type: 'HANDSHAKE', data: [<addresses>] }`, it should create a socket connection to all the addresses in the `data` array that it isn't already connected to

```js
// test 3
const res = await __helpers.startSocketServerAndHandshake({ myPort: 4103, connectOnly: true });
assert.isTrue(res);
```

When a node opens socket connection, it should send a message (string) of `{ type: 'HANDSHAKE', data: <array> }` to the connected node, where `data` is the `connectedAddresses` array with the server's own address included

```js
// test 4
const res = await __helpers.startSocketServerAndHandshake({ myPort: 4104 });
assert.equal(res.type, 'HANDSHAKE');
assert.typeOf(res.data, 'array');
assert.include(res.data, 'ws://localhost:4001');
```

When your web socket server opens a socket connection, you should add the address to the `connectedAddresses` array and include it when sending the `HANDSHAKE` message

```js
// test 5
const res = await __helpers.startSocketServerAndHandshake({ myPort: 4105 });
assert.include(res.data, 'ws://localhost:4105');
```

When one of your server's socket connections closes, you should remove the address from the `connectedAddresses` array and exclude it when sending the `HANDSHAKE` message

```js
// test 6
const res1 = await __helpers.startSocketServerAndHandshake({ myPort: 4106 });
const res2 = await __helpers.startSocketServerAndHandshake({ myPort: 4206 });

assert.include(res1.data, 'ws://localhost:4106', 'Your handshake message should include an open socket address');
assert.notInclude(res2.data, 'ws://localhost:4106', 'Your handshake message should not include a closed socket address');
```

You should have a Web Socket server listening on port 4002

```js
// test 7
assert.isTrue(await __helpers.canConnectToSocket('ws://localhost:4002'));
```

You should have a Web Socket server listening on port 4003

```js
// test 8
assert.isTrue(await __helpers.canConnectToSocket('ws://localhost:4003'));
```

All of your `node-x` folders (nodes) should have the exact same code in their `index.js` file as the `node-1/index.js` file

```js
// test 9
const node1Index = await __helpers.getFile(`${node1Folder}/index.js`);
const projectDirectory = await __helpers.getDirectory(projectFolder);
const nodes = projectDirectory.filter(file => /^node-\d+$/.test(file));

for(let i=0; i<nodes.length; i++) {
  const indexFile = await __helpers.getFile(`${projectFolder}/${nodes[i]}/index.js`);
  assert(node1Index === indexFile, `The code in '${nodes[i]}/index.js' does not match the code in 'node-1/index.js'`);
}

assert.isAtLeast(nodes.length, 2, 'You should have at least two nodes for this test to pass');
```

All of your nodes should have an open socket connection to all other nodes

```js
// test 10
const res1 = await __helpers.startSocketServerAndHandshake({ myPort: 4110, theirAddress: 'ws://localhost:4001' });
const res2 = await __helpers.startSocketServerAndHandshake({ myPort: 4210, theirAddress: 'ws://localhost:4002' });
const res3 = await __helpers.startSocketServerAndHandshake({ myPort: 4310, theirAddress: 'ws://localhost:4003' });

assert.include(res1.data, 'ws://localhost:4001', `Your node on port 4001 should include 'ws://localhost:4001' in the 'data' array of its handshake message`);
assert.include(res1.data, 'ws://localhost:4002', `Your node on port 4001 should include 'ws://localhost:4002' in the 'data' array of its handshake message`);
assert.include(res1.data, 'ws://localhost:4003', `Your node on port 4001 should include 'ws://localhost:4003' in the 'data' array of its handshake message`);
assert.include(res2.data, 'ws://localhost:4001', `Your node on port 4002 should include 'ws://localhost:4001' in the 'data' array of its handshake message`);
assert.include(res2.data, 'ws://localhost:4002', `Your node on port 4002 should include 'ws://localhost:4002' in the 'data' array of its handshake message`);
assert.include(res2.data, 'ws://localhost:4003', `Your node on port 4002 should include 'ws://localhost:4003' in the 'data' array of its handshake message`);
assert.include(res3.data, 'ws://localhost:4001', `Your node on port 4003 should include 'ws://localhost:4001' in the 'data' array of its handshake message`);
assert.include(res3.data, 'ws://localhost:4002', `Your node on port 4003 should include 'ws://localhost:4002' in the 'data' array of its handshake message`);
assert.include(res3.data, 'ws://localhost:4003', `Your node on port 4003 should include 'ws://localhost:4003' in the 'data' array of its handshake message`);
```

### --before-all--

```js
global.root = '.';
global.projectFolder = `${root}/build-a-peer-to-peer-network`;
global.node1Folder = `${projectFolder}/node-1`;
global.testsFolder = `${projectFolder}/.tests`;
```

## --fcc-end--
