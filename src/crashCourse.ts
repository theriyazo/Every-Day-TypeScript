// 1️⃣ Type Inference - ts implicitly declares the type of a variable when it is assing a value.

let num = 10; // here id is implicitly made number becouse the number is assigned to it.

// Gives error ❌
// id = '10';

//We can also explicitly specify the type, like this
let usn: String = "3PG17CS027";

// 2️⃣ Basic Types
let id: number = 10;
let company: string = "Agaze";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
// ids.push('hello'); /*Throws an error */

let names: string[] = ["riyaz", "ahamad"];
let arr: any = [1, "hello", true];

// 3️⃣ Tuple
let person: [number, string, boolean] = [10, "riyaz", true];
// let person2:[number, string, boolean] = ['hello', "riyaz", true]; /*Throws an error */

// We can make the tupes optional by postfixing '?'
// let person3:[number?, string?, boolean?] = ["hello", "riyaz", true];

// 4️⃣ Tuple Array
let employee: [number, string][];

employee = [
  [1, "Riyaz"],
  [2, "Saaz"],
  [3, "Raaz"],
];

// 5️⃣ Union
let pid: string | number;

pid = "22";
pid = 22;

// 6️⃣ Enum
enum Direction1 {
  Up /*By default the value is 0 */,
  Down /* 1 */,
  Left /* 2 */,
  Right /* 3 */,
}

// We can also assign value to it
enum Direction2 {
  Up = 10,
  Down /*11*/,
  Left /*12*/,
  Right /*13*/,
}

// We can also assign value to it
enum Direction3 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction1.Down);
console.log(Direction2.Right);
console.log(Direction3.Right);

// Output ⬇️
// 1
// 13
// Right

// 7️⃣ Objects

// Normal JavaScript Object
// const user = {
//   id: 27,
//   fname: "RiyazAhamad",
// };

// TypeScript object
const user: {
  id: number;
  fname: string;
} = {
  id: 27,
  fname: "RiyazAhamad",
};

// OR
type User = {
  id: number;
  fname: string;
};

const user1: User = {
  id: 27,
  fname: "RiyazAhamad",
};

// 8️⃣ Type Assertion
// Tells explictly telling the compiler that we want specific type
let cid: any = 23;
let customerId = <number>cid;
// OR
let customerId1 = cid as number;

// 9️⃣ Functions
// We explicitly need to specify type of the arguments and return type, For Exmaple
function addTwo(a: number, b: number): number {
  return a + b;
}

// Void type, function which is not suppose to return anything
function log(message: number | string): void {
  console.log(message);
}

log("Hello World");
log(23);

// Output ⬇️
// Hello World
// 23

// 1️⃣0️⃣ Interfaces
// Cant use Interfaces with premitives or unions
interface UserInterface {
  id: number;
  fname: string;
}

const user2: UserInterface = {
  id: 23,
  fname: "Riyaz",
};

// This not possible
// interface Point = number | string;
// But is valid for type
type Point = number | string;

// We can specify some properties as optionals in interfaces
interface UserInterface1 {
  id: number;
  fname: string;
  lname?: string;
}
const user3: UserInterface1 = {
  id: 23,
  fname: "Riyaz",
  // lname: "Ahamad",
};

// readonly for the object properties
interface UserInterface2 {
  readonly id: number;
  fname: string;
  lname?: string;
}
const user4: UserInterface2 = {
  id: 23,
  fname: "Riyaz",
};

// Updating value is not possible
// user4.id = 20;

// 1️⃣1️⃣ Interfaces Function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = function (x: number, y: number): number {
  return x + y;
};

// 1️⃣2️⃣ Classes
// the constructor method is called whenever a new class object is created.

class Person {
  id: number;
  fname: string;

  constructor(id: number, fname: string) {
    this.id = id;
    this.fname = fname;
    console.log(`Constuctor is called: ${id}, ${fname}`);
  }

  register(user?: string) {
    return `${user} is registered!`;
  }
}

const mike = new Person(1, "Mike Ponser");
const riyaz = new Person(2, "RiyazAhamad");

console.log(riyaz.register("Driving Lisence"));
// OutPut ⬇️
// Constuctor is called: 1, Mike Ponser
// Constuctor is called: 2, RiyazAhamad
// Driving Lisence is registered!

// Acess specifiers in Class
// 1. public (this is by default, no need to specify explicitly)
// 2. private (Only accessble to its methods)
// 3. protected

interface PersonInterface {
  cid: number;
  fullName: string;
  register(): string;
}

// Main Class
class Person1 implements PersonInterface {
  cid: number;
  fullName: string;

  constructor(cid: number, fname: string) {
    this.cid = cid;
    this.fullName = fname;
  }

  register(user?: string) {
    /* '?' indicates that it is optional */
    return `${user} is registered!`;
  }

  printCid() {
    console.log(`${this.fullName} has cid: ${cid}`);
  }
}

const saif = new Person1(516, "Saifulla Imran");

console.log(saif);
// Output ⬇️
// Customer { cid: 516, fullName: 'Saifulla Imran' }

// Subclasses
class Employee extends Person1 {
  position: string;

  constructor(id: number, fname: string, position: string) {
    super(cid, fname);

    this.position = position;
  }
}

const sarf = new Employee(231, "SarfExcel", "Manager");

console.log(sarf);
console.log(sarf.register("SarfExcel"));
// Output ⬇️
// Employee { cid: 23, fullName: 'SarfExcel', position: 'Manager' }
// SarfExcel is registered!

// 1️⃣3️⃣ Generics
function getArray(arr: any[]): any[] {
  return new Array().concat(arr);
}

const numArray = getArray([1, 2, 3, 4]);
const strArray = getArray(["Riyaz", "Brand", "Pitt"]);

// This should not be possible as it is only num Array, to avoid such problems we use generics
// numArray.push('Ravi');

function get1Array <T> (arr: T[]): T[] {
  return new Array().concat(arr);
}
// T acts as a placeholder for the type, so we can create generic functionsff
const num1Array = get1Array <number> ([1, 2, 3, 4]);
const str1Array = get1Array <string> (["Riyaz", "Brand", "Pitt"]);

console.log(numArray);
