let sit1 = document.querySelector("#sit1");
let sit2 = document.querySelector("#sit2");
let sit3 = document.querySelector("#sit3");
//let escolha = document.querySelector("#escolha");
//
//let notaFinal1 = 3;
//let notaFinal2 = 7;
//let notaFinal3 = 5;
///* Condicionais */
//if (notaFinal1 >= 7) {
//}
//if (notaFinal2 >= 7) {
//} else{
//
//}
//if (notaFinal3 >= 7) {
//}
let nota1 = parseFloat(prompt("Digite a sua primeira  nota: "));
let nota2 = parseFloat(prompt("Digite a sua segunda  nota: "));

let media = nota1 + nota2 / 2;
console.log(nota1);

let situacao = "";
if (media >= 7) {
  situacao = "Aprovado";
  sit1.textContent = situacao;
} else if (media <= 3) {
  situacao = "Reprovado";
  sit2.textContent = situacao;
} else {
  situacao = "Recuperacao";
  sit3.textContent = situacao;
}
let resultado = "";
switch (situacao) {
  case "Aprovado":
    resultado = `Voce foi aprovado com media: ${media} Parabens!`;
    sit1.textContent = resultado;
    break;
  case "Reprovado":
    resultado = `Voce foi Reprovado com a media: ${media} .Estude mais da proxia vez!`;
    sit2.textContent = resultado;
    break;
  case "Recuperacao":
    resultado = `Voce ficou em Recuperacao coma a media: ${media}.Mais ainda tera uma proxima vez`;
    sit3.textContent = resultado;
    break;
  default:
    resultado = "Estude pra valer";
}
