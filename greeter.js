var greeter = function (person) { return "Hello " + person; };
var user = "Kate";
console.log(greeter(user));
function calculateTax(total, taxRate) {
    var finalTotal = total + (total * taxRate);
    console.log(finalTotal);
    return finalTotal;
}
calculateTax(10.50, 0.06);
// function calculateTax2 (total: number, taxRate: number) number {
//     return total + (total * taxRate);
// }
function sum(values) {
    var total = 0;
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        total += value;
    }
    return total;
}
function sayHello(name, age) {
    // let person: string = null;
    return "Hello " + name + ", in 10 years you will be " + (age + 10) + " years old.";
}
console.log(sayHello("Oddell", 1));
var person = {
    firstName: "Matt",
    lastName: "Fanto"
};
function sayHello2(person) {
    console.log("Hello " + person.firstName + " " + person.lastName);
}
;
sayHello2(person);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + ". " + lastName;
    }
    return Student;
}());
var kate = new Student("Katherine", "J", "Mora Woods");
console.log(kate.fullName);
