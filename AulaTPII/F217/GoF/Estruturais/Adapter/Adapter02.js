// Class Cliente
class Cliente{
    constructor(){
        this.adapter = new Adapter();
    }

    request(){
        console.log("Fazendo uma Requisição");
        this.adapter.SpecificRequest();
    }
}

// Class Serviço Existente
class Adaptee{
    SpecificRequest(){
        console.log("Requisição Especifica do Adaptee");
    }
}

// Class Adaptador 
class Adapter extends Adaptee{
    SpecificRequest(){
        console.log("Adaptação do Serviço Existente Para o Cliente");
    }
}

// Utilização ####################
const cliente = new Cliente();
cliente.request();
