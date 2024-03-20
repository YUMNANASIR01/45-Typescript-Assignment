"use strict";
let animalsNames = ['cow', `Camel`, `Goat`, `sheep`];
for (let i of animalsNames) {
    console.log(i);
}
for (let i of animalsNames) {
    console.log(`${i} is a Domestic Animal`);
}
console.log(`All these animals ${animalsNames[0]},${animalsNames[1]},
${animalsNames[2]},${animalsNames[3]} meet is Halal in Islam`);
