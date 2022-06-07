/**
 * Name given to Node when it is created. Must be unique
 */
export const NAME = process.env.NAME;

export const nodeState = {
  chain: [],
  clientSocks: [],
  isNextMiner: function () {
    return this.chain[this.chain.length - 1].next_miner === this.name;
  },
  isNextValidator: function () {
    return this.chain[this.chain.length - 1].next_validators.includes(
      this.name
    );
  },
  name: NAME,
  network: new Set(),
  nodeSocks: [],
  tasks: [],
  transactionPool: [], // List of transaction since last block was mined. Gets added to next block.
};
