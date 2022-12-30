// string 
let firstName: string = "alwi"

// Number
const age: number = 20;
const pi: number = 3.14;

// boolean
const isMerried: boolean = false;

/**
 * Any type is used when we dealing with thrid party programs and except any variable
 * but we dunno the exact type of variable
 */

let statusCode: any = 404;
statusCode = "400"
statusCode = [401];
statusCode = {code: 200}

/** Array */
const fruits: string[] = ["gedhank", "orange", "baut"];
// fruits = ["banana"];  //assign to constant var

let response: any[] = [
  {
    statusCode: 200,
    message: "success",
    data: [
      {id: 1, name: "alwi"},
      {id: 2, name: "goks"}
    ]
  }
];

let bike = ["R1M", "Ducati Panigale V4S", "ZX-10R"];
bike = ["Supra Bapuck"];

/** ======= Tuples ======= */

let user: [string, number];
// user = [1, "mamat"]; // Error
user = ["maman", 1];

/** ======= Enum ======= */
/** 
 * Enum allow us to declare a set of named constants i.e a collection of related values 
 * that can be numeric or string values.
 */

/**
 * === Numerice Enum ===
 * Numeric enum are always assigned numeric values when they are stored. The first value always 
 * takes the numeric value of 0. while the other values in the enum are incremented by 1. 
 * We also have the option to initialize the first numeric value ourselves.
 */

enum Rank {
  EVOS = 5,
  RRQ = 1,
  BTR // = 2 (increment),
}

console.log([Rank.EVOS, Rank.RRQ, Rank.BTR])

enum Month {
  Jan = "January", 
  Feb = "Febuary", 
  Mar = "March"
}

console.log(Month.Jan);

/** ======= Function ======= */

const getName = (): string => {
  return "Alwi";
}

function sum(num1: number, num2: number): void {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

sum(10, 12);

// info: type alias
type Age = number;
let price: Age = 10_000;
console.log({price});

type MultiplyType = (num1: number, num2: number) => number; // (args type) => return type

const multiply: MultiplyType = (val1: number, val2: number): number => {
  return val1 * val2;
}

const multiplyResult = multiply(5,2);
console.log({multiplyResult});

/** ======= Object ======= */

const getUser = (): void => {
  let user = {
    name: "Alwi", 
    age: 20
  }

  /**
   * error 
  user = {
    address: "kendal"
  }  
   */
  console.log(user);
}

// slightly better

type Animal = {
  name: string, 
  legs: number
}

const duck: Animal = {
  name: "donald",
  legs: 4
}

/** ======= Union ======= */
/**
 * - Union type allows us to use more than one data type
 * - syntax: (number | string | ... | typeN)
 */

let phoneNumber: (string | number) = "08123433";
phoneNumber = 6231234;
// phoneNumber = false; // error: boolean are not assignable to string | number

/** ======= Function Default Parameter ======= */

const printFullname = (firstName: string, lastName: string = "Ganteng"): string => {
  return `${firstName} ${lastName}`;
}

console.log({printFullname: printFullname("Otong")});
console.log({printFullname: printFullname("Ucok", "Baba")});

/** ======= Function Nullable Parameter ======= */
const nullable = (param1: string, param2?: string): string => {
  return `${param1} ${param2}`;
}

console.log({nullabel: nullable("Alwi")});
console.log({nullabel: nullable("Alwi", "GG Gaming")});

/** ======= Class ======= */
/**
 * constructor(protected email: string)
 * is equal to
 * protected email: string;
 * constructor(email: string) {
 * this.email = email
 * }
 */

class User {

  public username: string;

  constructor(username: string, public email: string) {
    this.username = username
  }

}

const alwi = new User("alwi", "alwi@asdf.com");
console.dir(alwi);


/** ======= Inheritance ======= */

class Admin extends User {
  protected read: boolean = true; 
  protected write: boolean = true; 

  getAccess = () => {
    return {
      read: this.read,
      write: this.write
    }
  }
}

const admin = new Admin("admin 1", "user@admin");
console.dir({admin});
const adminAccess = admin.getAccess();
console.log({adminAccess});

/** ======= Super ======= */
class Supervisor extends User {
  constructor(public officeCode: string, username: string, email: string) {
   super(username, email);
  }
}

const sv = new Supervisor("alpha", "uh-supervisor", "user@supervisor");
console.dir(sv);
console.log({officeCode: sv.officeCode, username: sv.username});

/** ======= Setter And Getter ======= */
class Student {
  private _name: string = "";
  private _semester: number = 1;

  set name(value: string) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set semester(value: number) {
    if (value < 1 || value > 8) {
      throw new Error("Invalid semester value");
    }
    this._semester = value;
  }

  get semester() {
    return this._semester;
  }
}

try {
  const student = new Student();
  student.name = "alwi";
  // student.semester = 14;
  console.log({name: student.name, semester: student.semester});
} catch (error) {
  console.log((error as Error).message);
}
