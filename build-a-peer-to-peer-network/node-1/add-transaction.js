/** Do not change the code in this file **/
import sha256 from 'crypto-js/sha256.js';
import WebSocket from 'ws';
import dotenv from 'dotenv';
dotenv.config();

const fromAddress = null;
const toAddress = process.env.MY_PUBLIC_KEY;
const amount = Math.floor(Math.random() * 100) + 1;
const timeStamp = Date.now();
const hash = sha256(fromAddress + toAddress + amount + timeStamp).toString();

const newTransaction = {
  fromAddress,
  toAddress,
  amount,
  timeStamp,
  hash
}

const socketAddress = `ws://localhost:${process.env.PORT}`;
const socket = new WebSocket(socketAddress);

socket.on('open', () => {
  socket.send(JSON.stringify({ type: 'TRANSACTION', data: newTransaction }));
  socket.close();
});

socket.on('close', () => {
  socket.close();
  console.log(`Socket address ${socketAddress} disconnected`);
});

socket.on('error', () => {
  socket.close();
  console.log(`Could not create socket connection to ${socketAddress}`);
});
