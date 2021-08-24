// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
        break;
    }
} 


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
