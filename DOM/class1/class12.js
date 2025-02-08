//VARIABLE PARA CONTROLAR EL FORM
const taskForm = document.getElementById("task-form")
//VARIABLE PARA CONTROLAR EL LIST
const taskList = document.getElementById("task-list")

//tarea cargar
loadTask()
taskForm.addEventListener('submit', (event) => {
  event.preventDefault()
  //Prueba para Mostrar valor en pantall
  const taskInput = document.getElementById("task-input")
  const task = taskInput.value
  console.log(task)
  if(task) {
    taskList.append(createTaskElement(task))
    storeTaskInLocalStorage(task)
    taskInput.value = ''
  }
})

function createTaskElement(task) {
  const li = document.createElement('li')
  li.textContent = task
  li.append(createButton('❌','delete-btn'), createButton('✏️','edit-btn'))
  return li
}

function createButton(text, className) {
  const btn = document.createElement('span')
  btn.textContent = text
  btn.className = className
  return btn
}
//EVENTO ELIMINAR BOTON
taskList.addEventListener("click", (event) =>{  
       console.log(event.target)    
       if(event.target.classList.contains("delete-btn")){        
        deleteTask(event.target.parentElement)    
    } else if(event.target.classList.contains("edit-btn")){
        editTask(event.target.parentElement)

    }
})

//FUNCION PARA LLAMAR EN EL EVENTO ELIMINAR BTON
function deleteTask(taskItem){    
    if(confirm("Estas Seguro de borrarlo")){
        taskItem.remove()    
    }
}
function editTask(taskItem){    
    const newTask= prompt("Edita la tarea: ", taskItem.firstChild.textContent)
    if(newTask!=null){
        taskItem.firstChild.textContent= newTask
        updateLocalStorage()
    }
}/*
localStorage: Es una Web API que permite almacenar datos en el 
navegador de forma persistente. La información se 
guarda en formato clave-valor y persiste si se cierra el navegador. 
No es una base de datos, sino un almacenamiento simple para cadenas de texto.

Funciones principales de localStorage:
setItem(key, value): Guarda un valor asociado a una clave. 
El valor debe de ser una cadena de texto, por lo que se usa JSON.stringify() 
para convertir objetos o arrays a formato JSON.

getItem(key): Recupera el valor almacenado con la clave proporcionada. 
El valor recuperado es una cadena, por lo que se usa 
JSON.parse() para convertirlo a un objeto o array.


*/
/* Persistencia de datos */

//Las funciones que vienen a continuación harán uso de la wepAPI localStorage para guardar la información
//de las tareas que añadamos, editemos y borremos.

function storeTaskInLocalStorage(task){
    //Creamos una constante para guardar las tareas que haya en localStorage
    //con JSON.parse convertimos el objeto en un array
    const tasks = JSON.parse(localStorage.getItem("tareas") || "[]");
    tasks.push(task); //añadimos la tarea al array tareas.
    //Guardamos en localStorage la nueva tarea con setItem pasándole dos argumentos,
    //primero el nombre del objeto (key) y luego el array pasado a string. 
    localStorage.setItem("tareas", JSON.stringify(tasks));
}

//Función para cargar las tareas guardas en el localStorage

function loadTask(){
    //Leemos el localStorage para comprobar si hay tareas y las convertimos en un array
    //si no hay tareas creamos el array vacío.

    const tasks = JSON.parse(localStorage.getItem("tasks= tareas") || "[]");
    //console.log(tareas);
    //Recorremos el array tareas y las pasamos al HTML
    tasks.forEach((task) => {
        //console.log(tarea);
        //addTarea(tarea);
        taskList.appendChild(createTaskElement(task))
    });
}

//  Eliminar y editar tareas del almacenamiento local
function updateLocalStorage() {
    const tasks = Array.from(taskList.querySelectorAll("li")).map( (li) => li.firstChild.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


//tema en color
const themeToggleButton = document.getElementById("toggle-theme-btn")
const currentTheme= localStorage.getItem("theme")

themeToggleButton.addEventListener("click", () => {
 document.body.classList.toggle("dark-theme")

  const theme = document.body.classList.contains("dark-theme")  ? "dark" : "light"
  localStorage.setItem("theme", theme)
})
/*if (currentTheme === "dark"){
    document.body.classList.add("dark-theme")
}*/

function mostrarMensaje() {
    //document.getElementById("mensaje").innerHTML = "¡Hola Mundo!";
    alert("hola mundo")
    
}