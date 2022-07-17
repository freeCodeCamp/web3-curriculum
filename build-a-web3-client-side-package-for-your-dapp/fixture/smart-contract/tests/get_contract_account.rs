extern crate build_a_smart_contract_in_rust;

use build_a_smart_contract_in_rust::{Account, Context};
use wasm_bindgen::JsValue;
use wasm_bindgen_test::*;

wasm_bindgen_test::wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn is_public() {
    use build_a_smart_contract_in_rust::get_contract_account;
    let _t = get_contract_account;
    assert!(true, "This test should just compile to pass");
}

#[wasm_bindgen_test]
fn returns_result() {
    use build_a_smart_contract_in_rust::get_contract_account;

    let res = get_contract_account(js_con());
    let _v = res.is_ok();
    assert!(true, "This test should just compile to pass");
}

#[wasm_bindgen_test]
fn returns_account() {
    use build_a_smart_contract_in_rust::get_contract_account;

    let res = get_contract_account(js_con());
    match res {
        Ok(v) => {
            let _account: Account = v.into_serde().expect("get_contract_account returns a value serialisable into an Account.");
        },
        Err(_e) => {
            assert!(false, "get_contract should not have returned an Err variant");
        }
    };
}

#[wasm_bindgen_test]
fn returns_updated_account() {
    use build_a_smart_contract_in_rust::get_contract_account;

    let mut context = fix_context();
    context.base_account.clickers.push("ahmad".to_string());
    let res = get_contract_account(JsValue::from_serde(&context).expect("can turn context into JsValue"));
    match res {
        Ok(v) => {
            let _account: Account = v.into_serde().expect("get_contract_account returns a value serialisable into an Account.");
        },
        Err(_e) => {
            assert!(false, "get_contract should not have returned an Err variant");
        }
    };
}

fn fix_context() -> Context {
    let acc = Account {
        total_clicks: 10,
        clickers: vec![String::from("tom"), String::from("shaun")]
    };
    let con = Context {
        base_account: acc
    };
    con
}

fn js_con() -> JsValue {
    JsValue::from_serde(&fix_context()).expect("can turn context into JsValue")
}