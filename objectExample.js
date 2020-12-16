let car = {

    brand: "Ford",  
    model: "Ranger",  
    colour: "red",
    topSpeed: 200,
    needsFuel: true,
    yearsMade: [1997, 1998, 1999, 2000, 2001, 2002, 2003],
    
    fillUp: function() {
        car.needsFuel = false;
    },

    printKeys: function() {
        let keys = Object.keys(car);
        for (i = 0; i < keys.length; i++) {
            console.log(keys[i]);
        }
    }

};


let key = "colour";

console.log(car.colour);
/// will access the colour key of the object and return its value
console.log(car["colour"]);
// will also access the colour, different syntax
console.log(car[key]);
// will also access the colour, using a variable in place of the keyname
console.log(car["yearsMade"][1]);
// this will access the yearsmade array, and bring back its second item (index 1)
console.log(car.topSpeed);
car.topSpeed = 220;
console.log(car.topSpeed);
// Updating the value of an element
car.numberOfDoors = 4;
//creates a new key value pair on the object called numberOfDoors
console.log(car.numberOfDoors);

console.log(car.needsFuel);
car.fillUp();
console.log(car.needsFuel);

car.printKeys()
