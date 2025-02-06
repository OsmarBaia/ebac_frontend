// Este código é uma demonstração de como os princípios de POO podem ser aplicados em JavaScript sem o uso de ES6.
// Utilizando protótipos e funções construtoras para implementar Abstração, Herança, Polimorfismo e Encapsulamento. 


//  Abstração
//  As classes `Animal`, `Mamifero` e `Reptil` são abstratas, ou seja, não podem ser instanciadas diretamente.
//  Elas servem como modelos para outras classes, definindo propriedades e métodos comuns (Nome e Tipo)
//

// Classe Animal (abstrata)
function Animal(nome, tipo) {
    if (this.constructor === Animal) {
        throw new Error("Animal é uma classe abstrata e não pode ser instanciada diretamente.");
    }
    this.nome = nome;
    this.tipo = tipo;
}

Animal.prototype.descricao = function () {
    return `${this.nome} é um ${this.tipo}.`;
};

// Classe Mamíferos (abstrata)
function Mamifero(nome, familia) {
    if (this.constructor === Mamifero) {
        throw new Error("Mamifero é uma classe abstrata e não pode ser instanciada diretamente.");
    }
    Animal.call(this, nome, 'Mamífero');
    this.familia = familia;
}
Mamifero.prototype = Object.create(Animal.prototype);
Mamifero.prototype.constructor = Mamifero;

// Classe Répteis (abstrata)
function Reptil(nome, especie) {
    if (this.constructor === Reptil) {
        throw new Error("Reptil é uma classe abstrata e não pode ser instanciada diretamente.");
    }
    Animal.call(this, nome, 'Réptil');
    this.especie = especie;
}
Reptil.prototype = Object.create(Animal.prototype);
Reptil.prototype.constructor = Reptil;

//  Polimorfismo
//  O método `descricao()` é sobrescrito, 
//  fornecendo implementações específicas nas classes `Mamifero` e `Reptil`.
//  Isso permite que objetos de diferentes classes (como `Felino`, `Canino`, `Cobra`)
//  respondam ao mesmo método de maneiras diferentes.
//
Mamifero.prototype.descricao = function () {
    return `O ${this.nome} é um animal da classe ${this.tipo} e da família dos ${this.familia.toLowerCase()}s.`;
};
Reptil.prototype.descricao = function () {
    return `O ${this.nome} é um animal da classe ${this.tipo} e da espécie ${this.especie.toLowerCase()}.`;
};

//  Herança:
//  As classes `Felino`, `Canino`, `Cobra` e `Cascavel` herdam propriedades e métodos das classes abstratas.
//
// Classe Felinos (concreta)(herda de Mamíferos)
function Felino(nome) {
    Mamifero.call(this, nome, 'Felino');
}
Felino.prototype = Object.create(Mamifero.prototype);
Felino.prototype.constructor = Felino;

// Classe Caninos (concreta)(herda de Mamíferos)
function Canino(nome) {
    Mamifero.call(this, nome, 'Canino');
}
Canino.prototype = Object.create(Mamifero.prototype);
Canino.prototype.constructor = Canino;

// Classe Cobra (concreta)(herda de Répteis)
function Cobra(nome) {
    Reptil.call(this, nome, 'Cobra');
}
Cobra.prototype = Object.create(Reptil.prototype);
Cobra.prototype.constructor = Cobra;

// Classe Cascavel (concreta)(herda de Cobra)
function Cascavel(nome) {
    Cobra.call(this, nome);
}
Cascavel.prototype = Object.create(Cobra.prototype);
Cascavel.prototype.constructor = Cascavel;

//  Encapsulamento:
//  Cada classe encapsula suas propriedades e comportamentos específicos.
//  Métodos como `miar()`, `uivar()`, `sibilar()` e `chocalhar()` 
//  são específicos para determinadas classes e não podem ser acessados por outras.
//
Felino.prototype.miar = function () {
    return `O ${this.nome} está miando: "Miau!"`;
};
Canino.prototype.uivar = function () {
    return `O ${this.nome} está uivando: "Auuuu!"`;
};

Cobra.prototype.sibilar = function () {
    return `O ${this.nome} está sibilando: "Sssss!"`;
};

Cascavel.prototype.chocalhar = function () {
    return `O ${this.nome} está chocalhando a cauda: "Trrrrr!"`;
};


// Instâncias / Objetos
const gato = new Felino('Gato');
const lobo = new Canino('Lobo');
const cascavel = new Cascavel('Cascavel');
const sucuri = new Cobra('Sucuri');


// Herança e Polimorfismo
console.log(gato.descricao()); // "O Gato é um animal da classe Mamífero e da família dos felinos."
console.log(lobo.descricao()); // "O Lobo é um animal da classe Mamífero e da família dos caninos."
console.log(sucuri.descricao()); // "O Sucuri é um animal da classe Réptil e da espécie cobra."
console.log(cascavel.descricao()); // "O Cascavel é um animal da classe Réptil e da espécie cobra."

// Herança e Encapsulamento
console.log(gato.miar()); // "O Gato está miando: 'Miau!'"
console.log(lobo.uivar()); // "O Lobo está uivando: 'Auuuu!'"
console.log(sucuri.sibilar()); // "O Sucuri está sibilando: 'Sssss!'"
console.log(cascavel.sibilar()); // "O Cascavel está sibilando: 'Sssss!'"
console.log(cascavel.chocalhar()); // "O Cascavel está chocalhando a cauda: 'Trrrrr!'"

// Comandos abaixo devem gerar "erros", por causa de encapsulamento.
// console.log(lobo.miar()); 
// console.log(cascavel.uivar()); 
// console.log(sucuri.chocalhar()); 