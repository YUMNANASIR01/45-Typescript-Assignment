"use strict";
let Guest_list = [`Imran khan`, `Nawaz sharif`, `Asif Ali Zardari`];
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Respected sir` + Guest_list[i] + `,\n we invite you on dinner tomorrow.\nTHANKYOU.\n`);
}
let not_present = `Nawaz sharif`;
let new_guest = `Altaf Hussain`;
Guest_list[1] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Respected Sir` + Guest_list[i] + `,\n we invite you on dinner tomorrow.\nTHANKYOU.\n`);
}
console.log(`Mr.${not_present} will not coming tomorrow dinner.`);
