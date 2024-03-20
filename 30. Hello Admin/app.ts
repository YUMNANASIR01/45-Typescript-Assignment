let userNames: string[] = [`Admin`,`Bilal`,`Carry`,`David`,`Eric`];
for (let i = 0; i < userNames.length; i++){
 if (userNames [i] === "Admin") {
   console.log("Hello admin, would you like to see a status report ?")
 }else{
 console.log(`Hello ${userNames[i]}, Thank you for logging in again`)
 }
 }