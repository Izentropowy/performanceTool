import { calcTaxi, calcContingency, calcTrip, calcAlternate, calcReserve } from "./fuelCalc.js";
import { results } from "./results.js";

export const fuelCalc = () => {
    const button = document.querySelector('.btn');

    const destination = document.getElementById('destination');
    const taxi = document.getElementById('taxi');
    const alternate = document.getElementById('alternate');
    const rules = document.getElementById('rules');
    
    const taxiResult = document.getElementById('taxiResult');
    const tripResult = document.getElementById('tripResult');
    const contingencyResult = document.getElementById('contingencyResult');
    const alternateResult = document.getElementById('alternateResult');
    const reserveResult = document.getElementById('reserveResult');
    const minimumResult = document.getElementById('minimum');
    
    const variables = Array.from(document.querySelectorAll('.form-control'));
    
    function calcAll(){
        let fuelBurn = results.getFuelBurn();
        let taxiResult = calcTaxi(taxi.value);
        let tripResult = calcTrip(destination.value, fuelBurn);
        let contingencyResult = calcContingency(tripResult, fuelBurn);
        let alternateResult = calcAlternate(alternate.value, fuelBurn);
        let reserveResult = calcReserve(rules.value, fuelBurn);
        let minimum = taxiResult + tripResult + contingencyResult + alternateResult + reserveResult;

        return [taxiResult.toFixed(2), tripResult.toFixed(2), contingencyResult.toFixed(2), alternateResult.toFixed(2), reserveResult.toFixed(2), minimum.toFixed(2)];
    }
    
    function updateResults(){
        let results = calcAll();
        taxiResult.textContent = results[0] + ' l';
        tripResult.textContent = results[1] + ' l';
        contingencyResult.textContent = results[2] + ' l';
        alternateResult.textContent = results[3] + ' l';
        reserveResult.textContent = results[4] + ' l';
        minimumResult.textContent = results[5] + ' l';
    }
    
    
    button.addEventListener('click', () => {
        console.log(results.getFuelBurn());
        updateResults();
    });
}

