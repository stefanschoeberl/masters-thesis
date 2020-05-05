'get_array_reference': (arrayAddress, index) => {
    const a = runtime.wasmDeref(arrayAddress);
    return runtime.wasmRef(a[index]);
}