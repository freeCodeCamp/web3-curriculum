use serde::{Deserialize, Serialize};

use crate::account::Account;
use crate::smart_contract::SmartContract;

#[derive(Serialize, Deserialize)]
pub struct Block {
    pub id: u64,
    pub previous_id: u64,
    pub timestamp: u64,
    pub data: Data,
    pub nonce: u64,
}

#[derive(Serialize, Deserialize)]
pub struct Data {
    pub accounts: Vec<Account>,
    pub smart_contracts: Vec<SmartContract>,
}
