interface IProduct {
    getPrice(): number;
    getInfo(): string;
}

export abstract class Product implements IProduct {
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