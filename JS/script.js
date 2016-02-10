$(document).ready({});

function clearAll(){
  document.getElementById('screen').innerHTML = "";
}

function clearLast(){
  var clear = document.getElementById('screen').value;
  clear = clear.substring(0, clear.length-1);
  document.getElementById('screen').innerHTML = clear;

}

function myFunction(id){
      document.getElementById('screen').innerHTML += id;
  }