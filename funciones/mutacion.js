//variables
var pobSemutacion = [];
var paramutar = [];
var puntoParaMutar = [];
var finalpobSemutacion=[];
//constante
const pobSelecMuta = poblacionseleccionada4;

function Mutacion() {
    pobSemutacion = [];
    paramutar = [];
    puntoParaMutar = [];
    var numFilas=parseInt(document.getElementById("numeroid").value); 
   for(var i=0; i<numFilas; i++)
   {
       //para el true false y el punto de muta
      var TFmutar = Math.round(Math.random()) > 0.5 ? true : false;
      var TPmutar = Math.round(Math.random() * 4);
    //asignar el true false
      paramutar[i] = TFmutar;
    //punto de muta o 0 si es false
      if(TFmutar == true)
      {
         puntoParaMutar[i] = TPmutar;
      }
      else
      {
         puntoParaMutar[i] = 0;
      }
   }
   for (var i=0; i<numFilas; i++){
        if(paramutar[i] == true)
        {
            var mutacion = 0
            var temp = []
            var x = puntoParaMutar[i];

            if (pobSelecMuta[i][x] == 1) {
                mutacion = 0;
            }else if(pobSelecMuta[i][x] == 0){
                mutacion = 1;
            }
            //console.log(pobSelecMuta[i]);
            //
            for (let j = 0; j < 5; j++) {
                if (j == x) {
                    temp.push(mutacion);
                }else{
                    temp.push(pobSelecMuta[i][j]);
                }
            }
            //push con los cambios
            pobSemutacion.push(temp);
        } else {
            //push con el original
            pobSemutacion.push(pobSelecMuta[i]);
        }
    }
    finalpobSemutacion=pobSemutacion;
    
    final();
}