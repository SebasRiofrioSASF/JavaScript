/*
Los verbos HTTP y su función en la web
Los verbos HTTP, también conocidos
 como métodos HTTP, son palabras clave 
 estandarizadas que indican la acción que se 
 desea realizar sobre un recurso en un servidor web. 
 Estos verbos forman parte del protocolo HTTP, 
 que define las reglas de comunicación entre un cliente 
 (como un navegador web) y un servidor.

Los verbos HTTP más comunes son:

GET: Se utiliza para recuperar datos de un recurso específico. 
Es el método más utilizado y no modifica el estado del servidor.

POST: Se utiliza para enviar datos a un servidor 
para crear o actualizar un recurso.

PUT: Se utiliza para actualizar un recurso existente, 
reemplazando su contenido por completo.

PATCH: Se utiliza para actualizar un recurso existente, 
modificando solo los datos especificados.

DELETE: Se utiliza para eliminar un recurso del servidor.

Cada verbo HTTP tiene un significado específico 
y se utiliza en diferentes situaciones:

GET: Se utiliza para obtener información de un recurso, 
como una página web, una imagen o un archivo.

POST: Se utiliza para enviar datos a un servidor, 
como al enviar un formulario web o subir un archivo.

PUT: Se utiliza para actualizar un recurso existente 
en su totalidad, como al editar un artículo en un blog.

PATCH: Se utiliza para actualizar un recurso existente 
de forma parcial, como al cambiar la dirección de 
correo electrónico de un usuario.

DELETE: Se utiliza para eliminar un recurso del servidor, 
como al eliminar un archivo o una publicación de un foro.

*/

//festv siempre manda una  peticion al servidor un GET
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));