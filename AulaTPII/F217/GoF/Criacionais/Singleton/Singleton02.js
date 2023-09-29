const Carrinho = (function () {
    let instance;

    function createInstance() {
        let produtos = [];

        function addProduto(produto){
            produtos.push(produto);
        }

        function getProduto(){
            return produtos;
        }

        function clearCarrinho(){
            produtos = [];
        }

        return {
            addProduto,
            getProduto,
            clearCarrinho,
        }
    }

    return {
        getInstance: function(){
            if(!instance){
                instance =  createInstance();
            }
            return instance;
        }
    }
})();

// EXEMPLO DE USO ##############################################################
const carrinhoInstance1 = Carrinho.getInstance();
const carrinhoInstance2 = Carrinho.getInstance();

console.log(carrinhoInstance1 == carrinhoInstance2)

carrinhoInstance1.addProduto({id: 1, nome: "Produto 1", preco: 10.00});
carrinhoInstance2.addProduto({id: 2, nome: "Produto 2", preco: 20.00});

console.log(carrinhoInstance1.getProduto());
console.log(carrinhoInstance2.getProduto());

carrinhoInstance1.clearCarrinho();

console.log(carrinhoInstance1.getProduto());
console.log(carrinhoInstance2.getProduto());