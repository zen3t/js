// SELECIONAR ELEMENTOS
//let numeroSorteado = 0;
let numeroSorteado = document.querySelector("#dado");
let imgDado = document.querySelector("#imgDado");
let btnSortear = document.querySelector("#btnSortear");
let sorteado = document.querySelector("#sorteado");
let dadoRolando = document.querySelector("#dadoRolando");

btnSortear.addEventListener("click", function () {
  imgDado.classList.add("animar");
  sorteado.classList.add("aparecer");
  // tocar o e feito sonoro
  dadoRolando.play();
  // Ocultar o botao  Sortear
  btnSortear.style.display = "none";
  // Usar o timeOut para executar as acoes apos 1.75s
  setTimeout(function () {
    numeroSorteado = getRandomInt(1, 6);
    console.log(numeroSorteado);
    // definir atributo com base no numero
    imgDado.setAttribute("src", "./img/dado/" + numeroSorteado + ".png");
    // excrever no paragrafo o numeroSorteado
    sorteado.textContent = numeroSorteado;
    // exibir o botao Sortear
    btnSortear.style.display = "inline-block";
    // retirar a animacao
    imgDado.classList.remove("animar");
    sorteado.classList.remove("aparecer");
  }, 1750);
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
