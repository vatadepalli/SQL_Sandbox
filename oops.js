// OOPS - ES5

// Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
};

// Instantiate object
const person1 = new Person("Vijaya Aditya", "Tadepalli", "6-17-1994");
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// CLASSES - ES6
class PersonES6 {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear = function() {
    return this.dob.getFullYear();
  };

  getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Instantiate object
console.log("ES6");
const person2 = new PersonES6("Vijaya Aditya", "Tadepalli", "6-17-1994");
console.log(person2);
console.log(person2.getBirthYear());
console.log(person2.getFullName());
