/*CLOUSURE: Funcion que tiene acceso a variables de un ambito externo
, incluso despues de que sesa funcion haya terminado de ejecutarse
ambito lexico: cada vez que se declara una funcion,
crea su propio ambito lexico, y puede acceder a las variables 
 dentro de ese ambito y a las avariables en ambitos superiores
*/

function outerFunction(){
    let outerVariable= "i am fron outer function"
    function innerFunction(){
        console.log(outerVariable)
    }return innerFunction
}
const clouserExample = outerFunction()
clouserExample()

function createCounter(){
    let count=0
    return function(){
        count++
        console.log(count)
    }
}
const counterA= createCounter()
counterA()
counterA()

const counterB= createCounter()
counterB()
counterB()

function outer(){
    let message= " hello"
    function inner(name){
        console.log( message + name)

    }
    return inner
}
const clousereA = outer()
const clousereB = outer()
clousereA("Alice")
clousereB("Bon")