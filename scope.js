// Determina la accesibilidad de nuestro codigo, o sea global y local
// Global: Podemos acceder desde cualquier parte del codigo
// Local: Se crean dentro de una función y solo se pueden acceder desde ahí dentro o funciones anidadas.

(function(){ //Todo lo que está dentro va a estar protegido, programas de terceros no podrán acceder a mi codigo para modificar o acceder a mis variables. Pero lo que este dentro si puede acceder a lo que este fuera. Hacer esto es MUY RECOMENDABLE.
    var VariableGlobal = "Esta es Global";
    var myFunction = function(){
        var VariableLocal = "Esta es Local"; //Solo sirve para dentro de la funcion, sin la palabra "var" se convierte en global. Esto no es recomendable porque pueden haber problemas y haber bugs. Igual seguro no es una buena practica 
        var functionLocal = function(){
            alert(VariableLocal); //Si tiene acceso a la variable local ya que se pueden acceder a las variables de afuera, pero de afuera no puede acceder a adentro.
        }
        functionLocal();
    }
    myFunction()
})
