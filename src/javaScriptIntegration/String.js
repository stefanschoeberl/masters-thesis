module.exports = runtime => {
    return {
        'String.length': thisRef => {
            return runtime.wasmDeref(thisRef).length;
        },
        'String.charAt#int': (thisRef, index) => {
            return runtime.charToWasm(runtime.wasmDeref(thisRef)[index]);
        },
        'String.equals#String': (thisRef, other) => {
            return runtime.wasmDeref(thisRef) === runtime.wasmDeref(other);
        }
    };
};