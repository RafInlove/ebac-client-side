// Classe base - abstração
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log(`${this.nome} está emitindo um som.`);
    }
}

// Classe herdeira - Cachorro
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        console.log(`${this.nome} está latindo.`);
    }
}

// Classe herdeira - Gato
class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom() {
        console.log(`${this.nome} está miando.`);
    }
}

// Criando instâncias dos objetos
const cachorro1 = new Cachorro("Rex", 5, "Pastor Alemão");
const gato1 = new Gato("Mimi", 3, "Branco");
const cachorro2 = new Cachorro("Bolt", 2, "Bulldog");

cachorro1.emitirSom(); // Rex está latindo.
gato1.emitirSom();     // Mimi está miando.
cachorro2.emitirSom(); // Bolt está latindo.
