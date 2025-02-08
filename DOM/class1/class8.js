cloneNode()
//Clona el nodo seleccionado. 
// Si se pasa ‘true’ como parámetro, realiza una clonación profunda, 
// copiando todos los elementos y nodos hijos del nodo original. 
// Si se usa ‘false’, solo se clona el nodo sin sus hijos.


// Seleccionamos el área de contenido y el primer <p> dentro de él
const contentArea = document.querySelector(`#contentArea`);//lllama el id del area
const originalP = contentArea.querySelector(`p`);// el parrafo

// Clonamos el párrafo original con cloneNode(true) para copiar el nodo y todos sus hijos
// El parámetro 'true' significa que se clonan también los nodos hijos (profundidad)
const clonedP = originalP.cloneNode(true);

// Agregamos el párrafo clonado al final del área de contenido
contentArea.append(clonedP);

// Modificamos el texto del párrafo clonado
clonedP.textContent = `podemos reemplazar el texto`;

// Seleccionamos la lista y el tercer <li> dentro de ella (índice 2)
const listArea = document.getElementById(`listArea`);
const itemToReplace = listArea.children[2];  // Tercer <li> en la lista

// Reemplazamos el tercer <li> con el párrafo clonado
// 'replaceWith()' elimina el nodo seleccionado (itemToReplace) y lo sustituye por el nuevo nodo (clonedP)
// Este método es útil para cambiar un elemento existente por otro sin necesidad de buscar su padre
itemToReplace.replaceWith(clonedP);  // El <li> es reemplazado por el nuevo <p>

