class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            console.log("Invalid discount percentage.");
            return;
        }
        this.price -= (this.price * percent) / 100;
    }

    getPrice() {
        return this.price;
    }
}


const product1 = new Product("Laptop", 1000);
console.log(`Original Price: $${product1.getPrice()}`);

product1.applyDiscount(20);
console.log(`Price after 20% discount: $${product1.getPrice()}`);
