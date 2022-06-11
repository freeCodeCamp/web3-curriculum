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
    try {
      const response = await fetch(`${this.provider.href}call-smart-contract`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...rpcCall, address: this.address }),
      });
      return (await response.json()).result;
    } catch (err) {
      error(err);
    }
  }
  // Init rpc with given IDL
  createSmartContract(idl) {
    const smartContract = {};
    for (const instruction of idl.instructions) {
      smartContract[instruction.handle] = async (...args) => {
        const rpcCall = {
          version: idl.version,
          method: instruction.handle,
          args,
          id: idl.id,
        };
        return await this.call(rpcCall);
      };
    }
    return smartContract;
  }
  async getBalance(address) {
    try {
      const response = await fetch(`${this.provider.href}get-balance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: address || this.address }),
      });
      return (await response.json()).result;
    } catch (err) {
      console.error(err);
    }
  }
  async transfer(to, amount) {
    try {
      const response = await fetch(`${this.provider.href}get-balance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: address || this.address }),
      });
      return (await response.json()).result;
    } catch (err) {
      console.error(err);
    }
  }
  createIDL(wasmJs, id) {
    try {
      const entries = Object.entries(wasmJs);
      const functions = entries.filter(([_, val]) => typeof val === "function");
      const idl = functions.reduce((acc, [key, func]) => {
        acc.instructions.push({
          handle: key,
          args: func.length,
        });
        return acc;
      }, {});
      idl.id = id;
      return idl;
    } catch (err) {
      console.error(err);
    }
  }
}
