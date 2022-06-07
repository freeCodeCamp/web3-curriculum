//! # Chain
//!
//! A chain represents the main data of the blockchain, and is passed in full between Nodes.

use rand::Rng;
use serde::{Deserialize, Serialize};

use crate::{block::Block, calculate_hash, hash_to_binary, node::Node, DIFFICULTY_PREFIX};

/// The chain consists of the immutable `chain` data, and the changing `network` data.
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Chain {
    pub chain: Vec<Block>,
    pub network: Vec<String>,
}

impl Chain {
    /// Creates a `Chain` with empty `chain` and `network` data.
    pub fn new() -> Self {
        Self {
            chain: vec![],
            network: vec![],
        }
    }

    /// Returns the last block of the current `Chain`, if it exists. Otherwise, returns `None`.
    ///
    /// # Examples
    ///
    /// ```
    /// let mut chain = Chain::new();
    /// let last_block = chain.last_block();
    /// assert!(last_block.is_none());
    /// ```
    ///
    /// If chain is initialised by Node:
    ///
    /// ```javascript
    /// const chain = initialise("node_1");
    /// assert.equal(chain.chain.length, 1);
    /// ```
    ///
    /// ```
    /// assert_eq!(chain.last_block().unwrap().id, 0);
    /// ```
    pub fn get_last_block(&self) -> Option<Block> {
        match self.chain.last() {
            Some(block) => Some(block.clone()),
            None => None,
        }
    }

    /// Applies weighted, random selection to all `Node`s in the `Chain` to determine the `next_miner` for the next block.
    ///
    /// **Note:** Defaults to returning `"Camper"`, if no `Node`s are present in the `Chain`.
    ///
    /// # Examples
    ///
    /// ```
    /// let chain = Chain::new();
    /// let next_miner = chain.get_next_miner();
    /// assert_eq!(next_miner, String::from("Camper"));
    /// ```
    pub fn get_next_miner(&self) -> String {
        let mut nodes: Vec<&Node> = self.get_nodes();

        nodes.sort_by(|a, b| a.weight_as_miner().cmp(&b.weight_as_miner()));
        let cumulative_weight = nodes
            .iter()
            .fold(0, |acc, node| acc + node.weight_as_miner());
        let cumulative_weights = nodes
            .iter()
            .map(|node| node.weight_as_miner() as f64 / cumulative_weight as f64)
            .collect::<Vec<f64>>();

        let rand_num = rand::thread_rng().gen::<f64>();
        let mut ind = 0;
        for (i, c_m) in cumulative_weights.iter().enumerate() {
            ind = i;
            if c_m > &rand_num {
                break;
            }
        }
        let next_miner = match nodes.get(ind) {
            Some(node) => node.name.clone(),
            None => "Camper".to_string(),
        };

        next_miner
    }

    /// Applies weighted, random selection to all `Node`s in the `Chain` to determine the `next_validators` for the next block.
    pub fn get_next_validators(&self, next_miner: &String) -> Vec<String> {
        let num_of_nodes = self.network.len();
        let next_miner_reputation = match self.get_node_by_name(next_miner) {
            Some(node) => node.reputation,
            None => 0,
        };

        let mut nodes = self.get_nodes();

        let mut max_reputation = 0;
        for node in nodes.iter() {
            if node.reputation > max_reputation {
                max_reputation = node.reputation;
            }
        }

        // The greater the reputation, the fewer validators are needed
        let num_needed_validators = (max_reputation - next_miner_reputation) as usize;
        let num_needed_validators = if num_needed_validators > num_of_nodes {
            num_of_nodes
        } else {
            num_needed_validators + 1
        };

        nodes.sort_by(|a, b| a.weight_as_validator().cmp(&b.weight_as_validator()));

        let cumulative_weight = nodes
            .iter()
            .fold(0, |acc, node| acc + node.weight_as_validator());
        let cumulative_weights = nodes
            .iter()
            .map(|node| node.weight_as_validator() as f64 / cumulative_weight as f64)
            .collect::<Vec<f64>>();

        println!(
            "Cumulative Weight: {:?}\nCumulative Weights: {:?}\n\n",
            cumulative_weight, cumulative_weights
        );
        let mut next_validators = vec![];
        for _ in 0..num_needed_validators {
            let rand_num = rand::thread_rng().gen::<f64>();
            let mut ind = 0;
            for (i, c_m) in cumulative_weights.iter().enumerate() {
                if c_m > &rand_num {
                    break;
                }
                ind = i;
            }
            let validator = match nodes.get(ind) {
                Some(node) => node.name.clone(),
                None => "Camper".to_string(),
            };
            next_validators.push(validator);
        }
        next_validators
    }

    /// Returns the `Node` with the given `name` if it exists in the `Chain`. Otherwise, returns `None`.
    ///
    /// # Examples
    ///
    /// ```
    /// let mut chain = Chain::new();
    /// assert!(chain.get_node_by_name("Camper").is_none());
    /// ```
    pub fn get_node_by_name(&self, name: &str) -> Option<&Node> {
        // Search Chain data in reverse
        for block in self.chain.iter().rev() {
            for node in block.data.iter() {
                if node.name == name {
                    return Some(node);
                }
            }
        }
        None
    }

    /// Returns a `Vec` of all `Node`s in the `Chain`.
    pub fn get_nodes(&self) -> Vec<&Node> {
        let mut nodes = vec![];
        for block in self.chain.iter().rev() {
            for node in block.data.iter() {
                // If node.name is not in nodes, add it
                if !nodes.iter().any(|n: &&Node| n.name == node.name) {
                    nodes.push(node);
                }
            }
        }
        nodes
    }

    /// Mines the given `data` into a new `Block` on the `Chain`.
    pub fn mine_block(&mut self, data: Vec<Node>) {
        println!("\nMining Block...");
        let mut nonce = 0;

        let id = self.chain.len() as u64;
        let next_miner = self.get_next_miner();
        let next_validators = self.get_next_validators(&next_miner);
        let previous_hash = match self.get_last_block() {
            Some(block) => block.hash.clone(),
            None => "".to_string(),
        };
        let timestamp = chrono::Utc::now().timestamp() as u64;
        loop {
            if nonce % 100_000 == 0 {
                println!("Trying nonce: {}", nonce);
            }

            let hash = calculate_hash(
                &data,
                id,
                &next_miner,
                &next_validators,
                nonce,
                &previous_hash,
                timestamp,
            );
            let bin_hash = hash_to_binary(&hash);
            if bin_hash.starts_with(DIFFICULTY_PREFIX) {
                let new_block = Block {
                    id,
                    hash: bin_hash,
                    previous_hash,
                    timestamp,
                    data,
                    nonce,
                    next_miner,
                    next_validators,
                };
                self.chain.push(new_block);
                break;
            }
            nonce += 1;
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn new_chain_returns_empty_vec() {
        let chain: Chain = Chain::new();
        assert_eq!(chain.chain.len(), 0);
    }
    #[test]
    fn get_last_block_returns_none_when_chain_is_empty() {
        let chain: Chain = Chain::new();
        assert!(chain.get_last_block().is_none());
    }
    #[test]
    fn get_last_block_returns_last_block_when_chain_is_not_empty() {
        let chain = _fixture_chain();
        assert!(chain.get_last_block().is_some());
    }
    #[test]
    fn get_next_miner_returns_different_miner_when_chain_is_not_empty() {
        let chain = _fixture_chain();
        // run 100 times, break if miner is different
        let mut i = 0;
        let a = loop {
            let previous_miner = chain.get_last_block().unwrap().next_miner.clone();
            let next_miner = chain.get_next_miner();
            if previous_miner != next_miner {
                break true;
            }
            if i == 99 {
                break false;
            }
            i += 1;
        };
        assert!(a);
    }
    #[test]
    fn get_next_validators_returns_different_validators_when_chain_is_not_empty() {
        let chain = _fixture_chain();
        // run 100 times, break if validators are different
        let mut i = 0;
        let a = loop {
            let previous_validators = chain.get_last_block().unwrap().next_validators.clone();
            let next_validators = chain.get_next_validators(&chain.get_next_miner());
            if previous_validators != next_validators {
                break true;
            }
            if i == 99 {
                break false;
            }
            i += 1;
        };
        assert!(a);
    }
    #[test]
    fn get_node_by_name_returns_none_when_node_is_not_in_chain() {
        let chain = _fixture_chain();
        assert!(chain.get_node_by_name("node_not_in_chain").is_none());
    }
    #[test]
    fn get_node_by_name_returns_node_when_node_is_in_chain() {
        let chain = _fixture_chain();
        assert!(chain.get_node_by_name("Camper").is_some());
    }
    #[test]
    fn get_nodes_returns_all_nodes_in_chain() {
        let chain = _fixture_chain();
        let nodes = chain.get_nodes();
        assert_eq!(nodes.len(), 4);
    }
    #[test]
    fn mine_block_does_not_panic() {
        let mut chain = _fixture_chain();
        chain.mine_block(vec![Node::new("Shaun")]);
        assert_eq!(chain.chain.len(), 3);
    }

    fn _fixture_chain<'a>() -> Chain {
        let mut chain = Chain::new();
        let mut camper = Node::new("Camper");
        camper.reputation = 1;
        camper.tokens = 10;
        camper.staked = 5;
        let mut tom = Node::new("Tom");
        tom.reputation = 2;
        tom.tokens = 20;
        tom.staked = 10;
        let mut mrugesh = Node::new("Mrugesh");
        mrugesh.reputation = 4;
        mrugesh.tokens = 100;
        mrugesh.staked = 80;
        let mut ahmad = Node::new("Ahmad");
        ahmad.reputation = 3;
        ahmad.tokens = 30;
        ahmad.staked = 22;

        let data = vec![camper, tom, mrugesh];
        chain.network = vec![
            String::from("Camper"),
            String::from("Tom"),
            String::from("Mrugesh"),
        ];
        chain.mine_block(data);
        let data = vec![ahmad];
        chain.network.push(String::from("Ahmad"));
        chain.mine_block(data);
        chain
    }
}
