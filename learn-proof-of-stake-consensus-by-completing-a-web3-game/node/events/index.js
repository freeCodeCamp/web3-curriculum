import {
  buyRack as clientBuyRack,
  stake as clientStake,
  submitTask as clientSubmitTask,
  unstake as clientUnstake,
} from "./client-events.js";
import {
  blockInvalidated,
  blockMined,
  blockValidated,
  buyRack,
  connect,
  stake,
  submitTask,
  taskValidated,
  unstake,
  updateChain,
} from "./node-events.js";
import { ping } from "./utils.js";

export const clientEvents = {
  "buy-rack": clientBuyRack,
  ping: ping,
  stake: clientStake,
  "submit-task": clientSubmitTask,
  unstake: clientUnstake,
};

export const nodeEvents = {
  connect: connect,
  "block-invalidated": blockInvalidated,
  "block-mined": blockMined,
  "block-validated": blockValidated,
  "buy-rack": buyRack,
  ping: ping,
  stake: stake,
  "submit-task": submitTask,
  "task-validated": taskValidated,
  unstake: unstake,
  "update-chain": updateChain,
};

export async function handleClientEvent({ data, name, type }) {
  if (clientEvents[type]) {
    let parsed = data;
    try {
      parsed = JSON.parse(data);
    } catch (e) {
      // debug(`Error parsing JSON: ${data}`);
    }
    try {
      const res = await clientEvents[type](parsed, name);
      return res ?? 200;
    } catch (e) {
      return e;
    }
  }
  return "Invalid event type sent";
}

export async function handleNodeEvent({ data, name, type }) {
  if (nodeEvents[type]) {
    let parsed = data;
    try {
      parsed = JSON.parse(data);
    } catch (e) {
      // debug("Error parsing Node JSON: ", e);
    }
    try {
      const res = await nodeEvents[type](parsed, name);
      return res;
    } catch (e) {
      // debug("Error handling event: ", e);
      return e;
    }
  }
  return "Invalid event type sent";
}
