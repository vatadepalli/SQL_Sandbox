console.log("Hello from NodeJS");

// const man = require("./person").man;
// console.log(man);

const Person = require("./person"); // Common JS
const person1 = new Person("Vijaya Aditya", 25);
person1.greeting();
