const pais = document.querySelector(".pais");
const res = document.querySelector(".res");
function clicar() {
  const val = pais.value;
  res.innerHTML = `a sua nacionalidade e ${val}<br>`;
  if (val === "Brasil" || "brasil") {
    res.innerHTML += "Voce e brasileiro";
  } else {
    res.innerHTML += "Voce e estramgeiro";
  }
}
