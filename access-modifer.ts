class Employee {
  private name: string;
  constructor(name: string,protected age: number) {
    this.name = name;
    // this.age = age;
  }
  public getAge() {
    return this.age;
  }
  public getName() {
    return this.name;
  }
}

// there is one twist when we use shothand constructor 

// when we use access-modifer then we don't need to set the value mannually it will set automatically like in this example
// constructor(name: string,protected age: number) {
//     this.name = name;
//     // this.age = age;
//   }

// second way to define the Employee class
class EmployeeShotHand {
  constructor(private name: string, protected age: number) {}
  public getAge() {
    return this.age;
  }
  public getName() {
    return this.name;
  }
}

class Admin extends Employee {
  public adminName() {
    return this.age;
  }
}

let employee = new EmployeeShotHand("aditya", 23);
let employee1 = new Employee("aditya", 55);
let admin = new Admin("aditya", 23);
console.log(employee, employee1);

employee.getName();

admin.getAge();

admin.adminName();

export {};
