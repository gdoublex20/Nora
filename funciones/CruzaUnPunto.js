var i, j, s, x, y, PuntodeCruza;
x=0, y=0, PuntodeCruza=0;
var poblacionseleccionada = [];
var poblacioncruzaunpunto = [];
/*aparte*/
var poblacionseleccionada2 = [];
var CruzaUnPunto1 = [];
var PuntoCruza = [];
var u=0;

function CruzaUnPunto () 
{

var numFilas=parseInt(document.getElementById("numeroid").value); 
for(var f = 0; f< numFilas; f++)
{
 for(var c = 0; c < 5; c++)
 {
    console.log("hakiando el planeta");
    poblacionseleccionada[f] = muestra[seleccionados[f]-1];
    poblacionseleccionada2[f] = muestra[seleccionados[f]-1];
 }
}

//Select a random crossover point
PuntoDeCruza = Math.round(Math.random() * 4) + 1  
console.log("hakiando el planetaaaaa", PuntoDeCruza);
console.log("otra población ",poblacioncruzaunpunto);
console.log("CruzaUnPunto ",muestra);
console.log(seleccionados);
console.log("Población Seleccionada",poblacionseleccionada);

   for(var f = 0; f< numFilas; f++)
   {
         
         var si = Math.round(Math.random())>0.5 ? true : false;
         if(si==true){
         CruzaUnPunto1[f]=si;
         CruzaUnPunto1[f+1]=si;
         
         u=Math.round(Math.random() * 4) + 1  ;
         PuntoCruza[f]=u;
         PuntoCruza[f+1]=u;
         f++;
         }else{
         CruzaUnPunto1[f]=si;
         CruzaUnPunto1[f+1]=si;
         PuntoCruza[f]=0;
         PuntoCruza[f+1]=0;
         f++;
         }

   }
/*ya les deje algunas cosas extras para que sea mas visual, ya solo falta la otra mitad, ustedes pueden :3 */

    
}

