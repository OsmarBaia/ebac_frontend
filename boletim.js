import { Materia } from "./materia.js";

export class Boletim {
    #materias;

    constructor() {
        this.#materias = [];
    }

    get materias() {
        return this.#materias;  
    }

    addMateria(materia) {
        if (this.isInstanceOfMateria(materia)) {
            this.#materias.push(materia);
        }
    }

    getMateria(index) {
        if (this.isIndexValid(index)) {
            return this.#materias[index];
        }
    }

    setMateria(index, materia) {
        if (this.isInstanceOfMateria(materia) && this.isIndexValid(index)) {
            this.#materias[index] = materia;
        }
    }

    deleteMateria(index) {
        if (this.isIndexValid(index)) {
            this.#materias.splice(index, 1);
        }
    }

    isIndexValid(index) {
        if (index === undefined || index < 0 || index >= this.#materias.length) {
            throw new RangeError(`Índice inválido no boletim: ${index}`);
        }
        return true;
    }

    isInstanceOfMateria(obj) {
        if (obj instanceof Materia) {
            return true;
        } else {
            throw new TypeError("O parâmetro deve ser uma instância de Materia.");
        }
    }

    get mean() {
        if (this.#materias.length === 0) return 0;
        return (this.#materias.reduce((sum, materia) => sum + Number(materia.mean), 0) / this.#materias.length).toFixed(2);
    }
}
