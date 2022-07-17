extern crate build_a_smart_contract_in_rust;

use build_a_smart_contract_in_rust::{Account, Context};
use wasm_bindgen::{JsValue, JsError};
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

    let res = set_click(js_con(&fix_context()), String::from("quincy"));
    let _v = res.is_ok();
    assert!(true, "This test should just compile to pass");
}

#[wasm_bindgen_test]
fn returns_context() {
    use build_a_smart_contract_in_rust::set_click;

    let res = set_click(js_con(&fix_context()), String::from("Ahmad"));
    match res {
        Ok(v) => {
            let _context: Context = v.into_serde().expect("set_click returns a value serialisable into a Context.");
        },
        Err(_e) => {
            assert!(false, "set_click should not have returned an Err variant");
        }
    };
}

#[wasm_bindgen_test]
fn pushes_clicker_and_increments_total_clicks() {
    use build_a_smart_contract_in_rust::set_click;

    let mut context = fix_context();
    let mut res = set_click(js_con(&context), "shaun".to_string());
    context = js_to_con(&res);
    assert_eq!(context.base_account.total_clicks, 11);
    assert_eq!(context.base_account.clickers.len(), 3);
    assert_eq!(context.base_account.clickers[2], "shaun".to_string());

    res = set_click(js_con(&context), "quincy".to_string());
    assert_eq!(js_to_con(&res).base_account.total_clicks, 12);
    assert_eq!(js_to_con(&res).base_account.clickers.len(), 4);
    assert_eq!(js_to_con(&res).base_account.clickers[3], "quincy".to_string());
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

fn js_con(context: &Context) -> JsValue {
    JsValue::from_serde(context).expect("can turn context into JsValue")
}

fn js_to_con(js: &Result<JsValue, JsError>) -> Context {
    match js {
        Ok(v) => v.into_serde().expect("can deserialise JsValue into Context"),
        Err(_e) => panic!("set_click should not have returned an Err variant")
    }
}