function CruzaUnPunto () 
{
var i, j, s, x, y, PuntodeCruza;
x=0, y=0, PuntodeCruza=0;
var poblacionseleccionada = [];
var poblacioncruzaunpunto = [];
var numFilas=parseInt(document.getElementById("numeroid").value); 
for(var f = 0; f< numFilas; f++)
{
 for(var c = 0; c < 5; c++)
 {
    console.log("hakiando el planeta");
    poblacionseleccionada[f] = muestra[seleccionados[f]-1]
 }
}

//Select a random crossover point
PuntoDeCruza = Math.round(Math.random() * 4) + 1  
console.log("hakiando el planetaaaaa", PuntoDeCruza);

console.log("otra población ",poblacioncruzaunpunto);
console.log("CruzaUnPunto ",muestra);
console.log(seleccionados);
console.log("Población Seleccionada",poblacionseleccionada);
}

