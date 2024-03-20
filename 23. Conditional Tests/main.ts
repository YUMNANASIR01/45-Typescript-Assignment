// TEST NO 1 strict equality comparision (True)
let car : string = `subaru`;
console.log("Is car ==`subaru` ? I predict True.");
console.log(car == `subaru`); // True
 
// TEST NO 2 strict equality comparision (True)

console.log("Is car ===`subaru` ? I predict True.");
console.log(car ===`subaru`); // True
 
// TEST NO 3 strict inequality comparision (False)
console.log("Is car !=`subaru` ? I predict False.");
console.log(car != `subaru`); // False

// TEST NO 4 strict inequality comparision  (False)
console.log("Is car !==`subaru` ? I predict False.");
console.log(car  !==`subaru`); // False

// TEST NO 5 less than comparision (False)
console.log("Is car  < `subaru` ? I predict False.");
console.log(car < `subaru`); // False 

// TEST NO 6 Greater than comparison (False)
console.log("Is car > `subaru` ? I predict False.");
console.log(car  > `subaru`); // False

// TEST NO 7 Less than or equal comparison (True)
console.log("Is car <=`subaru` ? I predict True.");
console.log(car <= `subaru`); // True

// TEST NO 8 Greater than or equal comparison (True)
console.log("Is car >=`subaru` ? I predict True.");
console.log(car >= `subaru`); // True

// TEST NO 9 Checking truthness (True)
console.log("Is car ? `subaru` ? I predict True.");
console.log(car); // True (non- empty string is true)
