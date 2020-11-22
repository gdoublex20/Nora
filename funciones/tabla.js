

function tabla(){
  var numColumnas=1;
  var codigoHTML="";
  var codigoHTML2="";
  var codigoHTML3="";
  var codigoHTML4="";
  var codigoHTML5="";
  
  /*numero filas--SE OCUPA EJECUTAR*/
  var numFila=parseInt(document.getElementById("numeroid").value); 
x=0;

for (var i = 0; i < numFila; i++) {

  codigoHTML+="<tr class=tb2>";
  /*cruza un punto*/
  if(CruzaUnPunto1[i]==true){
  codigoHTML2+="<tr class=tt>";
}else{
  codigoHTML2+="<tr class=ff>";
}
//cruza dos puntos
if(CruzaUnPuntoDos1[i]==true){
  codigoHTML3+="<tr class=tt>";
}else{
  codigoHTML3+="<tr class=ff>";
}
if(paramutar[i]){
  codigoHTML4+="<tr class=tt>";
}else{
  codigoHTML4+="<tr class=ff>";
}


    //torneo ruleta 
    codigoHTML+="<td>"+(i+1)+"</td>"+ "<td>"+muestra[i]+"</td>" +"<td>"+suma2[i]+"</td>" +"<td>"+invalea[i]+"</td>"+"<td>"+ganador[i]+"</td>"+"<td>"+valestimado[i].toFixed(2)+"</td>"+"<td>"+sumvalestimado[i].toFixed(2)+"</td>"+"<td>"+r[i]+"</td>" +"<td>"+seleccionados[i]+"</td>" +"<!--celda-->";
    //cruza un punto
    if(PuntoCruza[i]==0){
      codigoHTML2+="<td>"+(i+1)+"</td>"+"<td>"+poblacionseleccionada[i]+"</td>"+"<td >"+CruzaUnPunto1[i]+"</td>"+"<td >"+" "+"</td>"+"<td>"+poblacionseleccionada4[i]+"</td>";
    }else{
      codigoHTML2+="<td>"+(i+1)+"</td>"+"<td>"+poblacionseleccionada[i]+"</td>"+"<td >"+CruzaUnPunto1[i]+"</td>"+"<td >"+PuntoCruza[i]+"<td>"+poblacionseleccionada4[i]+"</td>";
    }
    //cruza dos puntos
    if(PuntoCruzaDos[i]==0){
      codigoHTML3+="<td>"+(i+1)+"</td>"+"<td>"+poblacionseleccionadaDos[i]+"</td>"+"<td >"+CruzaUnPuntoDos1[i]+"</td>"+"<td >"+" "+"</td>"+"<td>"+poblacionseleccionadaDos4[i]+"</td>";
    }else{
      codigoHTML3+="<td>"+(i+1)+"</td>"+"<td>"+poblacionseleccionadaDos[i]+"</td>"+"<td >"+CruzaUnPuntoDos1[i]+"</td>"+"<td >"+PuntoCruzaDosDosDos[i]+"<td>"+poblacionseleccionadaDos4[i]+"</td>";
    }
    //mutacion
    if(paramutar[i]){
      codigoHTML4+=
      "<td>"+(i+1)+"</td>"+
      "<td>"+pobSelecMuta[i]+"</td>"+
      "<td>"+paramutar[i]+"</td>"+
      "<td>"+(puntoParaMutar[i]+1)+"</td>"+
      "<td>"+pobSemutacion[i]+"</td>";
    }else{
      codigoHTML4+="<td>"+(i+1)+"</td>"+
      "<td>"+pobSelecMuta[i]+"</td>"+
      "<td>"+paramutar[i]+"</td>"+
      "<td>"+" "+"</td>"+
      "<td>"+pobSemutacion[i]+"</td>";
    }
    
    

  codigoHTML+="</tr>";
  codigoHTML2+="</tr>";
  codigoHTML3+="</tr>";
  codigoHTML4+="</tr>";
}


  codigoHTML5+="<tr class=tb2>";
  codigoHTML5+="<td>"+"El mejor caso"+"</td>"+"<td>"+posmin+"</td>"+"<td>"+min+"</td>";
  codigoHTML5+="</tr>";
  codigoHTML5+="<tr class=tb2>";
  codigoHTML5+="<td>"+"El peor caso"+"</td>"+"<td>"+posmax+"</td>"+"<td>"+max+"</td>";
  
  codigoHTML5+="</tr>";




document.getElementById("tbodyid").innerHTML = codigoHTML;
var codigoHTML="";
codigoHTML+="<td class=si colspan=2>"+"</td>";
codigoHTML+="<td>"+promedioP2.toFixed(2)+"</td>";
codigoHTML+="<td class=si colspan=3>"+"</td>";
document.getElementById("tablaPromedio").innerHTML = codigoHTML;
document.getElementById("tbodyid2").innerHTML = codigoHTML2;
document.getElementById("tbodyid3").innerHTML = codigoHTML3;
document.getElementById("tbodyid4").innerHTML = codigoHTML4;
document.getElementById("tbodyid5").innerHTML = codigoHTML5;

}