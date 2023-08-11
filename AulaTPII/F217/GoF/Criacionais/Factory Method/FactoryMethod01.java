//Calsse base de veiculo
class Veiculo{

    private String modelo;

    public Veiculo(String modelo){
        this.modelo = modelo;
    }

    public void mostrarDetalhes(){
        System.out.println("Modelo: " + modelo);
    }
}

// Subclasses de veiculo
class Carro extends Veiculo{

    public Carro(String modelo){
        super(modelo);

    }
}

class Moto extends Veiculo{
    public Moto(String modelo){
        super(modelo);
    }
}

// Fabrica abstrata de veiculos
abstract class FabricaDeVeiculos{
    public abstract Veiculo criarVeiculo(String modelo);
}

// Fabrica concreta de carros
class FabricaDeCarros extends FabricaDeVeiculos{
    public Veiculo criarVeiculo(String modelo){
        return new Carro(modelo);
    }
}

class FabricaDeMotos extends FabricaDeVeiculos{
    public Veiculo criarVeiculo(String modelo){
        return new Moto(modelo);
    }
}

// Uso das fabricas #####################################3

public class FactoryMethod01 {

    public static void main(String [] args){
        FabricaDeVeiculos fabricaDeCarros = new FabricaDeCarros();
        Veiculo carro = fabricaDeCarros.criarVeiculo("Sedan");
        carro.mostrarDetalhes();

        FabricaDeVeiculos fabricaDeMotos = new FabricaDeCarros();
        Veiculo moto = fabricaDeMotos.criarVeiculo("Esportiva");
        moto.mostrarDetalhes();

    }

}