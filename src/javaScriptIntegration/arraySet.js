'set_array_reference': (arrayRef, index, valueRef) => {
    const a = runtime.wasmDeref(arrayRef);
    a[index] = runtime.wasmDeref(valueRef);
}