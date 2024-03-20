"use strict";
let current_users = [`Admin`, `Eric`, `Carry`, `Ali`, `Dawood`];
let new_users = [`Admin`, `Hamza`, `Azhar`, `Hassnain`, `Babar`];
new_users.forEach(new_usersname => {
    let lowerCase = new_usersname.toLowerCase();
    if (current_users.map(current_user => current_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${new_usersname} is not avaliable. please write a different username`);
    }
    else {
        console.log(`username ${new_usersname} is avaliable.`);
    }
});
