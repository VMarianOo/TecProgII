 //componente
class ComponetNotificador{
    enviar(mensagem){
        console.log(`Enviando Mensagem: ${mensagem}`)
    }
}
 
//Decorator Base
class DecoratorNotificador{
    constructor(componente){
        this.componente = componente
    }
    enviar(mensagem){
        this.componente.enviar(mensagem);
    }
}
 
//Decorar Concreta 1
class DecoratorNotificadorSMS extends DecoratorNotificador{
    enviar(mensagem){
        super.enviar(mensagem);
        console.log(`Enviar mensagem SMS:  ${mensagem}`)
    }
}
//Decorar Concreta 2
class DecoratorNotificadorFaceBook extends DecoratorNotificador{
    enviar(mensagem){
        super.enviar(mensagem);
        console.log(`Enviar mensagem FaceBook:  ${mensagem}`)
    }
}
 
//Cliente
const notificador = new ComponetNotificador()
const notificadorSMS = new DecoratorNotificadorSMS(notificador)
const notificadoFaceBook = new DecoratorNotificadorFaceBook(notificador)
 
notificadoFaceBook.enviar("Bom Dia")