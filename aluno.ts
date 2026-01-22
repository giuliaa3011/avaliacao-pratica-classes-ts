class Aluno {
    nome: string;
    idade: number;
    curso: string;

    constructor(nome: string, idade: number, curso: string) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    apresentar(): string {
        return `Olá, o meu nome é ${this.nome} e eu estou o cursando ${this.curso}.`;
    }
}