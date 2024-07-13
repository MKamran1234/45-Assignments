let usernames: string[] = ["Admin","Maha","Alhan","Anabia"];

usernames = []


if (usernames.length === 0) {
    console.log("We need to find some users!");
}else {
    usernames.forEach(oneuser => {
        if (oneuser === "Admin") {
            console.log(`Hello ${oneuser},would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneuser},thank you for logging in again.`);
        }
    });    
}













