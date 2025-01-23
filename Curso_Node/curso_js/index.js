/*
Operadores de comparacion

== comparar si algo es gual a otra cosa
=== Igualdad en el valor y en el tipo de dato
!= es diferente, no es
!== este valor es diferente al otro, en el valor y en el datos
>
<
>=
<=
const a= 10;
const b= 20;
const c ='10';
a==b;
*/
/*
Operadores logicos

Operador lógico AND (&&): Este operador lógico compara dos expresiones. 
Se debe de tener ambas expresiones verdaderas para que el resultado sea verdadero, 
pero si una o ambas expresiones son falsas, la sentencia completa se devolverá como falsa.

Operador lógico OR (||): Este devuelve como true si cualquiera de las dos expresiones son verdaderas y false 
cuando ambas expresiones son falsas. 
Ambas expresiones pueden ser verdaderas, 
pero solo se necesita una para que el resultado sea verdadero.

Operador lógico NOT (!): El operador lógico NOT no realiza ninguna comparación 
como lo hacen los operadores AND y OR.
Este se utiliza con un símbolo "!" (signo de exclamación) para representar un operador NOT o negación.
*/
/*
if(let == algo){
    codigo
} else if{
    codigo

} else{

}
*/

let nombre='Diego'
if(nombre === 'Diego'){
    console.log('Hola Diego')
} else if(nombre === 'Nico'){
    console.log('Hola Nico')
}else{
    console.log("Nombre no encontrado")
}
const numeroScreto= Math.floor(Math.random()*10 + 1)
const numeroJugador= parseInt('s')
console.log(`Este es el numero con el q juegas ${numeroJugador}`)


if (numeroJugador=== numeroScreto){
    console.log('Felicidades Acertaste, Ese es el numero')
} else if(numeroJugador< numeroScreto){
    console.log('El numero secreto es menor al q escogiste')
}else if(numeroJugador> numeroScreto){
    console.log('El numero secreto es mayor al q escogiste')

}
else if(numeroJugador=== numeroScreto){
    console.log('Ese noes un numero')

}
 else{
    console.log('El numero secreto no existe')
}