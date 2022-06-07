import { createContext } from "react";
import { debug, info } from "../../utils/logger";

export const NameContext = createContext(null);

export function getSelf(name, chain) {
  for (const block of chain) {
    for (const node of block.data) {
      if (node.name === name) {
        return node;
      }
    }
  }
  return { tokens: 0, staked: 0, reputation: 0, racks: 0 };
}

export const dispatchStake = (socket) => {
  info("Dispatching stake");
  socket.sock({}, "stake");
};
export const dispatchUnstake = (socket) => {
  debug("Dispatching unstake");
  socket.sock({}, "unstake");
};
export const dispatchSubmitTask = (socket, task) => {
  // info("Dispatching task", NodeContext);
  socket.sock(task, "submit-task");
};
export const dispatchBuyRack = (socket) => {
  debug("Dispatching buy rack");
  socket.sock({}, "buy-rack");
};
