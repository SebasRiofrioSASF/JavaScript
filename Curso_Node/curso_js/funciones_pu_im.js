//funciones ppuras
//side effects algunos pueden ser necesarios solo hace q no sean puras
// 1. Modificar variables globales
// 2. Modificar parametros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes pantalla o consola
// 5. manipulacion del DOM
// 6. Obtener la hora actual

function sum(a,b){
    return a+b
}


function sum(a,b){
    console.log('A:', a)
    return a+b
}
//funcion impura
let total=0
function sumWithSideEffect(){
    total+=a //total=total+a
    return total
}

function square(x){
    returnx*x
}
function addTen(y){
    return y +10
}
const number =5
const finalReslt= addTen(square(number))
console.log(finalReslt)