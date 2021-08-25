// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementbyId("missionTarget");
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


let pilotName = document.querySelector("input[name=pilotName]");
let copilotName = document.querySelector("input[name=copilotName]");
let fuelLevel = document.querySelector("input[name=fuelLevel]");
let cargoMass = document.querySelector("input[name=cargoMass]");
let form = document.querySelector("form");

function validateInput(testInput) {
    for (var testInput in formFields)
        if (testInput.value === ""){
            return "Empty";
        } else if(isNan(testInput.value)) {
             return "Not a Number";
        } else if(typeof testInput.value === "number"){ 
            return "Is a Number";
        } else {
            return "good";
        }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementbyId("pilotStatus");
    let copilotStatus = document.getElementbyId("copilotStatus");
    let fuelStatus = document.getElementbyId("fuelStatus");
    let cargoStatus = document.getElementbyId("cargoStatus");
    let launchStatus = document.getElementbyId("launchStatus");
    let faultyItems = document.getElementbyId("faultyItems");

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!");
    } else if(validateInput(fuelLevel) === "Not a Number"){
        alert("Please input a number for Fuel Level");
    } else if(validateInput(cargoLevel) === "Not a Number"){
        alert("Please input a number for Cargo Level");
    } else if(validateInput(pilot) === "Is a Number"){
        alert("Error: you submitted a number for Pilot Name");
    } else if(validateInput(copilot) === "Is a Number"){
        alert("Error:you submitted a number for Co-Pilot Name");
    } else {
        faultyItems.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `CoPilot ${copilot} is ready for launch`;
    if(fuelLevel < 10000){
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = "There is not enough fuel for the journey.";
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = "Shuttle not ready for launch";
    } else if(cargoLevel > 10000){
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = "Shuttle not ready for launch";
    } else {
        launchStatus.style.color = 'green';
        launchStatus.innerHTML = "Shuttle is ready for launch";
    }



    }
} 


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = 0;
    index += Math.random() % planets.length;
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
