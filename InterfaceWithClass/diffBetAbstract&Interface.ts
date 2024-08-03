abstract class Person {
    public abstract name: string;
    public abstract email: string;
    public abstract phone: number;
  
    public greeting() {
      console.log(`Hello ${this.name}`);
    }
  
    public static nameClass () {
      return "Class name is Person"
    }
  }
  
  class RegisteredPerson extends Person {
    constructor(
      public name: string,
      public email: string,
      public phone: number
    ) {
      super();
    }
  }
  
  const person: RegisteredPerson = new RegisteredPerson(
    "John",
    "john@email.com",
    987889788);
  
  person.greeting();
  console.log(person)
  console.log(Person.nameClass)


//   Difference between interface and abstract class

//   Abstract class you can create your own method without abstrct which is inherit in child class which is not possible in interface 
//   In abstract class you can create the static method which is not possible in interface
//   In oen class can implement multiple interface and one child class can not inherit multiple abstract class

export {}