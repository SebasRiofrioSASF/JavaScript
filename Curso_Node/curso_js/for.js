//for(variable; condicion; incremento){
    //codigo a ejecutar
//}
let list=['eat', 'sleep', 'code', 'repeat']
for(let i=0; i<list.length; i++){
    console.log(list[i])
}
/*
for of es una forma de iterar ciertos elementos
para arrays y strings
y solo funcionan con estos, que genera una lista de objetos
for(variable of objeto){
codigo
array= lista
objeto= propiedad y su valor
}
*/ 

let canasta= [' uva', 'manzana', 'pera', 'naranja']
for(fruta of canasta){
    console.log(fruta)
}

/*
for in ---> objetos innumerables
propiedades = valor
array, string
item 
for (variable in objeto){
codigo
}
*/
const listDeCompras ={
    manzana: 5,
    pero: 3, 
    naranja:2,
    uva: 1
}
for(fruta in listDeCompras){
    console.log(fruta)
}
for(fruta in listDeCompras){
    console.log(`${fruta} : ${listDeCompras[fruta]}`)
}
for(fruta in listDeCompras){
    console.log(fruta)
}
/*
while (condicion){
codigo
}
*/

let contador= 0
while(contador< 10){
    console.log(contador)
    contador++;
}

/*
do{
codigo

}while(condicion){
}
*/
let cont =0
do{
    console.log(cont)
    cont++
}while(cont<20)
