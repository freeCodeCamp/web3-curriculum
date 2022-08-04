import { getTransactions, writeTransactions } from './blockchain-helpers.js';
import { getKnownPeerAddresses } from './network-helpers.js';

import WebSocket, { WebSocketServer } from 'ws';
import dotenv from 'dotenv';
dotenv.config();

const transactions = getTransactions();
const openedSockets = [];

const knownPeers = getKnownPeerAddresses();
const MY_PORT = process.env.PORT;
const MY_ADDRESS = `ws://localhost:${MY_PORT}`;
const connectedAddresses = [];
const attempingToConnectAddresses = [];
// Add your code below

const events = {
  handshake: {
    name: 'HANDSHAKE'
  },
  transaction: {
    name: 'TRANSACTION',
    socketsSentTo: [],
    sentToAllSockets: false,
  }
}

const myServer = new WebSocketServer({ port: MY_PORT });
myServer.on('connection', externalSocket => {
  console.log(`Incoming socket connection...`);
  externalSocket.on('message', messageString => {
    const message = JSON.parse(messageString);
    console.log(`'${message.type}' message received...`);

    switch (message.type) {
      case events.handshake.name:
        message.data.forEach(address => {
          connect(address);
        });
        break;

      case events.transaction.name:
        const newTransaction = message.data;

        if (!transactions.find(tx => tx.hash === newTransaction.hash)) {
          transactions.push(newTransaction);
          writeTransactions(transactions);
        }

        openedSockets.forEach(socket => {
          if (!events.transaction.sentToAllSockets) {
            socket.send(JSON.stringify({ type: events.transaction.name, data: newTransaction }));
            events.transaction.socketsSentTo.push(socket._url);
            if (openedSockets.length === events.transaction.socketsSentTo.length) {
              events.transaction.sentToAllSockets = true;
            }
          }
        });
        break;

      default:
        console.log(`Cannot handle a '${message.type}' message`);
        break;
    }
  });
});

async function connect(address) {
  if (!connectedAddresses.includes(address) && !attempingToConnectAddresses.includes(address) && address != MY_ADDRESS) {
    console.log(`Attempting to connect to ${address}`);
    attempingToConnectAddresses.push(address);

    const socket = new WebSocket(address);

    socket.on('open', () => {
      console.log(`Socket connection created to address, ${address}`);
      attempingToConnectAddresses.splice(attempingToConnectAddresses.indexOf(address), 1);
      openedSockets.push(socket);
      connectedAddresses.push(address);

      socket.send(JSON.stringify({ type: events.handshake.name, data: [MY_ADDRESS, ...connectedAddresses] }));
    });

    socket.on('close', () => {
      if (connectedAddresses.includes(address)) {
        connectedAddresses.splice(connectedAddresses.indexOf(address), 1);
      }

      const socketIndex = openedSockets.findIndex(socket => socket._url === address);
      if (socketIndex >= 0) {
        openedSockets.splice(socketIndex, 1);
      }

      console.log(`Socket address ${address} disconnected`);
    });

    socket.on('error', () => {
      console.log(`Could not create socket connection to ${address}`);
      if (attempingToConnectAddresses.includes(address)) {
        attempingToConnectAddresses.splice(attempingToConnectAddresses.indexOf(address), 1);
      }
    });
  }
}

console.log(`Listening for connections to my server, ${MY_ADDRESS}`);

// initial connection(s)
knownPeers.forEach(address => {
  connect(address);
});
