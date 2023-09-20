// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384000;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof "Determination");
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 384000);
console.log(typeof 0.621);
// Calculate a space mission below
let milesToMars = distanceToMars * milesPerKm;
let hourToMars = distanceToMars / shuttleSpeed;
let daysToMars = hourToMars / 24;
// Print the results of the space mission calculations below
console.log(shuttleName+" will take " + daysToMars +  " days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = distanceToMoon * milesPerKm;
let hoursToMoon = distanceToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(shuttleName +" will take "+daysToMoon+" days to reach the Moon.")