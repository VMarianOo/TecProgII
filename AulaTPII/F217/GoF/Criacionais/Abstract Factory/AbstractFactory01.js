//Interface da Fabrica Abstrata
class AbstractFactory{
    createProductA() {}
    createProductB() {}
}

//Fabrica concreta que cria produto do Tipo A e B - Especificado com 1
class ConcreteFactory1 extends AbstractFactory{
    createProductA() {
        return new ConcreteProductA1();
    }

    createProductB() {
        return new ConcreteProductB1();
    }
}

//Fabrica Concreta que cria produtos do Tipo A e B - Especificação 2
class ConcreteFactory2 extends AbstractFactory {
    createProductA(){
        return new ConcreteProductA2();
    }

    createProductB(){
        return new ConcreteProductB2();
    }
}

//Insterface Produtos do Tipo A
class AbstractProductA {
    methodA() {}
}

//Implementação concreta do Produto do Tipo A - Especificação 1 
class ConcreteProductA1 extends AbstractProductA {
    methodA() {
        return "Produto do Tipo A da Fabrica 1";
    }
}

//Implementação Concreta do Produto do Tipo A - Especificação 2
class ConcreteProductA2 extends AbstractProductA {
    methodA() {
        return "Produto do Tipo A da Fabrica 2";
    }
}

//Interface dos Produtos do Tipo B
class AbstractProductB {
    methodB() {}
}

//Implementação concreta do Produto do Tipo B - Especificação 1
class ConcreteProductB1 extends AbstractProductB {
    methodB() {
        return "Produto do Tipo B da Fabrica 1";
    }
}

//Implementação Concreta do Produto do Tipo B - Especificação 2
class ConcreteProductB2 extends AbstractProductB {
    methodB() {
        return "Produto do Tipo B da Fabrica 2";
    }
}

//Função para Demonstrar o Padrão abstract Factory ######################################
function clienteCode (factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productA.methodA());
    console.log(productB.methodB());
}

//Exemplo de Uso com Primeira Fabrica
const factory1 = new ConcreteFactory1();
clienteCode(factory1);

//Exemplo de Uso com a Segunda Fabrica
const factory2 = new ConcreteFactory2();
clienteCode(factory2);
