const s = "Javascript";
let r = Array.prototype.join.call(s, " ");
console.log(r);

const reg = Array.prototype.filter
  .call(s, function (x) {
    return x.match(/[^aeiou]/);
  })
  .join("");
console.log(reg);
