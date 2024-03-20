let current_users : string[] = [`Admin`,`Eric`,`Carry`,`Ali`,`Dawood`]
let new_users : string[] = [`Admin`,`Hamza`,`Azhar`,`Hassnain`,`Babar`]
 new_users.forEach(new_usersname => {
    let lowerCase : string = new_usersname.toLowerCase();
    if(current_users.map(current_user => current_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${new_usersname} is not avaliable. please write a different username`);
    }
    else{
        console.log(`username ${new_usersname} is avaliable.`);  
    }
 })