// // Exporting Object
// const man = {
//   name: "Vijaya Aditya",
//   age: 25
// };

// module.exports = man;

// Exporting Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I an ${this.age}`);
  }
}

module.exports = Person;

// console.log(__dirname, __filename);
