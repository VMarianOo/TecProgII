class Estudante{
    constructor(nome, matricula, idade, curso, periodo){
        this.nome = nome;
        this.matricula = matricula;
        this.idade = idade;
        this.curso = curso;
        this.periodo = periodo;
    }

    mostrarDetalhes(){
        console.log(`Nome: ${this.nome}, Matricula: ${this.matricula},
        Curso: ${this.curso}, Periodo: ${this.periodo}`);
    }
}

class EstudanteBuilder{
    constructor(){
        this.nome = null;
        this.matricula = null;
        this.idade = null;
        this.curso = null;
        this.periodo = null;
    }

    definirNome(nome){
        this.nome = nome;
        return this;
    }

    definirMatricula(matricula){
        this.matricula = matricula;
        return this;
    }

    definirIdade(idade){
        this.idade = idade;
        return this;
    }

    definirCurso(curso){
        this.curso = curso;
        return this;
    }

    definirPeriodo(periodo){
        this.periodo = periodo;
        return this;
    }

    construir(){
        return new Estudante(this.nome, this.matricula, this.idade, this.curso, this.periodo);
    }
}

// EXEMPLO #######################################
const builder = new EstudanteBuilder();

const estudante1 = builder
    .definirNome("Luquinhas")
    .definirMatricula("48274320")
    .definirIdade(19)
    .definirCurso("DSM")
    .definirPeriodo("3º")
    .construir();

estudante1.mostrarDetalhes();