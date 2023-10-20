# SubSistema 1
class SistemaPagamento:
    def processarPagamento(self, valor):
        print(f"processaento pagemento no valor de R$ {valor}")

# SubSistema 2
class SistemaLogistica:
    def enviarProduto(self, destinatario):
        print(f"Enviar produto para: {destinatario}")
# SubSistema 3
class SistemaNotificacao:
    def enviarEmail(self, destinatario, mensagem):
        print(f"Enviar email para: {destinatario}: {mensagem}")

# Fachada
class LojaOnline:
    def __init__(self):
        self.pagamento = SistemaPagamento()
        self.logistica = SistemaLogistica()
        self.notificacao = SistemaNotificacao()
    
    def realizarPagamento(self, produto, destinatario):
        self.pagamento.processarPagamento(produto['preco'])
        self.logistica.enviarProduto(destinatario)
        self.notificacao.enviarEmail(destinatario, f"Seu pedido de {produto['nome']} foi enviado")

loja = LojaOnline()

produto = {
    'nome': 'camiseta',
    'preco': 49.99
}
destinatario = 'alvaro@exemplo.com'

loja.realizarPagamento(produto, destinatario)