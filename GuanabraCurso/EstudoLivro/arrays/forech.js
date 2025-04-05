let data = [1, 2, 3, 4, 5];
let sum = 0;
data.forEach(function (value) {
  sum += value;
});
let everyother = data.filter(function (x, i) {
  return i % 2 == 0;
});
let smallvalue = data.filter(function (x) {
  return x < 3;
});
data.forEach(function (v, i, a) {
  a[i] = v + 1;
});
b = data.map(function (x) {
  return x * x;
});
console.log(sum);
console.log(smallvalue);
console.log(everyother);
console.log(b);
console.log(data);
