/*Aula 11 de js Eventos*/
function carregou() {
  console.log("Pagina carregada com sucesso");
}

// carregou();

function focou() {
  console.log("Foco no titulo");
}
focou();

function focoNoCampo() {
  console.log("Foco no campo de texto");
}
focoNoCampo();
function semFocoNoCampo() {
  console.log("Sem foco no campo de texto");
}
semFocoNoCampo();

let letras = document.querySelector("input[type=text]");
function avisarQueTeclou() {
  let numLetras = 1;
  console.log("Esta teclando " + (letras.value.length + numLetras));
}
avisarQueTeclou();

let botao1 = document.querySelector("#btn1");
let botao2 = document.querySelector("#btn2");
let botao3 = document.querySelector("#btn3");
// mouseover a seta do mouse esta no elemento
botao1.addEventListener("mouseover", function () {
  console.log("Foco no botao1");
});
botao2.addEventListener("blur", function () {
  console.log("Foco no botao2");
});
botao3.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Clicou no botao enviar");
});
