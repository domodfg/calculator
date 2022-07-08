function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    return "undefined";
  } else {
    return number1 / number2;
  }
}

function operate(operator, number1, number2) {
  if (operator == "+") {
    result= add(number1, number2);
  } else if (operator == "-") {
    result= subtract(number1, number2);
  } else if (operator == "*") {
    result= multiply(number1, number2);
  } else if (operator == "/") {
    result= divide(number1, number2);
  }
  return result;
}
