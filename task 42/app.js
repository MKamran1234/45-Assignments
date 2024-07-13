"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great! ${name}`);
}
let magician_names = ["Hancel", "gratel", "Shumaila"];
let Great_magicians = make_great(magician_names);
show_magicians(Great_magicians);
