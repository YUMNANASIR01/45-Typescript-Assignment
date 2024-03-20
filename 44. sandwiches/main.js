"use strict";
function makeSandwich(item) {
    console.log(`Making your sandwich with:`);
    item.forEach(element => console.log(" - " + element));
    console.log(`Enjoy your sandwich !`);
}
makeSandwich([`Ham`, `chese`, `lettuce`]);
makeSandwich([`Turkey`, `Bacon`]);
makeSandwich([`Peanut butter`, `stawberry jam`]);
