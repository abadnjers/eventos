document.getElementById("division").addEventListener("click",()=>{
    alert("hola soy el div");
});
document.getElementById("boton").addEventListener("click",(event)=>{
    event.stopPropagation();
    alert("hola");
});