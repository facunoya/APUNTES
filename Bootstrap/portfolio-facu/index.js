window.onload = () => {

    function escribirTexto(texto, elemento) {

        let indice = 0;
        const intervalo = setInterval(function () {
            // Verificar si se ha alcanzado el final del texto
            if (indice < texto.length) {
                // Agregar la siguiente letra al texto mostrado
                elemento.innerHTML += texto.charAt(indice);
                // Incrementar el índice para pasar a la siguiente letra
                indice++;
            } else {
                // Si se ha completado el texto, detener la ejecución del intervalo
                clearInterval(intervalo);
            }
        }, 100); // Intervalo de tiempo entre cada letra (en milisegundos)
    }

    // Uso de la función con un ejemplo
    var texto = "Hola! soy Facundo mis hobbies son: desarrollar, hacer actividad física y pasar tiempo con mis seres queridos. \nBienvenido a mi portfolio web, espero lo disfrutes!";
    var elemento = document.getElementById("texto-escrito"); // Reemplaza "tuElemento" por el ID del elemento HTML donde deseas mostrar el texto
    escribirTexto(texto, elemento);
}

