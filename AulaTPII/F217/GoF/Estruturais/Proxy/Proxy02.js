// Objeto Real - Classe Produto
class Produto{
    constructor(nome, preço){
        this.nome = nome;
        this.preço = preço;
    }

    exibirDetalhes(){
        console.log(`Produto ${this.nome}, Preço: R$${this.preço.toFixed(2)}`);
    }
}

// Proxy - Classe ProxyProduto
class ProxyProduto{
    constructor(produto){
        this.produto = produto;
    }

    exibirDetalhes(){
        console.log("Aguardando autenticação....");
        this.autenticar();
        this.produto.exibirDetalhes();
    }

    autenticar(){
        console.log("Autenticando usuario...");
        // INSERIR LÓGICA DE AUTENTICAÇÂO AQUI
    console.log("Usuário autenticado com sucesso");
    }
}

// Cliente - Uso do Proxy
const produtoReal = new Produto("camiseta", 39.90);
const proxyProduto =  new ProxyProduto(produtoReal);

proxyProduto.exibirDetalhes();