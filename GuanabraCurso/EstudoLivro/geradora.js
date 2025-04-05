// Define uma funcao geradora para iterar por um intevalo de inteiro
function* range(min, max) {
  for (let i = Math.ceil(min); i <= max; i++) yield i;
}

for (let n of range(3, 8)) console.log(n);
