//! # Node
//!
//! A node is a piece of data that is stored in a `BLock` on the blockchain.

use serde::{Deserialize, Serialize};

use crate::{block::Block, calculate_hash, hash_to_binary, DIFFICULTY_PREFIX};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Node {
    pub name: String,
    pub racks: u64,
    pub reputation: u64,
    pub staked: u64,
    pub tokens: u64,
}

impl Node {
    /// Creates a new Node with the given name.
    ///
    /// # Examples
    ///
    /// ```
    /// let node = Node::new("Camper");
    /// assert_eq!(node.name, "Camper");
    /// ```
    pub fn new(name: &str) -> Self {
        Self {
            name: name.to_string(),
            staked: 0,
            tokens: 20,
            racks: 0,
            reputation: 1,
        }
    }

    /// Check if Node can afford a server rack
    pub fn can_buy_rack(&self) -> bool {
        self.tokens - self.staked >= 10
    }
    /// Check if a Node can stake, by checking if it has any unstaked tokens
    pub fn can_stake(&self) -> bool {
        self.tokens > self.staked
    }
    /// Check if a Node can unstake, by checking if it has any staked tokens
    pub fn can_unstake(&self) -> bool {
        self.staked > 0
    }
    /// Check if a Node can be punished, by checking if it has any tokens and reputation
    pub fn can_punish(&self) -> bool {
        self.tokens > 0 && self.reputation > 0
    }
    /// Calculates the miner weight of Node
    pub fn weight_as_miner(&self) -> u64 {
        self.reputation * self.staked
    }
    /// Calculates the validator weight of Node
    pub fn weight_as_validator(&self) -> u64 {
        self.reputation
    }

    /// Validates if two adjacent blocks have been correctly mined
    pub fn validate_block(block: &Block, previous_block: &Block) -> bool {
        if block.previous_hash != previous_block.hash {
            println!("block with id: {} has wrong previous hash", block.id);
            return false;
        } else if !&block.hash.starts_with(DIFFICULTY_PREFIX) {
            println!("block with id: {} has invalid difficulty", block.id);
            return false;
        } else if block.id != previous_block.id + 1 {
            println!(
                "block with id: {} is not the next block after the latest: {}",
                block.id, previous_block.id
            );
            return false;
        } else if hash_to_binary(&calculate_hash(
            &block.data,
            block.id,
            &block.next_miner,
            &block.next_validators,
            block.nonce,
            &block.previous_hash,
            block.timestamp,
        )) != block.hash
        {
            println!("block with id: {} has invalid hash", block.id);
            return false;
        }
        true
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn new_always_creates_same_node() {
        let node1 = Node::new("node1");
        let node2 = Node::new("node1");
        assert_eq!(node1.name, node2.name);
        assert_eq!(node1.staked, node2.staked);
        assert_eq!(node1.tokens, node2.tokens);
        assert_eq!(node1.racks, node2.racks);
        assert_eq!(node1.reputation, node2.reputation);
    }
    #[test]
    fn cannot_buy_rack_when_all_staked() {
        let node = _fixture_nodes().0;
        assert!(!node.can_buy_rack());
    }
    #[test]
    fn can_buy_rack_when_all_unstaked() {
        let node = _fixture_nodes().1;
        assert!(node.can_buy_rack());
    }
    #[test]
    fn can_buy_rack_when_no_rep() {
        let node = _fixture_nodes().2;
        assert!(node.can_buy_rack());
    }
    #[test]
    fn cannot_buy_rack_when_no_tokens() {
        let node = _fixture_nodes().3;
        assert!(!node.can_buy_rack());
    }
    #[test]
    fn cannot_stake_when_all_staked() {
        let node = _fixture_nodes().0;
        assert!(!node.can_stake());
    }
    #[test]
    fn can_stake_when_all_unstaked() {
        let node = _fixture_nodes().1;
        assert!(node.can_stake());
    }
    #[test]
    fn can_stake_when_no_rep() {
        let node = _fixture_nodes().2;
        assert!(node.can_stake());
    }
    #[test]
    fn cannot_stake_when_no_tokens() {
        let node = _fixture_nodes().3;
        assert!(!node.can_stake());
    }
    #[test]
    fn can_unstake_when_all_staked() {
        let node = _fixture_nodes().0;
        assert!(node.can_unstake());
    }
    #[test]
    fn cannot_unstake_when_all_unstaked() {
        let node = _fixture_nodes().1;
        assert!(!node.can_unstake());
    }
    #[test]
    fn can_unstake_when_no_rep() {
        let node = _fixture_nodes().2;
        assert!(node.can_unstake());
    }
    #[test]
    fn cannot_unstake_when_no_tokens() {
        let node = _fixture_nodes().3;
        assert!(!node.can_unstake());
    }
    #[test]
    fn all_staked_miner_weight() {
        let node = _fixture_nodes().0;
        assert_eq!(node.weight_as_miner(), 800);
    }
    #[test]
    fn all_unstaked_miner_weight() {
        let node = _fixture_nodes().1;
        assert_eq!(node.weight_as_miner(), 0);
    }
    #[test]
    fn no_rep_miner_weight() {
        let node = _fixture_nodes().2;
        assert_eq!(node.weight_as_miner(), 0);
    }
    #[test]
    fn no_tokens_miner_weight() {
        let node = _fixture_nodes().3;
        assert_eq!(node.weight_as_miner(), 0);
    }
    #[test]
    fn all_staked_validator_weight() {
        let node = _fixture_nodes().0;
        assert_eq!(node.weight_as_validator(), 8);
    }
    #[test]
    fn all_unstaked_validator_weight() {
        let node = _fixture_nodes().1;
        assert_eq!(node.weight_as_validator(), 8);
    }
    #[test]
    fn no_rep_validator_weight() {
        let node = _fixture_nodes().2;
        assert_eq!(node.weight_as_validator(), 0);
    }
    #[test]
    fn no_tokens_validator_weight() {
        let node = _fixture_nodes().3;
        assert_eq!(node.weight_as_validator(), 1);
    }
    #[test]
    fn invalidate_block_unequal_previous_hash() {
        let previous_block = _fixture_blocks().0;
        let mut block = _fixture_blocks().1;
        block.previous_hash = block.previous_hash.replace("1", "0");
        assert!(!Node::validate_block(&block, &previous_block));
    }
    #[test]
    fn invalidate_block_hash_not_start_with_difficulty() {
        let previous_block = _fixture_blocks().0;
        let mut block = _fixture_blocks().1;
        block.hash = block.previous_hash.replace("0", "1"); //"011111101111000110011110001110011001111011011010011011000101110010100101001001111001110001011010111000010011000010000100101000011010111110001110010011110101011000011101011110011001110010111001011011011111111010110100000".to_string();
        assert!(!Node::validate_block(&block, &previous_block));
    }
    #[test]
    fn invalidate_block_id_not_incremented() {
        let previous_block = _fixture_blocks().0;
        let mut block = _fixture_blocks().1;
        block.id = previous_block.id;
        assert!(!Node::validate_block(&block, &previous_block));
    }
    #[test]
    fn invalidate_encoded_hash_not_correct() {
        let previous_block = _fixture_blocks().0;
        let mut block = _fixture_blocks().1;
        block.hash = "001111101111000110011110001110011001111011011010011011000101110010100101001001111001110001011010111000010011000010000100101000011010111110001110010011110101011000011101011110011001110010111001011011011111111010110100000".to_string();
        assert!(!Node::validate_block(&block, &previous_block));
    }
    #[test]
    fn validate_block_correct() {
        let previous_block = _fixture_blocks().0;
        let block = _fixture_blocks().1;
        assert!(Node::validate_block(&block, &previous_block));
    }

    fn _fixture_nodes() -> (Node, Node, Node, Node) {
        let all_staked = Node {
            name: "Shaun".to_string(),
            staked: 100,
            tokens: 100,
            racks: 5,
            reputation: 8,
        };
        let all_unstaked = Node {
            name: "Tom".to_string(),
            staked: 0,
            tokens: 100,
            racks: 5,
            reputation: 8,
        };
        let no_rep = Node {
            name: "Ahmad".to_string(),
            staked: 80,
            tokens: 100,
            racks: 5,
            reputation: 0,
        };
        let no_tokens = Node {
            name: "Quincy".to_string(),
            staked: 0,
            tokens: 0,
            racks: 1,
            reputation: 1,
        };
        (all_staked, all_unstaked, no_rep, no_tokens)
    }
    fn _fixture_blocks() -> (Block, Block) {
        let id = 0;
        let previous_hash = String::new();
        let data = vec![
            Node {
                name: "Camper".to_string(),
                staked: 0,
                tokens: 10,
                racks: 1,
                reputation: 1,
            },
            Node {
                name: "Tom".to_string(),
                staked: 0,
                tokens: 10,
                racks: 1,
                reputation: 0,
            },
            Node {
                name: "Mrugesh".to_string(),
                staked: 0,
                tokens: 10,
                racks: 1,
                reputation: 0,
            },
        ];
        let nonce = 83;
        let next_miner = "Camper".to_string();
        let next_validators = vec![
            "Camper".to_string(),
            "Camper".to_string(),
            "Camper".to_string(),
        ];
        let timestamp = 1648987026;
        let hash = hash_to_binary(&calculate_hash(
            &data,
            id,
            &next_miner,
            &next_validators,
            nonce,
            &previous_hash,
            timestamp,
        ));
        let genesis = Block {
            id,
            hash: hash.clone(),
            previous_hash,
            timestamp,
            data,
            nonce,
            next_miner,
            next_validators,
        };

        // ----------------------------
        let id = 1;
        let previous_hash = hash;
        let timestamp = 1648996144;
        let data = vec![Node {
            name: "Ahmad".to_string(),
            staked: 0,
            tokens: 10,
            racks: 1,
            reputation: 0,
        }];
        let nonce = 306;
        let next_miner = "Mrugesh".to_string();
        let next_validators = vec!["Mrugesh".to_string(), "Mrugesh".to_string()];
        let hash = hash_to_binary(&calculate_hash(
            &data,
            id,
            &next_miner,
            &next_validators,
            nonce,
            &previous_hash,
            timestamp,
        ));
        let block = Block {
            id,
            hash,
            previous_hash,
            timestamp,
            data,
            nonce,
            next_miner,
            next_validators,
        };

        (genesis, block)
    }
}
