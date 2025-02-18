// Funcoes ou metodos Js
let titulo = document.querySelector("h1");
titulo.textContent = "Funcoes JavaScript";
let box = document.querySelectorAll(".box");

function olaMundo() {
  document.write("Funcao sem Retorno<br>");
}

function olaMundo2() {
  return "Funcao com retorn <br>";
}

olaMundo();
document.write(olaMundo2());
// Funcoes com parametros

let x = 2;
let y = 7;
let msg = "Ola mundo js";
function somar(a, b) {
  document.write(a + b + "<br>");
}

function somar2(c, d) {
  return c + d;
}
somar(x, y);
document.write(`<p>${somar2(x, y)}</p>`);
document.write(`<p>${somar2(23, 54)}</p>`);

// funcoes anonimas = nao tem nome
// pode ou nao ter parametros
// pode ou nao ter retorno

titulo.addEventListener("click", function () {
  console.log("Clicou");
});
/* Arrow function ES6 2015 em diante*/
const ola_mundo_arrow = () => document.write("Ola MUndo !!!!");
/* Nao precisa utilizar a palavra function
   Nao precisa usar a palavra return
   Nao precisa colocar {} se for so uma instrucao
*/
const ola_mundo_arrow2 = () => `<p>Ola mundo com js</p>`;
ola_mundo_arrow();
document.write(ola_mundo_arrow2());
