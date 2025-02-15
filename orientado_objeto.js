/*
const pessoa = {
	nome: "zeneto",
	sobrenome: "sobrinho",
	idade: 41,
	datadenascimento: new Date(21-9-83),
	obterNomeComplet(){
		return `${this.nome} ${this.sobrenome}`
	},
	obterDataNascimento(){
		return this.datadenascimento.getFullYear();
	}
};
console.log(pessoa.obterNomeComplet());
console.log(pessoa.obterDataNascimento());
console.log(pessoa.nome);
*/



// Funcao Construtora
// Função Construtora
function Pessoa(nome, sobreNome, idade, dataDeNascimento) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.idade = idade;
    this.amigos = [];
    this.dataDeNascimento = new Date(dataDeNascimento);
}

// Método para adicionar amigos
Pessoa.prototype.adicionarAmigos = function (amigo) {
    if (!this.amigos.includes(amigo)) {
        this.amigos.push(amigo);
        amigo.amigos.push(this);
    }
};

// Método para listar amigos
Pessoa.prototype.selecionarAmigos = function () {
    return this.amigos.map(function (amigo) {
        return amigo.obterNomeCompleto();
    });
};

// Método para obter nome completo
Pessoa.prototype.obterNomeCompleto = function () {
    return `${this.nome} ${this.sobreNome}`;
};

// Método para obter data de nascimento formatada
Pessoa.prototype.obterNascimento = function () {
    return this.dataDeNascimento.toDateString(); // Ex: "Fri Aug 02 1997"
};

// Criando instâncias
const pessoa1 = new Pessoa("João", "Alves", 41, "1997-08-02");
const pessoa2 = new Pessoa("Carlos", "Gadelha", 51, "1999-09-03");

// Testes
console.log(pessoa1.obterNomeCompleto()); // João Alves
console.log(pessoa1.obterNascimento()); // Fri Aug 02 1997

// Adicionando amigos
pessoa1.adicionarAmigos(pessoa2);

// Tentando adicionar o mesmo amigo novamente (não deve duplicar)
pessoa1.adicionarAmigos(pessoa2);

// Exibindo lista de amigos
console.log(pessoa1.selecionarAmigos()); // ["Carlos Gadelha"]

// Exibindo amigos como objetos
console.log(pessoa1.amigos);

