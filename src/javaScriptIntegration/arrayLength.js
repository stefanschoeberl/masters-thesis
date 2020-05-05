'array_length': arrayAddress => {
    return runtime.wasmDeref(arrayAddress).length
}