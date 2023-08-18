# SuperClass Constructor 
class Produto:
    def __init__(self, nome, preco):
        self.nome = nome;
        self.preco = preco;
    
    def mostrarDetalhes(self):
        print(f"nome: {self.nome} preco: {self.preco}")

# SuperClass de Produtos
class Eletronico(Produto):
    def __init__(self, nome, preco):
        super().__init__(nome, preco)

class Roupa(Produto):
    def __init__(self, nome, preco):
        super().__init__(nome, preco)

# Fabrica Abstrata de Produtos
class FabricaDeProdutos:
    def criarProduto(self, nome, preco):
        raise NotImplementedError('O metodo criarProduto deve ser implementado pelas subclass')

# Fabrica Concreta - Produto Eletronico
class FabricaDeEletronicos(FabricaDeProdutos):
    def criarProduto(self, nome, preco):
        return Eletronico(nome, preco)

# Fabrica Concreta - Prduto Roupas
class FabricaDeRoupas(FabricaDeProdutos):
    def criarProduto(self, nome, preco):
        return Roupa(nome, preco)

# Interface De Uso 

fabricaDeEletronicos = FabricaDeEletronicos()
eletronico = fabricaDeEletronicos.criarProduto("Notebook", 3000)
eletronico.mostrarDetalhes() 

fabricaDeRoupas = FabricaDeRoupas()
roupa = fabricaDeRoupas.criarProduto("Camiseta", 30)
roupa.mostrarDetalhes() 