    /*
    var muestracompleta=[];
    var muestra= [];
    boton.addEventListener('click', resolver);
    function resolver() {
        for(var j = 0; j < document.getElementById("numeroid").value; j++) {
            for(var i = 0; i < 5; i++) {
                var ranMuestra = Math.round(Math.random())>0.5 ? 0 : 1;
                muestra[i]=ranMuestra;
            } 
            
            muestracompleta[j]=muestra;
        }
        console.log(muestracompleta);

    }
*/
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


    function TorneoRuleta() {
   /*numero filas--SE OCUPA EJECUTAR*/
   var numFilas=parseInt(document.getElementById("numeroid").value); 
        for(var j = 0; j < document.getElementById("numeroid").value; j++) {
            muestra[j]=[];
            /*llenar invalea*/
            invalea[j]=[];
            for(var i = 0; i < 5; i++) {
                var ranMuestra = Math.round(Math.random())>0.5 ? 0 : 1;
                muestra[j][i]=ranMuestra;
                /*console.log(ranMuestra);*/
                if(i<2){
                var raninvalea=Math.round((Math.random() * ((numFilas)-1))+1);
                /*console.log(raninvalea);*/
                invalea[j][i] = raninvalea;
                }
            } 
            
        }
        /*console.log(muestra);*/
        /*--------------------AMPLITUD--------------------*/ 
       for(var j = 0; j < document.getElementById("numeroid").value; j++) {

            for(var i = 0; i < 5; i++) {
               suma= suma+muestra[j][i];
               if(muestra[j][i]==1){
                   x=x+fincas[i];
               }

            }
            suma2[j]=x;
            x=0;
            /*primera regla*/
            if(suma!=3 ){
                    suma2[j]=suma2[j]+18;
                }
                suma=0;
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
           

           for(var j = 0; j < document.getElementById("numeroid").value; j++) {
            for(var i = 0; i < 5; i++) {
                if(i<1){
                    if(suma[(invalea[j][i]-1)]==suma[(invalea[j][i+1]-1)]){
                        ganador[j]=(invalea[j][i]);
                    }else if(suma[(invalea[j][i]-1)]<suma[(invalea[j][i+1]-1)]){
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
         