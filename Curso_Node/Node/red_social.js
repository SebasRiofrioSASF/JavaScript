/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
    {
      username: "andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    },
  ];
  
  const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encata Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta mas el cafe que el tÃ©",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
  ];

const username =prompt("Cual es tu usuario?");
const password = prompt("Cual es tu contraseña?");
 function usuarioExistente(username, password){
     
     for( let i=0; i<usersDatabase.length; i++){
        if (usersDatabase[i].username === username &&
            usersDatabase[i].password === password){
                return true;
                //console.log("Es correcto");
                //break
            }
                //console.log("No Es correcto");
        } return false;
 }
 //usuarioExistente(username,password);

function signIn(username,password){
    if(usuarioExistente(username, password)){
        alert( `BIENVENIDO A TU CUENTA ${username}` );
        console.log(usersTimeline);
    }else{
        alert("Upss, usuario o contraseña incorrecto");
    }
}
signIn(username,password);

/*JavaScript Engine
Memory heap: espacio donde se guarda todas las funciones
variables y objetos de forma ramdom
Call Stack es la pila donde se llaman a  todas las funciones
que se tienene que ejecutar en el programa


*/


/*
El JavaScript Engine ejecuta el código desde la Call Stack (pila de llamadas).
Cuando una operación asíncrona se encuentra 
(como una solicitud de red), se envía al Web APIs 
del navegador o a Node APIs en Node.js.
Una vez que la operación asíncrona se completa,
su callback se envía a la Task Queue (cola de tareas).
El Event Loop verifica la Call Stack y,
si está vacía, mueve el callback de la Task Queue
 a la Call Stack para su ejecución.
 */


