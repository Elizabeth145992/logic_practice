/*1. Obtén únicamente los productos que tengan stock.
2. Obtén solamente los nombres.
3. Calcula el valor total del inventario. (precio × stock)
4. ¿Existe algún producto sin stock?
5. ¿Todos tienen precio mayor que cero?*/

const products = [
  { id: 1, name: "Laptop", price: 18000, stock: 5 },
  { id: 2, name: "Mouse", price: 500, stock: 0 },
  { id: 3, name: "Monitor", price: 4500, stock: 8 },
  { id: 4, name: "Teclado", price: 1200, stock: 2 }
];

const infoProducts = getInfoObject(products);

console.log(`Products with stock: ${infoProducts.productsStock.map(product => product.name).join(", ")} \n`);
console.log(`Names: ${infoProducts.names.join(", ")} \n`);
console.log(`Total Inventory Value: $${infoProducts.pricesStock} \n`);
console.log(`Is there any product without stock? ${infoProducts.hasStock ? 'SÍ' : 'NO'} \n`);
console.log(`Do all products have a price greater than zero? ${infoProducts.allHasPrice ? 'SÍ' : 'NO'} \n`);

function getInfoObject(products) {
    const productsStock = products.filter((product) => product.stock > 0);
    const names = products.map((product) => product.name);
    const pricesStock = products.reduce((acc, product) => {
        return acc + (product.price * product.stock);
    }, 0);
    const hasStock = products.some((product) => product.stock === 0);
    const allHasPrice = products.every((product) => product.price > 0);

    return {
        productsStock: productsStock,
        names: names,
        pricesStock: pricesStock,
        hasStock: hasStock,
        allHasPrice: allHasPrice
    };
}