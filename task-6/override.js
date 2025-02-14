class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `Hello, my name is ${this.name}.`;
    }
}

class Student extends Person {
    introduce() {
        return super.introduce() + " I am a student.";
    }
}


const person1 = new Person("Alice");
console.log(person1.introduce()); 

const student1 = new Student("Bob");
console.log(student1.introduce()); 
