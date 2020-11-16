
/*---------------------VARIABLES------------------------------*/
    var boton = document.getElementById('btnid');
    var fincas=[2,2.4,3,4,4.4];
    /*para guardar los 1 y 0*/
    var muestra= [];
    boton.addEventListener('click', resolver);
    /*invitados aleatorios*/
    var invalea=[];
    /*x1+x2+x3+x4+x5=3 ------18 primera regla
    x4+x5<=1  ----------8       segunda regla
    */ 
    /*para sumar las fincas*/ 
    var x=0;
    /*para sumar los 1*/ 
    var suma=0;
    /*para sumar todo*/ 
    var suma2=[];
    /*para las reglas*/ 
    var suma3=[];
    /*PARA IMPRIMIR*/
    var numColumnas=1;
    var codigoHTML="";
    /*ganadores*/ 
    var ganador=[];
    /*validar si se repite*/
    var repetir=0;

    function TorneoRuleta() {
   /*numero filas--SE OCUPA EJECUTAR*/
   var numFilas=parseInt(document.getElementById("numeroid").value); 

            /*for para llenar la muestra entra varias mas cosas*/
            for(var j = 0; j < numFilas; j++) {
                muestra[j]=[];
                /*llenar invalea*/
                invalea[j]=[];
                do{
                    repetir=0;
                    for(var i = 0; i < 5; i++) {
                        var ranMuestra = Math.round(Math.random())>0.5 ? 0 : 1;/*el if para llenar la muestra*/
                        /*llenar la muestra*/
                        muestra[j][i]=ranMuestra;
                        /*console.log(ranMuestra);*/

                        /*para llenar los invitados que juegan el torneo  */
                        if(i<2){
                            /*sacar el numero aleatorio entre los jugadores*/
                        var raninvalea=Math.round((Math.random() * ((numFilas)-1))+1);
                        /*console.log(raninvalea);*/
                        /*llenar la matriz de los jugadores aleatorios*/
                        invalea[j][i] = raninvalea;
                        }
                    } 
                    /*arreglo para hacer que no se repitan los valores de la muestra*/
                    var muesA= muestra[j];/*variable que guarda el cromosoma anterior para comprarlos*/
                    for(var z = 0; z < muestra.length; z++){
                        if(JSON.stringify(muestra[z])== JSON.stringify(muesA)){
                            /*en caso de que se repita da 1 y usamos el do while de nuevo*/
                            repetir++;
                        }
                        /* para ver si esta bien*/
                        console.log("muestra A: "+muesA+" muestra Z: "+muestra[z]+" = "+(JSON.stringify(muestra[z])== JSON.stringify(muesA)));
                    }
                }while(repetir>1);
                
            }

        
        /*console.log(muestra);*/
        /*--------------------AMPLITUD--------------------*/ 
       for(var j = 0; j < numFilas; j++) {
            /*para sumar lo que valen las fincas con ayuda de la muestra*/
            for(var i = 0; i < 5; i++) {
               suma= suma+muestra[j][i];
               if(muestra[j][i]==1){
                   x=x+fincas[i];
               }

            }
            /*ya tengo la suma de las fincas*/
            suma2[j]=x;
            x=0;
            /*primera regla*/
            if(suma!=3 ){
                    suma2[j]=suma2[j]+18;
                }
                suma=0;
                /*para tener la suma y saber si se repiten el 4 y el 5*/
                suma3[j]=muestra[j][3]+muestra[j][4];
                /*segunda regla*/ 
                if(suma3[j]==2){
                    suma2[j]=suma2[j]+8;
                }
                /*console.log(muestra[j]);*/
           }
           /*
           console.log(suma2);
           console.log(fincas);
          */
           /*console.log(invalea);*/
           
           /*para checar los ganadores en base al valor*/
           for(var j = 0; j < numFilas; j++) {
            for(var i = 0; i < 5; i++) {
                if(i<1){
                    if(suma[(invalea[j][i]-1)]==suma[(invalea[j][i+1]-1)]){
                        ganador[j]=(invalea[j][i]);
                    }else if(suma[(invalea[j][i]-1)]>suma[(invalea[j][i+1]-1)]){
                        ganador[j]=(invalea[j][i+1]);
                    }else{
                        ganador[j]=(invalea[j][i]);
                    }

                
                }
            } 
            
        }

        }

        function resolver(){
            TorneoRuleta()
            tabla();
        }
         