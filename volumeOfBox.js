// second challenge
const volumeOfBox = function(obj) {
    return obj.width * obj["length"] * obj["height"];
    // return obj.width * obj["length"] * obj.height;
};


console.log(volumeOfBox({ width: 2, length: 5, height: 1 })); 
//➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }) 
//➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 }) 
// ➞ 30


// const volumeOfBox = function(obj) {
//     return obj.width * obj.length * obj["height"]
// };


// console.log(volumeOfBox({ width: 2, length: 5, height: 1 })); 
// //➞ 10

// volumeOfBox({ width: 4, length: 2, height: 2 }) 
// //➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) 
// // ➞ 30


