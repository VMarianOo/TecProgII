# Class Cliente
class Cliente:
    def __init__(self):
        self.adapter = Adapter()

    def request(self):
        print("Fazendo uma Requisição")
        self.adapter.specificRequest()

# Classe Serviço Existente
class Adaptee:
    def specificRequest(self):
        print("Requisição Especifica do adaptee")
    
# Classe Adaptador
class Adapter(Adaptee):
    def specificRequest(self):
        print("Adaptação do serviço Existente para o cliente")

# Utilizando o Adaptador
cliente = Cliente()
cliente.request()