var Person = /** @class */ (function () {
    function Person(name, email) {
        this.email = email;
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello Person class");
    };
    Person.prototype.getDetails = function () {
        console.log("name : ", this.name, " email :- ", this.email);
    };
    return Person;
}());
var person = new Person('Aditya', 'aditya@gmail.com');
person.getDetails();
