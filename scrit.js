const nome = "zeneto";
const sobrenome = "alves";
const idade = 41;
const cp = "192-3940-22";
const pasatempo = ["filmesd","musicas","futebol"];
const rua = "alberto maranhao";
const nome_da_cidade = "Mossoro";

const pessoa = {
	nome : "zeneto",
	sobrenome : "alves",
	idade : 41,
	sexo : "M",
	endereco : {
		rua : "domigos juliao",
		cidade : "Mossoro",
		estado : "Rn",
		telefone : 3940459503,
	},
	diversao : ["nadar","jogar","estudar","progamar"],
}

const terefas = [
	{
		id: 1,
		texto: "Tirar o lixo",
		concluido: false
	},
	{
		id: 2,
		texto: "Arrumar o quarto",
		concluido: true
	},
	{
		id: 3,
		texto: "Dar comer ao cão",
		concluido: false
	},
]
console.log(terefas[1].texto)
console.log(JSON.stringify(terefas))

