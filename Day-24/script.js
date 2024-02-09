const yourNumber = 100;
const myNumber = new Number(100);

console.log(yourNumber);
console.log(myNumber);

console.log(myNumber.toString().length);

const myDate = new Date;
console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());

const yourBirthyear = Number(prompt("Enter your birth year !"));

console.log(yourBirthyear);

const yourAge = myDate.getFullYear()-yourBirthyear;
console.log("your age = ",yourAge);

const newNum = new Number(140.75);
console.log(newNum);




