"use strict";
const Guest_List = ["Maha", "Maliha", "Denis"];
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Mrs. ${Guest_List[i]}! \n you are invited to my dinner !\n`);
    console.log(`"Unfortunately ${Guest_List[1]},can't come to dinner.`);
}
Guest_List[1] = "farhad";
console.log("\nNEW LIST OF INVITATION: \n");
for (let j = 0; j < Guest_List.length; j++) {
    console.log(`Dear ${Guest_List[j]}:\n you are invited to dinner !`);
}
