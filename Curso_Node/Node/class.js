/*Las clases en JavaScript son una forma moderna y más sencilla de crear objetos
 y manejar herencia. Son una "envoltura" para las funciones 
 constructoras tradicionales que proporciona una sintaxis
  más clara y concisa. Aunque las clases son en realidad 
  funciones en el trasfondo, hacen que el código sea más fácil
   de entender y de mantener.

¿Cómo se utiliza? Las clases se utilizan para crear objetos 
con propiedades y métodos de manera más estructurada.
 Dentro de una clase, se define un método especial 
 llamado constructor, que es donde inicializamos 
 las propiedades del objeto (es decir, aquí es donde la función
  constructora se integra). 
  Luego, podemos crear instancias de la clase usando la palabra 
  clave new, similar a cómo lo hacíamos con las funciones 
  constructoras. */

  class Persona{
    constructor(nombre, edad){
        this.nombre= nombre
        this.edad= edad
    }
    saludar(){
        console.log(`hola, mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }
  }
  const persona1= new Persona('Mariana',15)
  persona1.saludar()
  /*Un prototipo tiene todas las propiedades y
   métodos que se crearon con una clase o función constructora,
    que luego se van a compartir o heredar en las 
    instancias que se crearán para dicha clase.


 */