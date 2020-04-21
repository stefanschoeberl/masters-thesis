const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const Runtime = require('./build/wasm-module/runtime');
const imports = require('./build/wasm-module/imports');

async function runModule() {
    const runtime = new Runtime();

    const bytes = await readFile('build/wasm-module/module.wasm');
    const module = await WebAssembly.compile(bytes);
    const instance = new WebAssembly.Instance(module, imports(runtime));

    runtime.setWasmModuleInstance(instance);
    runtime.staticMethod('Main', 'main')();
}

runModule();
