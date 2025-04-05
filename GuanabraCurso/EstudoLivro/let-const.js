function counter(start) {
  let nextValue = Math.round(start);
  return {
    next: function () {
      return nextValue++;
    },
  };
}
let serialNumberGenerate = counter(1000);
let n1 = serialNumberGenerate.next();
let n2 = serialNumberGenerate.next();
let n3 = serialNumberGenerate.next();
console.log(n1);
console.log(n2);
console.log(n3);
