function contador(){
    let cont = 0;

    return function (){
        cont++;
        return cont;
    };
}

const incrementar = contador();
const otroContador = contador();

console.log('Incrementar 1: ', incrementar());
console.log('Incrementar 2: ', incrementar());
console.log('Incrementar 3: ', incrementar());
console.log('Otro contador: ', otroContador());
