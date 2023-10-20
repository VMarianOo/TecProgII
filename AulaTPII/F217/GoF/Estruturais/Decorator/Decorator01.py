# Componente 
class ComponentNotificador:
    def enviar(self, mensagem):
        print(f"Enviando Mensagem: {mensagem}")

# Decorator
class DecoratorNotificador:
    def __init__(self, componente):
        self.componente = componente

    def enviar(self, mensagem):
        self.componente.enviar(mensagem)

# Decorator Concreta 1
class DecoratorNotificadorSMS(DecoratorNotificador):
    def enviar(self, mensagem):
        super().enviar(mensagem)
        print(f"Enviar mensagem SMS: {mensagem}")

# Decorator Concreta 2
class DecoratorNotificadorFaceBook(DecoratorNotificador):
    def enviar(self, mensagem):
        super().enviar(mensagem)
        print(f"Enviar mensagem FaceBook: {mensagem}")

# Cliente #################################
notificador = ComponentNotificador()
notificadorSMS = DecoratorNotificadorSMS(notificador)
notificadorFaceBook = DecoratorNotificadorFaceBook(notificador)

notificadorFaceBook.enviar("Bom dia")