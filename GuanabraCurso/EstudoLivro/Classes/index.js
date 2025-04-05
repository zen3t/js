function inherit(p) {
  if (p == null) throw TypeError();
  if (Object.create) return Object.create(p);
  let t = typeof p;

  if (t !== "object" && t !== "function") function f() {}
  f.prototype = p;
  return new f();
}

let o = { x: "dont change this value" };
o.y = 3;
o.nameBook = "Auto da compadecida";
console.log(inherit(o));

let p = {
  x: 1.0,
  y: 1.0,
  get r() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  set r(newvalue) {
    let oldvalue = newvalue / oldvalue;
    this.x *= ratio;
    this.y *= ratio;
  },
  get theta() {
    return Math.atan2(this.y, this.x);
  },
};
let q = inherit(p);
(q.x = 1), (q.y = 1);
console.log(q.r);
console.log(q.theta);
