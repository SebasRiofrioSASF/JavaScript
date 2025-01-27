const newGreeting= (name) =>{
    return`Hi, ${name}`
}
//Arrow Funtio- implcit return
const newGreetingImplict = name =>`Hi, ${name}`
const newGreetingImplictwirhTwoParameters = (name, lastName) =>`Hi i am, ${name}, ${lastName}`
// lexical building
const functionalCharacter={
    name:'Uncle Ben',
    MessageWithTraditionalFunction: function(message){
        console.log(`${this.name} says: ${message}`)
    },
    
    MessageWithArrowFunction: (message)=>{
        console.log(`${this.name} says: ${message}`)
    }
}
functionalCharacter.MessageWithTraditionalFunction('With great power means great honor')
functionalCharacter.MessageWithArrowFunction('For the King, For the King')
/*Las Arrow Function son útiles porque permiten:

Escribir métodos más concisos
Simplificar una línea de código para que sea más legible
Aprovechar las características de retorno implícito y el no uso de paréntesis
Olvidarse de manejar el contexto this
Definir de manera compacta una función convencional
Eliminar las llaves y la palabra return si la función tiene solamente una sentencia que devuelve un valor
Reducir el código aún más utilizando parámetros */


/*La interpolación en JavaScript se refiere a la inserción de valores dentro de una cadena de texto,
 y puedes hacerlo de dos maneras: usando concatenación o utilizando 
 template literals (literales de plantillas).

Aquí te muestro ambos métodos:

1. Concatenación de cadenas
En este enfoque, utilizas el operador + para combinar cadenas y valores.

javascript

let nombre = "Juan";
let edad = 25;
let mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años.";
console.log(mensaje);
2. Template literals (plantillas literales)
La forma moderna y más conveniente de hacerlo es utilizando template literals, 
que se encierran con backticks (`) y permiten insertar variables dentro de las cadenas utilizando ${variable}.

javascript

let nombre = "Juan";
let edad = 25;
let mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje);
La segunda opción es más legible y limpia, especialmente cuando tienes que 
insertar muchas variables o expresiones dentro de una cadena. */

/*El operador ternario es una forma corta de escribir una declaración if-else.
 Se usa para evaluar una condición y, dependiendo de si es verdadera o falsa, 
 retorna un valor u otro. Tiene la siguiente sintaxis:

javascript

condición ? valorSiVerdadero : valorSiFalso;
Ejemplo:
javascript

let edad = 18;
let resultado = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(resultado);
En este ejemplo, la condición edad >= 18 es evaluada. 
Si es true, el operador ternario retorna "Eres mayor de edad", 
y si es false, retorna "Eres menor de edad".

Explicación:
Condición: (edad >= 18)
Valor si la condición es verdadera: "Eres mayor de edad"
Valor si la condición es falsa: "Eres menor de edad" */

/*
En JavaScript, los contextos de ejecución y la scope chain son conceptos 
fundamentales que permiten comprender cómo se ejecuta 
el código y cómo se accede a las variables.

Contexto de ejecución:

Un contexto de ejecución es un entorno en el que se ejecuta el código JavaScript. 
Contiene información sobre el código que se está ejecutando, 
como las variables declaradas, las funciones y el objeto global. 
Cada vez que se invoca una función, se crea un nuevo contexto de ejecución.

Scope Chain:

La scope chain es el mecanismo que utiliza JavaScript para determinar 
qué variables están disponibles para una instrucción en particular. 
Se busca en una secuencia de contextos de ejecución hasta encontrar 
la variable con el nombre correspondiente.

Pasos para la búsqueda en la scope chain:

Objeto de activación actual: Se busca la variable en el objeto de activación
 del contexto de ejecución actual.
Entorno externo: Si no se encuentra la variable en el objeto de activación actual, 
se busca en el entorno externo, es decir, en el contexto de ejecución padre.
Repetición: El proceso se repite hasta encontrar la variable o llegar al objeto global.
Variable no definida: Si no se encuentra la variable en ningún contexto de ejecución,
 se genera un error de referencia. (Que eso fue justo lo que sucedio en el ejemplo final de la clase)
Conclusiones:

Los contextos de ejecución y la scope chain son conceptos esenciales
para comprender el funcionamiento del código JavaScript.
Los contextos de ejecución definen el entorno en el que se ejecuta el código,
mientras que la scope chain determina qué variables están disponibles para una instrucción en particular.
La comprensión de estos conceptos es fundamental
para escribir código JavaScript claro, organizado y libre de errores.

*/