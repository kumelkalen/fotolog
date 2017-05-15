function agregaPosteo() {
var containerPosteos = document.getElementById("contenedor-posteos"); nombreFF = document.getElementById("nombre").value; contenidoFF = document.getElementById("cajaposteos").value; nuevoPost = document.createElement("div");
var contenedorNombre = document.createElement("strong") ; contenedorPost = document.createElement("p"); separacion = document.createElement("hr");
var parrafCorazon = document.createElement("p"); i = document.createElement("i");

parrafCorazon.appendChild(i);
parrafCorazon.setAtribute("clas","corazon");
i.setAtribute("class","fa fa-heart");
i.setAtribute("arial-hidden","true");

var nodoNombre = document.createTextNode(nombreFF +" escribió:"); nodoPosteo = document.createTextNode(contenidoFF);
}