# Classe SistemaComercioFacade
class SistemaComercioFacade:
    def __init__(self):
        # Inicializa os subsistemas
        self.sistemaCadastro = SistemaCadastro()
        self.sistemaAutenticacaoProxy = SistemaAutenticacaoProxy(self.sistemaCadastro)
        self.sistemaPedidos = SistemaPedidos()

    # Método para cadastrar um usuário no sistema
    def cadastrar_usuario(self, usuario, senha):
        self.sistemaCadastro.cadastrar(usuario, senha)

    # Método para fazer um pedido no sistema
    def fazer_pedido(self, usuario, senha, produtos):
        # Verifica a autenticação do usuário antes de fazer um pedido
        if self.sistemaAutenticacaoProxy.autenticar(usuario, senha):
            self.sistemaPedidos.fazer_pedido(usuario, produtos)
        else:
            print('Falha na autenticação. Pedido não realizado, veja se você está realmente cadastrado.\n')


# Classe SistemaCadastro - subsistema para cadastro de usuários
class SistemaCadastro:
    def __init__(self):
        self.usuarios = {}  # Estrutura de dados para armazenar os usuários

    # Método para cadastrar um usuário
    def cadastrar(self, usuario, senha):
        self.usuarios[usuario] = senha
        print(f'Usuário {usuario} cadastrado com sucesso\n')


# Classe SistemaAutenticacao - subsistema para autenticação de usuários
class SistemaAutenticacao:
    def __init__(self, sistemaCadastro):
        self.sistemaCadastro = sistemaCadastro  # Recebe a referência para o sistema de cadastro

    # Método para autenticar um usuário
    def autenticar(self, usuario, senha):
        # Verifica se o usuário e a senha correspondem aos registros de cadastro
        if usuario in self.sistemaCadastro.usuarios and self.sistemaCadastro.usuarios[usuario] == senha:
            return True
        return False


# Classe SistemaAutenticacaoProxy - Proxy para SistemaAutenticacao
class SistemaAutenticacaoProxy:
    def __init__(self, sistemaCadastro):
        self.sistemaAutenticacao = SistemaAutenticacao(sistemaCadastro)
        self.usuario_autenticado = None

    # Método para autenticar um usuário
    def autenticar(self, usuario, senha):
        if self.usuario_autenticado:
            return True  # Já autenticado, permita a ação

        if self.sistemaAutenticacao.autenticar(usuario, senha):
            self.usuario_autenticado = usuario
            return True

        return False


# Classe SistemaPedidos - subsistema para fazer pedidos
class SistemaPedidos:
    # Método para fazer um pedido
    def fazer_pedido(self, usuario, produtos):
        print(f'Pedido de {", ".join(produtos)} feito por {usuario}\n')

# Criando pedido e login do usuario
produtos = ['Camisa', 'Calça', 'Tênis']
usuario = 'Victor'
senha = '123'

# Instanciar a fachada do sistema de comércio
comercio_facade = SistemaComercioFacade()

# Tentar fazer um pedido antes de cadastrar um usuário
comercio_facade.fazer_pedido(usuario, senha, produtos)  # Usuário não cadastrado

# Cadastrar um usuário
comercio_facade.cadastrar_usuario(usuario, senha)

# Fazer um pedido após o cadastro
comercio_facade.fazer_pedido(usuario, senha, produtos)  # Autenticação bem-sucedida e Pedido realizado
