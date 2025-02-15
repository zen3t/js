const numeros = [1,2,3,4,5];


numeros.forEach(function (element) {
 console.log(element)
});


const letras = ["A","B","C","D","E"];

letras.forEach(function (letra,index) {
	console.log(`${index}: ${letra}`)
})

const tarefas = [
	{
		id: 1,
		texto: "Limpar o lixo",
		conclusao: false
	},
	{
		id: 2,
		texto: "comprar uva",
		conclusao: false,
	},
	{
		id: 3,
		texto: "cuidar das criancas",
		conclusao: true,

	},
];
tarefas.forEach(function (tarefa,index,minhasTarefas){
	console.log(`${index + 1}: ${tarefa.texto}`);
	console.log(minhasTarefas)
})
