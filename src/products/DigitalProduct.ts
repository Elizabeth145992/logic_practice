import { Product } from './Product.js';

export class DownloadUrlProduct extends Product {
    public getPrice(): number {
        return super.getBasePrice();
    }

    public getInfo(): string {
        return `ID: ${super.getId()}, Name: ${super.getName()}, Download available`
    }
}
