package br.com.fatecdiadema;
public class Estudante {
    private String nome;
    private String matricula;
    private int idade;
    private String curso;
    private String periodo;

    public Estudante(String nome, String matricula, int idade, String curso, String periodo) {
        this.nome = nome;
        this.matricula = matricula;
        this.idade = idade;
        this.curso = curso;
        this.periodo = periodo;
    }

    public void mostrarDetalhes() {
        System.out.println("Nome: " + nome + ", Matricula: " + matricula +
                ", Curso: " + curso + ", Periodo: " + periodo);
    }
}

class EstudanteBuilder {
    private String nome;
    private String matricula;
    private int idade;
    private String curso;
    private String periodo;

    public EstudanteBuilder() {
    }

    public EstudanteBuilder definirNome(String nome) {
        this.nome = nome;
        return this;
    }

    public EstudanteBuilder definirMatricula(String matricula) {
        this.matricula = matricula;
        return this;
    }

    public EstudanteBuilder definirIdade(int idade) {
        this.idade = idade;
        return this;
    }

    public EstudanteBuilder definirCurso(String curso) {
        this.curso = curso;
        return this;
    }

    public EstudanteBuilder definirPeriodo(String periodo) {
        this.periodo = periodo;
        return this;
    }

    public Estudante construir() {
        return new Estudante(nome, matricula, idade, curso, periodo);
    }

    public static void main(String[] args) {
        EstudanteBuilder builder = new EstudanteBuilder();

        Estudante estudante1 = builder
                .definirNome("Luquinhas")
                .definirMatricula("48274320")
                .definirIdade(19)
                .definirCurso("DSM")
                .definirPeriodo("3º")
                .construir();

        estudante1.mostrarDetalhes();
    }
}
