// Interface do Cliente
class Itarget{
    request(){}
}

// Cliente
class Cliente{
    constructor(target){
        this.target = target;
    }

    makeRequest(){
        console.log("Fazendo Uma Requisição");
        this.target.request();
    }

}


// Serviço Existente (Adaptee)
class Adaptee{
    SpecificRequest(){
        console.log("Requisição Especifica do Adaptee");
    }
}

// Adaptador (Adapter)
class Adapter{
    constructor(adaptee){
        this.adaptee = adaptee;
    }

    request(){
        this.adaptee.SpecificRequest();
    }
}

// Utilizando o adaptador

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
const cliente = new Cliente(adapter);

cliente.makeRequest();