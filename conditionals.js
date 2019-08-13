// IF
let num = "10";

if (num == 10) {
  console.log("x is 10");
}

// IF ELSE

num = 10;
num_2 = 5;

if (typeof num != "number") {
  // Strictly Equals
  console.log("x is not a number");
} else if (num > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is <= 10");
}

// TERINARY OPERATOR

const b = 10;
const color = x > 10 ? "red" : "blue";
console.log("TCL: color", color);

// SWITCH CASE

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
}
