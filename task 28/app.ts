let age :number = 21;

if (age < 2) {
    console.log("The person is a baby.");
}
else if(age >= 2 &&  age < 4){
    console.log("The person is a toddler.");
}
else if(age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >=13 && age < 18){
    console.log("The person is teenager.");
}
else if (age >= 18 && age < 65){
    console.log("The person is an adult.");
}
else{
    console.log("The person is an older.");
}