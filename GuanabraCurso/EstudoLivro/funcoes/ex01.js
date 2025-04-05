let a = { x: 2, y: 4, a: [1, 2, 3] };
function printprosps(o) {
  for (let p in o) {
    console.log(p + ": " + o[p] + "\n");
  }
}
printprosps(a);
