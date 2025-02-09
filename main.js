import { Caderneta } from "./caderneta.js";
import { Aluno } from "./aluno.js";
import { Materia } from "./materia.js";
import { Avaliacao } from "./avaliacao.js";

// Caderneta
const caderneta = new Caderneta();

// Alunos
const alunos = [
    new Aluno("João"),
    new Aluno("Maria"),
    new Aluno("José")
];

// Materias
const materias = [
    new Materia("Português"),
    new Materia("Matemática"),
    new Materia("Geografia"),
    new Materia("História"),
    new Materia("Ciências")
];

// Avaliações
const avaliacoes = [
    "Avaliação 1",
    "Avaliação 2",
];

// Gerando dados
alunos.forEach(aluno => {
    const boletim = aluno.boletim;
    materias.forEach(materiaBase => {
        const materia = new Materia(materiaBase.name);
        avaliacoes.forEach(avaliacaoNome => {
            const av = new Avaliacao(avaliacaoNome, Math.floor(Math.random() * (10 - 5 + 1)) + 5);
            materia.addAvaliacao(av);
        });
        boletim.addMateria(materia);
    });
    caderneta.addAluno(aluno);
});


// Filtrando matérias
// Substitua cardenetas._alunos.foreach por um for simple de i=0 ate caderneta.length
caderneta.alunos.forEach((aluno) => {
    const materiasAprovado = aluno.boletim.materias.filter(materia => materia.mean >= 6);
    const materiasReprovado = aluno.boletim.materias.filter(materia => materia.mean < 6);

    console.log(`
        ${aluno.name}:
        \tAprovado:
        ${materiasAprovado.map(materia => `\t\t- ${materia.name}: ${materia.mean}`).join("\n\t")}
        \tReprovado:
        ${materiasReprovado.map(materia => `\t\t- ${materia.name}: ${materia.mean}`).join("\n\t")}
    `);
});