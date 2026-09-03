import { Product } from './Product.js';

interface IProductService {
    //createProduct(): Product;
    getProducts(): Product[];
    findProductById(id:number): Product | undefined;
    /*findMostExpensiveProduct(): Product;
    calculateTotal(): number;*/
}

export class ProductService implements IProductService {
    constructor(private products: Product[]) {}

    public getProducts(): Product[] {
        return this.products;
    }

    public findProductById(id: number): Product | undefined {
        return this.products.find(product => product.getId() === id);
    }
}

export function findMostExpensiveProduct(products: Product[]): Product {
    let expensiveProduct: Product | undefined = products[0];

    for (const product of products) {
        if(expensiveProduct && product.getPrice() > expensiveProduct.getPrice()) {
            expensiveProduct = product;
        }
    }

    return expensiveProduct!;
}

export function calculateTotal(products: Product[]): number {
    let totalPrice: number = 0;

    for (const product of products) {
        totalPrice += product.getPrice();
    }
    return totalPrice;
}