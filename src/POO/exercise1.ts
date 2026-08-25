interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    stockPieces: number;
    stockBoxes: number;
}

class Product implements IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    stockPieces: number;
    stockBoxes: number;

    constructor(id: number, name: string, price: number, description: string, stockPieces: number, stockBoxes: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.stockPieces = stockPieces;
        this.stockBoxes = stockBoxes;
    }

    updatePrice(newPrice: number) {
        this.price = newPrice;
    }
}

const product = new Product(1, "Galletas Oreo", 25.99, "Galletas Oreo de BTS", 5, 10);
console.log(product);
console.log(product.name);
console.log(product.price);
product.updatePrice(30.99);
console.log(product.price);