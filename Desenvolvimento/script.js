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
  if (isNaN(firstNumberImput) || isNaN(secondNumberImput)) {
    resultParagraph.textContent = "Please enter a value number";
    return;
  }
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (operator === 0) {
        resultParagraph.textContent = "Division by zero is not allowed";
      }
      result = firstNumber / secondNumber;
      break;
    default:
      result = "Operator invalid";
  }
  resultParagraph.textContent = "Result: " + result;
}
calculateButton.addEventListener("click", calculate);
