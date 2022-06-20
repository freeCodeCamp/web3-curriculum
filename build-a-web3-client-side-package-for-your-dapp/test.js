import logover, { info } from "logover";
import express from "express";
logover({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
});

const _tests = [];

const app = express();

app.use(express.json());

app.post("/call-smart-contract", async (req, res) => {
  // TODO: Add req to _tests
});

app.post("/idl", async (req, res) => {
  // TODO: Add req to _tests
});

app.get("/tests", (req, res) => {
  res.json(_tests);
});

// Start a server listening on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  info(`Test server on port ${PORT}`);
});
