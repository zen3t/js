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

const vetorDeTarefas = tarefas.map(function(tarefa){
	return tarefa.texto
});
console.log(vetorDeTarefas);

const tarefa1 = tarefas.filter(function (tarefa){
	return tarefa.id === 1;
})
console.log(tarefa1)

const vetor = [1,2,3,4];
const valorInicial = 0;
const soma = vetor.reduce(function (acumulador,elementoAtual){
	return acumulador + elementoAtual
},valorInicial)
console.log(soma)
