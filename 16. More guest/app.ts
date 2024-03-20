let Guest_list : string [] = [`Imran khan`,`Nawaz sharif`,`Asif Ali Zardari`];
// for(let i=0; i<Guest_list.length; i++){
//     console.log(`Respected sir` + Guest_list[i] + `,\n we invite you on dinner tomorrow.\nTHANKYOU.\n`)
// }
let not_present : string = `Nawaz sharif`;
let new_guest : string = `Altaf Hussain`;
Guest_list[1] = new_guest;
for(let i=0; i<Guest_list.length; i++){
    console.log(`Respected Sir` + Guest_list[i] + `,\n we invite you on dinner tomorrow.\nTHANKYOU.\n`)
}
Guest_list.unshift(`Babar Azam`,`Sarfaraz`,`Rizwan`);
for(let i=0; i<Guest_list.length; i++){
    console.log(`Respected Sir` + Guest_list[i] + `,\n we invite you on dinner tomorrow. We found big table so we decided to invite Three more guest.\nTHANKYOU.\n`)
}
