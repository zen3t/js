/*
let i = 0;
while (i < 4){
	console.log("miauuu")
	i++
}
*/
/*
for (let i = 1;i < 11;i++){
	console.log(`${i} miauuu`)
}
*/
const tarefas = [
	{
		id: 1,
		texto: "Calher o lixo",
		completo: false
	},
	{
		id: 2,
		texto: "limpar a casa",
		completo: true
	},
	{
		id: 3,
		texto: "comprar cafe",
		completo: false
	},
];


for (let i = 0; i < tarefas.length;i++){
	console.log(`Tarefas ${i + 1}: ${tarefas[i].texto}`)
}

// Para determinado elemento no vetor
for (let tarefa of tarefas){
	console.log(tarefa.texto)
}
