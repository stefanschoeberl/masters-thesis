module.exports = [function (runtime) {
    runtime.wasmRefType("Hello", 'String'); // (1)
    runtime.wasmRefType("World", 'String'); // (1)
    return {};
}, /* require natives */ , function (runtime) {
    return {
        'new_MyClass': function() { // (2)
            return runtime.wasmRefType({'value':0,'text':null}, 'MyClass'); 
        },
        'get_MyClass.value': function (ref) { // (3)
            return runtime.wasmDeref(ref)['value']; 
        },
        'set_MyClass.value': function (ref, val) { // (3)
            runtime.wasmDeref(ref)['value'] = val; 
        },
        'get_MyClass.text': function (ref) { // (4)
            return runtime.wasmRefType(runtime.wasmDeref(ref)['text'], 'String'); 
        },
        'set_MyClass.text': function (ref, val) { // (4)
            runtime.wasmDeref(ref)['text'] = runtime.wasmDeref(val); 
        },
        ...
    };
}];