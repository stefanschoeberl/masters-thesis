instanceMethod(obj, methodName, ...argumentTypes) {
    const className = this.types.get(obj);
    const rawFunction = this.findMethod(className, methodName, ...argumentTypes);
    return (...args) => rawFunction(this.wasmRef(obj), ...args);
}