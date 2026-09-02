interface IProduct {
    getPrice(): number;
    getInfo(): string;
}

interface IProductService {
    //createProduct(): Product;
    getProducts(): Product[];
    findProductById(id:number): Product | undefined;
    /*findMostExpensiveProduct(): Product;
    calculateTotal(): number;*/
}

abstract class Product implements IProduct {
    private id: number;
    private name: string;
    private price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getBasePrice(): number {
        return this.price;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    abstract getPrice(): number;

    abstract getInfo(): string;
}

class PhysicalProduct extends Product {
    private shippingCost:  number;

    constructor(id: number, name: string, price: number, shippingCost: number) {
        super(id, name, price);
        this.shippingCost = shippingCost;
    }

    public getPrice(): number {
        return super.getBasePrice() + this.shippingCost;
    }

    public getInfo(): string {
        return `ID: ${super.getId()}, Name: ${super.getName()}, Shipping: $${this.shippingCost.toFixed(2)}`;
    }
}

class DownloadUrlProduct extends Product {
    public getPrice(): number {
        return super.getBasePrice();
    }

    public getInfo(): string {
        return `ID: ${super.getId()}, Name: ${super.getName()}, Download available`
    }
}

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

function findMostExpensiveProduct(products: Product[]): Product {
    let expensiveProduct: Product = products[0];

    for (const product of products) {
        if(product.getPrice() > expensiveProduct.getPrice()) {
            expensiveProduct = product;
        }
    }
    return expensiveProduct;
}

function calculateTotal(products: Product[]): number {
    let totalPrice: number = 0;

    for (const product of products) {
        totalPrice += product.getPrice();
    }
    return totalPrice;
}

class ProductService implements IProductService {
    public getProducts(): Product[] {
        return products;
    }

    public findProductById(id: number): Product | undefined {
        return products.find(product => product.getId() === id);
    }
}

const productService = new ProductService();
console.log("Productos obtenidos desde ProductService:");
const allProducts = productService.getProducts();
for (const product of allProducts) {
    console.log(product.getInfo());
    console.log(`Price: $${product.getPrice().toFixed(2)}`);
}

const productById = productService.findProductById(1)?.getName();
console.log(`Buscando producto con ID 1: ${productById ? productById : "Producto no encontrado"}`);