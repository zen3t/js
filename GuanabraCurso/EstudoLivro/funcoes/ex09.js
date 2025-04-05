//Retorna um array de funcoes
//
function constFuncs() {
  let funcs = [];
  for (let i = 0; i < 10; i++)
    funcs[i] = function () {
      return i;
    };
  return funcs;
}
let funcs = constFuncs();
console.log(funcs[4]());
