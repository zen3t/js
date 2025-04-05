let horaAtual = new Date();
let horas = horaAtual.getHours();
console.log(`A gora são exatamente ${horas} horas`);
if (horas < 12) {
  console.log(`Bom dia! São ${horas} horas`);
} else if (horas <= 18) {
  console.log(`Boa tarde! São ${horas} horas da tarde`);
} else {
  console.log(`Boa noite! São exatamente ${horas} da noite`);
}
