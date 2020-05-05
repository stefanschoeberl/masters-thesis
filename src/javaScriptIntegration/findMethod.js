findMethod(className, methodName, ...argumentTypes) {
    const argumentTypeString = argumentTypes.map(s => '#' + s).join('');
    return this.instance.exports[className + '.' + methodName + argumentTypeString];
}