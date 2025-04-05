let area = document.querySelector(".ola");
area.addEventListener("click", clicar);
area.addEventListener("mouseenter", entrar);
area.addEventListener("mouseout", saiu);
function clicar() {
  area.innerText = "clicou";
  area.style.background = "red";
}

function entrar() {
  area.innerText = "Entrou";
}

function saiu() {
  area.innerText = "Saiu";
  area.style.background = "green";
}
