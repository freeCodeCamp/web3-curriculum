use crate::account::Account;
use crate::block::{Block, Data};
use crate::{calculate_hash, hash_to_binary, DIFFICULTY_PREFIX};

use chrono;

pub type Chain = Vec<Block>;

impl ChainTrait for Chain {
    fn get_last_block(&self) -> Option<&Block> {
        self.last()
    }

    fn get_account_by_address(&self, address: &str) -> Option<&Account> {
        // Search Chain data in reverse
        for block in self.iter().rev() {
            for node in block.data.accounts.iter() {
                if node.address == address {
                    return Some(node);
                }
            }
        }
        None
    }

    fn get_num_smart_contracts(&self) -> u64 {
        self.iter().fold(0, |acc, block| {
            acc + block.data.smart_contracts.len() as u64
        })
    }
    fn mine_block(&mut self, data: Data) {
        println!("\nMining Block...");
        let mut nonce = 0;

        let id = self.len() as u64;
        let previous_id = match self.get_last_block() {
            Some(block) => block.id.clone(),
            None => 0,
        };
        let timestamp = chrono::Utc::now().timestamp() as u64;
        loop {
            if nonce % 100_000 == 0 {
                println!("Trying nonce: {}", nonce);
            }

            let hash = calculate_hash(&data, id, nonce, &previous_id, timestamp);
            let bin_hash = hash_to_binary(&hash);
            if bin_hash.starts_with(DIFFICULTY_PREFIX) {
                let new_block = Block {
                    id,
                    previous_id,
                    timestamp,
                    data,
                    nonce,
                };
                self.push(new_block);
                break;
            }
            nonce += 1;
        }
    }
}

pub trait ChainTrait {
    fn get_last_block(&self) -> Option<&Block>;
    fn mine_block(&mut self, data: Data);
    fn get_account_by_address(&self, address: &str) -> Option<&Account>;
    fn get_num_smart_contracts(&self) -> u64;
}
