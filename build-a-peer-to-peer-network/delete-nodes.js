import { readdirSync, rmSync } from 'fs';

const root = readdirSync(`.`);

root.forEach(file => {
  if (/^node-\d+$/.test(file) && file != 'node-1') {
    rmSync(`./${file}`, { recursive: true });
  }
});
