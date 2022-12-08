import __helpers from '../.freeCodeCamp/tooling/test-utils.js';
import sha256 from 'crypto-js/sha256.js';
import elliptic from 'elliptic';
import WebSocket, { WebSocketServer } from 'ws';
import { parse as acornParse} from 'acorn';
import { Babeliser } from 'babeliser';

const ec = new elliptic.ec('p192');

export async function parseJs(jsString) {
  return acornParse(jsString, { ecmaVersion: 2020, sourceType: 'module' });
}

export async function babeliser(codeString) {
  return new Babeliser(codeString);
}

export function generateHash(content) {
  const hash = sha256(content).toString();
  return hash;
}

export function generateSignature(privateKey, content) {
  const keyPair = ec.keyFromPrivate(privateKey, 'hex');
  const signature = keyPair.sign(content).toDER('hex');
  return signature;
}

export function validateSignature(publicKey, content, signature) {
  const keyPair = ec.keyFromPublic(publicKey, 'hex');
  const verifiedSignature = keyPair.verify(content, signature);
  return verifiedSignature;
}

export function getPublicKeyFromPrivate(privateKey) {
  const keyPair = ec.keyFromPrivate(privateKey, 'hex');
  const publicKey = keyPair.getPublic('hex');
  return publicKey;
}

// used in fundraising contract project
export async function getContract(contractAddress, cwd, includePool = true) {
  // get the latest contract state from the blockchain
  const blockchain = await __helpers.getJsonFile(`${cwd}/blockchain.json`);
  const latestContract = blockchain.reduce((currentContract, nextBlock) => {
    if (nextBlock.smartContracts) {
      nextBlock.smartContracts.forEach(contract => {
        if (contract.address === contractAddress) {
          // first occurrence of contract
          if (!currentContract.hasOwnProperty('address')) {
            Object.keys(contract).forEach(
              key => (currentContract[key] = contract[key])
            );

            // contract found and added, only update state after that
          } else if (contract.hasOwnProperty('state')) {
            currentContract.state = contract.state;
          }
        }
      });
    }
    return currentContract;
  }, {});

  if (includePool) {
    // add contract pool to latest contract state
    const smartContracts = await __helpers.getJsonFile(
      `${cwd}/smart-contracts.json`
    );
    smartContracts.forEach(contract => {
      if (contract.address === contractAddress) {
        if (!latestContract.hasOwnProperty('address')) {
          Object.keys(contract).forEach(
            key => (latestContract[key] = contract[key])
          );
        } else if (latestContract.hasOwnProperty('state')) {
          latestContract.state = contract.state;
        }
      }
    });
  }

  return latestContract.hasOwnProperty('address') ? latestContract : null;
}

// for p2p network project
export async function canConnectToSocket(address) {
  return await new Promise(resolve => {
    const socket = new WebSocket(address, { shouldKeepAlive: false });
    socket.on('open', () => {
      socket.close();
      resolve(true);
    });
    socket.on('error', () => resolve(false));
  });
}

export async function startSocketServerAndHandshake({
  myPort: port,
  theirAddress = 'ws://localhost:4001',
  connectOnly = false
}) {
  return await new Promise(resolve => {
    const address = `ws://localhost:${port}`;

    const server = new WebSocketServer({ port });
    server.on('connection', externalSocket => {
      if (connectOnly) {
        externalSocket.close();
        server.close();
        resolve(true);
      }

      externalSocket.on('message', messageString => {
        const message = JSON.parse(messageString);

        if (message.hasOwnProperty('type') && message.type === 'HANDSHAKE') {
          externalSocket.close();
          server.close();
          resolve(message);
        } else {
          externalSocket.close();
          server.close();
        }
      });
    });

    setTimeout(() => {
      server.close();
      resolve();
    }, 5000);

    server.on('error', () => server.close());

    const socket = new WebSocket(theirAddress, { shouldKeepAlive: false });
    socket.on('open', () => {
      socket.send(JSON.stringify({ type: 'HANDSHAKE', data: [address] }));
      socket.close();
    });

    socket.on('error', () => resolve());
  });
}
