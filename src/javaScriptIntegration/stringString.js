'+_String_String': (stringRef1, stringRef2) => {
    const s1 = runtime.wasmDeref(stringRef1);
    const s2 = runtime.wasmDeref(stringRef2);
    return runtime.wasmRefType(s1.concat(s2), 'String');
}