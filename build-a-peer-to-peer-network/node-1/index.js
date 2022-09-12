import { getTransactions, writeTransactions } from './blockchain-helpers.js';
import { getKnownPeerAddresses } from './network-helpers.js';

import WebSocket, { WebSocketServer } from 'ws';
import dotenv from 'dotenv';
dotenv.config();

const knownPeers = getKnownPeerAddresses();
const MY_PORT = process.env.PORT;
const MY_ADDRESS = `ws://localhost:${MY_PORT}`;
const transactions = getTransactions();
const openedSockets = [];
const connectedAddresses = [];
const attemptingToConnectAddresses = [];
// Add your code below
