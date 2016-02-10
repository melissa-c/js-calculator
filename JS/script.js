$(document).ready({});

function clearAll(){
  document.getElementById('screen').innerHTML = "";
}

function clearLast(){
  var clear = document.getElementById('screen').length
  
}

function myFunction(id){
      document.getElementById('screen').innerHTML += id;
  }