/**
 * JavaScript Data Types Example
 */

// String
let username = "Alice";

// Number
let age = 25;

// Boolean
let isStudent = true;

// Undefined
let address;

// Null
let car = null;

// Object
let person = {
    firstName: "Bob",
    lastName: "Smith"
};

// Array
let numbers = [1, 2, 3, 4, 5];

// Symbol
let id = Symbol("id");

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;

// Logging types
console.log(typeof username);       // string
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean
console.log(typeof address);    // undefined
console.log(typeof car);        // object (special case for null)
console.log(typeof person);     // object
console.log(typeof numbers);    // object
console.log(typeof id);         // symbol
console.log(typeof bigNumber);  // bigint