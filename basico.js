//formas de imprimir
document.write("Mostrando en el documento");
console.log("Mostrando en consola");
// alert("Mostrando en ventana emergente");

//let o var para declarar variables, el let es más nuevo
let nombre = "Deivid";
// alert (nombre);
var apellido = "Matute";
// alert(apellido); //Las variables pueden almacenar tipos de datos textos, numeros, booleanos; solo usando let o var
var texto="Prueba de texto con repetición de \"comillas\""; //De esta manera puedo usar comillas dentro de las mismas
// alert(texto)

var arreglo=["Carlos","Luis","Ana","Pedro"];
document.write("<br>"+arreglo[2]);

var objeto={
    color:"Black",
    size: 12
};

document.write("<br>"+objeto)

//Null
var numero2 = 10;
var numero2 = null; //De esta manera se "borra" la variable, o sea se le asigna el valor null

//NaN
var texto2 = "Hola como estás?"
document.write(texto)*2 //Nos da error y nos muestra NaN

