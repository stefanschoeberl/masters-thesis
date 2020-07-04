findMethod(className, methodName, ...argumentTypes) {
    const argumentTypeString = argumentTypes.map(s => '#' + s).join('');
    return this.wasmModuleInstance
               .exports[className + '.' + methodName + argumentTypeString];
}