

function clicar() {
  var v = parseInt(document.getElementById("valor").value);
  var r = document.getElementById("res");
  var resutado;

  for (var c = 5; c <= 10 ; c++) {
      resutado += v+ " x " +c + " = "+ v*c + "</br>";
     
  }
 
  r.innerHTML += resutado;
    
}