let number = 123;
let a = number % 10;
number/=10;
number = number.toFixed(0);
console.log(number);
let b = number%10;
number/=10;
number = number.toFixed(0);
let c = number%10;

console.log(a + " " + b + " " + c);