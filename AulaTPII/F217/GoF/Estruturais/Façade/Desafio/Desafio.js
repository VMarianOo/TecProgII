// SubSistema 1
class SistemaAutenticacao{
    processarAutenticacao(usuario, senha){
        if(usuario == SistemaCadastro().usuario && senha == SistemaAutenticacao().senha){
            console.log("Logado com sucesso!");

        } else {
            console.log("Falha de autenticação, usuario ou senha está incorreto");

        }
    }

}

// SubSistema 2
class SistemaCadastro{
    constructor(usuario, senha) {
        this.usuario = usuario;
        this.senha = senha;
        console.log(`Bem vindo ${Login}, você foi cadastrado com sucesso!`);
    }

}

// SubSistema 3
class SistemaPedido{
    criarPedido(nome, preco) {
        console.log(``);
    }
}

// Produtos
const ProdutosEnum = {
    CAMISETA: new criarProduto("Camiseta", 19.99),
    CALCA: new criarProduto("Calça Jeans", 39.99),
    SAPATO: new criarProduto("Sapato", 49.99),
    CHAPEU: new criarProduto("Chapéu", 9.99)
};

    