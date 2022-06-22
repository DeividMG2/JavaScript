//Ciclo for:  Estructura que nos permite repetir el mismo codigo las veces que se quiera

// for(i=0;i<10;i++){
//     document.write(i+1+" - Holaaaa<br><br>")
// }

// dias=["Lunes","Martes","Miercoles","Jueves","Viernes"]
// for (j=0; j<dias.length;j++){
//     document.write(dias[j]+" * - * ")
// }


// Ciclo While: Repite codigo hasta que la condición se deje de cumplir

var i = 1
while(i<10){
    document.write(i+". Viva la Liga<br><br>");
    i++;
}
condicion=true
do{
    document.write("Siu")
    i++
    if(i==20){
        break
    }
//Siempre ejecuta al menos una vez, la diferencia es que en el while puede que nunca se ejecute pero aqui siempre al menos una vez
}while(condicion)
