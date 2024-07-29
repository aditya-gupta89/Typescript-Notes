interface User {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

interface UserWithAddress extends User {
  address: string;
}

const user = {
  name: "John",
  email: "john@email.com",
  phone: 9876543,
  gender: "male",
};

const userWithAddress: UserWithAddress = {
  name: "mark",
  email: "mark@email.com",
  phone: 987654345,
  gender: "male",
  address: "This is an address",
};

console.log(user);
console.log(userWithAddress);

// Difference between interface and type

// Extending an interface                      Extending a type via intersections

type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

const bear = getBear();
bear.name;
bear.honey;

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;

export {};
