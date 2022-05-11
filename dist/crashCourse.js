"use strict";
// Type Inference - ts implicitly declares the type of a variable when it is assing a value.
let num = 10; // here id is implicitly made number becouse the number is assigned to it.
// Gives error ❌
// id = '10'; 
//We can also explicitly specify the type, like this
let usn = '3PG17CS027';
// Basic Types
let id = 10;
let company = "Agaze";
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
// ids.push('hello'); /*Throws an error */
let names = ['riyaz', 'ahamad'];
let arr = [1, 'hello', true];
// Tuple
let person = [10, "riyaz", true];
// let person2:[number, string, boolean] = ['hello', "riyaz", true]; /*Throws an error */
// We can make the tupes optional by postfixing '?'
// let person3:[number?, string?, boolean?] = ["hello", "riyaz", true];
// Tuple Array
let employee;
employee = [
    [1, 'Riyaz'],
    [2, 'Saaz'],
    [3, 'Raaz'],
];
// Union
let pid;
pid = '22';
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right"; /* 3 */
})(Direction1 || (Direction1 = {}));
// We can also assign value to it
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 10] = "Up";
    Direction2[Direction2["Down"] = 11] = "Down";
    Direction2[Direction2["Left"] = 12] = "Left";
    Direction2[Direction2["Right"] = 13] = "Right"; /*13*/
})(Direction2 || (Direction2 = {}));
// We can also assign value to it
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction1.Down);
console.log(Direction2.Right);
console.log(Direction3.Right);
// Output ⬇️
// 1
// 13
// Right
