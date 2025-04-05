// Uma funcao recursiva (que chama a se mesma) que calcula fatoriais
// Lembre-se de que x! é o produto de x e todos os inteiros menores que ele

function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

console.log(factorial(5));
