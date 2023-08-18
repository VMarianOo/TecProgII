//Classe Constructor
class Produto {
    private String nome;
    private Double preco;

    public Produto(String nome, Double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public void mostrarDetalhes(){
        System.out.println("Nome: " + nome + "Preco: " + preco);
    }
}

// Subclass de Produtos
class Eletronico extends Produto{

    public Eletronico(String nome, Double preco){
        super(nome, preco);
    }
}

class Roupa extends Produto{
    
    public Roupa(String nome, Double preco){
        super(nome, preco);
    }
}

// Fabrica Abstrata de Produtos
abstract class FabricaDeProdutos{
    public abstract Produto criarProduto(String nome, Double preco);
}

// Fabrica concreta - Produto eletronico
class FabricaDeEletronico extends FabricaDeProdutos{
    public Produto criarProduto(String nome, Double preco){
        return new Eletronico(nome, preco);
    }
}


// fabrica Concreta - Produto Roupas
class FabricaDeRoupas extends FabricaDeProdutos{
    public Produto criarProduto(String nome, Double preco){
        return new Roupa(nome, preco);
    }
}

// Interface de Uso ###########################################
public class FactoryMethod02 {

    public static void main(String[] args){
        FabricaDeProdutos fabricaDeEletronico = new FabricaDeEletronico();
        Produto eletronico = fabricaDeEletronico.criarProduto("notebook", 3000.00);
        eletronico.mostrarDetalhes();

        FabricaDeProdutos fabricaDeRoupas = new FabricaDeRoupas();
        Produto roupa = fabricaDeRoupas.criarProduto("camisa", 30.00 );
        roupa.mostrarDetalhes();
    }
}