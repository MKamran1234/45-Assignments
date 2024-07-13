"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great! ${name}`);
}
let magician_names = ["Hancel", "gratel", "Shumaila"];
let copy_magician_names = magician_names.slice();
let copy_great_magicians = make_great(copy_magician_names);
console.log("\nOriginal Array\n");
show_magicians(magician_names);
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
