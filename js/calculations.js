window.onload = getCalculations(); // this makes sure the html page is fully loaded/parsed first before the js script gets parsed

//  do not think we need this/kinda of iterates the onclick function on line 18ish
/*  var btnArray = document.getElementById("calculate").getElementsByTagName("button");
  for (var i = 0; i < btnArray.length; i++) {
    (btnArray[i].id).addEventListener("click", getCalculations, false);
  }
}*/
// get all the buttons (children of the parent div) that we need to operate/calculate with
function getCalculations () {
  var btns = document.querySelectorAll("#calculator, button");
  var operators = ["+", "-", "x", "/","%"]; // need modulus % OR is it percent?
  var decimalUsed = false;

// iterate through buttons
// add onclick event to all the buttons and then perform operations
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (e) {
    // get the input and button values
      var input = document.querySelector('.screen');
      var inputValue = input.innerHTML;
      var btnValue = this.innerHTML;
      // append button values to the input string then evaluate
      // if clear all button  is clicked  then clear/erase everything on the screen
      if (btnValue === "AC") { // could put the CE (clear entry) if statment after this if
        input.innerHTML = " ";
        decimalUsed = false;
        if (btnValue === "CE"){
        // get the last value on the screen whether numeral, opeartor
          var clearLast = input.length - 1;
          input.innerHTML = clearLast;
          decimalUsed = false;
        }
      } else if (btnValue === "=") {    //  if equals button is clicked then calculate and display
        var calculation = inputValue;
        var endChar = calculation[calculation.length - 1];
        // use replace with a regular expression to change operators
        calculation = calculation.replace(/x/g, "*").replace(/\//g, "/"); //probably dont need the '\//' but to be sure
        // then check end character and remove if it is a decimal or operator
        if (operators.indexOf(endChar) > -1 || endChar === ".") {
          calculation = calculation.replace(/.$/, " ");
        }
        if (calculation) {
          input.innerHTML = eval(calculation);  // this (eval)is dangerous (apperently) so need alternative method
        }
        decimalUsed = false;
      } else if (operators.indexOf(btnValue) > -1) {   // do some validation
        endChar = inputValue[inputValue.length - 1];
        if (inputValue !==  " " && operators.indexOf(endChar) === -1) {
          input.innerHTML += btnValue;
        }
      // using regular expressions is cool line 32, 35 and 50
      // replace last operator with latest btn value clicked
      // the '.' matches any character and the $ matches end of string
        if (operators.indexOf(endChar) > -1 && inputValue.length > 1) {
          input.innerHTML = inputValue.replace(/.$/, btnValue);
        }
        decimalUsed = false;
      } else if (btnValue === ".") {
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



