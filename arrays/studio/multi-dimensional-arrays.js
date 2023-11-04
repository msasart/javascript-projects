const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinetZero = food.split(",").sort();
let cabinetOne = equipment.split(",").sort();
let cabinetTwo = pets.split(",").sort();
let cabinetThree = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(cabinetZero, cabinetOne, cabinetTwo, cabinetThree);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userInput = input.question(`Please select a cabinet number between 0-3: `);
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userInput > 3) {
    console.log (`Sorry, ${userInput} is greater than the number of cabinets available. Please pick a number between 0 - ${cargoHold.length -1}`);
} else {
console.log(`You selected cabinet ${userInput}. 
This cabinet contains the following items: 
    ${cargoHold[userInput].join(", ")}`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let selectedItem = input.question(`Name a particular item you are searching for: `);

let itemSelected;

if (cargoHold[userInput].includes(selectedItem)) {
    itemSelected = "DOES";
} else {
    itemSelected = "DOES NOT";
}
    console.log(`Cabinet ${itemSelected} contain ${selectedItem}`);