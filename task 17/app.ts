const Guest_List: string[] = ["Maha", "Maliha", "Denis"];

console.log(
  "Good News! We have found a bigger dinner table,so more space is available,so our new guest are:\n"
);
Guest_List.unshift("sneha");
Guest_List.splice(2, 0, "Alaska");
Guest_List.push("fareeha");

for (let a = 0; a < Guest_List.length; a++) {
  console.log(`Dear ${Guest_List[a]}:\n you are invited to dinner !`);
}
console.log(
  "Unfortunately, the new dinner table won't arrive in time, so we can only invite two peoplefor dinner.\n"
);
while (Guest_List.length > 2) {
  let notInvited = Guest_List.pop();
  console.log(
    `Sorry, Due to limites space we can't invites You to dinner, Miss ${notInvited}.\n`
  );
}
for (let i = 0; i < Guest_List.length; i++) {
  console.log(`Dear ${Guest_List[i]} : \n yor are still invited to dinner!\n`);
}
Guest_List.pop()
Guest_List.pop()

console.log(Guest_List);
