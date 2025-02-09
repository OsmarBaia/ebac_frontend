export class Nota {
    #value;

    constructor(value) {
        this.#value = value;
    }

    set value(value) {
        if (value == null || value < 0) {
            this.#value = 0;
        } else {
            this.#value = value;
        }
    }

    get value() {
        return this.#value;
    }
}
