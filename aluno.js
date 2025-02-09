import { Boletim } from "./boletim.js";

export class Aluno {
    #name;
    #boletim;

    constructor(name) {
        this.#name = name;
        this.#boletim = new Boletim();
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get boletim() {
        return this.#boletim;
    }
}
