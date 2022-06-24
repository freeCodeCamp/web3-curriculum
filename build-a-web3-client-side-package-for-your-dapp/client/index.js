import Web3 from "../web3/index.js";
import idl from "../fixture/data/idl.json" assert { type: "json" };

const web3 = new Web3("http://localhost:3001");
web3.setClientAddress("tom"); // For default;

const smartContract = web3.initSmartContract(idl);

const btn = document.getElementById("click");
const address = document.getElementById("address");

const mine = document.getElementById("mine");
mine.addEventListener("click", async () => {
  fetch("http://localhost:3001/mine", { method: "POST" });
});

btn.addEventListener("click", handleClick);

address.addEventListener("change", setClientAddress);

const totalClicks = document.getElementById("total-clicks");
const clickers = document.getElementById("clickers");

function setClientAddress(e) {
  console.log(e.target.value);
  web3.setClientAddress(e.target.value);
}

async function handleClick() {
  const res = await smartContract.set_click(web3.address);
  if (res.error) {
    totalClicks.innerHTML = res.error;
  } else {
    refreshContract();
  }
}

async function refreshContract() {
  const contractState = await smartContract.get_contract_account();
  console.log(contractState);
  totalClicks.innerText = contractState.total_clicks;
  for (const clicker of contractState.clickers) {
    const clickerEl = document.createElement("li");
    clickerEl.innerText = clicker;
    clickers.appendChild(clickerEl);
  }
}

refreshContract();
