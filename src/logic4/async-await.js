function esperar(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Terminó");
        }, ms);
    });
}

async function ejemplo() {
    console.log("Inicio");

    const resultado = await esperar(1000);

    console.log(resultado);

    console.log("Fin");
}

ejemplo();

console.log("Programa sigue...");