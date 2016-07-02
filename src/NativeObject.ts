/// <reference path="Frida.ts"/>

export class NativeObject {
    selfPointer: NativePointer;

    constructor(address: NativePointer) {
        this.selfPointer = address;
    }

    public isNull(): boolean {
        return (this.selfPointer == null || this.selfPointer.isNull());
    }
}