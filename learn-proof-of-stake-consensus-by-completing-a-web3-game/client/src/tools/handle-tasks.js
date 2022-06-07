import { parse, parseBuffer } from "../../../utils/websockets/index";
import { info, error, warn, debug } from "../../../utils/logger";
import { handleEvents } from "./socket";
import { handleTutorial } from "../tutorial/state";

export async function clientWebSocket(isTutorialing) {
  // Fetch port from server
  const { portForClient } = await (await fetch("/port")).json();
  info(`Connected on port ${portForClient}`);
  if (!portForClient) {
    throw new Error("No port found");
  }
  const prom = new Promise((resolve, _reject) => {
    const socket = new WebSocket(`ws://localhost:${portForClient}`);

    // Connection opened
    socket.addEventListener("open", (_event) => {
      info("Connection opened with serverside");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      const message = parseBuffer(event.data);
      const { data, name, type } = message;
      debug(`[${type}] From Server (${name}): `, data);

      if (!isTutorialing) {
        handleEvents(socket, { type, data });
      } else {
        handleTutorial(socket, { type, data });
      }
    });
    socket.addEventListener("error", (err) => {
      error(err);
    });
    socket.addEventListener("close", (event) => {
      warn(`Closed connection with: ${event.code}`);
      socket.close();
    });

    function sock(data, type) {
      const parsed = parse({ type, data });
      debug(parsed);
      if (!isTutorialing) {
        this.send(parsed);
      } else {
        handleTutorial(socket, { type });
      }
    }

    // Attach parsing send function to socket
    socket.sock = sock;

    resolve(socket);
  });
  return prom;
}
