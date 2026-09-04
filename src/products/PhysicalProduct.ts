import { Product } from './Product.js';

export class PhysicalProduct extends Product {
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