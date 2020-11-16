/*
var boton = document.getElementById('btnid');

boton.addEventListener('click',graficarTablaGetDocument);
*/
/*
function graficarTablaGetDocument() {
    var numColumnas=3;
    var numFilas=parseInt(document.getElementById("numeroid").value);
    var codigoHTML="";
    x=0;
    for (var i = 0; i < numFilas; i++) {
      codigoHTML+="<tr>";
      x++;
      for (var j = 0; j < numColumnas; j++) {
        codigoHTML+="<td>"+x+ muestra[j]+ suma2[j]+"</td><!--celda-->";

      }
      codigoHTML+="</tr>";
    }
    document.getElementById("tbodyid").innerHTML = codigoHTML;
    
  
  }
*/

function tabla(){
  var numColumnas=1;
  var codigoHTML="";
  /*numero filas--SE OCUPA EJECUTAR*/
  var numFila=parseInt(document.getElementById("numeroid").value); 
x=0;
for (var i = 0; i < numFila; i++) {
  codigoHTML+="<tr>";
  x++;
  for (var j = 0; j < numColumnas; j++) {
    codigoHTML+="<td>"+x+"</td>"+ "<td>"+muestra[i]+"</td>" +"<td>"+suma2[i]+"</td>" +"<td>"+invalea[i]+"</td>"+"<td>"+ganador[i]+"</td>"+"<td>"+valestimado[i].toFixed(2)+"</td>"+"<!--celda-->";
  }
  codigoHTML+="</tr>";
}
document.getElementById("tbodyid").innerHTML = codigoHTML;
var codigoHTML="";
codigoHTML+="<td class=si colspan=2>"+"</td>";
codigoHTML+="<td>"+promedioP2.toFixed(2)+"</td>";
codigoHTML+="<td class=si colspan=2>"+"</td>";
codigoHTML+="<td>"+"suma del valor estimado"+"</td>";
document.getElementById("tablaPromedio").innerHTML = codigoHTML;
}