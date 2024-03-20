"use strict";
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createCar("corolla", "Toyota", { color: "white", year: "2024" });
console.log(mycar);
