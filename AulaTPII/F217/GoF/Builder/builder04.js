class Pizza{
    constructor(tamanho, massa, molho, coberturas){
        this.tamanho = tamanho;
        this.massa = massa;
        this.molho = molho;
        this.coberturas = coberturas;
    }

    mostrarDetalhes(){
    console.log(`Pizza ${this.tamanho} com massa ${this.massa}, molho ${this.molho}
        e coberturas: ${this.coberturas.join(', ')}`);
    } 
}

class PizzaBuilder{
    constructor(){
        this.tamanho = null;
        this.massa = null;
        this.molho = null;
        this.coberturas = [];
    }

    definirTamanho(tamanho){
        this.tamanho = tamanho;
        return this;
    }

    definirMassa(massa){
        this.massa = massa;
        return this;
    }

    definirMolho(molho){
        this.molho = molho;
        return this;
    }

    adicionarCobertura(cobertura){
        this.coberturas.push(cobertura);
        return this;
    }

    construir(){
        return new Pizza(this.tamanho, this.massa, this.molho, this.coberturas);
    }
}

// USO DO BUILDER NA PIZZARIA #####################################
const builder = new PizzaBuilder();

const pizza1 = builder
    .definirTamanho('Grande')
    .definirMassa('Tradicional')
    .definirMolho('Tomate')
    .adicionarCobertura('Queijo')
    .adicionarCobertura('Presunto')
    .adicionarCobertura('Cogumelos')
    .construir();