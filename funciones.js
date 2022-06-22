//Sintaxis
// function nombre(name){ //Función básica para imprimir nombre
//     document.write("Hola "+name); //Esto no es recomendable, lo que se debe hacer es RETURN
// }

// function suma(num1,num2) {
//     return("El resultado de la suma es: "+(num1+num2));
// }

//La anterior funcion se puede remplazar asignandola a una varable lo cual es mejor, como el siguiente ejemplo.

var suma = function(num1,num2) { //Esto es recomendable para ponerte en consciencia de que la funcion es un retorno de un valor
    return("El resultado de la suma es: "+(num1+num2));
}

var numeroMaximo = function(n1,n2){
    if(n1>=n2){
        return n1;
    }
    return n2; //Aqui retorna el valor 2 porque para que llegue a este punto es porque no retornó el valor 1
} 

document.write(suma(7,14))
document.write("<br>")
document.write(suma(10,2))
document.write("<br>")
document.write("El numero mayor es "+numeroMaximo(99,76))