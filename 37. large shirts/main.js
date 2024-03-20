"use strict";
function make_shirt(size = `large`, text = `I love Typescript`) {
    console.log(`creating a ${size} shirt with the message : ${text}`);
}
make_shirt();
make_shirt(`Medium`);
make_shirt(`small`, `I love Javascript`);
