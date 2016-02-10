document.getElementById('one').onclick = getButton();

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
}