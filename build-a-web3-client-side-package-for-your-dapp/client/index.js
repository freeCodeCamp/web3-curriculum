// Your Web3 package is imported here ↓
import Web3 from '../web3/index.js';
import idl from '../fixture/data/idl.json' assert { type: 'json' };

// Instantiate a new Web3 object
const web3 = new Web3('http://localhost:3001');
// Set 'tom' as the client address
web3.setClientAddress('tom');

// Use the imported IDL to create a new smart contract instance.
const smartContract = web3.initSmartContract(idl);

const btn = document.getElementById('click');
const address = document.getElementById('address');

btn.addEventListener('click', handleClick);

address.addEventListener('change', setClientAddress);

const totalClicks = document.getElementById('total-clicks');
const clickers = document.getElementById('clickers');

function setClientAddress(e) {
  // Change client address
  web3.setClientAddress(e.target.value);
}

async function handleClick() {
  // Call the 'set_click' method on the smart contract
  const res = await smartContract.set_click(web3.address);
  if (res.error) {
    totalClicks.innerHTML = res.error;
  } else {
    refreshContract();
  }
}

async function refreshContract() {
  clickers.innerHTML = '';
  // Call the 'get_contract_account' method on the smart contract
  const contractState = await smartContract.get_contract_account();
  console.log(contractState);
  totalClicks.innerText = `Total clicks: ${contractState.total_clicks}`;
  for (const clicker of contractState.clickers) {
    const clickerEl = document.createElement('li');
    clickerEl.innerText = clicker;
    clickers.appendChild(clickerEl);
  }
}

refreshContract();
