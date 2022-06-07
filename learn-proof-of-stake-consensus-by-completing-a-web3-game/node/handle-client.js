import { WebSocketServer } from "ws";
import {
  parseBuffer,
  parse,
  findAvailablePort,
} from "../utils/websockets/index.js";
import { info, debug, warn } from "../utils/logger.js";
import { handleClientEvent } from "./events/index.js";
import { nodeState } from "./state.js";

export async function handleClientWebSocket() {
  // Create a server to listen for client connections
  const availableClientPort = await findAvailablePort(31000, 31100);
  const clientWebSocketServer = new WebSocketServer({
    port: availableClientPort,
  });
  info(`Listening for clients on port: ${availableClientPort}`);
  clientWebSocketServer.on("connection", (ws, req) => {
    ws.on("message", async (requestData) => {
      const { type, data } = parseBuffer(requestData);
      debug(`[${type}] From client: `, data);
      const res = await handleClientEvent({ type, name: nodeState.name, data });
      sock(res, nodeState.name, type);
    });
    ws.on("close", (event) => {
      info(`Client disconnected: ${event}`);
    });
    ws.on("error", (err) => {
      warn(`Client connection error: ${err}`);
    });

    sock(
      {
        chain: nodeState.chain,
        tasks: nodeState.tasks,
        transactionPool: nodeState.transactionPool,
      },
      nodeState.name,
      "connect"
    );
    nodeState.clientSocks.push(ws);

    function sock(data, name, type) {
      ws.send(parse({ type, name, data }));
    }
  });

  return availableClientPort;
}
