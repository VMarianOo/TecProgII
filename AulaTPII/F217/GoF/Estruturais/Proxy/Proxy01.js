// Objeto Real
class ServicoReal{
    executar(){
        console.log("Executando servidor real")
    }
}

// Proxy
class ProxyServico{
    constructor(){
        this.servicoReal = new ServicoReal();
    }

    executar() {
        console.log("Antes da execução do serviço");
        this.servicoReal.executar();
        console.log("Depois da execução do serviço");
    }
}
// USO DO PROXY - CLIENTE ##########################
const proxy = new ProxyServico();
proxy.executar();