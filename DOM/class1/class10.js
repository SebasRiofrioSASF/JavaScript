const myform = document.getElementById("myform"); 
myform.addEventListener("submit", (evento) => {    
    evento.preventDefault();    
    const name = myform.elements["Name"].value;    
    const email = myform.elements["Correo"].value;     
    console.log("Nombre:", name);    
    console.log("Correo:", email);
    console.log(evento) 

});