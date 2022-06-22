use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct SmartContract {
    pub id: Option<u64>,
    pub base_account: String,
    pub byte_code: Vec<u8>,
}
