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

let displayNum = "";
let storeSecondNum = "";
const digitButtons = document.querySelectorAll(".digits");
const displayer = document.querySelector(".displayNum");
const clear = document.querySelector(".clear");
const secondDisplayer = document.querySelector(".displaySecondNum");

digitButtons.forEach((digit) => {
  digit.addEventListener("click", () => {
    if (displayNum === "0") {
      displayNum = digit.textContent;
      storeSecondNum = digit.textContent;
      displayer.textContent = displayNum;
      secondDisplayer.textContent = storeSecondNum;
    } else if (displayNum != "undefined") {
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
function storeNumber() {
  number1 = parseFloat(displayNum);
  storeSecondNum = "";
  secondDisplayer.textContent = storeSecondNum;
}
function pressEqual() {
  if (
    storeSecondNum != "" &&
    storeSecondNum != "undefined" &&
    storeSecondNum != "-" &&
    storeSecondNum != "."
  ) {
    number2 = parseFloat(storeSecondNum);
    operate(operator, number1, number2);
    if (result == "undefined") {
      displayNum = result;
      storeSecondNum = result;
    } else {
      displayNum = result.toFixed(2).replace(/[.,]00$/, "");
      storeSecondNum = result.toFixed(2).replace(/[.,]00$/, "");
    }
    displayer.textContent = '';
    secondDisplayer.textContent = storeSecondNum;
    operator = "";
  }
}
function pressOperator(sign) {
  if (
    storeSecondNum != "" &&
    storeSecondNum != "undefined" &&
    storeSecondNum != "-" &&
    storeSecondNum != "."
  ) {
    pressEqual();
    storeNumber();
    displayNum += sign;
    displayer.textContent = displayNum;
    operator = sign;
  }
}

function minusValue() {
  if (storeSecondNum != "undefined") {
    displayNum += "-";
    displayer.textContent = displayNum;
    storeSecondNum += "-";
    secondDisplayer.textContent = storeSecondNum;
  }
}

const plus = document.querySelector(".add");
const minus = document.querySelector(".minus");
const times = document.querySelector(".multiply");
const over = document.querySelector(".divide");
const equal = document.querySelector(".equal");
const float = document.querySelector(".decimal");
const backSpace = document.querySelector(".backSpace");

plus.addEventListener("click", () => pressOperator("+"));
minus.addEventListener("click", () =>
  storeSecondNum == "" ? minusValue() : pressOperator("-")
);
times.addEventListener("click", () => pressOperator("*"));
over.addEventListener("click", () => pressOperator("/"));
equal.addEventListener("click", pressEqual);
float.addEventListener("click", decimal);
backSpace.addEventListener("click", deleteLastNumber);

function decimal() {
  if (displayNum != "undefined" && !storeSecondNum.includes(".")) {
    displayNum += float.textContent;
    storeSecondNum += float.textContent;
    displayer.textContent = displayNum;
    secondDisplayer.textContent = storeSecondNum;
  }
}

function deleteLastNumber() {
  let lastNumber = displayNum.charAt(displayNum.length - 1);
  if (
    storeSecondNum == "-" ||
    (lastNumber != "+" &&
      lastNumber != "-" &&
      lastNumber != "*" &&
      lastNumber != "/" &&
      lastNumber != "d")
  ) {
    displayNum = displayNum.slice(0, -1);
    storeSecondNum = storeSecondNum.slice(0, -1);
    secondDisplayer.textContent = storeSecondNum;
    displayer.textContent = displayNum;
  }
}
