
   var i, j, s, x, y, PuntodeCruzaDos;
   x=0, y=0, PuntodeCruzaDos=0;
   var poblacionseleccionadaDos = [];
   var poblacioncruzaunpuntoDos = [];
   
   /*aparte*/
   var poblacionseleccionadaDos2 = [];
   var CruzaUnPuntoDos1 = [];
   var PuntoCruzaDos = [];
   var PuntoCruzaDosDos = [];
   var PuntoCruzaDosDosDos = [];
   var u=0;
   var uu=0;
   var poblacionseleccionadaDos3 = [];
   var poblacionseleccionadaDos4 = [];
   var poblacionseleccionadaDos5 = [];
   var poblacionseleccionadaDos6 = [];


function CruzaDosPuntos (){
 
    
    
    var numFilas=parseInt(document.getElementById("numeroid").value); 
    for(var f = 0; f< numFilas; f++)
    {
     for(var c = 0; c < 5; c++)
     {
        
        /*console.log("hakiando el planeta");*/
        poblacionseleccionadaDos[f] = muestra[seleccionados[f]-1];
        poblacionseleccionadaDos2[f] = muestra[seleccionados[f]-1];
     }
    }
    
    //Select a random crossover point
    PuntodeCruzaDos = Math.round(Math.random() * 4) + 1  
    /*
    console.log("hakiando el planetaaaaa", PuntodeCruzaDos);
    console.log("otra población ",poblacioncruzaunpuntoDos);
    console.log("CruzaUnPuntoDos ",muestra);
    console.log(seleccionados);
    console.log("Población Seleccionada",poblacionseleccionadaDos);
    */
       for(var f = 0; f< numFilas; f++)
       {
             
             var si = Math.round(Math.random())>0.5 ? true : false;

             if(si==true){
             CruzaUnPuntoDos1[f]=si;
             CruzaUnPuntoDos1[f+1]=si;
             
             u=Math.round(Math.random() * 1) + 1  ;
             do{
                uu=Math.round(Math.random() * 3) + 1  ;
             }while(uu<=u)

             PuntoCruzaDos[f]=u;
             PuntoCruzaDos[f+1]=u;
             PuntoCruzaDosDos[f]=uu;
             PuntoCruzaDosDos[f+1]=uu;
             f++;
             }else{
             CruzaUnPuntoDos1[f]=si;
             CruzaUnPuntoDos1[f+1]=si;
             PuntoCruzaDos[f]=0;
             PuntoCruzaDos[f+1]=0;
             PuntoCruzaDosDos[f]=0;
             PuntoCruzaDosDos[f+1]=0;
             f++;
             }
       }  
            /*para poner los puntos*/
       for(var j = 0; j < numFilas; j++) {
        PuntoCruzaDosDosDos[j]=[];

        for(var i = 0; i < 2; i++) {
            if(i==0){
                PuntoCruzaDosDosDos[j][i]=PuntoCruzaDos[j];
            }
            if(i==1){
                PuntoCruzaDosDosDos[j][i]=PuntoCruzaDosDos[j];
            }
       

        }
    }



    /*final */
       var x=0;
       var k=1;
       do{
          
          if(CruzaUnPuntoDos1[x]==true){
             
             poblacionseleccionadaDos2[x]=poblacionseleccionadaDos[x].slice((PuntoCruzaDosDos[x]),5)
             poblacionseleccionadaDos2[k]=poblacionseleccionadaDos[k].slice((PuntoCruzaDosDos[x]),5)
          }else{
             poblacionseleccionadaDos2[x]=poblacionseleccionadaDos[x];
             poblacionseleccionadaDos2[k]=poblacionseleccionadaDos[k];
          }
          x=x+2;
          k=k+2;
          }while(x<numFilas);
          /*el del medio */
        var x=0;
       var k=1;
       do{
          
          if(CruzaUnPuntoDos1[x]==true){
             
             poblacionseleccionadaDos5[x]=poblacionseleccionadaDos[k].slice(PuntoCruzaDos[x],PuntoCruzaDosDos[x])
             poblacionseleccionadaDos5[k]=poblacionseleccionadaDos[x].slice(PuntoCruzaDos[x],PuntoCruzaDosDos[x])
          }else{
             poblacionseleccionadaDos5[x]=poblacionseleccionadaDos[x];
             poblacionseleccionadaDos5[k]=poblacionseleccionadaDos[k];
          }
          x=x+2;
          k=k+2;
          }while(x<numFilas);

           /*primera */
             for(var f = 0; f< numFilas; f++)
             {
                if(CruzaUnPuntoDos1[f]==true){
                poblacionseleccionadaDos3[f]=poblacionseleccionadaDos[f].slice(0,(PuntoCruzaDos[f]))
                }else{
                   poblacionseleccionadaDos3[f]=poblacionseleccionadaDos[f];
                }
             }

    
             
             for(var f = 0; f< numFilas; f++)
             {
                if(CruzaUnPuntoDos1[f]==true){
                    poblacionseleccionadaDos6[f]=poblacionseleccionadaDos5[f].concat(poblacionseleccionadaDos2[f]);
                poblacionseleccionadaDos4[f]=poblacionseleccionadaDos3[f].concat(poblacionseleccionadaDos6[f]);
                }else{
                   poblacionseleccionadaDos4[f]=poblacionseleccionadaDos3[f];
                }
             }
    
    }
    
    
