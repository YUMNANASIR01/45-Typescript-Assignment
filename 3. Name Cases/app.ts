// lower case
let personName : string = "Eric"
console.log("lowercase:",personName.toLowerCase());

// uppercase
console.log("uppercase:",personName.toUpperCase());

// titlecase
console.log("tiltlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));
