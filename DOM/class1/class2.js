/* La navegación entre nodos recibe el nombre de 
traversing  DOM, y consiste en recorrer los nodos 
basandonos en la jerárquia de padre, hijos, hermanos. */

//* Navegación del elemento padre a hijo

const menu = document.querySelector('.menu')
console.log(menu.children)
/*
 children → nos retorna un HTMLCollection con los nodos hijos del nodo padre.
*/

//? Acceder al primer nodo → firstElementChild
console.log(menu.firstElementChild.innerHTML)

//? Acceder a un node específico → []
console.log(menu.children[1].innerHTML);

//? Acceder al último elemento → lastElementChild
console.log(menu.lastElementChild.innerHTML);

//* Navegación de un nodo hijo a padre
const link = document.querySelector('.link')
/*parentElement → nos retorna su nodo padre */
console.log(link.parentElement)
// Para conocer el abuelo de ese nodo podemos usar nuevamente parentElement y asi sucesivamente .
console.log(link.parentElement.parentElement)

//* Navegación entre nodos hermanos
/*
previousSiblind → Hermano anterior
nextSibling → Hermano siguiente
*/
console.log(link)
console.log(link.previousElementSibling.textContent)
console.log(link.nextElementSibling.textContent)
/*Un nodo puede ser de varios tipos, como elementos,
 texto, comentarios, etc. Esto significa que cuando
  obtienes un nodo, puede ser cualquier cosa dentro 
  del documento HTML, no solo elementos visibles.

Por otro lado, un elemento es un tipo específico 
de nodo que representa una etiqueta HTML (como <div>, <li>, <span>, etc.). 
Los elementos son los bloques de construcción 
del contenido visible en una página web. */

//LISTA DE METODOS PARA NAVEGAR EL DOM:

// children; // live HTMLCollection 
// // childNodes; // live NodeList 
// // firstChild; // live NodeList 
// // firstElementChild; // non-live HTMLCollection 
// // lastChild; // live NodeList 
// // lastElementChild; // non-live HTMLCollection 
// // previousSibling; // live NodeList 
// // previousElementSibling; // non-live HTMLCollection 
// // nextSibling; // live NodeList 
// // nextElementSibling; // non-live HTMLCollection





