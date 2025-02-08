/*
this --- class
this - --objeto --- class

*/
class Persona{
    constructor(nombre, edad){
        //para crear las instancias de Persona se usa this
        this.nombre=nombre
        this.edad=edad
    }
}
const persona1=new Persona("Alice", 14) //al usar new se inyecta los calores  a la clase Persona 
// en los prarmetros Construtor
console.log(persona1)

persona1.nuevoMetodo= function(){
    console.log(`mi nombre es ${this.nombre}`)
}









