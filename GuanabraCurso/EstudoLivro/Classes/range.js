function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype = {
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  forEach: function (f) {
    for (let x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  toString: function () {
    return "(" + this.from + "..." + this.to + ")";
  },
};
let r = new Range(1, 3);
console.log(r.includes(2));
r.forEach(console.log);
console.log(r instanceof Range);
