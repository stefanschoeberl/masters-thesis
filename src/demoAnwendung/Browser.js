module.exports = runtime => {
    return {
        'Document.getElementById#String': elementIdRef => {
            const elementId = runtime.wasmDeref(elementIdRef);
            return runtime.wasmRef(document.getElementById(elementId),
                'HTMLElement');
        },
        'HTMLElement.addClickEventListener#Object': (thisRef, handlerRef) => {
            const element = runtime.wasmDeref(thisRef);
            const handler = runtime.wasmDeref(handlerRef);
            element.addEventListener('click', (event) => {
                runtime.instanceMethod(handler, 'handleEvent', 'MouseEvent')(event);
            })
        }
    };
};