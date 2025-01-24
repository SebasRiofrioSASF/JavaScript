//input  entradas
//output salidas
//palabara clave nombre  parametro
// function:   suma   (a, b){  return a+b   }suma(3,5)
function calculateDiscountedPrice (price, discountPercentage){
    const discount= (price* discountPercentage)/100
    const priceWithdiscount = price- discount
    return priceWithdiscount
}
const originalPrice= 100
const discountPercentage= 20
const finalPrice= calculateDiscountedPrice(originalPrice, discountPercentage)
console.log('Original Price: $'+ originalPrice)
console.log('Discount: $'+ discountPercentage + '%')
console.log(' Price with discount: $'+ finalPrice)

//capacidades que tienen las funciones al igual que otros objetos
// 1. Pasar funciones como argumentos --> callback

function a() {}
function b(a) {}
b(a)
//retonar Funciones
function a() {
    function b() {}
    return b
}
//Asignar funciones a variables-->expresion de funcion
const a = function() {}

//tener propiedades y metodos
function a () {}
const obj= {}
a.call(obj
)

// Anidar funciones Nested Functions
function a() {
    function b() {
        function c() {
        
        }
        c()

    }b()

}a()
// Es posible almacenar funciones en objetos?
const rocket={
    name:'Falcon 001', 
    launchMessage: function launchMessage(){
        console.log('🔥')
    }
}
rocket.launchMessage()