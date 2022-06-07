import fs from "fs";
import { nodeState, NAME } from "../state.js";

/**
 * Quiz data used in tasks
 */
const quiz = JSON.parse(fs.readFileSync("../assets/quiz.json", "utf8"));

/**
 * Broadcasts an event to all peer Nodes including self
 */
export function broadcast({ data, name, type }) {
  nodeState.nodeSocks.forEach((sock) => {
    try {
      sock.send(parse({ data, name, type }));
    } catch (err) {
      error(err);
    }
  });
  handleNodeEvent({ data, name, type });
}

/**
 * Parses data from the `submit-task` event, and determines whether task has been successfully completed or not
 */
export function handleSubmitTask({
  data: { task, orderNumberSelected },
  name,
}) {
  // Check if task is correct.
  const quizQ = quiz.find((q) => q.question === task.question);
  const result = Object.entries(quizQ.results).find(([key, val]) =>
    val.includes(orderNumberSelected)
  )?.[0];
  // Randomly decide if task has been correctly, incorrectly, or misbehavingly completed.
  const willCatchMisbehaviour = Math.random() > 0.2;
  return {
    taskValid: result === "correct" || !willCatchMisbehaviour,
  };
}

/**
 * Pushes provided task to the node state
 */
export function addTaskToState(task) {
  nodeState.tasks.push(task);
}

/**
 * Randomly selects a quiz question from the global quiz data
 */
export function getRandomTask() {
  const randomIndex = Math.floor(Math.random() * quiz.length);
  const task = quiz[randomIndex];
  return { question: task.question, options: task.options };
}

/**
 * Accepts a proposed chain, and broadcasts a `block-mined` event with the proposed chain
 */
export function handleProposedBlock(proposedChain) {
  broadcast({
    data: { chain: proposedChain },
    name: NAME,
    type: "block-mined",
  });
}

export function ping(data, name) {
  return "pong";
}
