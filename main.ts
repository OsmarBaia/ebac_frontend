function multiplicacao(a: number, b: number): number {
    return a * b;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicacao(5, 3);
console.log(resultadoMultiplicacao); 

const mensagemSaudacao = saudacao("João");
console.log(mensagemSaudacao); 

// Saída: 
// 15
// "Olá João"