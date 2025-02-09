import { Nota } from "./nota.js";

export class Avaliacao {
    #description;
    #nota;

    constructor(description, value) {
        this.#description = description;
        this.#nota = new Nota(value);
    }

    get description() {
        return this.#description;
    }

    set description(description) {
        this.#description = description == null || description.trim() === "" ? "..." : description;
    }

    get value() {
        return {
            description: this.#description,
            nota: this.#nota.value
        };
    }

    set value(obj) {
        if (obj instanceof Avaliacao) {
            this.#nota.value = obj.#nota.value;
            this.#description = obj.#description;
        } else {
            throw new TypeError("O parâmetro deve ser uma instância de Avaliacao.");
        }
    }
}
