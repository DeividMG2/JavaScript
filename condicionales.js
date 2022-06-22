var nombre = "Deivid", edad = "19"; //Forma de iniciar mas de una variable en una linea

if (nombre == "Deivid"){
    document.write("Bienvenido Deivid");
}else if(nombre == "Arturo"){
    document.write("Bienvenido Arturo");
}else{
    document.write("Bienvenido Anónimo")
}

if(edad>=18 && nombre=="Arturo" || edad==17){ //Asi puedo usar el AND y el OR
    document.write("<br><br><h2> Puedes pasar "+nombre+"</h2>")
}else{
    document.write("<br><br><h2 style='color:teal'> Lo siento, no puedes pasar</h2>")
}

// < menor que
// > mayor que
// == igual que
// != diferente que
// <= menor o igual que
// >= mayor o igual que

if(edad===19){ //Comprueba la condicion y que sean del mismo tipo de valor
    document.write("La edad si es 19 y somos del mismo tipo de datos")
}else if (edad == 19){
    document.write("La edad si es 19 pero no somos del mismo tipo de datos")
}else{
    document.write("La edad no es de mi tipo de dato")
}