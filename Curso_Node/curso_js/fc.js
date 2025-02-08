//capacidades que tienen las funciones al igual que otros objetos
// 1. Pasar funciones como argumentos --> callback

function a() {
    console.log('Funcion a Sebastian')
}
function b(a) {
    a.call();

}b(a)
// Es posible almacenar funciones en objetos?
const rocket={
    name:'Falcon 001', 
    launchMessage: function launchMessage(){
        return '🔥'
    }
}
console.log(rocket.launchMessage()) 