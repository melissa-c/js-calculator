function registerEvents () {
  document.calculate.operate.addEventListener('click', calculation, false);
}
function calculation (firstNumber, secondNumber) {
  var number = document.calculate.number.value;
  switch (number) {
    case "0":
      break;
    case "1":
      break;
    case "2":
      break;
    case "3":
      break;
    case "4":
      break;
    case "5":
      break;
    case "6":
      break;
    case "7":
      break;
    case "8":
      break;
    case "9":
      break;
  }

 
  

  var operator = document.calculate.operator.value;
  switch (operator) {
    case "+":
      var answer = firstNumber + secondNumber;
      break;
    case "-":
      answer = firstNumber - secondNumber;
      break;
    case "x": 
      answer = firstNumber * secondNumber;
      break;
    case "/":
      answer = firstNumber / secondNumber;
  }
  document.calculate.display.value = answer;
}



/*document.getElementById('one').onclick = getButton();

document.getElementById('display').value; //GET

document.getElementById('display').innerHTML =//SET

function calculate(e){
//var e = window.event
//var btn = e.target || e.srcElement;
console.log(event.target.id);
alert (event.target.id);
//var i = document.getElementById('one').value;
//document.getElementById('display').innerHTML = 'i';
}

function display(e) {

switch(e){
  case +:
  document.getElementById('display').innerHTML = '+';
  break;
  case x:
  document.getElementById('display').innerHTML = 'x';
  break;
  case /:
  document.getElementById('display').innerHTML = '/';
  break;
  case %:
  document.getElementById('display').innerHTML = '%';
  break;
  default;
}
}*/