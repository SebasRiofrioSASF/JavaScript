
/*  lenguajes de programacion
Traducir el codigo humano a uno que la computadora lo entienda
compilados= c, C++, Rust, Go swift (Cheque estatico de tipos)
Interpretados= JavaScript, Python , Ruby, PHP (Cheque dinamico de tipos) 
Javacript no se da cuenta de que tipos de datos tenemos hasta q revisa nuetro programa
*/
// Explicit Type casting
const string= '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringDecimal=3.14
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary ='1010'
const decimal= parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// Implicit Type casting
const sum= '5'+ 3
console.log(sum)

const sumWithBoolean = '3'+true
console.log(sumWithBoolean)

const sumwithNumber = 2+true
console.log(sumwithNumber)

const stringValue ='10'
const numberValue=10
const booleanValue= true
console.log('------------------------------')
console.log(stringValue +stringValue)//Concatena
console.log(stringValue +numberValue)//Concatena
console.log(stringValue +booleanValue)//Concatena
console.log(numberValue +stringValue)//Concatena
console.log(numberValue +numberValue)//suma
console.log(numberValue +booleanValue)//suma
console.log(booleanValue +stringValue)//Concatena
console.log(booleanValue +numberValue)//suma
console.log(booleanValue +booleanValue)//suma


