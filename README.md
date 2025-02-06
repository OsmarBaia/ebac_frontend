# Programação orientada a objetos (POO) em JavaScript
  Este código é uma demonstração de como os princípios de POO podem ser aplicados em JavaScript sem o uso de ES6, ou seja, utilizando protótipos e funções construtoras para implementar Abstração, Herança, Polimorfismo e Encapsulamento. 

## Abstração
  A abstração é o conceito de esconder detalhes complexos e mostrar apenas o essencial. No código, implementei classes abstratas como `Animal`, `Mamifero` e `Reptil`. Essas classes não podem ser instanciadas diretamente, pois servem como modelos para outras classes. A classe Animal define propriedades comuns, como `nome` e `tipo`, Já as classes `Mamifero` e `Reptil` definem a propriedade comum `familia`.

## Herança
  A herança permite que uma classe herde propriedades e métodos de outra classe, promovendo a reutilização de código. No meu código, as classes `Felino`, `Canino`, `Cobra` e `Cascavel` herdam características das classes abstratas `Animal`, `Mamifero` e `Reptil`.

## Polimorfismo
  O polimorfismo é a capacidade de um mesmo método se comportar de maneiras diferentes, dependendo do objeto ou contexto em que é chamado. No código, o método `descricao()` é um exemplo de polimorfismo, pois é definido na classe `Animal`, mas é sobrescrito nas classes`Mamifero` e `Reptil` para fornecer descrições diferentes. Quando chamo `gato.descricao()`, o método retorna uma descrição específica para felinos,  a qual foi herdada de `Mamifero`, enquanto `sucuri.descricao()` retorna uma descrição específica para répteis.

## Encapsulamento
  O encapsulamento é o conceito de esconder detalhes internos de uma classe e expor apenas o necessário, protegendo os dados e comportamentos de uma classe, evitando que sejam acessados de forma inadequada. No código, os métodos `miar()`, `uivar()`, `sibilar()` e `chocalhar()` são específicos para determinadas classes e não podem ser acessados por outras. Por exempo, se tentarmos chamar `lobo.miar()`, um erro será gerado, pois o método `miar()` só está disponível para instâncias de `Felino`.
