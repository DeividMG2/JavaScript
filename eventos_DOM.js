(function(){
    var saludo = function(e){
        suma = 3+6;
        document.write("Este evento es de tipo: "+e.type) //Aqui el parametro e.type tiene el tipo de evento que se esta ejecutando
        document.write("Este elemento es : "+e.target) //Nos permite saber el objetivo al que le estamos haciendo el elemento; en este caso me dice que es un object HTMLInputElement
    }

    var boton = document.getElementById('boton');
    boton.addEventListener("click",saludo);

    var funcion_enlace = function(e){
        document.write("Siu");
        e.preventDefault(); //Prevenir que el elemento me envíe al sitio web que tiene asignado
    }

    var enlace = document.getElementById("enlace");
    enlace.addEventListener('click',funcion_enlace);


    // boton.removeEventListener('click',saludo) // Así elimino un evento de un elemento

    // var input = document.getElementById('input')
    // input.addEventListener("focus",saludo); // Focus es cuando estamos dentro de un input 
    //Más de estos eventos está el blur: que es lo contrario al focus: cuando estamos dentro y SALIMOS del input
    //También está el change que es cuando se realiza un cambio dentro del input y luego hace un click afuera (se ejecuta cada vez que haya un cambio) 



}()) //De esta forma se hace lo del function que se llama solo pero que es mas seguro hacerlo siempre para ocultar las variables o algo asi