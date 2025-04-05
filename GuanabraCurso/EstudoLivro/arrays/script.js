// Cria um array Multimensional
let table = new Array(10);
for (let i = 0; table.length; i++) table[i] = new Array(10);
// Inicializa o array
for (let row = 0; row < table.length; row++) {
  for (col = 0; col < table[row].length; col++) {
    table[row][col] = row * col;
  }
}

// Usa um array Multimensional para calcula 5 x 7
let product = table[5][7];
console.log(product);
