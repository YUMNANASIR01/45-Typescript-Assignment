let Guest_list : string [] = [`Imran khan`,`Nawaz sharif`,`Asif Ali Zardari`];
// for(let i=0; i<Guest_list.length; i++){
//     console.log(`Respected sir` + Guest_list[i] + `,\n we invite you on dinner tomorrow.\nTHANKYOU.\n`)
// }
let not_present : string = `Nawaz sharif`;
let new_guest : string = `Altaf Hussain`;
Guest_list[1] = new_guest;
// for(let i=0; i<Guest_list.length; i++){
// console.log(`Respected Sir` + Guest_list[i] + `,\n we invite you on dinner tomorrow.\nTHANKYOU.\n`) 
// }
Guest_list.unshift(`Babar Azam`,`Sarfaraz`,`Rizwan`);
// for(let i=0; i<Guest_list.length; i++){
//     console.log(`Respected Sir` + Guest_list[i] + `,\n we invite you on dinner tomorrow.\nTHANKYOU.\n`) 
//     }
console.log(`\nunfortunately We can not arrange Big Table Only Two people Allow.`)
while(Guest_list.length>2){
    let remove_guest = Guest_list.pop();
    console.log(`sorry sir.${remove_guest} you are invited for dinner.`);
}
for(let i=0; i<Guest_list.length; i++){
     console.log(`Respected Sir` + Guest_list[i] + `,\n yes you are still invited on tomorrow dinner.\nTHANKYOU.\n`)    
  }
  Guest_list.splice(0,2)
  console.log(Guest_list)
