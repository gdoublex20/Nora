    var boton = document.getElementById('btnid');
    boton.addEventListener('click', resolver);
    const fincas=[2,2.4,3,4,4.4];
    //para guardar los 1 y 0
    var muestra= [];
    //invitados aleatorios
    var invalea=[];
    //x1+x2+x3+x4+x5=3 ------18     primera regla
    //x4+x5<=1  ----------8         segunda regla
    //para sumar las fincas
    var x=0;
    //para sumar los 1
    var suma=0;
    //para sumar todo
    var suma2=[];
    //para las reglas
    var suma3=[];
    //ganadores
    var ganador=[];
    //validar si se repite
    var repetir=0;
    //validar si se repite el invitado
    var invirepetido=0;
    //promedioP1
    var promedioP1 =0;
    //promedioP2
    var promedioP2=0;
    //valor estimado
    var valestimado=[];
    //suma de los valores estimados
    var sumvalestimado=[];
    //apoyo para la suma de los valores estimados
    var y=0;
    //para sacar la r
    var r=[];
    //apoyo para el random de la r
    var precision = Math.pow(10, 2);
    var minimo = 1*precision;
    //para escoger los seleccionados
    var seleccionados=[];

    function TorneoRuleta() {
        y=0;
        //numero filas--SE OCUPA EJECUTAR
        var numFilas=parseInt(document.getElementById("numeroid").value); 
            //for-----------------------------------------para llenar la muestra y jugadores
            for(var j = 0; j < numFilas; j++) {
                muestra[j]=[];
                //----------------------------------------llenar invitado aleatorio
                invalea[j]=[];
                do{
                    repetir=0;
                    for(var i = 0; i < 5; i++) {
                        var ranMuestra = Math.round(Math.random())>0.5 ? 0 : 1;//el if para llenar la muestra
                        //---------------------------------llenar la muestra
                        muestra[j][i]=ranMuestra;
                        //para llenar los invitados que juegan el torneo 
                        if(i<2){
                            if(i==0){
                        //sacar el numero aleatorio entre los jugadores
                        var raninvalea=Math.round((Math.random() * ((numFilas)-1))+1);
                        //---------------------------------llenar la matriz de los jugadores aleatorios
                        invalea[j] [i] = raninvalea;
                            }
                            if(i==1){
                                do{
                                    invirepetido=0;
                                    var raninvalea=Math.round((Math.random() * ((numFilas)-1))+1);
                                    invalea[j][i] = raninvalea;
                                    if(invalea[j][i-1]==invalea[j][i]){
                                        invirepetido++;
                                    }
                                }while(invirepetido>0);
                            }
                        }
                    } 
                    //arreglo para hacer que no se repitan los valores de la muestra
                    var muesA= muestra[j];//variable que guarda el cromosoma anterior para comprarlos
                    for(var z = 0; z < muestra.length; z++){
                        if(JSON.stringify(muestra[z])== JSON.stringify(muesA)){
                            //en caso de que se repita da 1 y usamos el do while de nuevo
                            repetir++;
                        }
                    }
                }while(repetir>1);
            }
        promedioP1=0;
        promedioP2=0;
        //-------------------------------------------------amplitud
        for(var j = 0; j < numFilas; j++) {
            x=0;
            //para sumar lo que valen las fincas con ayuda de la muestra
            for(var i = 0; i < 5; i++) {
                //cantidad de unos
               suma= suma+muestra[j][i];
               //para sumas las fincas
               if(muestra[j][i]==1){
                   //para saber que finca sumar
                   x=x+fincas[i];
               }
            }
            //ya ----------------------------------------tengo la suma de las fincas
            suma2[j]=x;
            /*----------------------primera regla----------------------*/
            if(suma!=3 ){
                    suma2[j]=suma2[j]+18;
                }
                suma=0;
                /*para tener la suma y saber si se repiten el 4 y el 5*/
                suma3[j]=muestra[j][3]+muestra[j][4];
                /*-------------------segunda regla--------------------------*/ 
                if(suma3[j]==2){
                    suma2[j]=suma2[j]+8;
                }
                promedioP1=promedioP1+suma2[j];
        }
           promedioP2=promedioP1/numFilas;
           //----------------------------------------------para checar los ganadores en base al valor
           for(var j = 0; j < numFilas; j++) {
                for(var i = 0; i < 5; i++) {
                    /*para comparar solo los primeros 2 invitados*/
                    if(i<1){
                        if(suma[(invalea[j][i]-1)]>suma[(invalea[j][i+1]-1)]){
                            ganador[j]=(invalea[j][i+1]);
                        }else{
                            ganador[j]=(invalea[j][i]);
                        }           
                    }
                } 
                /*--------------------------sacar el valor estimado------------------------------*/
                valestimado[j]=(suma2[j]/promedioP2);
            }
            /*para sacar la suma de los valores estimados*/
            for(var j = 0; j < numFilas; j++) {
                
                y=y+valestimado[j];
                sumvalestimado[j]=y;
            }
            /*-----------------Para sacar la R-----------------------*/
            var maximo = sumvalestimado[(numFilas-1)]*precision;
            for(var j = 0; j < numFilas; j++) {
                var rr=Math.floor(Math.random()*(maximo-minimo+1) + minimo)/precision;
                r[j]=rr;
            }
            /*--------------------para sacar los seleccionados--------------------------*/
            for(var j = 0; j < numFilas; j++) {
                var o=(-1);
                do{
                    o++;
                        seleccionados[j]=(o+1);
                }while(r[j]>=sumvalestimado[o]);
            }

        }

        function resolver(){
            TorneoRuleta();
            CruzaUnPunto();
            CruzaDosPuntos();
            Mutacion();
            tabla();
        }


         