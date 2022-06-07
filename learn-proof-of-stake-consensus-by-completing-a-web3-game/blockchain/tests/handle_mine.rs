extern crate blockchain;

use blockchain::{chain::Chain, handle_mine, node::Node, Events, NodeState, Transaction};
use wasm_bindgen::JsValue;
use wasm_bindgen_test::*;
use web_sys::{console, ErrorEvent};

wasm_bindgen_test::wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn stake() {
    let data = vec![Node::new("Camper")];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions[0].event = Events::Stake;
    fix_node_state.transactions[0].name = "Camper".to_string();

    let (chain, _) = mine(fix_node_state).expect("result to be chain");
    assert_eq!(chain.get_last_block().unwrap().data[0].staked, 1);
}

#[wasm_bindgen_test]
fn buy_rack() {
    let data = vec![Node::new("Camper")];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions[0].event = Events::BuyRack;
    let (chain, _) = mine(fix_node_state).expect("result to be chain");
    assert_eq!(chain.get_last_block().unwrap().data[0].racks, 1);
    assert_eq!(chain.get_last_block().unwrap().data[0].tokens, 10);
}

#[wasm_bindgen_test]
fn block_invalidated() {
    let data = vec![Node::new("Camper")];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions[0].event = Events::BlockInvalidated;
    let (chain, _) = mine(fix_node_state).expect("result to be chain");
    assert_eq!(chain.get_last_block().unwrap().data[0].racks, 0);
    assert_eq!(chain.get_last_block().unwrap().data[0].tokens, 19);
    assert_eq!(chain.get_last_block().unwrap().data[0].reputation, 0);
}

#[wasm_bindgen_test]
fn unstake() {
    let mut camper = Node::new("Camper");
    camper.staked = 1;
    let data = vec![camper];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions[0].event = Events::Unstake;
    let (chain, _) = mine(fix_node_state).expect("result to be chain");
    assert_eq!(chain.get_last_block().unwrap().data[0].staked, 0);
}

#[wasm_bindgen_test]
fn update_chain() {
    let mut camper = Node::new("Camper");
    camper.staked = 1;
    let data = vec![camper];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions[0].event = Events::UpdateChain;
    fix_node_state.transactions[0].name = "Tom".to_string();
    let (chain, _) = mine(fix_node_state).expect("result to be chain");
    assert!(chain.get_node_by_name("Tom").is_some());
    assert_eq!(chain.get_nodes().len(), 2);
}

#[wasm_bindgen_test]
fn all_invalid_buy_rack() {
    let mut camper = Node::new("Camper");
    camper.staked = 11;
    let data = vec![camper];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions[0].event = Events::BuyRack;
    let chain_res = mine(fix_node_state);
    assert!(chain_res.is_err());
    if let Err(e) = chain_res {
        // Get the error message
        let error_message = ErrorEvent::from(e);
        assert_eq!(
            error_message.message(),
            "Invalid transactions. No change in chain"
        );
    }
}

#[wasm_bindgen_test]
fn all_invalid_unstake() {
    let mut camper = Node::new("Camper");
    camper.staked = 0;
    let data = vec![camper];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions[0].event = Events::Unstake;
    let chain_res = mine(fix_node_state);
    assert!(chain_res.is_err());
    if let Err(e) = chain_res {
        // Get the error message
        let error_message = ErrorEvent::from(e);
        assert_eq!(
            error_message.message(),
            "Invalid transactions. No change in chain"
        );
    }
}

#[wasm_bindgen_test]
fn all_invalid_stake() {
    let mut camper = Node::new("Camper");
    camper.staked = 20;
    let data = vec![camper];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions[0].event = Events::Stake;
    let chain_res = mine(fix_node_state);
    assert!(chain_res.is_err());
    if let Err(e) = chain_res {
        // Get the error message
        let error_message = ErrorEvent::from(e);
        assert_eq!(
            error_message.message(),
            "Invalid transactions. No change in chain"
        );
    }
}

#[wasm_bindgen_test]
fn all_invalid_punish() {
    let mut camper = Node::new("Camper");
    camper.tokens = 0;
    let data = vec![camper];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions[0].event = Events::BlockInvalidated;
    let chain_res = mine(fix_node_state);
    assert!(chain_res.is_err());
    if let Err(e) = chain_res {
        // Get the error message
        let error_message = ErrorEvent::from(e);
        assert_eq!(
            error_message.message(),
            "Invalid transactions. No change in chain"
        );
    }
}

#[wasm_bindgen_test]
fn all_invalid_find_node() {
    let mut camper = Node::new("Camper");
    camper.staked = 1;
    let data = vec![camper];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions[0].event = Events::Stake;
    fix_node_state.transactions[0].name = "Tom".to_string();
    let chain_res = mine(fix_node_state);
    console::log_1(&format!("{:?}", chain_res).into());
    assert!(chain_res.is_err());
    if let Err(e) = chain_res {
        // Get the error message
        let error_message = ErrorEvent::from(e);
        assert_eq!(
            error_message.message(),
            "Invalid transactions. No change in chain"
        );
    }
}

#[wasm_bindgen_test]
fn stake_multiple_tokens() {
    let camper = Node::new("Camper");
    let data = vec![camper];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions.push(Transaction {
        name: "Camper".to_string(),
        event: Events::Stake,
    });
    fix_node_state.transactions.push(Transaction {
        name: "Camper".to_string(),
        event: Events::Stake,
    });
    let (chain, _) = mine(fix_node_state).expect("result to be chain");
    assert_eq!(chain.get_node_by_name("Camper").unwrap().staked, 2);
}

#[wasm_bindgen_test]
fn one_invalid_transaction() {
    let camper = Node::new("Camper");
    let data = vec![camper];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions.push(Transaction {
        name: "Camper".to_string(),
        event: Events::Stake,
    });
    fix_node_state.transactions.push(Transaction {
        name: "Tom".to_string(),
        event: Events::Stake,
    });
    let (chain, errors) = mine(fix_node_state).expect("result to be chain");
    assert_eq!(chain.get_node_by_name("Camper").unwrap().staked, 1);
    assert_eq!(errors[0], "Tom not found in chain");
}

#[wasm_bindgen_test]
fn submit_task_lots_staked() {
    let mut camper = Node::new("Camper");
    camper.staked = 15;
    let data = vec![camper];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions.push(Transaction {
        name: "Camper".to_string(),
        event: Events::Stake,
    });
    fix_node_state.transactions.push(Transaction {
        name: "Camper".to_string(),
        event: Events::Stake,
    });
    // mine until reputation increases
    let mut c = 0;
    let a = loop {
        let (chain, _) = mine(fix_node_state.clone()).expect("result to be chain");
        if chain.get_node_by_name("Camper").unwrap().reputation == 2 {
            break true;
        }
        if c >= 25 {
            break false;
        }
        c += 1;
    };
    assert!(a, "probability-based test - may fail");
}

#[wasm_bindgen_test]
fn submit_task_few_staked() {
    let mut camper = Node::new("Camper");
    camper.staked = 1;
    let data = vec![camper];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions.push(Transaction {
        name: "Camper".to_string(),
        event: Events::Stake,
    });
    fix_node_state.transactions.push(Transaction {
        name: "Camper".to_string(),
        event: Events::Stake,
    });
    // mine until reputation increases
    let mut c = 0;
    let mut l = 0;
    let a = loop {
        let (chain, _) = mine(fix_node_state.clone()).expect("result to be chain");
        if chain.get_node_by_name("Camper").unwrap().reputation == 1 {
            c += 1;
        }
        if c >= 10 {
            break true;
        }
        if l >= 25 {
            break false;
        }
        l += 1;
    };
    assert!(a, "probability-based test - may fail");
}

#[wasm_bindgen_test]
fn submit_task_rep_chance() {
    let camper = Node::new("Camper");
    let data = vec![camper];
    let mut fix_node_state = fix(data);
    fix_node_state.transactions.push(Transaction {
        name: "Camper".to_string(),
        event: Events::Stake,
    });
    fix_node_state.transactions.push(Transaction {
        name: "Camper".to_string(),
        event: Events::Stake,
    });
    let (chain, _) = mine(fix_node_state).expect("result to be chain");
    assert_eq!(chain.get_node_by_name("Camper").unwrap().tokens, 21);
}

fn fix(data: Vec<Node>) -> NodeState {
    let node_vec_str = serde_json::to_string(&data).unwrap();
    let fix_node_state = format!(
        r#"{{
      "chain": {{
        "chain": [
          {{
            "id": 0,
            "hash": "00110101",
            "previous_hash": "",
            "timestamp": 123456789,
            "data": {},
            "nonce": 123,
            "next_miner": "Camper",
            "next_validators": ["Camper"]
          }}
        ],
        "network": ["Camper"]
      }},
      "transactions": [
        {{
          "event": "SubmitTask",
          "name": "Camper"
        }}
      ],
      "task_valid": true
    }}"#,
        node_vec_str
    );
    serde_json::from_str(&fix_node_state).unwrap()
}

fn mine(fix_node_state: NodeState) -> Result<(Chain, Vec<String>), JsValue> {
    let node_state = JsValue::from_serde(&fix_node_state).unwrap();
    let res = handle_mine(node_state);
    let response = match res {
        Ok(v) => match v.into_serde() {
            Ok(v) => v,
            Err(e) => {
                console::log_1(&format!("{:?}", e).into());
                panic!("could not serde response");
            }
        },
        Err(e) => {
            // Error is converted into a JsValue to make use of Debug trait
            return Err(JsValue::from(e));
        }
    };
    Ok(response)
}
