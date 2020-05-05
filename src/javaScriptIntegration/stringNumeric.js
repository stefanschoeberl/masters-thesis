'+_String_numeric': (stringRef, value) => {
    const s = runtime.wasmDeref(stringRef);
    return runtime.wasmRefType(s.concat(value.toString()), 'String');
}
'+_numeric_String': (value, stringRef) => {
    const s = runtime.wasmDeref(stringRef);
    return runtime.wasmRefType(value.toString().concat(s), 'String');
}