// get all the buttons (children of the parent div)
var btns = document.querySelectorAll("#calculate, button");
var operators = ["+", "-", "x", "/", "%"];
var decimalUsed = false;

// add onclick event to all the buttons and then perform operations
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function (e) {
    // get the input and button values
    var input = document.querySelctor('.screen');
    var inputValue = input.innerHTML;
    var btnValue = this.innerHTML;
    // append button values to the input string then evaluate
    //if clear key is presses erase everything
    if (btnValue === "AC") {
      input.innerHTML = " ";
      decimalUsed = false;
    }
    //if equals button is clicked then calculate and display
    else if (btnValue ===  " = ") {
      var calculation = inputValue;
      var endChar = calculation[calculation.length - 1];
      //use replace with a regular expression to change operators
      calculation = calculation.replace(/x/g, "*").replace(/\//g, "/");
      //then check end character and remove if is  a decimal or operator
      if (operators.indexOf(endChar) > -1 || endChar === ".") {
        calculation = calculation.replace(/.$/, "");
      }
      if (calculation)
        input.innerHTML = eval(calculation);
      decimalUsed = false;
    }
    // do some validation
    else if (operators.indexOf(btnValue) > -1) {
      endChar = inputValue[inputValue.length -1];
      if (inputValue !==  " " && operators.indexOf(endChar) === -1) {
        input.innerHTML += btnValue;
      }
      //replace last operator with latest btn value clicked
      // the '.' matches any character and the $ matches end of string
      if (operators.indexOf(endChar) > -1 && inputValue.length > 1) {
        input.innerHTML = inputValue.replace(/.$/, btnValue);
      }
      decimalUsed = false;
    }
    else if (btnValue === ".") {
      if (!decimalUsed) {
        input.innerHTML += btnValue;
        decimalUsed = true;
      }
    }
    else {
      input.innerHTML += btnValue;
    }
    e.preventDefault();
  };
}

/*function clearAll(){
  var currentNum = " ";
  document.calculate.display = currentNum;
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
}*/



