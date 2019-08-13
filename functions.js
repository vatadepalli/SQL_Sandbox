function addNums(num1, num2) {
  return num1 + num2;
}

console.log(addNums(5, 3));

// Arrow Function (ES6)

const addNums2 = (var1, var2) => {
  return var1 + var2;
};

console.log(addNums2(3, 3));

// No need to use return here
const squared = var1 => var1 ** 2;

console.log(squared(4));
