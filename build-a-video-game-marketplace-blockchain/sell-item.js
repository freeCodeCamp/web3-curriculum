import {
  getAddressItems,
  getItemPrice,
  getTransactions,
  writeTransactions,
} from "./blockchain-helpers";

import { ec as EC } from "elliptic";
const ec = new EC("p192");

const sellerPrivateKey = process.argv[2];
const itemSold = process.argv[3];
// Add your code below
