# Objeto Real
class ServicoReal:
    def executar(self):
        print("Executando servidor real...")

# Proxy
class ProxyServico:
    def __init__(self):
        self.servicoReal = ServicoReal()
    
    def executar(self):
        print("Antes da execução do serviço")
        self.servicoReal.executar()
        print("Depois da execução do serviço")

proxy = ProxyServico()
proxy.executar()




