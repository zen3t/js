function dizer_ola(nome = "cosado"){
	console.log("Ola " + nome);
}

dizer_ola()

function se_apresentar(nome,idade){
	console.log("Eu mim chamo " + nome);
	console.log("Eu tenho  " + idade);
}
se_apresentar("zeneto",41);


function criar_nome_completo(nome,sobrenome,sexo){
	if (sexo == "M"){
		return `Sr ${nome} ${sobrenome}`;
	}else if (sexo == "F"){
		return `Sra. ${nome} ${sobrenome}`;
	}else{
		return `${nome} ${sobrenome}`;

	}
}
const nomeCompleto = criar_nome_completo("Jose ","alves sobrinho","M")
const nomeCompleto2 = criar_nome_completo("Ana ","alves sobrinho","F")
dizer_ola(nomeCompleto)
dizer_ola(nomeCompleto2)

const oi_tudo_bem = () => {
	console.log("Ola tudo bem!!!")
}
 oi_tudo_bem()
