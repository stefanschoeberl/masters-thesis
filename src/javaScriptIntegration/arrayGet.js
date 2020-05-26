'get_array_reference': (arrayRef, index) => {
    const a = runtime.wasmDeref(arrayRef);
    return runtime.wasmRef(a[index]);
}