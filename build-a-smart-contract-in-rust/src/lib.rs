use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: f32, b: f32) -> f32 {
    return a + b;
}
