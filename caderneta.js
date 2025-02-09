import { Aluno } from "./aluno.js";

export class Caderneta {
    #alunos;

    constructor() {
        this.#alunos = [];
    }

    get length() {
        return this.#alunos.length;
    }

    get alunos() {
        return this.#alunos;
    }

    addAluno(aluno) {
        if (this.isInstanceOfAluno(aluno)) {
            this.#alunos.push(aluno);
        }
    }

    getAluno(index) {
        if (this.isIndexValid(index)) {
            return this.#alunos[index];
        }
    }

    setAluno(index, aluno) {
        if (this.isInstanceOfAluno(aluno) && this.isIndexValid(index)) {
            this.#alunos[index] = aluno;
        }
    }

    deleteAluno(index) {
        if (this.isIndexValid(index)) {
            this.#alunos.splice(index, 1);
        }
    }

    isIndexValid(index) {
        if (index === undefined || index < 0 || index >= this.#alunos.length) {
            throw new RangeError(`Índice inválido na caderneta: ${index}`);
        }
        return true;
    }

    isInstanceOfAluno(obj) {
        if (obj instanceof Aluno) {
            return true;
        } else {
            throw new TypeError("O parâmetro deve ser uma instância de Aluno.");
        }
    }
}
