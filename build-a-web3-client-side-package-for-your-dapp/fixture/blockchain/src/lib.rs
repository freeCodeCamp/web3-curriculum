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
    SetSmartContractState(Context),
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
                    balance: 0,
                });
            }
            Transactions::AddSmartContract(mut smart_contract) => {
                smart_contract.id = Some(chain.get_num_smart_contracts());
                data.smart_contracts.push(smart_contract);
            }
            Transactions::SetSmartContractState(context) => {
                let mut context: Context = context.into_serde()?;
                let id = context.id;
                let context = context.context;
                let mut smart_contract = data.smart_contracts.iter_mut().find(|sc| sc.id == Some(id)).unwrap();
                smart_contract.context = context;
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
                        }
                    } else {
                        // From account cannot afford this transfer
                    }
                } else {
                    // From account does not exist
                }
            }
        };
    }

    chain.mine_block(data);
    Ok(JsValue::from_serde(&chain)?)
}

// #[wasm_bindgen]
// pub fn transact(data: JsValue) -> Result<(), JsError> {
//     let transaction: Transactions = data.into_serde()?;
//     // console::log_1(&format!("{:?}", transaction).into());
//     // Append `transaction` to `../../transactions.json`
//     let transactions_file = std::fs::read_to_string("../../transactions.json")?;
//     console::log_1(&format!("{:?}", transactions_file).into());
//     let mut transactions: Vec<Transactions> = serde_json::from_str(&transactions_file)?;
//     transactions.push(transaction);
//     let transactions = serde_json::to_string(&transactions)?;
//     std::fs::write("../../transactions.json", transactions)?;
//     Ok(())
// }

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
