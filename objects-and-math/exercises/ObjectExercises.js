const input = require('readline-sync');

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.floor(Math.random()*10) + 1}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.floor(Math.random()*10) + 1}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return Math.floor(Math.random()*10) + 1}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {return Math.floor(Math.random()*10) + 1}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1, 
   move: function () {return Math.floor(Math.random()*11)}
};
// After you have created the other object literals, add the astronautID property to each one.
superChimpOne.astronautID = 1;
salamander.astronautID = 2;
superChimpTwo.astronautID = 3;
dog.astronautID = 4;
waterBear.astronautID = 5;
// Create an array to hold the animal objects.
let animalArray = [superChimpOne, salamander, superChimpTwo, dog, waterBear];

// Print out the relevant information about each animal.
// console.log(animalArray);
// Start an animal race!
function crewReport(crew){
   let report = '';
   for (crew in animalArray){
     report +=`${animalArray[crew].name} is a ${animalArray[crew].species}. They are ${animalArray[crew].age} years old and ${animalArray[crew].mass}kilograms. Their ID is ${animalArray[crew].astronautID}.\n`;
   };
   return report.slice(0, -1);
};
console.log(crewReport());

function fitnessTest(array){
   let race = [], numSteps, turns;
   for (let i = 0; i < animalArray.length; i++){
      numSteps = 0;
      turns = 0;
      while(numSteps < 20){
         numSteps += animalArray[i].move();
         turns++;
      }
      race.push(`${animalArray[i].name} too ${turns} turns to take 20 steps.`);
   }
   return race;
}
console.log(fitnessTest());