// Retorna um objeto iteravel que representa um intervalo de números
function range(min, max) {
  return {
    get min() {
      return min;
    },
    get max() {
      return max;
    },
    includes: function (x) {
      return min <= x && x <= max;
    },
    toString: function () {
      return "[" + min + "," + max + "]";
    },
    __iterator__: function () {
      let val = Math.ceil(min);
      return {
        next: function () {
          if (val > max) throw StopIteration;
          return val++;
        },
      };
    },
  };
}
// Aqui está como podemos iterar em um intervalo
for (let i in range(1, 10)) console.log(i);
