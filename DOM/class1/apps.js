/*window es una objeto padre q da acceso al document(DOM) 
el DOM es una vez que el html sea parciado, da axxeso atravez de javacript
va realizar cambios en la manipulacion de los nodos*/
//Trae un solo elemento
document.getElementById('app-id')
document.querySelector('#app-title')
document.querySelector('p')

//Trae todos los elementos
document.getElementsByClassName('menu-items')//crea una especia de coleccion con todos los elemntos q tenga el mismo nombre
document.getElementsByTagName('p')
document.querySelectorAll('.menu-items')
/* 
getElementById
Nos permite seleccionar un elemento del documento 
por medio del valor del atributo id que se le haya asignado.


const titulo = document.getElementById('titulo');
console.log (titulo.innerText); // Se devuelve el texto de la etiqueta inner = interno 
console.log (titulo.tagName); // Devuelve la etiqueta 
getElementsByClassName
representa la lista de nombres de clase a buscar


// -------- Obtener elemento en base a su clase ------------
const toppings = document.getElementsByClassName('topping');
console.log(toppings);
console.log(toppings[3]); // Acceder a un elemento especifico
getElementsByTagName
Busca elementos con la etiqueta dada y devuelve una colección con ellos.


// -------- Obtener elemento que tenga una etiqueta en especifico ------------
let misToppings = document.getElementsByTagName('li');
console.log(misToppings);
queryselector
querySelector te permite seleccionar elementos del DOM mediante a queries,
 es decir, si usas . seleccionas por clase, si usas # por id, si usas [] por nombre de atributos, y así sucesivamente


// -------- Seleccionar un elemento en especifico  ------------
let cebolla = document.querySelector('#cebolla');
conso
*/
