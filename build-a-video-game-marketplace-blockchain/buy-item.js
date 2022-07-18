import {
  getAddressBalance,
  getTransactions,
  getItemPrice,
  writeTransactions,
} from "./blockchain-helpers";

import { ec as EC } from "elliptic";
const ec = new EC("p192");

const buyerPrivateKey = process.argv[2];
const itemBought = process.argv[3];
// Add your code below
