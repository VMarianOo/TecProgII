// Definir Partes de Um Carro
class Motor{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Carroceria{
    constructor(estilo){
        this.estilo = estilo;
    }
}

class Rodas{
    constructor(tamanho){
        this.tamanho = tamanho;
    }

}

class Interior{
    constructor(cor){
        this.cor = cor;
    }
}

// Builder
class CarroBuilder{
    constructor(){
        this.motor = null;
        this.carroBuilder = null;
        this.rodas = null;
        this.interior = null;
    }

    adicionarMotor(tipo){
    this.motor = new Motor(tipo);
    return this;
    }

    adicionarCarrocceria(estilo) {
        this.carroceria = new Carroceria(estilo);
        return this;
    }

    adicionarRodas(tamanho) {
    this.rodas = new Rodas(tamanho);
    return this;
    }

    adicionarInterior(cor){
        this.interior = new Interior(cor);
        return this;
    }

    construir(){
        return new Carro(this.motor, this.carroceria, this.rodas, this.interior);
    }

}



// Construir Um Carro
class Carro{
    constructor(motor, carroceria, rodas, interior) {
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.interior = interior;
    }

    mostrarDetalhes(){
        console.log(`Carro com motor ${this.motor.tipo}, carroceria ${this.carroceria.estilo}, 
        rodas de tamanho ${this.rodas.tamanho}, e interior na cor ${this.interior.cor}.`);
    }
}

    
// Exemplo de Uso #########################
const builder = new CarroBuilder();

const carroEsportivo = builder
    .adicionarMotor('V8')
    .adicionarCarrocceria('Esportiva')
    .adicionarRodas('18')
    .adicionarInterior('Pretor')
    .construir();

carroEsportivo.mostrarDetalhes();
