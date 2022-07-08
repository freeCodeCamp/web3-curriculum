extern crate build_a_smart_contract_in_rust;

use wasm_bindgen::JsValue;
use wasm_bindgen_test::*;

wasm_bindgen_test::wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn initialise_is_public() {
    use build_a_smart_contract_in_rust::initialise;
    let _t = initialise();
    assert!(true, "This test should just compile to pass");
}

#[wasm_bindgen_test]
fn initialise_returns_result() {
    use build_a_smart_contract_in_rust::initialise;

    let res = initialise();
    let _v = res.is_ok();
    assert!(true, "This test should just compile to pass");
}

#[wasm_bindgen_test]
fn initialise_returns_new_context() {
    use build_a_smart_contract_in_rust::{initialise, Context};

    let res = initialise();
    match res {
        Ok(v) => {
            let _context: Context = v.into_serde().expect("initialise returns a value serialisable into a Context.");
        },
        Err(_e) => {
            assert!(false, "initialise should not have returned an Err variant");
        }
    };
}

#[wasm_bindgen_test]
fn context_has_base_account() {

}

#[wasm_bindgen_test]
fn base_account_has_total_clicks() {

}

#[wasm_bindgen_test]
fn base_account_has_clickers() {

}
