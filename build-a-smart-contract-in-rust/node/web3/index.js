export default class Web3 {
  constructor(provider) {
    this.provider = new URL(provider);
    this.network = null;
    this.wss = null;
    this.rpc = null;
    this.address = null;
  }
  setClientAddress(address) {
    this.address = address;
  }
  async call(rpcCall) {
    const response = await fetch(`${this.provider.href}call-smart-contract`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...rpcCall, address: this.address })
    });
    const res = await response.json();
    if (res.error) {
      throw new Error(res.error);
    }
    return res.result;
  }
  // Init rpc with given IDL
  initSmartContract(idl) {
    const smartContract = {};
    for (const instruction of idl.instructions) {
      smartContract[instruction.handle] = async (...args) => {
        for (const i in args) {
          if (typeof args[i] !== instruction.args[i]) {
            throw new Error(
              `Unexpected argument: ${args[i]}\nExpected: ${instruction.args[i]}`
            );
          }
        }
        const rpcCall = {
          method: instruction.handle,
          args,
          id: idl.id
        };
        return await this.call(rpcCall);
      };
    }
    return smartContract;
  }
  async getBalance(address) {
    const response = await fetch(`${this.provider.href}get-balance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ address: address || this.address })
    });
    const res = await response.json();
    if (res.error) {
      throw new Error(res.error);
    }
    return res.result;
  }
  async transfer({ from, to, amount }) {
    const response = await fetch(`${this.provider.href}transfer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ from: from || this.address, to, amount })
    });
    const res = await response.json();
    if (res.error) {
      throw new Error(res.error);
    }
    return res.result;
  }
}
