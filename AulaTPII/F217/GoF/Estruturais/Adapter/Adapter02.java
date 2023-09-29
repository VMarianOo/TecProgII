// Classe Cliente
class Cliente {
    private Adapter adapter;

    // Construtor da Classe Cliente
    public Cliente() {
        // Instanciar o adaptador
        this.adapter = new Adapter();
    }

    // Método para fazer uma requisição
    public void request() {
        System.out.println("Fazendo uma Requisição");
        // Chamar o método de requisição específica do adaptador
        this.adapter.specificRequest();
    }
}

// Classe Serviço Existente (Adaptee)
class Adaptee {
    // Método que representa uma requisição específica do Adaptee
    void specificRequest() {
        System.out.println("Requisição Específica do Adaptee");
    }
}

// Classe Adaptador (Adapter)
class Adapter extends Adaptee {
    // Sobrescrever o método de requisição específica para o adaptador
    @Override
    void specificRequest() {
        System.out.println("Adaptação do Serviço Existente Para o Cliente");
    }
}

// Método principal para demonstrar a utilização
public class Adapter02 {
    public static void main(String[] args) {
        // Criar uma instância do Cliente
        Cliente cliente = new Cliente();
        // Fazer uma requisição
        cliente.request();
    }
}
