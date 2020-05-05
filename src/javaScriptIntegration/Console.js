module.exports = runtime => {
    return {
        'Console.println#int': arg => {
            console.log(arg);
        },
        'Console.println#String': arg => {
            console.log(runtime.wasmDeref(arg));
        }
    };
};