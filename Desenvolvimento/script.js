const firstNumberImput = document.getElementById("firstNumber");
const secondNumberImput = document.getElementById("secondNumber");
const operateSelectImput = document.getElementById("operator");
const calculateButton = document.getElementById("calculater");
const resultParagraph = document.getElementById("result");

function calculate() {
  const firstNumber = parseFloat(firstNumberImput.value);
  const secondNumber = parseFloat(secondNumberImput.value);
  const operator = operateSelectImput.value;

  let result;
  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
  } else if (operator === "/") {
    result = firstNumber / secondNumber;
  } else {
    result = "Operator invalid";
  }
  resultParagraph.textContent = "Result: " + result;
}
calculateButton.addEventListener("click", calculate);
