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