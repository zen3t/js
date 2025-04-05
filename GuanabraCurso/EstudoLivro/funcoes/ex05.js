// As expressões de funções podem encluir nomes, o que é util para a recursividade

let f = function fact(x) {
  if (x <= 1) {
    return 1;
  } else {
    return x * fact(x - 1);
  }
};
console.log(f(4));

let data = [1, 2, 3, 4, 5];
data.sort(function (a, b) {
  return a - b;
});
console.log(5, 2);
let tensquare = (function (x) {
  return x * x;
})(10);
console.log(tensquare);
