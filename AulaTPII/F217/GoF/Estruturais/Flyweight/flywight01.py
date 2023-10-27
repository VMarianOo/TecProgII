# Flyweight Factory
class FabricaFlyweight:
    def __init__(self):
        self.flyweight = {}
    
    def obterFlyweight(self, codigo):
        if codigo not in self.flyweight:
            self.flyweight[codigo] = ProdutoFlyweight(codigo)
        return self.flyweight[codigo]

# Flyweught
class ProdutoFlyweight:
    def __init__(self, codigo):
        self.codigo = codigo
    
    def exibirDetalhes(self, nome, preco):
        print(f"Produto: {nome}, Preco: R$ {preco: .2f}, Código: {self.codigo}")

# Cliente
class Cliente:
    def __init__(self):
        self.fabricaFlyweight = FabricaFlyweight()
        self.carrinho = []
    
    def adicionarProduto(self, codigo, nome, preco):
        flyweight =  self.fabricaFlyweight.obterFlyweight(codigo)
        self.carrinho.append({"Flyweight": flyweight, "nome": nome, "preco": preco})

    def exibirCarrinho(self):
        print("Itens do Carrinho:")
        for item in self.carrinho:
            item['Flyweight'].exibirDetalhes(item['nome'], item['preco'])

# USO DO CLIENTE ############################
cliente = Cliente()
cliente.adicionarProduto("001", "Camiseta", 39.90)
cliente.adicionarProduto("002", "Calça Jeans", 89.90)
cliente.adicionarProduto("001", "Camiseta", 39.90) # Reutilizando o flyweight existente
cliente.exibirCarrinho()
                              
