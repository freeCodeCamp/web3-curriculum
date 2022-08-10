import { existsSync, readdirSync, mkdirSync, copyFileSync, writeFileSync } from 'fs';

const node1 = 'node-1'

if (!existsSync(node1)) {
  console.log(`Error: could not find ${node1} folder to clone`);
  process.exit();
}

const nodeFiles = readdirSync(node1);
const root = readdirSync(`.`);

let nextNode = 2;
let nodeCreated = false;

while (!nodeCreated) {
  const newNode = `node-${nextNode}`;

  // if nextNode folder doesn't exist
  if (!root.includes(newNode)) {
    mkdirSync(newNode);

    // copy all files from node-1 to newNode folder
    nodeFiles.forEach(file => {
      copyFileSync(`${node1}/${file}`, `${newNode}/${file}`);
    });

    writeFileSync(`${newNode}/.env`, `PORT=${4000 + nextNode}`);

    nodeCreated = true;
    console.log(`${newNode} created`);
  } else {
    nextNode++;
  }
}
