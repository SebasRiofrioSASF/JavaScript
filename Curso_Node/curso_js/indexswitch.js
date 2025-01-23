/*switch(expresion){
    case valor1:
     //codigo de ejecucion
        break;
    case valor2:
        //codigo de ejecucion
         break;
    case valor3:
        //codigo de ejecucion
        break;
    case valor4:
        //codigo de ejecucion
        break;
    default:
        //codigo en caso de que ningun caso sea

}*/
let expr='Papayas'
switch(expr){ //=== es como evaluar de ese modo
    case'Naranjas':
    console.log('Las naranjas cuestan $20 dolares el kilo')
    break;
    case'Manzanas':
    console.log('Las Manzanas cuestan $43 dolares el kilo')
    break;
    case'Platanos':
    console.log('Las platanos cuestan $30 dolares el kilo')
    break;
    case'Mangos':
    case'Papayas':
    console.log('Las Papayas y los Mangos cuestan $25 dolares el kilo')
    break;
    default:    
    console.log(`Losien no contamos con ${expr}`)
}
console.log('Las Hay algo mas que desees')
