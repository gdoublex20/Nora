//variables
var pobSemutacionDosPuntos = [];
var paramutarDosPuntos = [];
var puntoParaMutarDosPunto = [];
var finalpobSemutacionDosPuntos=[];

//constante
const pobSelecMutaDosPuntos = poblacionseleccionadaDos4;

function Mutacion2() {
    pobSemutacionDosPuntos = [];
    paramutarDosPuntos = [];
    puntoParaMutarDosPunto = [];
    var numFilas=parseInt(document.getElementById("numeroid").value); 
   for(var i=0; i<numFilas; i++)
   {
       //para el true false y el punto de muta
      var TFmutar = Math.round(Math.random()) > 0.5 ? true : false;
      var TPmutar = Math.round(Math.random() * 4);
    //asignar el true false
      paramutarDosPuntos[i] = TFmutar;
    //punto de muta o 0 si es false
      if(TFmutar == true)
      {
         puntoParaMutarDosPunto[i] = TPmutar;
      }
      else
      {
         puntoParaMutarDosPunto[i] = 0;
      }
   }
   for (var i=0; i<numFilas; i++){
        if(paramutarDosPuntos[i] == true)
        {
            var mutacion = 0
            var temp = []
            var x = puntoParaMutarDosPunto[i];

            if (pobSelecMutaDosPuntos[i][x] == 1) {
                mutacion = 0;
            }else if(pobSelecMutaDosPuntos[i][x] == 0){
                mutacion = 1;
            }
            //console.log(pobSelecMutaDosPuntos[i]);
            //
            for (let j = 0; j < 5; j++) {
                if (j == x) {
                    temp.push(mutacion);
                }else{
                    temp.push(pobSelecMutaDosPuntos[i][j]);
                }
            }
            //push con los cambios
            pobSemutacionDosPuntos.push(temp);
        } else {
            //push con el original
            pobSemutacionDosPuntos.push(pobSelecMutaDosPuntos[i]);
        }
    }
    finalpobSemutacionDosPuntos=pobSemutacionDosPuntos;
    
    final2();
}

