// Document Object Model (DOM): Es la estructura de nuestro sitio web conformada por elementos que se llamana nodos
// Consta de elementos como el head, el body, el title, meta, p; cada uno de ellos son nodos a los cuales podemos acceder.

// *** LO BÁSICO DEL DOM ***


// var elementos_p = document.getElementsByTagName("p"); //De esta manera traigo todas las etiquetas p y las asigno en la variable(que es un arreglo creo).
// var segundoParrafo = document.getElementById("parrafo2");
// segundoParrafo.innerHTML = "<b>Hola Mundo</b>"; //Esto cambia el contenido que hay en el parrafo con ese id por lo que enviemos como parametro.

// *** CREAR NODOS DEL DOM ***

// 1. Crear el elemento
// var elemento = document.createElement("h2");
// 2. Crear un nodo de texto
// var contenido = document.createTextNode("Este es el titular");
// 3. Añadir el nodo de texto al elemento
// elemento.appendChild(contenido);
// 4. Agregar atributos al elemento (opcional)
// elemento.setAttribute("style","color:#2fd1f3");
// 5. Agregar el elemento al documento
// document.getElementById("subtitulo").appendChild(elemento);

// *** AGREGAR LOS NODOS Y POSICIONARLOS ***

// var elemento = document.createElement("li")
//     contenido = document.createTextNode("Nuevo texto"); //Cree 2 variables con un solo var
// elemento.appendChild(contenido);
// var padre = document.getElementById("lista"), //De esta manera accedo al elemento padre en donde quiero agregar mi nodo
//     hijo = document.getElementById("segundoElemento");
// var padre = document.getElementsByTagName("li")[0].parentNode; //Esta es otra forma para hacer lo anterior. No es recomendable si por ejemplo estoy trabajando con muchas listas; ya que solo trabaja en el primer li que encuentre en el documento
    
// padre.appendChild(elemento); //De esta manera lo agrego al padre

// padre.insertBefore(elemento, hijo); //De esta forma lo agrego antes de algun elemento hijo de ese padre, en este caso lo puse de segundo.


// *** MODIFICAR, REMPLAZAR Y ELEIMIINAR NODOS DEL DOM ***


// Modificar:

// var primerElemento = document.getElementsByTagName("li")[0];
// primerElemento.innerHTML = "Primer elemento modificado"; //Asi se puede modificar el contenido del elemento, puedo acceder a etiquetas y modificarlas.
// primerElemento.textContent = primerElemento.textContent+" Modificado otra vez"; //Esta es otra forma de hacer lo anterior, es más segura a la hora de trabajar con formulario u otras cosas
    
//El innterHTML nos retorna hasta las etiqueta; EL textContent no, solo texto por eso solo puedes ejecutar etiquetas con el innerHTML


//Remplazar:

// var elemento = document.createElement("li")
//     contenido = document.createTextNode("Nuevo texto"); 
// elemento.appendChild(contenido);
// var padre = document.getElementsByTagName("li")[0].parentNode, 
//     referencia = document.getElementsByTagName("li")[1];
// padre.replaceChild(elemento, referencia); //primer parametro: elemento a agregar, segundo: elemento a eliminar


//Eliminar

// var elemento = document.createElement("li"),
//     contenido = document.createTextNode("Nuevo texto"); 
// elemento.appendChild(contenido);
// var padre = document.getElementsByTagName("li")[0].parentNode, 
//     referencia = document.getElementsByTagName("li")[1]; //De esta forma se elimina un elemento
// padre.removeChild(referencia);


// *** ACCESO A LOS ATRIBUTOS DEL DOM ***


// var elemento = document.createElement("div");
// var padre = document.getElementById("container");
// var referencia = document.getElementsByTagName("div")[0];
// elemento.setAttribute("class","rojo"); //De esta forma agrego una clase a un elemento creado en el DOM
// var elemento2 = document.createElement("div");
// var referencia2 = document.getElementsByTagName("div")[2];

// document.getElementsByTagName("div")[1].setAttribute("class","azul");


// document.getElementsByTagName("div")[0].setAttribute("background-color","white"); //Agregando este atributo a un elemento

// elemento2.setAttribute("class","rojo")
// padre.insertBefore(elemento,referencia);
// padre.insertBefore(elemento2,referencia2)


// *** MODIFICAR EL ESTILO DE LOS ELEMENTOS ***

var encabezado = document.getElementById("encabezado");
// encabezado.className="titulo tituloGrande"; //Así le añado más clases
encabezado.style.color="white";
encabezado.style.background="teal";
encabezado.style.borderColor="blue";

encabezado.className="titulo"; //Así solo dejo la clase titulo y borro la otra clase.

encabezado.className = encabezado.className.replace("tituloGrande",""); //Esta es otra forma de borrar una clase