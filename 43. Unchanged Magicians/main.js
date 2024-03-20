"use strict";
let magician = [`Harry poter`, `Hermione Granger`, `Ron weasley`];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++)
        magicianArray[i] = 'The great ' + magicianArray[i];
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log(`\n\nThis is my original array`);
show_magicians(magician);
console.log(`\n\nThis is my modified copy of the array`);
show_magicians(copyMagicianArray);
