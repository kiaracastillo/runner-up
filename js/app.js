/*
Kiara Castillo Magallanes
10/06/2022


3 - Subcampeón

  Cree una matriz con 3 "mejores tiempos"(números). 
  Escriba la matriz de modo que los tiempos en orden, de menor a mayor.
Luego, escriba la línea de código que muestra 
los tiempos de los subcampeones (segundo y tercer
      lugar) en dos divs diferentes.
*/ 


let bestTimes = [7.91, 7.93, 6.79];
 bestTimes.sort(function(a,b){
    return a - b; 
});

for(i = 0; i < bestTimes.length; i++) {
    let Tz = document.getElementById("Tz");
    let statement = bestTimes[0] + " 1st";
    Tz.innerHTML = statement;
}


for(i = 0; i < bestTimes.length; i++) {
    let Tu = document.getElementById("Tu");
    let statement = bestTimes[1] + " 2nd";
    Tu.innerHTML = statement;
}
for(i = 0; i < bestTimes.length; i++) {
    let Tt = document.getElementById("Tt");
    let statement = bestTimes[2] + " 3rd ";
    Tt.innerHTML = statement;
}