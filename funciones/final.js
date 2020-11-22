
var pobfinal=[];
var cantidadunos;
var sumafincas1;
var sumafincas2=[];
var max,min;
var posmax,posmin;

function final(){
    cantidadunos=0;
    sumafincas1=0;
    g=0;
    pobfinal=finalpobSemutacion;
    var numFilas=parseInt(document.getElementById("numeroid").value); 
    
    for(var f = 0; f < numFilas; f++) {
       
        for(var j = 0; j < 5; j++) {
            //cantidad de unos
            if(pobfinal[f][j]==1){
                cantidadunos++;
            }
            if(pobfinal[f][j]==1){
                //para saber que finca sumar
                sumafincas1=sumafincas1+fincas[j];
            }
        }
        //primera penalizacion
    if(cantidadunos!=3){
        sumafincas1=sumafincas1+18;
    }
    var hhh=pobfinal[f][3]+pobfinal[f][4];
    //segunda penalizacion
    if(hhh==2){
        sumafincas1=sumafincas1+8;
    }

    sumafincas2[f]=sumafincas1;
    
    sumafincas1=0;
    cantidadunos=0;
    }
    //para sacar el valor min y el max
    max=0;
    min=sumafincas2[0];
    for(var f = 0; f < numFilas; f++) {

        if(sumafincas2[f]>max){
            max=sumafincas2[f];
            posmax=pobfinal[f];

        }

        if(sumafincas2[f]<min){
            min=sumafincas2[f];
            posmin=pobfinal[f];
        }


    }
    console.log(max);
    console.log(posmax);
    console.log(min);
    console.log(posmin);

    
    
 

}