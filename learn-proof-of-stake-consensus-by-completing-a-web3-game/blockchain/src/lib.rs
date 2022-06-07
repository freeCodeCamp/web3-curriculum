//! # Blockchain
//!
//! `blockchain` is a WASM module for handling a Proof of Stake blockchain.

pub mod block;
pub mod chain;
pub mod node;

use block::Block;
use chain::Chain;
use node::Node;

use rand::Rng;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use wasm_bindgen::prelude::*;

/// Increasing the number of leading zeros in the hash of a block increases the difficulty of mining a block.
pub static DIFFICULTY_PREFIX: &str = "0";

/// Events that can be emitted in the `event` field of a `Transaction`.
#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum Events {
    BuyRack,
    BlockInvalidated,
    Stake,
    SubmitTask,
    Unstake,
    UpdateChain,
}

/// A transaction describes the change which needs to be mined into a block. The transaction is associated with the `name` of a Node.
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Transaction {
    pub event: Events,
    pub name: String,
}

/// The current state of the Node calling the API.
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct NodeState {
    pub chain: Chain,
    pub transactions: Vec<Transaction>,
    pub task_valid: bool,
}

/// The structure of the response from the Blockchain API.
#[derive(Serialize, Deserialize, Debug)]
pub struct Res {
    pub chain: Chain,
    pub errors: Vec<String>,
}

/// Mines the next block onto the given chain passed in the `node_state` argument.
///
/// # Examples
///
/// ```js
/// const nodeState = {
///   chain: {
///     chain: [],
///     network: ["node_1", "node_2"],
///   },
///   transactions: [
///     {
///       event: "UpdateChain",
///       name: "node_2"
///     }
///   ],
///   task_valid: true
/// };
/// const result = handle_mine(nodeState);
/// ```
#[wasm_bindgen]
pub fn handle_mine(node_state: JsValue) -> Result<JsValue, JsError> {
    let node_state: NodeState = node_state.into_serde()?;
    let mut chain = node_state.chain;
    let mut errors: Vec<String> = vec![];

    let mut unique_nodes: Vec<Node> = vec![];
    for transaction in node_state.transactions.iter() {
        if let Some(node) = chain.get_node_by_name(&transaction.name) {
            if !unique_nodes.iter().any(|n| n.name == node.name) {
                let node = node.clone();
                unique_nodes.push(node);
            }
        }
    }

    for transaction in node_state.transactions.iter() {
        if let Some(node) = unique_nodes.iter_mut().find(|n| n.name == transaction.name) {
            match transaction.event {
                Events::Unstake => {
                    if node.can_unstake() {
                        node.staked -= 1;
                    } else {
                        errors.push(format!("{} cannot unstake", node.name));
                    }
                }
                Events::Stake => {
                    if node.can_stake() {
                        node.staked += 1;
                    } else {
                        errors.push(format!("{} cannot stake", node.name));
                    }
                }
                Events::BuyRack => {
                    if node.can_buy_rack() {
                        node.racks += 1;
                        node.tokens -= 10;
                    } else {
                        errors.push(format!("{} cannot buy rack", node.name));
                    }
                }
                Events::BlockInvalidated => {
                    if node.can_punish() {
                        if node.tokens == node.staked {
                            node.staked -= 1;
                        }
                        node.tokens -= 1;
                        node.reputation -= 1;
                    } else {
                        errors.push(format!("{} cannot be punished", node.name));
                    }
                }
                Events::SubmitTask => {
                    if node_state.task_valid {
                        node.tokens += 1;
                        // More staked tokens == higher chance of reputation increasing
                        if rand::thread_rng().gen_range(node.staked..=node.tokens) == node.tokens {
                            node.reputation += 1;
                        }
                    } else {
                        if node.can_punish() {
                            if node.tokens == node.staked {
                                node.staked -= 1;
                            }
                            node.tokens -= 1;
                            node.reputation -= 1;
                        } else {
                            errors.push(format!("{} cannot be punished", node.name));
                        }
                    }
                }
                _ => {
                    errors.push(format!("{} transacted with an invalid event", node.name));
                }
            };
        } else {
            match transaction.event {
                Events::UpdateChain => {
                    // Add node to chain
                    unique_nodes.push(Node::new(&transaction.name));
                }
                _ => {
                    errors.push(format!("{} not found in chain", transaction.name));
                }
            };
        }
    }

    if errors.len() == node_state.transactions.len() || unique_nodes.len() == 0 {
        return Err(JsError::new("Invalid transactions. No change in chain"));
    }
    chain.mine_block(unique_nodes);
    // let response = Res { chain, errors };
    Ok(JsValue::from_serde(&(chain, errors))?)
}

/// Validates whether the provided `chain` argument is valid for the latest two blocks in the chain.
///
/// # Examples
///
/// ```js
/// const chain = {
///   chain: [
///    {
///     id: 0,
///     hash: "01101101",
///     previous_hash: "genesis",
///     timestamp: 123456789,
///     data: [
///       {
///         name: "node_1",
///         tokens: 20,
///         staked: 0,
///         reputation: 1,
///         racks: 0
///       }],
///     nonce: 0,
///     next_miner: "node_1",
///     next_validators: ["node_2"]
///    }],
///   network: ["node_1", "node_2"]
/// };
/// const isChainValid = handle_validate(chain);
/// assert.equal(isChainValid, true);
/// ```
///
/// # Errors
///
/// If `chain` argument is not deserialisable into type `Chain`, a `JsError` is thrown.
#[wasm_bindgen]
pub fn handle_validate(chain: JsValue) -> Result<bool, JsError> {
    let chain: Chain = chain.into_serde()?;
    if let Some(previous_block) = chain.chain.get(chain.chain.len() - 2) {
        let last_block: Block = match chain.get_last_block() {
            Some(block) => block,
            None => return Err(JsError::new("Chain is empty")),
        };
        Ok(Node::validate_block(&last_block, previous_block))
    } else {
        Err(JsError::new("Chain is too short"))
    }
}

/// Initialise a new blockchain, and returns the corresponding chain.
/// This is only to be called by the first Node starting the network.
#[wasm_bindgen]
pub fn initialise(name: String) -> Result<JsValue, JsError> {
    let mut chain: Chain = Chain::new();

    // Create and mine genesis block
    let data = vec![Node::new(&name)];
    chain.mine_block(data);

    Ok(JsValue::from_serde(&chain)?)
}

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
    data: &Vec<Node>,
    id: u64,
    next_miner: &String,
    next_validators: &Vec<String>,
    nonce: u64,
    previous_hash: &str,
    timestamp: u64,
) -> Vec<u8> {
    let data = serde_json::json!({
        "id": id,
        "previous_hash": previous_hash,
        "data": data,
        "timestamp": timestamp,
        "nonce": nonce,
        "next_miner": next_miner,
        "next_validators": next_validators,
    });
    let mut hasher = Sha256::new();
    hasher.update(data.to_string().as_bytes());
    hasher.finalize().as_slice().to_owned()
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn difficulty_is_not_too_high() {
        assert!(DIFFICULTY_PREFIX.len() <= 3);
    }
    #[test]
    fn calculate_hash_works() {
        let data = vec![Node::new("test")];
        let hash = calculate_hash(
            &data,
            1,
            &"test".to_string(),
            &vec!["test".to_string()],
            1,
            &"test".to_string(),
            1,
        );
        assert_eq!(hash.len(), 32);
    }
    #[test]
    fn hash_to_binary_works() {
        let hash = vec![0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        let hash_str = hash_to_binary(&hash);
        assert_eq!(hash_str.len(), 50);
    }
}
