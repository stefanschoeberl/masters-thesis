module.exports = [function (runtime) {
    runtime.wasmRefType("Hello", 'String');
    runtime.wasmRefType("World", 'String');
    return {};
}, require('./native/0.js'), ... /* require natives */ , function (runtime) {
    return {
        'new_MyClass': function() {
            return runtime.wasmRefType({'value':0,'text':null}, 'MyClass'); 
        },
        'get_MyClass.value': function (ref) {
            return runtime.wasmDeref(ref)['value']; 
        },
        'set_MyClass.value': function (ref, val) {
            runtime.wasmDeref(ref)['value'] = val; 
        },
        'get_MyClass.text': function (ref) {
            return runtime.wasmRefType(runtime.wasmDeref(ref)['text'], 'String'); 
        },
        'set_MyClass.text': function (ref, val) {
            runtime.wasmDeref(ref)['text'] = runtime.wasmDeref(val); 
        },
        ...
    };
}];