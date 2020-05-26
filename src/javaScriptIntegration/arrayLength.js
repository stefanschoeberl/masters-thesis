'array_length': arrayRef => {
    return runtime.wasmDeref(arrayRef).length
}