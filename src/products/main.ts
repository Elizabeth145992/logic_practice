import { PhysicalProduct } from './PhysicalProduct.js';
import { DownloadUrlProduct } from './DigitalProduct.js';
import { Product } from './Product.js';
import { ProductService, findMostExpensiveProduct, calculateTotal } from './ProductService.js';

const products: Product[] = [
    new PhysicalProduct(1, "Laptop", 1000, 50),
    new DownloadUrlProduct(2, "E-book", 20),
    new PhysicalProduct(3, "Smartphone", 800, 30),
    new DownloadUrlProduct(4, "Software License", 100)
];

for (const product of products) {
    console.log(product.getInfo());
    console.log(`Price: $${product.getPrice().toFixed(2)}`);
}

const expensiveProduct = findMostExpensiveProduct(products);
console.log(`El producto más costoso es: ${expensiveProduct.getInfo()} con un precio de: $${expensiveProduct.getPrice().toFixed(2)}`);

const totalMoney = calculateTotal(products);
console.log(`El total de dinero por todos los productos es: $${totalMoney.toFixed(2)}`);

const productService = new ProductService(products);
console.log("Productos obtenidos desde ProductService:");
const allProducts = productService.getProducts();
for (const product of allProducts) {
    console.log(product.getInfo());
    console.log(`Price: $${product.getPrice().toFixed(2)}`);
}

const productById = productService.findProductById(1)?.getName();
console.log(`Buscando producto con ID 1: ${productById ? productById : "Producto no encontrado"}`);