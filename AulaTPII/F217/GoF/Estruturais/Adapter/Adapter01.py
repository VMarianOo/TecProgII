# Interface do Cliente
class ITarget:
    def request(self):
        pass

# Cliente
class Cliente:
    def __init__(self, target):
        self.target = target

    def makeRequest(self):
        print("Fazendo uma requisição")
        self.target.request()

# Serviço Existente (Adaptee)
class Adaptee:
    def SpecificRequest(self):
        print("Requisição Especifica do Adaptee")

# Adaptador (Adapter)
class Adapter(ITarget):
    def __init__(self, adaptee):
        self.adaptee = adaptee

    def request(self):
        self.adaptee.SpecificRequest()

# Utilizando o Adaptador ##########
adaptee = Adaptee()
adapter = Adapter(adaptee)
client = Cliente(adapter)

client.makeRequest()
