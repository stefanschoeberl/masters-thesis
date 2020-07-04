constructor() {
    this.nextFreeReference = 1;
    this.objects = new Map();
    this.references = new Map();
    this.types = new Map();
    this.objects.set(null, 0);
    this.references.set(0, null);
    this.wasmModuleInstance = null;
}