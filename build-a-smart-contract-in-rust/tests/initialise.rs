extern crate build_a_smart_contract_in_rust;

use wasm_bindgen_test::*;

wasm_bindgen_test::wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn initialise_is_public() {
    use build_a_smart_contract_in_rust::initialise;
    let _t = initialise();
    assert!(true, "This test should compile to pass");
}

#[wasm_bindgen_test]
fn initialise_returns_result() {
    use build_a_smart_contract_in_rust::initialise;

    let res = initialise();
    let _v = res.is_ok();
    assert!(true, "This test should compile to pass");
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
    use build_a_smart_contract_in_rust::{initialise, Context, Account};

    let res = initialise();
    match res {
        Ok(v) => {
            let context: Context = v.into_serde().expect("initialise returns a value serialisable into a Context.");
            let _account: Account = context.base_account;
        },
        Err(_e) => {
            assert!(false, "initialise should not have returned an Err variant");
        }
    };
}

#[wasm_bindgen_test]
fn base_account_has_total_clicks() {
    use build_a_smart_contract_in_rust::{initialise, Context, Account};

    let res = initialise();
    match res {
        Ok(v) => {
            let context: Context = v.into_serde().expect("initialise returns a value serialisable into a Context.");
            let account: Account = context.base_account;

            let _total_clicks: u64 = account.total_clicks;
        },
        Err(_e) => {
            assert!(false, "initialise should not have returned an Err variant");
        }
    };
}

#[wasm_bindgen_test]
fn base_account_has_clickers() {
    use build_a_smart_contract_in_rust::{initialise, Context, Account};

    let res = initialise();
    match res {
        Ok(v) => {
            let context: Context = v.into_serde().expect("initialise returns a value serialisable into a Context.");
            let account: Account = context.base_account;

            let _clickers: Vec<String> = account.clickers;
        },
        Err(_e) => {
            assert!(false, "initialise should not have returned an Err variant");
        }
    };
}

#[wasm_bindgen_test]
fn total_clicks_is_initialised_with_0() {
    use build_a_smart_contract_in_rust::{initialise, Context, Account};

    let res = initialise();
    match res {
        Ok(v) => {
            let context: Context = v.into_serde().expect("initialise returns a value serialisable into a Context.");
            let account: Account = context.base_account;

            let total_clicks: u64 = account.total_clicks;
            assert_eq!(total_clicks, 0);
        },
        Err(_e) => {
            assert!(false, "initialise should not have returned an Err variant");
        }
    };
}

#[wasm_bindgen_test]
fn clickers_is_initialised_with_empty_vec() {
    use build_a_smart_contract_in_rust::{initialise, Context, Account};

    let res = initialise();
    match res {
        Ok(v) => {
            let context: Context = v.into_serde().expect("initialise returns a value serialisable into a Context.");
            let account: Account = context.base_account;

            let clickers: Vec<String> = account.clickers;
            let com: Vec<String> = vec![];
            assert_eq!(clickers, com);
        },
        Err(_e) => {
            assert!(false, "initialise should not have returned an Err variant");
        }
    };
}