function make_shirt(size:string = `large`,text:string = `I love Typescript`){
    console.log(`creating a ${size} shirt with the message : ${text}`)
}
make_shirt();
make_shirt(`Medium`);
make_shirt(`small`,`I love Javascript`);