use wasm_bindgen::prelude::*;
use serde::{Deserialize, Serialize};
use serde_json;

#[derive(Serialize, Deserialize)]
pub struct Account {
    pub total_clicks: u64,
    pub clickers: Vec<String>,
}

/// The context comes from the node running the smart contract.
/// The node handles setting a transaction for changes to the context.
#[derive(Serialize, Deserialize)]
pub struct Context {
    pub base_account: Account
}

#[wasm_bindgen]
pub fn initialise() -> Result<JsValue, JsError> {
    let context = Context {
        base_account: Account {
            total_clicks: 0,
            clickers: vec![],
        }
    };
    Ok(JsValue::from_serde(&context).unwrap())
}

#[wasm_bindgen]
pub fn set_click(context: JsValue, clicker: String) -> Result<JsValue, JsError> {
    let mut context: Context = context.into_serde()?;
    let account = &mut context.base_account;
    account.total_clicks += 1;
    account.clickers.push(clicker);
    if let Err(e) = serde_json::to_string(&context) {
        return Err(JsError::new(&e.to_string()));
    }
    Ok(JsValue::from_serde(&context).unwrap())
}

#[wasm_bindgen]
pub fn get_contract_account(context: JsValue) -> Result<JsValue, JsError> {
    let context: Context = context.into_serde()?;
    let account = &context.base_account;
    if let Err(e) = serde_json::to_string(&context) {
        return Err(JsError::new(&e.to_string()));
    }

    Ok(JsValue::from_serde(&account).unwrap())
}
