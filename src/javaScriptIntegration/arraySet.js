'set_array_reference': (arrayAddress, index, valueAddress) => {
    const a = runtime.wasmDeref(arrayAddress);
    a[index] = runtime.wasmDeref(valueAddress);
}