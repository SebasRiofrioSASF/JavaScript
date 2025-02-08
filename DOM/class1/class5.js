// Al usar 'innerHTML +=', estamos agregando un nuevo elemento a la lista. 
// Sin embargo, 'innerHTML' vuelve a renderizar todo el contenido existente del elemento, 
// incluido el padre (es decir, toda la lista), lo que puede resultar en un mayor consumo de recursos.
const listArea = document.getElementById(`listArea`);
listArea.innerHTML += `<li>Item 5 - js innerHTML</li>`;

// Al utilizar 'insertAdjacentHTML', se optimiza la inserción del nuevo elemento. 
// Este método únicamente renderiza el nuevo elemento que se agrega al documento 
// (en este caso, el <li>), sin necesidad de re-renderizar todo el contenido existente de la lista.
// "beforeend" inserta el nuevo <li> al final de la lista, justo antes del cierre de la etiqueta <ul> o <ol>.
listArea.insertAdjacentHTML(`beforeend`, `<li>Item 6 - js insertAdjacentHTML</li>`);
//En resumen, mejor usar insertAdjacentHTML en vez de innerHTML a la hora de agregar elementos sin afectar al resto.

//innerHTML es ideal cuando necesitas reemplazar todo el 
// contenido de un elemento con nuevo HTML,
// pero debes tener cuidado si solo deseas agregar contenido sin perder lo existente.
//insertAdjacentHTML() es una opción más flexible y
// s eficiente cuando quieres agregar contenido HTML en posiciones específicas sin reemplazar todo el contenido
