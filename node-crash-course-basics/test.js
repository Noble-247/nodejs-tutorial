const message = (name) => {
  return `Hello ${name}, welcome to NodeJS Tutorial`;
};

const addition = (num1, num2) => num1 + num2;

let greetings = message("Emmanuel");
let result = addition(10, 33.9);

console.log(greetings);
console.log("the result of the function is: " + result);
