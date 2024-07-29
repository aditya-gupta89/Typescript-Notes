class Person {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email= email;
  }
  greet() {
    return `hello John`;
  }
}

class User {
  name: string;
  email: string;
  age: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

class AdminUser extends User {
  isAdmin: boolean = true;
  userReporting: number;
  constructor(name: string, email: string, age: number, userReporting: number) {
    super(name, email, age);
    this.userReporting = userReporting;
  }
}

const user = new User("Aditya", "aditya@gmail.com", 23);
const adminUser = new AdminUser("admin", "admin@gmail.com", 43, 2);

console.log(user, adminUser);

const person = new Person("John", "John@gmail.com");
const person2 = new Person("Aditya", "Aditya@gmail.com");

console.log(person);
console.log(person2);

export {};
