"use strict";
let magician = [`Harry poter`, `Hermione Granger`, `Ron weasley`];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++)
        magician[i] = 'The great ' + magicianArray[i];
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
