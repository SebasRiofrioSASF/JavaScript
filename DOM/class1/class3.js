/*
los atributos son valores iniciales**** que se utilizan
 en la tag de apertura para controlar el comportamiento
  del elemento en HTML. Estos pueden el ID, la(s) clase(s).

Las propiedades son el reflejo de estos atributos
 en JavaScript. Es decir, van a pasar a ser
  propiedades del objeto del nodo en JS.

Es importante mencionar que por más que hayamos
 cambiado una propiedad desde JS de un objeto, 
 la etiqueta a la que está referenciando seguirá
  teniendo el mismo atributo que se asignó en un principio. 
  Esto se debe a que los atributos reflejan el estado inicial del HTML,
  es decir de cómo iniciamos el HTML. */

  /*• classList: Es una propiedad en JavaScript que proporciona
   una manera conveniente de acceder y manipular las clases CSS 
   de un elemento HTML. Te permite agregar, quitar, alternar y
    verificar la presencia de clases en los elementos
     sin necesidad de manipular directamente la cadena completa de la propiedad "className".


METODOS DE classList:

• .add : Agrega clases.

• .remove: Elimina clases.

• .toggle: Alterna la presecia de una clase.

• .contains: Verifica si una clase esta presente.

• .replace: Remplaza una clase por otra.

• .lenght: Devuelve el numero de clases en el elemento.

Usar classList es mucho mas limpio y 
seguro que manipular la propiedad className directamente, 
ya que evita problemas con la manipulacion de cadenas y 
garantiza que las clases se gestionen correctamente.
  
  */