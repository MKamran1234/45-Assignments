import { log } from "console";

let str1 = 'Alhan';
let str2 = 'Orhan';
let num1 =  5;
let num2 =  10;
let Arr  = [1,2,3,4,5]

//Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings:");
console.log(str1 === 'Alhan');
console.log(str1 === str2);

// Tests using the lower case  function
console.log("\nTests using the lower case function:");
console.log(str1.toLowerCase() === 'alhan');
console.log(str2.toLowerCase() !== 'orhan');

//Numerical tests
console.log("\nNumerical tests:");
console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 === 5);
console.log(num2 !== 10);

//Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or operators");
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3 ) || (num2 > 15));

//Test whether an item is an array
console.log("\nTests whether an item is an array");
console.log(Arr.includes(3));
console.log(Arr.includes(6));

//Test whether an item is not in an array
console.log("\nTests whether an item is not an array ");
console.log(!Arr.includes(6));
console.log(!Arr.includes(2));














