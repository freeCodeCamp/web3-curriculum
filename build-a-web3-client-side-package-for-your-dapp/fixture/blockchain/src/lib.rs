pub mod account;
pub mod block;
pub mod chain;
pub mod smart_contract;

use account::Account;
use block::Data;
use chain::{Chain, ChainTrait};
use serde::{Deserialize, Serialize};
use serde_json;
use sha2::{Digest, Sha256};
use smart_contract::SmartContract;
use wasm_bindgen::prelude::*;
// use web_sys::console;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

pub static DIFFICULTY_PREFIX: &str = "0";

#[derive(Serialize, Deserialize, Debug)]
pub struct Transfer {
    pub from: String,
    pub to: String,
    pub amount: u64,
}

#[derive(Serialize, Deserialize, Debug)]
pub enum Transactions {
    AddAccount(String),
    AddSmartContract(SmartContract),
    SetSmartContractContext(Context),
    Transfer(Transfer),
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Context {
    pub id: u64,
    pub context: String
}

#[wasm_bindgen]
pub fn mine_block(chain: JsValue, transactions: JsValue) -> Result<JsValue, JsError> {
    let mut chain: Chain = chain.into_serde()?;
    let transactions: Vec<Transactions> = transactions.into_serde()?;

    let mut data: Data = Data {
        accounts: vec![],
        smart_contracts: vec![],
    };

    // If genesis, start with system account
    if chain.is_empty() {
        data.accounts.push(Account {
            address: "shaun".to_string(),
            balance: 1_000_000_000_000_000_000,
        });
    }

    for transaction in transactions {
        match transaction {
            Transactions::AddAccount(account) => {
                data.accounts.push(Account {
                    address: account,
                    balance: 1_000_000,
                });
            }
            Transactions::AddSmartContract(mut smart_contract) => {
                smart_contract.id = Some(chain.get_num_smart_contracts());
                data.smart_contracts.push(smart_contract);
            }
            Transactions::SetSmartContractContext(context) => {
                let id = context.id;
                if let Some(smart_contract) = chain.get_smart_contract_by_id(id) {
                    let smart_contract = SmartContract {
                        id: Some(id),
                        base_account: smart_contract.base_account.clone(),
                        context: context.context,
                        pkg: None,
                    };
                    data.smart_contracts.push(smart_contract);
                    } else {
                        return Err(JsError::new("Could not find smart contract with id"));
                    }
            }
            Transactions::Transfer(transfer) => {
                if let Some(from_account) = chain.get_account_by_address(&transfer.from) {
                    let mut from_account = from_account.clone();
                    if from_account.can_transfer(&transfer.amount) {
                        if let Some(to_account) = chain.get_account_by_address(&transfer.to) {
                            let mut to_account = to_account.clone();

                            from_account.balance -= transfer.amount;
                            to_account.balance += transfer.amount;

                            data.accounts.push(from_account);
                            data.accounts.push(to_account);
                        } else {
                            // To account does not exist
                            return Err(JsError::new("To account does not exist"));
                        }
                    } else {
                        // From account cannot afford this transfer
                        return Err(JsError::new("From account cannot afford this transfer"));
                    }
                } else {
                    // From account does not exist
                    return Err(JsError::new("From account does not exist"));
                }
            }
        };
    }

    chain.mine_block(data);
    Ok(JsValue::from_serde(&chain)?)
}

//---------------------

/// Takes a hash slice, and returns the binary representation.
pub fn hash_to_binary(hash: &[u8]) -> String {
    let mut res: String = String::default();
    for c in hash {
        res.push_str(&format!("{:b}", c));
    }
    res
}

/// Uses `Sha256` to calculate the hash from a `serde_json::Value` of the input arguments.
pub fn calculate_hash(
    data: &Data,
    id: u64,
    nonce: u64,
    previous_id: &u64,
    timestamp: u64,
) -> Vec<u8> {
    let data = serde_json::json!({
        "id": id,
        "previous_id": previous_id,
        "data": data,
        "timestamp": timestamp,
        "nonce": nonce,
    });
    let mut hasher = Sha256::new();
    hasher.update(data.to_string().as_bytes());
    hasher.finalize().as_slice().to_owned()
}
