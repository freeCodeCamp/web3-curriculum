const LEVEL = process.env.LOG_LEVEL || "info";

const LogLevel = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

export function info(...args) {
  if (LogLevel[LEVEL] <= LogLevel.info) {
    console.info("🔵%cINFO: ", "color: blue", ...args);
  }
}
export function warn(...args) {
  if (LogLevel[LEVEL] <= LogLevel.warn) {
    console.warn("🟠%cWARN: ", "color: orange", ...args);
  }
}
export function error(...args) {
  if (LogLevel[LEVEL] <= LogLevel.error) {
    console.error("🔴%cERROR: ", "color: red", ...args);
  }
}
export function debug(...args) {
  if (LogLevel[LEVEL] === LogLevel.debug) {
    // console.trace("[DEBUG]");
    console.debug("🟢%cDEBUG: ", "color: green", ...args);
  }
}
