
var pobfinal2=[];
var cantidadunos2;
var sumfincas1;
var sumfincas2=[];
var max2,min2;
var posmax2,posmin2;

function final2(){
    cantidadunos2=0;
    sumfincas1=0;
    g=0;
    pobfinal2=finalpobSemutacionDosPuntos;
    var numFilas=parseInt(document.getElementById("numeroid").value); 
    
    for(var f = 0; f < numFilas; f++) {
       
        for(var j = 0; j < 5; j++) {
            //cantidad de unos
            if(pobfinal2[f][j]==1){
                cantidadunos2++;
            }
            if(pobfinal2[f][j]==1){
                //para saber que finca sumar
                sumfincas1=sumfincas1+fincas[j];
            }
        }
        //primera penalizacion
    if(cantidadunos2!=3){
        sumfincas1=sumfincas1+18;
    }
    var hhh=pobfinal2[f][3]+pobfinal2[f][4];
    //segunda penalizacion
    if(hhh==2){
        sumfincas1=sumfincas1+8;
    }

    sumfincas2[f]=sumfincas1;
    
    sumfincas1=0;
    cantidadunos2=0;
    }
    //para sacar el valor min2 y el max2
    max2=0;
    min2=sumfincas2[0];
    for(var f = 0; f < numFilas; f++) {

        if(sumfincas2[f]>max2){
            max2=sumfincas2[f];
            posmax2=pobfinal2[f];

        }

        if(sumfincas2[f]<min2){
            min2=sumfincas2[f];
            posmin2=pobfinal2[f];
        }


    }
    console.log(max2);
    console.log(posmax2);
    console.log(min2);
    console.log(posmin2);

    
    
 

}