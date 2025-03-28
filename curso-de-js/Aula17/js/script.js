let numeroSecreto = 0;
let contador = 1;
let min = 1;
let max = 10;

// selecionar elementos
let inputNumero = document.querySelector("#inputNumero");
let btnChutar = document.querySelector("#btnChutar");
let aviso = document.querySelector("#aviso");
let musica = document.querySelector("#musica");
// Funcoesou ou metodos para controlar o jogo
function gerarNumeroSecreto() {
  numeroSecreto = Math.floor(Math.random() * (max - min) + min);
  console.log(numeroSecreto);
}
function bloquearBtnChutar() {
  btnChutar.setAttribute("disable", "disable");
  btnChutar.style.background = "#222";
  btnChutar.style.cursor = "not-allowed";
}
function ativarBtnChutar() {
  btnChutar.removeAttribute("disable");
  btnChutar.style.background = "#222";
  btnChutar.style.cursor = "pointer";
}
