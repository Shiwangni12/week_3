class BankAccount {
    #balance; 

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn: $${amount}`);
        } else {
            console.log("Insufficient balance or invalid amount.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}


const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log(`Balance: $${account.getBalance()}`);
account.withdraw(1500); 
