let a = [1, 2, 3, 4, 5];
let sum = a.reduce(function (x, i) {
  return x + i;
}, 0);
console.log(sum);

let product = a.reduce(function (x, i) {
  return x * i;
}, 1);
console.log(product);

let maior = a.reduce(function (x, i) {
  return x > i ? x : i;
});
console.log(maior);
