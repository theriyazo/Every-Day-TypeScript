// Type Inference - ts implicitly declares the type of a variable when it is assing a value.

let num = 10; // here id is implicitly made number becouse the number is assigned to it.

// Gives error ❌
// id = '10'; 

//We can also explicitly specify the type, like this
let usn: String = '3PG17CS027';

// Basic Types
let id: number = 10;
let company: string = "Agaze";
let isPublished: boolean = true;
let x:any = 'Hello';

let ids: number[] = [1,2,3,4,5];
// ids.push('hello'); /*Throws an error */

let names: string[] = ['riyaz','ahamad'];
let arr:any = [1, 'hello', true];

// Tuple
let person:[number, string, boolean] = [10, "riyaz", true];
// let person2:[number, string, boolean] = ['hello', "riyaz", true]; /*Throws an error */

// We can make the tupes optional by postfixing '?'
// let person3:[number?, string?, boolean?] = ["hello", "riyaz", true];

// Tuple Array
let employee: [number, string][];

employee = [
    [1, 'Riyaz'],
    [2, 'Saaz'],
    [3, 'Raaz'],
]

// Union
let pid: string | number;

pid = '22';
pid = 22;

// Enum
enum Direction1{
    Up, /*By default the value is 0 */
    Down, /* 1 */
    Left, /* 2 */
    Right /* 3 */
}

// We can also assign value to it
enum Direction2{
    Up = 10, 
    Down,/*11*/
    Left,/*12*/
    Right/*13*/
}

// We can also assign value to it
enum Direction3{
    Up = 'Up', 
    Down= 'Down',
    Left= 'Left',
    Right= 'Right'
}

console.log(Direction1.Down);
console.log(Direction2.Right);
console.log(Direction3.Right);

// Output ⬇️
// 1
// 13
// Right
