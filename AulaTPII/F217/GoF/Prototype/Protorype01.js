// Classe Pessoas
class Pessoa{
    constructor(nome, idade){
        this.name = nome;
        this.idade = idade;
    }

    clone(){
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

// Pessoa Manager - Deus 

class PessoaManager{
    constructor(){
        this.pessoas = {};
    }

    addPessoa(nome, idade, id){
        const pessoa = new Pessoa(nome, idade);
        this.pessoas[id] = pessoa;
    }

    getPessoa(id){
        return this.pessoas[id].clone();
    }
}

// ##########################################################
const manager = new PessoaManager();

// Adicionar Pessoas
manager.addPessoa("João", 30, 1);
manager.addPessoa("Maria", 25, 2);
manager.addPessoa("Gustavo", 25, 3);
manager.addPessoa("Gilberto", 43, 4);
manager.addPessoa("José", 30, 5);

// Clonar a pessoa de id=1
const pessoa1 = manager.getPessoa(1);
const pessoa2 = manager.getPessoa(2);

// Modificar dados da pessoa clonada 
pessoa1.idade = 10;
pessoa2.nome = "João da Silva";
pessoa2.idade = 55;

// Imprimir as pesosas
console.log(manager.getPessoa(1))
console.log(manager.getPessoa(2))
console.log(manager.getPessoa(3))
console.log(manager.getPessoa(4))
console.log(manager.getPessoa(5))
console.log("-------------------------------")
console.log((pessoa1))
console.log((pessoa2))