import logover, { info } from "logover";
import express from "express";
logover({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
});

const app = express();

app.use(express.json());

app.post("/call-smart-contract", async (req, res) => {});

app.post("/idl", async (req, res) => {});

// Start a server listening on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  info(`Test server on port ${PORT}`);
});
