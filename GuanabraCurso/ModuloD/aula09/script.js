const vel1 = document.querySelector(".vel1");
const res = document.querySelector(".res");
let vel = Number(vel1.value);
function calcular() {
  res.innerHTML = `Sua velocidade atual e <strong>${vel}</strong> km/h`;
  if (vel >= 60) {
    res.innerHTML += `<p>Você está MULTADO por exesso de velocidade</p>`;
  }
  res.innerHTML += "<p>Dirija sempre com cuidado</p>";
}
