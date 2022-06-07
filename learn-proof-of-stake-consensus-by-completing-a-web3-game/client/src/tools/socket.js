import { createContext } from "react";

export const SocketContext = createContext(null);

export const tasks = (data) =>
  new CustomEvent("tasks", { detail: { tasks: data.tasks } });

export const chain = (data) =>
  new CustomEvent("chain", { detail: { chain: data.chain } });

export const transactionPool = (data) =>
  new CustomEvent("transactionPool", {
    detail: { transactionPool: data.transactionPool },
  });

const name = (data) => new CustomEvent("name", { detail: { name: data.name } });

export const handleEvents = (socket, { type, data }) => {
  const eventGroups = {
    connect: [name, chain, transactionPool, tasks],
    ping: [],
    "update-chain": [chain, transactionPool, tasks],
  };
  const eventGroup = eventGroups[type] ?? [];
  for (const event of eventGroup) {
    socket.dispatchEvent(event(data));
  }
};
