# Clase base de veiculo
class Veiculo:
    def __init__(self, modelo):
        self.modelo = modelo
        
    def mostrarDetalhes(self):
        print(f"Modelo: {self.modelo}")

# Subclasses de veiculo
class Carro(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)


class Moto(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

# Fabrica abstrata de veiculo
class FabricaDeVeiculos:
    def criarVeiculo(self, modelo):
        raise NotImplementedError("O método criarVeiculo deve ser implementado pela subclasses")

# Fabrica concreta de carros
class FabricaDeCarros(FabricaDeVeiculos):
    def criarVeiculo(self, modelo):
        return Carro(modelo)

# Fabrica concreta de motos
class FabricaDeMotos(FabricaDeVeiculos):
    def criarVeiculo(self, modelo):
        return Moto(modelo)

# USO DAS FABRICAS ##############################################################
fabricaDeCarros = FabricaDeCarros()
carro = fabricaDeCarros.criarVeiculo("Sedan")
carro.mostrarDetalhes()

fabricaDeMotos = FabricaDeMotos()
moto = fabricaDeMotos.criarVeiculo("Esportiva")
moto.mostrarDetalhes()




