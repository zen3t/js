// Uma função geradora que retorna uma sequencia de fibonacci
function* fibonacci() {
  let x = 0,
    y = 1;
  while (true) {
    yield (y[(x, y)] = [y, x + y]);
  }
}

f = fibonacci();
for (let i = 0; i < 10; i++) console.log(f.next());
