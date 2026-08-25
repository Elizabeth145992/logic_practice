class BankAccount {
    private owner: string;
    private balance: number;

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
    }

   public getBalance() {
        return this.balance;
    }

    public deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    public withdraw(amount: number) {
        if(amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }
}

const account = new BankAccount("John Doe", 1000);
console.log(`Cantidad inicial: $${account.getBalance()}`);
console.log("Depositando $500...");
account.deposit(500);
console.log(`Cantidad después del deposito: $${account.getBalance()}`);
console.log("Retirando $200...");
account.withdraw(200);
console.log(`Cantidad después del retiro: $${account.getBalance()}`);