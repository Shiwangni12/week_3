class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateBonus() {
        return this.salary * 0.1;
    }
}

// Example usage
const emp1 = new Employee("John Doe", 50000);
console.log(`Bonus for ${emp1.name}: $${emp1.calculateBonus()}`);
