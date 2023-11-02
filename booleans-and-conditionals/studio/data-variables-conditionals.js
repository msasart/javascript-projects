// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true; 

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
let verifedAstroCount = false;
    if (astronautCount <= 7) {
        verifedAstroCount = true;
    }
// add logic below to verify all astronauts are ready
  let astroStatus = false;
    if (astronautStatus === "ready") {
        astroStatus = true;
    }
// add logic below to verify the total mass does not exceed the maximum limit of 850000
let totalMassLimit = false; 
    if (totalMassKg < maximumMassLimit) {
        totalMassLimit = true;
    }
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
let fuelTemp = false;
    if(fuelTempCelsius  >= -300 && fuelTempCelsius <= -150) {
        fuelTemp = true;
    }
// add logic below to verify the fuel level is at 100%
let fuelLevelStatus = false;
    if (fuelLevel === "100%") {
        fuelLevelStatus =  true;
    }
// add logic below to verify the weather status is clear
let clearWeather = false;
    if (weatherStatus === "clear") {
        clearWeather = true;  
    }
// Verify shuttle launch can proceed based on above conditions

if (verifedAstroCount && astroStatus && totalMassLimit && fuelTemp && fuelLevelStatus && clearWeather) {
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log("------------------------------------------------------------------");
    console.log("Time: " + time);
    console.log("Astronaut Count: " + astronautCount);
    console.log("Crew Mass: " + crewMassKg + " kg");
    console.log("Fuel Mass: " + fuelMassKg + " kg");
    console.log("Shuttle Mass: " + shuttleMassKg + " kg");
    console.log("Total Mass: " + totalMassKg + " kg");
    console.log("Fuel Temperature: " + fuelTemp);
    console.log("Weather Status: " + weatherStatus);
    console.log("------------------------------------------------------------------");
    console.log("Have a safe trip astronauts!");
} else {
  console.log("Not ready for shuttle launch!")
}