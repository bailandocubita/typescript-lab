const greeter = (person: string) => `Hello ${person}`;

const user = "Kate";

console.log(greeter(user));

function calculateTax (total: number, taxRate: number) {
    let finalTotal: number = total + (total * taxRate);
    console.log(finalTotal);
    return finalTotal;
}

calculateTax(10.50, 0.06);

// function calculateTax2 (total: number, taxRate: number) number {
//     return total + (total * taxRate);
// }

function sum(values: number[]): number {
    let total: number = 0;
    for (let value of values) {
       total += value;
    }

    return total;
}

function sayHello(name: string, age: number): string {
    // let person: string = null;
    return `Hello ${name}, in 10 years you will be ${age + 10} years old.`;
}

console.log(sayHello("Oddell", 1));

interface Person {
    firstName: string;
    lastName: string;
}

const person: Person = {
    firstName: "Matt",
    lastName: "Fanto",
};

function sayHello2(person: Person) {
    console.log( `Hello ${person.firstName} ${person.lastName}`);
};

sayHello2(person);

class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string) {
            this.fullName = `${firstName} ${middleInitial}. ${lastName}`
        }
}

const kate = new Student("Katherine", "J", "Mora Woods");
console.log(kate.fullName);