// lower case
var personName = "Eric";
console.log("lowercase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toUpperCase());
// titlecase
console.log("tiltlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
