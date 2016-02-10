document.getElementById('display').value; //GET

document.getElementById('display').innerHTML =//SET

function getButton(e){
var i = document.getElementById('one').value;
document.getElementById('display').innerHTML = '1';
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