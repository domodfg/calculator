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
  if (operator == "") {
    return (result = number2);
  } else if (operator == "+") {
    result = add(number1, number2);
  } else if (operator == "-") {
    result = subtract(number1, number2);
  } else if (operator == "*") {
    result = multiply(number1, number2);
  } else if (operator == "/") {
    result = divide(number1, number2);
  }
  return result;
}
let displayNum = "";
let storeSecondNum = "";
const digitButtons = document.querySelectorAll(".digits");
const displayer = document.querySelector(".displayNum");
const clear = document.querySelector(".clear");
const secondDisplayer = document.querySelector(".displaySecondNum");

digitButtons.forEach((digit) => {
  digit.addEventListener("click", () => {
    if (displayNum != "undefined") {
      displayNum += digit.textContent;
      storeSecondNum += digit.textContent;
      displayer.textContent = displayNum;
      secondDisplayer.textContent = storeSecondNum;
    }
  });
});

clear.addEventListener("click", () => {
  displayer.textContent = "";
  secondDisplayer.textContent = "";
  displayNum = "";
  storeSecondNum = "";
  result = number2;
  operator = "";
});

let number1;
let number2;
let operator = "";
function storeNumber() {
  number1 = parseFloat(displayNum);
  storeSecondNum = "";
}
function pressEqual() {
  if (storeSecondNum != "" && storeSecondNum != "undefined") {
    number2 = parseFloat(storeSecondNum);
    operate(operator, number1, number2);
    if (result == "undefined") {
      displayNum = result;
      storeSecondNum = result;
    } else {
      displayNum = result.toFixed(1).replace(/[.,]00$/, "");
      storeSecondNum = result.toFixed(1).replace(/[.,]00$/, "");
    }
    displayer.textContent = displayNum;
    secondDisplayer.textContent = storeSecondNum;
    operator = "";
  }
}
function pressOperator(sign) {
  if (storeSecondNum != "" && storeSecondNum != "undefined") {
    pressEqual();
    storeNumber();
    displayNum += sign;
    displayer.textContent = displayNum;
    operator = sign;
  }
}

const plus = document.querySelector(".add");
const minus = document.querySelector(".minus");
const times = document.querySelector(".multiply");
const over = document.querySelector(".divide");
const equal = document.querySelector(".equal");
const float = document.querySelector(".decimal");

plus.addEventListener("click", () => pressOperator("+"));
minus.addEventListener("click", () => pressOperator("-"));
times.addEventListener("click", () => pressOperator("*"));
over.addEventListener("click", () => pressOperator("/"));
equal.addEventListener("click", pressEqual);

function decimal() {
  if (displayNum != "undefined" && !displayNum.includes(".")) {
    displayNum += float.textContent;
    storeSecondNum += float.textContent;
    displayer.textContent = displayNum;
    secondDisplayer.textContent = storeSecondNum;
  }
}
float.addEventListener("click", decimal);
