export class Animal {
    #nombre: string | undefined;
    #especie: string | undefined;
    #cantidad: number | undefined;
    #familia: string | undefined;
    #alimentacion: string | undefined;
    #habitat: string | undefined;


    constructor(nombre?: string, especie?: string, cantidad?: number, familia?: string, alimentacion?: string, habitat?: string) {
        this.#nombre = nombre;
        this.#especie = especie;
        this.#cantidad = cantidad;
        this.#familia = familia;
        this.#alimentacion = alimentacion;
        this.#habitat = habitat;
    }

    public get nombre() {
        return this.#nombre!;
    }
    public get especie() {
        return this.#especie!;
    }
    public get cantidad() {
        return this.#cantidad!;
    }
    public get familia() {
        return this.#familia!;
    }
    public get alimentacion() {
        return this.#alimentacion!;
    }
    public get habitat() {
        return this.#habitat!;
    }
    public set nombre(nombre: string) {
        this.#nombre = nombre;
    }
    public set especie(especie: string) {
        this.#especie = especie;
    }
    public set cantidad(cantidad: number) {
        this.#cantidad = cantidad;
    }
    public set familia(familia: string) {
        this.#familia = familia;
    }
    public set alimentacion(alimentacion: string) {
        this.#alimentacion = alimentacion;
    }
    public set habitat(habitat: string) {
        this.#habitat = habitat;
    }

}