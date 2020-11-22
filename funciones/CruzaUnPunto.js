var poblacionseleccionada = [];
var poblacioncruzaunpunto = [];

/*aparte*/
var poblacionseleccionada2 = [];
var CruzaUnPunto1 = [];
var PuntoCruza = [];
var u=0;
var poblacionseleccionada3 = [];
var poblacionseleccionada4 = [];
function CruzaUnPunto () {
var numFilas=parseInt(document.getElementById("numeroid").value); 
for(var f = 0; f< numFilas; f++)
{
   //para seleccionar la poblacion
    poblacionseleccionada[f] = muestra[seleccionados[f]-1];
    poblacionseleccionada2[f] = muestra[seleccionados[f]-1];
 
}
   for(var f = 0; f< numFilas; f++)
   {
         //para ver si se cruza
      var si = Math.round(Math.random())>0.5 ? true : false;
      if(si==true){
         CruzaUnPunto1[f]=si;
         CruzaUnPunto1[f+1]=si;
            
         u=Math.round(Math.random() * 3) + 1  ;
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
   var x=0;
   var k=1;
   do{
      /*--------------------------------metodo para la cruza------------------------------------------*/
      if(CruzaUnPunto1[x]==true){
         
         poblacionseleccionada2[x]=poblacionseleccionada[k].slice((PuntoCruza[x]),5)
         poblacionseleccionada2[k]=poblacionseleccionada[x].slice((PuntoCruza[x]),5)
      }else{
         poblacionseleccionada2[x]=poblacionseleccionada[x];
         poblacionseleccionada2[k]=poblacionseleccionada[k];
      }
      x=x+2;
      k=k+2;
      }while(x<numFilas);

         for(var f = 0; f< numFilas; f++)
         {
            if(CruzaUnPunto1[f]==true){
            poblacionseleccionada3[f]=poblacionseleccionada[f].slice(0,(PuntoCruza[f]))
            }else{
               poblacionseleccionada3[f]=poblacionseleccionada[f];
            }
         }


         for(var f = 0; f< numFilas; f++)
         {
            if(CruzaUnPunto1[f]==true){
            poblacionseleccionada4[f]=poblacionseleccionada3[f].concat(poblacionseleccionada2[f]);
            }else{
               poblacionseleccionada4[f]=poblacionseleccionada3[f];
            }
         }

}

