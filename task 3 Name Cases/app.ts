//store a person's name in a variable,and then print that person's name
//in lowercase,uppercase and titlecase.
const  personName: string = "shuMailA";

console.log(personName.toLowerCase());

console.log(personName.toUpperCase());
let firstLetter:string= personName.charAt(0).toUpperCase();

let restLetter:string 
= personName.slice(1).toLocaleLowerCase();

let titlecase = firstLetter + restLetter;
console.log(titlecase);


