// alert("Hello, World!");

console.log("Hello, World!");
console.error("What the fuck?");
console.warn("You've been warned!");

/*
var (old, global)
let (ES6 /ES2015) (Block Level Scope)
const (ES6 /ES2015) (Block Level Scope)
*/

let age_1 = 30;
console.log("TCL: age_1", age_1);

const age_2 = 40; // Always need to inatialise const with a literal.
// age_2 = 33; // Causes Error
console.log("TCL: age_2", age_2);

// Always use const, unless you know your will re-asign.
// Make the code more robust.

// DATA TYPES ------------------------------------//
/*
String, Numbers, Boolean, null, undefined, Symbol (ES6)
*/
const name = "Banna";
const age = 25;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // z is undefined

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x); // Bogus value of object
console.log(typeof y);
console.log(typeof z);

// CONCAT
console.log("My name is " + name + " and I am " + age + " years old.");
// ES6/ES2015 - TEMPELATE STRINGS -----------------//
console.log(`My name is ${name} and I am ${age} years old.`);

// STRINGS

const str = "Hello, World!";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(0, 5));
console.log(str.substring(0, 5).toUpperCase());

const items = "Fridge, Washing Machine, AC";
console.log(items.split(", "));

// ARRAYS -----------------------------------------//
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["Apple", 234, true];
console.log(fruits);
console.log(fruits[1]); // Arrays are 0 based.

fruits[3] = "Grapes";
console.log(fruits);

fruits.push("Pears");
console.log(fruits);

fruits.unshift("Strawberries");
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf("Grapes")); // -1 when not found

// OBJECT LITERALS ----------------------------------//

const person = {
  firstName: "Vijaya Aditya",
  lastName: "Tadepalli",
  age: 25,
  hobbies: ["Coding", "Music"],
  address: {
    street: "50 main st",
    city: "Chennai",
    state: "TN"
  }
};

console.log(person);
console.log(person.firstName, person.lastName);

const {
  firstName,
  lastName,
  address: { city }
} = person;
console.log(firstName, lastName, city);

person.email = "vatadepalli@gmail.com";
console.log(person);

// An array of Objects

const todo = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true
  },
  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: false
  }
];

console.log(todo[1].text);

const todoJSON = JSON.stringify(todo);
console.log(todoJSON);
