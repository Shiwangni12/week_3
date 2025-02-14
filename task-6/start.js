class Vehicle {
    startEngine() {
        console.log("Engine started");
    }
}

class Car extends Vehicle {
    startEngine() {
        console.log("Car engine started");
    }
}


const vehicle = new Vehicle();
vehicle.startEngine(); 

const car = new Car();
car.startEngine(); 
