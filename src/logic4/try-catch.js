function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }

    return a / b;
}

try {
    console.log(dividir(10, 2));
    console.log(dividir(10, 0));
    console.log("Esto no se imprime");
} catch (error) {
    console.log(error.message);
}

console.log("Programa terminado");