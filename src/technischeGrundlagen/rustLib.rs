#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub struct Point {
    x: u32,
    y: u32,
}



#[wasm_bindgen]
impl Point {
    pub fn new(x: u32, y: u32) -> Point {
        Point { x, y }
    }
}

#[wasm_bindgen]
pub fn alert_point(point: &Point) {
    alert(&format!("Point({}|{})", point.x, point.y));
}