// Classe base de veiculo
class Veiculo{
    constructor(modelo){
        this.modelo = modelo;
    }

    mostrarDetalhes(){
        console.log(`Modelo: ${this.modelo}`);
    }
}

// Subclasses de veiculo
class Carro extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

class Moto extends Veiculo{
    constructor(modelo){
        super(modelo);
    }

}

// Fabrica abstrata de veiculo
class FabricaDeVeiculos {
    criarVeiculo(modelo){
        throw new Error('O método criarVeiculo deve ser implementado pela subclasses');
    }
}

// Fabrica concreta de carros
class FabricaDeCarros extends FabricaDeVeiculos{
    criarVeiculo(modelo){
        return new Carro(modelo);
    }
}

// Fabrica concreta de motos
class FabricaDeMotos extends FabricaDeVeiculos{
    criarVeiculo(modelo){
        return new Moto(modelo);
    }
}

// USO DAS FABRICAS ##############################################################
const fabricaDeCarros = new FabricaDeCarros();
const carro = fabricaDeCarros.criarVeiculo('Sedan');
carro.mostrarDetalhes();

const fabricaDeMotos = new FabricaDeMotos();
const moto = fabricaDeMotos.criarVeiculo('Esportiva');
moto.mostrarDetalhes();