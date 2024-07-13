const Guest_List: string[] = ["Maha", "Maliha", "Denis"];

console.log("\nNEW LIST OF INVITATION: \n");
for (let j = 0; j < Guest_List.length; j++) {
  console.log(`Dear ${Guest_List[j]}:\n you are invited to dinner !`);
}
console.log(
  "Good News! We have found a bigger dinner table,so more space is available,so our new guest are:\n"
);
Guest_List.unshift("sneha");
Guest_List.splice(2,0,"Alaska");
Guest_List.push("fareeha")

for (let a= 0; a < Guest_List.length; a++) {
    console.log(`Dear ${Guest_List[a]}:\n you are invited to dinner !`);
    
}



