console.log("Inicio");

const promesa = new Promise((resolve, reject) => {
    console.log("Dentro de la promesa");

    resolve("Terminó");
});

promesa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.log(error);
});

console.log("Fin");
/*
Se ejecuta todo el código síncrono.
Cuando encuentra el .then(), registra esa función para ejecutarla después.
Continúa con el resto del código síncrono.
Cuando la pila de ejecución queda vacía, ejecuta la función del .then().
 */