// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}






function validateInput(testInput) {
    // console.log(testInput)
        if (testInput === ""){
            return "Empty";
        } else if(isNaN(testInput)) {
             return "Not a Number";
        } else if(typeof testInput === "number"){ 
            return "Is a Number";
        } else {
            console.log(testInput);
            return testInput;
        }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty"){
        alert("All fields are required!");
    } else if(validateInput(fuelLevel) === "Not a Number"){
        alert("Please input a number for Fuel Level");
    } else if(validateInput(cargoMass) === "Not a Number"){
        alert("Please input a number for Cargo Level");
    } else if(validateInput(pilot) === "Is a Number"){
        alert("Error: you submitted a number for Pilot Name");
    } else if(validateInput(copilot) === "Is a Number"){
        alert("Error:you submitted a number for Co-Pilot Name");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `CoPilot ${copilot} is ready for launch`;
    }
    
if(fuelLevel < 10000 && cargoMass > 10000){
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "There is not enough fuel for the journey.";
    cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
    launchStatus.style.color = 'red';
    launchStatus.innerHTML = "Shuttle not ready for launch";  
    } else if(fuelLevel < 10000 && cargoMass <= 10000){
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "There is not enough fuel for the journey.";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = "Shuttle not ready for launch"; 
    } else if(fuelLevel >= 10000 && cargoMass > 10000){
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = "Shuttle not ready for launch";
    } else {
        launchStatus.style.color = 'green';
        launchStatus.innerHTML = "Shuttle is ready for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
} 


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomInteger = Math.floor(Math.random() * planets.length);
    return planets[randomInteger];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
