/*Estos arrays son conjuntos de elementos
en los cuales se pueden guardar 
en una variable */
//Como crear un array
//1. new Array or Array()

const fruits= Array ('Apple', ' banana', 'orange')
console.log(fruits)
const justOneNumber = Array(12)
console.log(justOneNumber)

const numbers = Array(1,2,3,4,5)
console.log(numbers)
 //2. Array sintaxis literal
 const oneNumber= [4]
 console.log(oneNumber)

 const emptyArray= [] //Inicializar un programa, para luego rellenarlo
 console.log(emptyArray)
 const sports= ['soccer', 'tennis', 'rugby', 'basketball']
 console.log(sports)

 const recipeIngredents= [
    'Flour', true, 2, { ingredent: 'Milk', quantify:'1cup'},
    false
 ]
 console.log(recipeIngredents)
//accediendo a elemnetos del arrays

const firstFruit= fruits[0]
console.log(firstFruit)

// tamaño de un array
const numberFruts= fruits.length
console.log(numberFruts)

/*Métodos mutables: copyWithin, fill, pop, push, 
reverse, shift, sort, splice, unshift.

Métodos no mutables: slice, concat, 
toReversed, slice, toSorted, toSoliced. */

//Mutabilidad
fruits.push('watermelon')//agrego un nuevo valor o varios de un array y devuelve la nueva longitud del array
console.log(fruits)



//Inmutabilidad
const newFruits = fruits.concat(['grape', 'kiwi'])//juntar arrays
console.log(fruits)
console.log(newFruits)


// Cheackear un arrays con un arrays
const isArray= Array.isArray(fruits) //verifica si es un array la variable
console.log(isArray)

// practica de ejercicios suma de todods los arrays
const numberArray = [1,2,3,4,5]
let sum = 0
for(let i= 0; i<numberArray.length;i++ ){
    sum += numberArray[i]
}
console.log(sum)

//push
const countries=['Canada', 'EEUU','Mexico','Ecuador']
const newCountries= countries.push('Germany', 'New Zeland')
console.log(countries)
console.log(newCountries)
//pop
const removeCountry= countries.pop()//remueve el ultimo elemento
console.log(countries)
console.log(removeCountry)


//map() Permite aplicar una funcion a cada elemento de un array
//  y construir un nuevo array con los resultados

const numbers1=[1,2,3,4,5]
const squaeredNumbers= numbers1.map(num=> num * num )
console.log(numbers1)
console.log(squaeredNumbers)

//forEach() Iterasobre cada elemento de un array
// y ejecuta una funcion proporcionada para cada elmento,
//  sin crear un nuevo array

const colors=['red', 'blue', 'green']
const iteratedColors = colors.forEach(color => console.log(color))// recorrio todo el array devuelviendo el valor de los elementos
console.log(colors)
console.log(iteratedColors)


//Ejecicio Fahrenheit a Celsius conversion
const tempInFarenheint =[32,68,95,104,212]
const tempInCelsius =tempInFarenheint.map(Fahrenheit => (5/9)* (Fahrenheit-32))
console.log('Temperaturas en Farenheit:' , tempInFarenheint)
console.log('Temperaturas en Celsius:',tempInCelsius )

//Suma De elementos de un Array
const newNumbers =[1,2,3,4,5]
let sum1=0
newNumbers.forEach(number =>{
    sum1= sum+ number //sum+=number
})
console.log( 'Array de number',newNumbers)
console.log( 'Suma de number',sum1)

// filter() Crea un nuevo array con elementos
//  que cumplen una condicion dada por una funcion

const number2=[1,2,3,4,5,6,7,8,9,10]
const evenNumbers = number2.filter(number => number % 2 ===0)
console.log( 'Array',number2)
console.log( 'Filter Array',evenNumbers)

//reduce() Ejecuta una funcion reductora
// sobre cada elemento de un array, 
// devolviendo como resultado un unico valor
//reduce() case 1

const numberReduce= [1,2,3,4,5]
const sum2= numberReduce.reduce((accumulator, currentValue)=>accumulator + currentValue, 0)
console.log( numberReduce)
console.log( sum2)

//reduce() case 1
const words=['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']
const wordFrecuency = words.reduce((accumulator, currentValue)=>{
    if(accumulator[currentValue]){
        accumulator[currentValue]++

    }else{
        accumulator[currentValue]=1
    }
    return accumulator
})
console.log(wordFrecuency)


//find()Devuelve el primer elemento que cumpla
//  la funcion del prueba  proporcionada

const multiple5=[5,10,15,20]
const firstNumberGrathear= multiple5.find(number => number > 10)
console.log(multiple5)
console.log(firstNumberGrathear)

//findIndex Devuelve el primer elemento que cumpla
//  la funcion del prueba  proporcionada, 
// sino encuentra ningun elemento devuelve un -1

const randomNumber = [20,52,13,22]
const indexNumber = randomNumber.findIndex(number => number > 50)
console.log(randomNumber)
console.log(indexNumber)

/*El método 📃.slice() nos permite trabajar con arrays, 
sin mutarlos(inmutabilidad), generando una copia del array original. 
Este método tiene la siguiente sintaxis:
.slice(start, end)
Donde start se refiere a desde que posición 
va a hacer el corte y end hasta donde va.
 Si omitimos pasar el argumento end, 
 el método nos devuelve el array desde start
  hasta que se acabe todo el array. */

//slice()
const animals=['ant','duck', 'bison', 'elephant','dog', 'camel']
console.log(animals.slice(2))//2 desde bison hasta el final
console.log(animals.slice(2,4))// desde la posiscion 2 hatsa la 4 
console.log(animals.slice(1,5))
console.log(animals.slice(-2))//-2 seria el dog, se cuenta desdeatras
console.log(animals.slice(2,-1))
console.log(animals.slice())//no hace nada

/*La diferencia principal entre el Spread Operator 
y la concatenación de arrays es su funcionalidad. 
El Spread Operator (...) permite copiar, 
combinar o extender arrays sin modificar el original, 
mientras que la concatenación (usando concat()) 
crea un nuevo array combinando los elementos 
de dos o más arrays. */

//1. Copy an Array
const originaArray=[1,2,3,4,5,6]
const copyArray=[...originaArray]
console.log(originaArray)
console.log(copyArray)

//2. Combinar Array
const array1=[1,2,3]
const array2=[4,5,6]
const combinedArray=[...array1, array2]
console.log(array1)
console.log(array2)
console.log(combinedArray)

//3. Crear Arrays con Elementos Adicionales
const baseArray=[1,2,3]
const arrayWithAdditionalElements=[...baseArray,4,5,6]
console.log(baseArray)
console.log(arrayWithAdditionalElements)

// Pasar elementos a una funcion
function sumsprea(a,b,c){
    return a+b+c
}
const numberss=[1,2,3]
const result= sum(...numberss)
console.log(result)




