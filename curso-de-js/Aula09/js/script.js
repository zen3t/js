let titulo = document.querySelector("h1");
let image = document.querySelector("h2");
titulo.textContent = "Aula 09 manipulando o CSS";
titulo.innerHTML = "Aula manipular o CSS";
let img = document.querySelector("#foto");
img.setAttribute("src", "./img/pride-fc.jpg");
img.setAttribute("width", "250px");
titulo.style.color = "green";
titulo.style.backgroundColor = "#000";
image.style.color = "red";
let box = document.querySelectorAll(".box");
box[0].setAttribute("class", "escura");
box[0].removeAttribute("class");
// Modos de cor
let tela = document.querySelector("main");
let btDark = document.querySelector("#btdark");
let btLight = document.querySelector("#btlight");

btDark.addEventListener("click", modoDark);
btLight.addEventListener("click", modoLight);

function modoDark() {
  console.log("modo Dark");
  tela.classList.add("dark");
  tela.classList.remove("light");
}
function modoLight() {
  console.log("modo Light");
  tela.classList.remove("dark");
  tela.classList.add("light");
}
