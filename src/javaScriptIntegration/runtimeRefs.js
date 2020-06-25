wasmRef(obj) {
    if (this.objects.has(obj)) {
        return this.objects.get(obj);
    } else {
        const address = this.nextFreeReference++;
        this.objects.set(obj, address);
        this.references.set(address, obj);
        return address;
    }
}



wasmRefType(obj, type) {
    if (obj !== null) {
        this.types.set(obj, type);
    }
    return this.wasmRef(obj);
}

wasmDeref(address) {
    return this.references.get(address);
}