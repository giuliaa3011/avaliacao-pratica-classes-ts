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

// Para visualização no console
const aluno1 = new Aluno("Joana", 20, "Frontend");
console.log(aluno1.apresentar());