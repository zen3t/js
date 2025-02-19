let carros = ["fiat", "opala", "gol", "vectra", "omega"];

for (let i = 0; i < 5; i++) {
  document.write(i + "<br>");
}
for (let i = 0; i < carros.length; i++) {
  document.write(`<li>${carros[i]}</li>`);
}

let frutas = ["Maca", "pera", "uva", "manga", "limao"];
frutas.forEach(function (fruta, i) {
  document.write(`${i + 1} = ${fruta}<br>`);
});

carros.forEach(function (carro) {
  document.write(`${carro}<br>`);
});

let contador = 0;

while (contador < frutas.length) {
  console.log(frutas[contador]);
  contador++;
}

let iterador = 0;
do {
  console.log(carros[iterador]);
  iterador++;
} while (iterador < carros.length);
