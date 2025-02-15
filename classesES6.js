// Funcao construtora
/*
function Pessoa(nome,sobrenome,dataDeNascimento){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.dataDeNascimento = new Date(dataDeNascimento);

	this.obterNomeCompleto = () =>{
		return `${nome} ${sobrenome}`;
	}
}
*/
class Pessoa{
	constructor(nome,sobrenome,dataDeNascimento){
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.dataDeNascimento = new Date(dataDeNascimento);
		}
		obterNomeCompleto(){
			return `${this.nome} ${this.sobrenome}`;
		}
}

const pessoa1 = new Pessoa("ze neto","sobrinho","1983-9-21")
console.log(pessoa1)
console.log(pessoa1.obterNomeCompleto())
console.log(pessoa1.dataDeNascimento.toDateString())
