use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct Account {
    pub address: String,
    pub balance: u64,
}

impl Account {
    pub fn can_transfer(&self, amount: &u64) -> bool {
        self.balance >= *amount
    }
}
