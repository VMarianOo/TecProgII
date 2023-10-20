// SubSistema 1
class SistemaPagamento{
    processarPagamento(valor){
        console.log(`Processamento pagamento no valor de R$: ${valor}`);
    }

}

// SubSistema 2
class SistemaLogistica{
    enviarProduto(destinatario){
        console.log(`Emviar produto para: ${destinatario}`);
    }

}

// SubSistema 3
class SistemaNotificacao{
    enviarEmail(destinatario, mensagem){
        console.log(`Emviar email para: ${destinatario}: ${mensagem}`); 
    }

}

// Fachada
class LojaOnline{
    constructor(){
        this.pagamento = new SistemaPagamento();
        this.logistica = new SistemaLogistica();
        this.notificacao = new SistemaNotificacao();
    }

    realizarCompra(produto, destinatario) {
        this.pagamento.processarPagamento(produto.preco);
        this.logistica.enviarProduto(destinatario);
        this.notificacao.enviarEmail(destinatario, `Seu pedido de ${produto.nome} foi enviado`);
    }
}



// Cliente - EXEMPLO DE USO ####################
const loja = new LojaOnline();

const produto = {
    nome: 'camiseta',
    preco: 49.99
}
const destinatario = 'alvaro@exemplo.com';

loja.realizarCompra(produto, destinatario);