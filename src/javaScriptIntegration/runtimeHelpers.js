wasmBoolean(value) {
    return value !== 0;
}

wasmToChar(value) {
    return String.fromCodePoint(value);
}

charToWasm(value) {
    return value.codePointAt(0);
}