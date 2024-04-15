var formulario = document.querySelector("#form"); /* faltaba un punto y coma */

formulario.onsubmit = function(e) {

  e.preventDefault();/* Faltaba agregar el Default */
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad); /* En esta linea de codigo falta el ; para su correcta ejecución */

  if (nombre.length === 0) {
    n.classList.add("error");/* En esta linea de codigo falta el ; para su correcta ejecución  */
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");/* En esta linea de codigo falta el ; para su correcta ejecución */
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);/* En esta linea de codigo falta el ; para su correcta ejecución */
  }
}

var botonBorrar = document.createElement("button");/* En esta linea de codigo falta el ; para su correcta ejecución */
botonBorrar.textContent = "Eliminar invitado";/* En esta linea de codigo falta el ; para su correcta ejecución */
botonBorrar.id = "boton-borrar";/* En esta linea de codigo falta el ; para su correcta ejecución */
var corteLinea = document.createElement("br");/* En esta linea de codigo falta el ; para su correcta ejecución */
document.body.appendChild(corteLinea);/* En esta linea de codigo falta el ; para su correcta ejecución */
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";/* En esta linea de codigo falta el ; para su correcta ejecución */
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";/* En esta linea de codigo falta el ; para su correcta ejecución */
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";/* En esta linea de codigo falta el ; para su correcta ejecución */
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";/* En esta linea de codigo falta el ; para su correcta ejecución */
  }

var lista = document.getElementById("lista-de-invitados");/* En esta linea de codigo falta el ; para su correcta ejecución */

var elementoLista = document.createElement("div");/* En esta linea de codigo falta el ; para su correcta ejecución */
elementoLista.classList.add("elemento-lista");/* Aqui se cambio el added por la sintaxis correcta add */
lista.appendChild(elementoLista);/* En esta linea de codigo falta el ; para su correcta ejecución */

/* var spanNombre = document.createElement("span") 
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

Esta parte del codigo esta repetido por lo cual genera un error

*/

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");/* En esta linea de codigo falta el ; para su correcta ejecución */
var inputNombre = document.createElement("input");/* En esta linea de codigo falta el ; para su correcta ejecución */
var espacio = document.createElement("br");/* En esta linea de codigo falta el ; para su correcta ejecución */
spanNombre.textContent = descripcion + ": ";/* En esta linea de codigo falta el ; para su correcta ejecución */
inputNombre.value = valor;
elementoLista.appendChild(spanNombre);/* En esta linea de codigo falta el ; para su correcta ejecución */
elementoLista.appendChild(inputNombre);/* En esta linea de codigo falta el ; para su correcta ejecución */
elementoLista.appendChild(espacio);/* En esta linea de codigo falta el ; para su correcta ejecución */
}

crearElemento("Nombre", nombre);/* En esta linea de codigo falta el ; para su correcta ejecución */
crearElemento("Edad", edad);/* En esta linea de codigo falta el ; para su correcta ejecución */
crearElemento("Nacionalidad", nacionalidad);/* En esta linea de codigo falta el ; para su correcta ejecución */


var botonBorrar = document.createElement("button");/* En esta linea de codigo falta el ; para su correcta ejecución */
botonBorrar.textContent = "Eliminar invitado";/* En esta linea de codigo falta el ; para su correcta ejecución */
botonBorrar.id = "boton-borrar";/* En esta linea de codigo falta el ; para su correcta ejecución */
var corteLinea = document.createElement("br");/* En esta linea de codigo falta el ; para su correcta ejecución*/
elementoLista.appendChild(corteLinea);/* En esta linea de codigo falta el ; para su correcta ejecución */
elementoLista.appendChild(botonBorrar);/* En esta linea de codigo falta el ; para su correcta ejecución*/

botonBorrar.onclick = function() {
this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}