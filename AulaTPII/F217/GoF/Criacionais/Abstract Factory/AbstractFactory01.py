# Interface da Fabrica Abstrata
class AbstractFactory:
    def createProductA(self):
        pass
    
    def createProductB(self):
        pass

# Fabrica Concreta que cria produto do Tipo A e B - Especificação 1
class ConcreteFactory1(AbstractFactory):
    def createProductA(self):
        return ConcreteProductA1()
    
    def createProductB(self):
        return ConcreteProductB1()
    



# Fabrica Concreta que cria produtos do Tipo A e B - Especificação 2
class ConcreteFactory2(AbstractFactory):
    def createProductA(self):
        return ConcreteProductA2()
    
    def createProductB(self):
        return ConcreteProductB2()




# Interface dos Produtos do Tipo A
class AbstractProductA:
    def methodA(self):
        pass

# Implementação Concreta do Produto do Tipo A - Especificação 1
class ConcreteProductA1(AbstractProductA):
    def methodA(self):
        return "Produto do Tipo A da Fabrica 1"



# Implementação Concreta do Produto do Tipo A - Especificação 2
class ConcreteProductA2(AbstractProductA):
    def methodA(self):
        return "Produto do Tipo A da Fabrica 2"



# Interface dos Produtos do Tipo B
class AbstractProductB:
    def methodB(self):
        pass

# Implementação Concreta do Produto do Tipo B - Especificação 1
class ConcreteProductB1(AbstractProductB):
    def methodB(self):
        return "Produto do Tipo B da Fabrica 1"



# Implementação Concreta do Produto do Tipo B - Especificação 2
class ConcreteProductB2(AbstractProductB):
    def methodB(self):
        return "Produto do Tipo B da Fabrica 2"
    


# Função para Demonstrar o Padrão Abstract Factory #################################################
def clienteCode(factory):
    productA = factory.createProductA()
    productB = factory.createProductB()

    print(productA.methodA())
    print(productB.methodB())


# Exemplo de Uso com a Primeira Fabrica
factory1 = ConcreteFactory1()
clienteCode(factory1)

# Exemplo de Uso com a Segunda Fabrica
factory2 = ConcreteFactory2()
clienteCode(factory2)
