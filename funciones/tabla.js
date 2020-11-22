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
  var codigoHTML2="";
  /*numero filas--SE OCUPA EJECUTAR*/
  var numFila=parseInt(document.getElementById("numeroid").value); 
x=0;
for (var i = 0; i < numFila; i++) {

  codigoHTML+="<tr class=tb2>";

  if(CruzaUnPunto1[i]==true){
  codigoHTML2+="<tr class=tt>";
}else{
  codigoHTML2+="<tr class=ff>";
}

    codigoHTML+="<td>"+(i+1)+"</td>"+ "<td>"+muestra[i]+"</td>" +"<td>"+suma2[i]+"</td>" +"<td>"+invalea[i]+"</td>"+"<td>"+ganador[i]+"</td>"+"<td>"+valestimado[i].toFixed(2)+"</td>"+"<td>"+sumvalestimado[i].toFixed(2)+"</td>"+"<td>"+r[i]+"</td>" +"<td>"+seleccionados[i]+"</td>" +"<!--celda-->";
    if(PuntoCruza[i]==0){
      codigoHTML2+="<td>"+(i+1)+"</td>"+"<td>"+poblacionseleccionada[i]+"</td>"+"<td >"+CruzaUnPunto1[i]+"</td>"+"<td >"+" "+"</td>"+"<td>"+poblacionseleccionada4[i]+"</td>";
    }else{
      codigoHTML2+="<td>"+(i+1)+"</td>"+"<td>"+poblacionseleccionada[i]+"</td>"+"<td >"+CruzaUnPunto1[i]+"</td>"+"<td >"+PuntoCruza[i]+"<td>"+poblacionseleccionada4[i]+"</td>";
    }
    

  codigoHTML+="</tr>";
  codigoHTML2+="</tr>";
}



document.getElementById("tbodyid").innerHTML = codigoHTML;
var codigoHTML="";
codigoHTML+="<td class=si colspan=2>"+"</td>";
codigoHTML+="<td>"+promedioP2.toFixed(2)+"</td>";
codigoHTML+="<td class=si colspan=3>"+"</td>";

document.getElementById("tablaPromedio").innerHTML = codigoHTML;


document.getElementById("tbodyid2").innerHTML = codigoHTML2;

}