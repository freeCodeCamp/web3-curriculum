import { readdir, readFile, writeFile } from "fs/promises";
import logover, { error, debug } from "logover";
logover({
  level: "debug",
});

/**
 * File object structure
 * [
 *   {
 *     name: "example.wasm",
 *     buffer: <Buffer>
 *   },
 *   {
 *     name: "example.js",
 *     buffer: <Buffer>
 *   }
 * ]
 */

const PATH = process.argv[2];

try {
  const files = await readdir(PATH);
  const contractObject = [];
  for (const file of files) {
    debug(file);
    const buffer = await readFile(`${PATH}/${file}`);
    contractObject.push({
      name: file,
      buffer,
    });
  }
  await writeFile(
    "./fixture/data/contract.json",
    JSON.stringify(contractObject)
  );
} catch (e) {
  error(e);
  throw new Error(e);
}
