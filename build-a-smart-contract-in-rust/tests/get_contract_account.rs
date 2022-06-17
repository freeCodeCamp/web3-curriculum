extern crate build_a_smart_contract_in_rust;

use wasm_bindgen::JsValue;
use wasm_bindgen_test::*;
use web_sys::{console, ErrorEvent};

wasm_bindgen_test::wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn works() {
    assert!(true);
}
