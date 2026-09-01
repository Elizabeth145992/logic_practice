interface IAccount {
  getBalance(): number;
  deposit(amount: number): number;
  withdraw(amount: number): number;
}

abstract class BankAccount implements IAccount {
  protected owner: string;
  protected balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    if (balance < 0) {
      throw new Error("El saldo inicial no puede ser negativo.");
    }
    this.balance = balance;
  }

  public getOwner(): string {
    return this.owner;
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
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error("Fondos insuficientes o cantidad inválida para retirar.");
    }
    return this.balance;
  }

  abstract getAccountType(): string;
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

  getAccountType(): string {
    return "Savings";
  }
}

class CheckingAccount extends BankAccount {
  private withdrawalFee: number;

  constructor(owner: string, balance: number, withdrawalFee: number) {
    super(owner, balance);
    this.withdrawalFee = withdrawalFee;
  }

  public applyWithdrawalFee(): number {
    if (this.balance >= this.withdrawalFee) {
      this.balance -= this.withdrawalFee;
    }
    return this.balance;
  }

  getAccountType(): string {
    return "Checking";
  }
}

const accounts: BankAccount[] = [
  new SavingsAccount("Elizabeth Cruz", 10000, 0.05),
  new CheckingAccount("Uriel García", 10000, 2),
];

for (const account of accounts) {
  const accountType = account.getAccountType();

  console.log(
    `Cuenta de ${accountType} de ${account.getOwner()}: $${account.getBalance()}`,
  );
  console.log(`Depositando en la cuenta de ${accountType}: $500...`);
  console.log(`Cantidad después del deposito: $${account.deposit(500)}`);
  console.log(`Retirando de la cuenta de ${accountType}: $200...`);
  console.log(`Cantidad después del retiro: $${account.withdraw(200)}`);
  console.log(`Aplicando intereses a la cuenta de ${accountType}...`);

  if (account instanceof SavingsAccount) {
    console.log("Aplicando intereses...");
    console.log(
      `Cantidad después de aplicar intereses: $${account.applyInterest()}`,
    );
  }

  if (account instanceof CheckingAccount) {
    console.log("Aplicando tarifa de retiro...");
    console.log(
      `Cantidad después de aplicar la tarifa de retiro: $${account.applyWithdrawalFee()}`,
    );
  }
}
