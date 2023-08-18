// Classe Constructor
class produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }  

    exibirDetalhes(){
        console.log(`Produto:${this.nome}, Preço: R$${this.preco}`);
    }
}

//Subclass de Produtos
class Eletrônico extends produto{
    constructor(nome, preco){
        super(nome, preco);
    }
}

class Roupa extends produto{
    constructor(nome, preco){
        super(nome, preco);
}
}

//Fabrica Abstrata de Produtos
class FabricaDeProdutos {
    criarProduto(nome, preco){
        throw new Error('O metodo criarProduto deve ser implementado pelas subclass')
    }
}

//Fabrica Concreta - Produto Eletrônico 
class FabricaDeEletronicos extends FabricaDeProdutos{
    criarProduto(nome, preco){
        return new Eletrônico(nome, preco); 
    }
}

//Fabrica Concreta - Produto Roupas
class FabricaDeRoupas extends FabricaDeProdutos{
    criarProduto(nome, preco){
        return new Roupa(nome, preco);
    }
}

//Interface de Uso ####################################
const fabricaDeEletronicos = new FabricaDeEletronicos();
const celular = fabricaDeEletronicos.criarProduto('Celular', 500)
celular.exibirDetalhes();

const fabricaDeRoupas = new FabricaDeRoupas();
const camiseta = fabricaDeRoupas.criarProduto('Camiseta', 50);
camiseta.exibirDetalhes();