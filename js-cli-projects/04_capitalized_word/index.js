// capitalize first letter and remain other small
let name = "kRiShna";
let capName = name.toLowerCase();
// console.log(capName);
let firstLetter = name[0]
// console.log(firstLetter);
let capFirstLetter = firstLetter.toUpperCase();
let newLetter = capName.replace(firstLetter, capFirstLetter);
console.log(newLetter)