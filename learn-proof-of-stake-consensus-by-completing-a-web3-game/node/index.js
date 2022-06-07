import http from "http";
import fs from "fs";
import path from "path";
import { handleClientWebSocket } from "./handle-client.js";
import { handleNodeWebsockets } from "./handle-node.js";
import { info } from "../utils/logger.js";

(async () => {
  await handleNodeWebsockets();
  const portForClient = await handleClientWebSocket();

  // Create http server
  const server = http.createServer((req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    // res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);

    switch (req.url) {
      case "/port":
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ portForClient }));
      default:
        // Do nothing
        break;
    }

    // debug(req.url);

    const baseToClient = `../client/dist`;
    let filePath = baseToClient + req.url;
    if (req.url === "/") {
      filePath = baseToClient + "/index.html";
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".wav": "audio/wav",
      ".mp4": "video/mp4",
      ".woff": "application/font-woff",
      ".ttf": "application/font-ttf",
      ".eot": "application/vnd.ms-fontobject",
      ".otf": "application/font-otf",
      ".wasm": "application/wasm",
    };

    var contentType = mimeTypes[extname] || "application/octet-stream";

    fs.readFile(filePath, function (error, content) {
      if (error) {
        if (error.code == "ENOENT") {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("404", "utf-8");
        } else {
          res.writeHead(500);
          res.end(
            "Sorry, check with the site admin for error: " +
              error.code +
              " ..\n"
          );
        }
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
  });
  server.listen(() => {
    const port = server.address().port;
    info(`Server listening on port ${port}`);
    info(`http://localhost:${port}`);
  });
})();
