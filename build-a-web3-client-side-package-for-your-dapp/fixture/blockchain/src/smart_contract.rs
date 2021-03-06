use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct SmartContract {
    pub id: Option<u64>,
    pub base_account: String,
    pub context: String, // This is JSON.stringified context
    pub pkg: Option<Buffer>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Pkg {
    pub name: String,
    pub buffer: Buffer,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Buffer {
    pub r#type: String,
    pub data: Vec<u8>
}
