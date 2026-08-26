interface IAccount {
    getBalance(): number;
    deposit(amount: number): number;
    withdraw(amount: number): number;
}

class BankAccount implements IAccount {
    protected owner: string;
    protected balance: number;

    constructor(owner: string, balance: number) {
        this.owner = owner;
        if (balance < 0) {
            throw new Error("El saldo inicial no puede ser negativo.");
        }
        this.balance = balance;
    }

   public getBalance(): number {
        return this.balance;
    }

    public deposit(amount: number): number {
        if (amount > 0) {
            this.balance += amount;
        }
        return this.balance;
    }

    public withdraw(amount: number): number {
        if(amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            throw new Error("Fondos insuficientes o cantidad inválida para retirar.");
        }
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    private interestRate: number;

    constructor(owner: string, balance: number, interestRate: number) {
        super(owner, balance);
        this.interestRate = interestRate;
    }

    public applyInterest(): number {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        return this.balance;
    }
}

const account = new BankAccount("Elizabeth", 1000);
console.log(`Cantidad inicial: $${account.getBalance()}`);
console.log("Depositando $500...");
console.log(`Cantidad después del deposito: $${account.deposit(500)}`);
console.log("Retirando $200...");
console.log(`Cantidad después del retiro: $${account.withdraw(2000)}`);