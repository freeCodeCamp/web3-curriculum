extern crate build_a_smart_contract_in_rust;

use build_a_smart_contract_in_rust::{Account, Context};
use wasm_bindgen::JsValue;
use wasm_bindgen_test::*;

wasm_bindgen_test::wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn is_public() {
    use build_a_smart_contract_in_rust::set_click;
    let _t = set_click;
    assert!(true, "This test should just compile to pass");
}

#[wasm_bindgen_test]
fn returns_result() {
    use build_a_smart_contract_in_rust::set_click;

    let res = set_click(js_con(), String::from("quincy"));
    let _v = res.is_ok();
    assert!(true, "This test should just compile to pass");
}

#[wasm_bindgen_test]
fn returns_context() {
    use build_a_smart_contract_in_rust::{set_click};

    let res = set_click(js_con(), String::from("Ahmad"));
    match res {
        Ok(v) => {
            let _context: Context = v.into_serde().expect("set_click returns a value serialisable into a Context.");
        },
        Err(_e) => {
            assert!(false, "set_click should not have returned an Err variant");
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