var suma = function(num1,num2){ //suma los 2 valores del valor
    var numero1 = parseFloat(document.getElementById("numero1").value); //extraigo el valor del elemento de input con su ID y lo paso a Float
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado=(numero1+numero2).toFixed(2); //El .toFixed me ayuda a tomar solo 2 decimales del resultado
    return(resultado);
}