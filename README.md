# Exercício TypeScript

## Objetivo
Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;


## Código
```
function multiplicacao(a: number, b: number): number {
    return a * b;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicacao(5, 3);
console.log(resultadoMultiplicacao); 
// Saída: 
// 15

const mensagemSaudacao = saudacao("João");
console.log(mensagemSaudacao); 
// Saída: 
// "Olá João"

```
