/*
const x = 30;
const y = 50;
if (x > y) {
	console.log(`O valot ${x} é maio ${y}`);
} else if(x < y){
	console.log(`O valor ${x} é menor ${y}`);
}else {
	console.log(`O valor ${x} é igual ${y}`);
}
*/

const cor = "Vermelho";

switch (cor){
	case "Vermelho":
		console.log("A cor é Vermelho");
		break
	case "Preto":
		console.log("A cor é Preta");
		break
	case "Azul":
		console.log("A cor é Azul");
		break
	default:
		console.log("A cor nao é Vermelho nem Preto nem Azul");
}


/*
const contador = 5;
switch (contador) {
	case 5:
		console.log("5");
	case 4:
		console.log("4");
	case 3:
		console.log("3");
	case 2:
		console.log("2");
	case 1:
		console.log("1");
	default:
		console.log("Booooooom");
}
*/
const sexo = "F";
switch (sexo) {
	case "F":
	case "f":
		console.log("Femenino");
		break
	case "M":
	case "m":
		console.log("Masculino");
		break
	default:
		console.log("Indefinido");
}


let numero = cor == "Vermelho" ? 10 : 20;

console.log(numero)
