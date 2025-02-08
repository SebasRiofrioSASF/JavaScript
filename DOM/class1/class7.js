//remove(): Elimina directamente el elemento seleccionado.
//removeChild(): Elimina un hijo específico de un elemento, 
// útil con propiedades como firstElementChild, lastElementChild, childNodes[index], o querySelector.

// Seleccionamos el primer <li> con querySelector y lo mostramos en consola (ITEM 1)
const firstItem = document.querySelector(`li`);
console.log(firstItem);  // Muestra: <li>Item 1</li>

// Eliminamos el primer <li> directamente usando el método remove()
firstItem.remove();  // Elimina el <li> que se seleccionó

// Seleccionamos la lista <ul> y eliminamos su primer hijo usando removeChild
const list = document.querySelector(`ul`);
list.removeChild(list.firstElementChild);  // Elimina el primer <li> dentro de la <ul>

// - firstElementChild: Selecciona y elimina el primer hijo de tipo elemento
// - lastElementChild: Selecciona y elimina el último hijo de tipo elemento
// - childNodes[index]: Selecciona y elimina un hijo específico por su índice
// - querySelector: También se puede usar para seleccionar un hijo específico y eliminarlo
/*
El método removeChild() se utiliza para eliminar un nodo hijo de un elemento padre en el DOM. La sintaxis es:


parentNode.removeChild(childNode);
Ejemplo:

Supón que tienes una lista en HTML:


<ul id="myList">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
Para eliminar el segundo elemento, primero seleccionas el padre y luego el hijo a eliminar:


const list = document.getElementById("myList");
const itemToRemove = list.children[1]; // Selecciona el segundo elemento
list.removeChild(itemToRemove); // Elimina el elemento
Después de ejecutar el código, la lista tendrá solo "Elemento 1" y "Elemento 3".
*/