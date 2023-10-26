// Classe SistemaComercioFacade 
class SistemaComercioFacade {
    constructor() {
        // Inicializa os subsistemas
        this.sistemaCadastro = new SistemaCadastro();
        this.sistemaAutenticacao = new SistemaAutenticacao(this.sistemaCadastro);
        this.sistemaPedidos = new SistemaPedidos();
    }

    // Método para cadastrar um usuário no sistema
    cadastrarUsuario(usuario, senha) {
        this.sistemaCadastro.cadastrar(usuario, senha);
    }

    // Método para fazer um pedido no sistema
    fazerPedido(usuario, senha, produtos) {
        // Verifica a autenticação do usuário antes de fazer um pedido
        if (this.sistemaAutenticacao.autenticar(usuario, senha)) {
            this.sistemaPedidos.fazerPedido(usuario, produtos);
        } else {
            console.log('Falha na autenticação. Pedido não realizado, veja se você está realmente cadastrado.\n');
        }
    }
}

// Classe SistemaCadastro - subsistema para cadastro de usuários
class SistemaCadastro {
    constructor() {
        this.usuarios = {}; // Estrutura de dados para armazenar os usuários
    }

    // Método para cadastrar um usuário
    cadastrar(usuario, senha) {
        this.usuarios[usuario] = senha;
        console.log(`Usuário ${usuario} cadastrado com sucesso\n`);
    }
}

// Classe SistemaAutenticacao - subsistema para autenticação de usuários
class SistemaAutenticacao {
    constructor(sistemaCadastro) {
        this.sistemaCadastro = sistemaCadastro; // Recebe a referência para o sistema de cadastro
    }

    // Método para autenticar um usuário
    autenticar(usuario, senha) {
        // Verifica se o usuário e a senha correspondem aos registros de cadastro
        if (usuario in this.sistemaCadastro.usuarios && this.sistemaCadastro.usuarios[usuario] === senha) {
            return true;
        }
        return false;
    }
}

// Classe SistemaPedidos - subsistema para fazer pedidos
class SistemaPedidos {
    // Método para fazer um pedido
    fazerPedido(usuario, produtos) {
        console.log(`Pedido de ${produtos.join(', ')} feito por ${usuario}\n`);
    }
}

// Instanciar a fachada do sistema de comércio
const comercioFacade = new SistemaComercioFacade();

// Tentar fazer um pedido antes de cadastrar um usuário
comercioFacade.fazerPedido('victor', '123', ['produto1', 'produto2']); // Usuário não cadastrado

// Cadastrar um usuário
comercioFacade.cadastrarUsuario('victor', '123');

// Fazer um pedido após o cadastro
comercioFacade.fazerPedido('victor', '123', ['produto1', 'produto2', 'arroz']); // Autenticação bem-sucedida e Pedido realizado
