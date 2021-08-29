// Write your JavaScript code here!


window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       const planet = pickPlanet(listedPlanets);
       console.log(planet);
       addDestinationInfo(this.document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("pilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let form = document.querySelector("form");
    let list = document.getElementById('faultyItems')
    list.style.visibility = 'hidden';
    form.addEventListener("submit", function(event){
        event.preventDefault();
    let pilotInput = document.querySelector('input[name="pilotName"]');
    let copilotInput = document.querySelector('input[name="copilotName"]');
    let fuelLevelInput = document.querySelector('input[name="fuelLevel"]');
    let cargoMassInput = document.querySelector('input[name="cargoMass"]');
    let pilotValue = pilotInput.value;
    let copilotValue = copilotInput.value;
    let fuelLevelValue = fuelLevelInput.value;
    let cargoMassValue = cargoMassInput.value;
        formSubmission(this.document, list, pilotValue, copilotValue, fuelLevelValue, cargoMassValue);

        
    })
});