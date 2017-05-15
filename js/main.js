function agregaPosteo() {
var containerPosteos = document.getElementById("contenedor-posteos"); nombreFF = document.getElementById("nombre").value; contenidoFF = document.getElementById("cajaposteos").value; nuevoPost = document.createElement("div");
var contenedorNombre = document.createElement("strong"); contenedorPost = document.createElement("p"); separacion = document.createElement("hr");
var parrafCorazon = document.createElement("p"); i = document.createElement("i");

parrafCorazon.appendChild(i);
parrafCorazon.setAttribute("class","corazon");
i.setAttribute("class","fa fa-heart");
i.setAttribute("arial-hidden","true");

var nodoNombre = document.createTextNode(nombreFF +" escribió:"); 
nodoPosteo = document.createTextNode(contenidoFF);
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);

i.addEventListener("click", function(){
	i.classList.toggle('rojo');
});

nuevoPost.setAttribute("class", "posteo");
containerPosteos.appendChild(nuevoPost);

document.getElementById("nombre").value = "";
document.getElementById("cajaposteos").value = "";

}