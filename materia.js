import { Avaliacao } from "./avaliacao.js";

export class Materia {
    #name;
    #avaliacoes;

    constructor(name) {
        this.#name = name;
        this.#avaliacoes = [];
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    addAvaliacao(avaliacao) {
        if (this.isInstanceOfAvaliacao(avaliacao)) {
            this.#avaliacoes.push(avaliacao);
        }
    }

    getAvaliacao(index) {
        if (this.isIndexValid(index)) {
            return this.#avaliacoes[index];
        }
    }

    updateAvaliacao(index, avaliacao) {
        if (this.isInstanceOfAvaliacao(avaliacao) && this.isIndexValid(index)) {
            this.#avaliacoes[index] = avaliacao;
        }
    }

    deleteAvaliacao(index) {
        if (this.isIndexValid(index)) {
            this.#avaliacoes.splice(index, 1);
        }
    }

    isIndexValid(index) {
        if (index === undefined || index < 0 || index >= this.#avaliacoes.length) {
            throw new RangeError(`Índice inválido em ${this.#name}: ${index}`);
        }
        return true;
    }

    isInstanceOfAvaliacao(obj) {
        if (obj instanceof Avaliacao) {
            return true;
        } else {
            throw new TypeError("O parâmetro deve ser uma instância de Avaliacao.");
        }
    }

    get mean() {
        if (this.#avaliacoes.length === 0) return 0;
        return (this.#avaliacoes.reduce((sum, avaliacao) => sum + avaliacao.value.nota, 0) / this.#avaliacoes.length).toFixed(2);
    }
}
