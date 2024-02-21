// Página web donde los usuarios puedan agregar elementos a una lista utilizando un`prompt`. 
// Luego, los elementos ingresados se mostrarán en una lista en la página.
// Crear botón "agregar elemento", aparece (prompt) y se introduce el que despues aparece en la lista.
// Recomendación uso addEventListener, getElementById, createElement, appendChild. //

let boton = document.getElementById("agregar");
boton.addEventListener("click", function(){
    const elemento = prompt ("Introduce el siguiente elemento: ")
    const lista = document.getElementById ("lista");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = elemento;
    lista.appendChild(nuevoElemento);
});