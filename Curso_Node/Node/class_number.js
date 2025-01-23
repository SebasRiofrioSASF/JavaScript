//1. tipo entero y decimal
const entero= 42
const decimal= 3.14
console.log(typeof entero, typeof decimal) //typeof para saber el tipo de dato

// 2. Notacion cientifica
const cientifico = 5e3 //5 a la potencia de 3

//3. Infinitos y NaN
const infinito = Infinity // expresar un numero infinito
const noEsnumero = NaN // no es nada

//Operaciones Aritmeticas
// 1. Suma, resta , multiplicacion, y division
const suma= 3+4
console.log('Suma '+ suma)

const resta = 12-4
console.log('resta '+resta)

const multiplicacion= 12*9
console.log('multiplicacion '+multiplicacion)

const division= 55/10
console.log('division '+ division)

// 2. modula y exponenciacion
const modulo= 15% 8
const exponenciacion = 2**3
// Presicion
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(2))//para determinar cuantos decimales se desean mostrar
console.log(resultado === 0.3) //es una igualacion de tipo numerico junto con el tipo de dato

// operaciones avanzadas
const raizCuadrada= Math.sqrt(16)
const valorAbsoluto= Math.abs(-7)
const aleatorio= Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)

