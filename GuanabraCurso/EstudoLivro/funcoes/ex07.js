function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

// Aqui está a função que recebe uma das funções anteriores
// como argumentos e a chama em dois operando

function operate(operator, operand1, operand2) {
  return operator(operand1, operand2);
}
let i = operate(add, operate(add, 3, 4));
console.log(i);
