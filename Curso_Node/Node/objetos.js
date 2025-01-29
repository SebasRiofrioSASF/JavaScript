/*objeto es una estructura de datos que me ayuda a guardar 
valores de una forma particular
key / value
objeto{
propiedad: valor, 
propiedad: valor,
propiedad : valor
}
¿Qué es un objeto en JavaScript?
Un objeto en JavaScript es una colección de propiedades.
 Cada propiedad tiene un nombre (llamado clave) y un valor asociado. Los valores pueden ser de cualquier tipo, incluyendo otros objetos, funciones, arreglos, etc.

Un objeto es como una "caja" donde puedes guardar diferentes valores relacionados entre sí. Es muy útil cuando tienes muchos datos que pertenecen a una misma entidad.

¿Cómo se utiliza?

Creas un objeto con un conjunto de propiedades.
Cada propiedad tiene un nombre (o clave) y un valor.
Puedes acceder, agregar o modificar estas propiedades.
*/
const personaq={
    nombre:"John",
    edad: 30,
    direccion:{
        calle: "Av. Insurgentre 187",
        ciudad:"CDMX"
    },
    saludar(){
        console.log(`hola, mi nombre es ${persona.nombre}`)
    },

};
console.log(personaq)
personaq.saludar();
personaq.telefono= "555-000-2334"
console.log(personaq.telefono)// agrgar propiedades

persona.despedir= ()=>{ //agrefar metodo
    console.log("Adios")
}
persona.despedir()
delete persona.telefono; //para borrar un propiedad
delete persona.despedir; //para borrar una funcion


// una estructura de una funcion constructora 
function Persona(nombre, apellido, edad){
    this.nombre= nombre;
    this.apellido= apellido;
    this.edad= edad;
}
// crear objetos crando una funcion; todos los objetos q esten seran Instancias

const persona1= new Persona('Eduardo', 'Melendes', 38)
console.log(persona1)

const persona2 = new Persona('Diego', 'Correa', 15)
console.log(persona2)
Persona.prototype.telefono= '333-444-0000'//este se agrega al proptotipo de la funcion constructora
persona1.nacionalidad= "Mexicano"

Persona.prototype.saludar = function(){
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}
persona1.saludar()
persona2.saludar()







