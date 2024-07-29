type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}
  public abstract printHolidays(): void;

  public addHoliday(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) this.holidays.push(holiday);
    }
  }
}

// const department = new Department('aditya')

// Enforcing the child class to implement all the method which is declare in abstract class
class ITDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("IT Department");
  }
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(`Here is the list of holidays ${this.name}`);

    this.holidays.forEach((holiday, index) => {
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
    });
  }
}
class AdminDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("IT Department");
  }
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log(`Here is the list of holidays ${this.name}`);

    this.holidays.forEach((holiday, index) => {
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
    });
  }
}

// we can not create Abstract class or can not use new keyword

const itDepartment: ITDepartment = new ITDepartment();
const adminDepartment: AdminDepartment = new AdminDepartment();

const itHolidays: Holidays = [
  {
    date: new Date(2022, 11, 1),
    reason: "IT Department Day",
  },
  {
    date: new Date(2022, 12, 25),
    reason: "Chistmas",
  },
];

const adminHolidays: Holidays = [
  {
    date: new Date(2022, 10, 1),
    reason: "Admin Department Day",
  },
  {
    date: new Date(2022, 12, 25),
    reason: "Chistmas",
  },
];

itDepartment.addHoliday(itHolidays);

adminDepartment.addHoliday(adminHolidays);

itDepartment.printHolidays();
adminDepartment.printHolidays();
