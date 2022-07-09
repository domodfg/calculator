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
let displayNum = '';
let storeSecondNum='';
const digitButtons = document.querySelectorAll('.digits');
const displayer=document.querySelector('.displayNum');
const clear = document.querySelector('.clear');
const secondDisplayer=document.querySelector('.displaySecondNum');


digitButtons.forEach((digit) => {
  digit.addEventListener('click', () => {
    displayNum += digit.textContent;
    storeSecondNum += digit.textContent;
    displayer.textContent=displayNum;
    secondDisplayer.textContent=storeSecondNum;
  });
});

clear.addEventListener('click' , () => {
    displayer.textContent=0;
    secondDisplayer.textContent=0;
    displayNum = '';
    storeSecondNum='';
})



let number1;
let number2;
let operator;
function storeNumber () {
  number1= parseFloat(displayNum);
  secondDisplayer.textContent=number1;
  storeSecondNum='';

}
function pressPlus() {
  storeNumber();
  operator='+';
}
function pressMinus() {
  storeNumber();
  operator='-';
}
function pressMultiply() {
  storeNumber();
  operator='*';
}
function pressDivide() {
  storeNumber();
  operator='/';
}


function pressEqual () {
  number2= parseFloat(storeSecondNum);
  operate(operator, number1, number2);
  displayNum=result;
  storeSecondNum=result;
  displayer.textContent=displayNum;
  secondDisplayer.textContent=storeSecondNum;
}

const plus = document.querySelector('.add');
const minus = document.querySelector('.minus');
const times = document.querySelector('.multiply');
const over = document.querySelector('.divide');
const equal = document.querySelector('.equal');

plus.addEventListener('click', pressPlus);
minus.addEventListener('click', pressMinus);
times.addEventListener('click', pressMultiply);
over.addEventListener('click', pressDivide);
equal.addEventListener('click', pressEqual);
