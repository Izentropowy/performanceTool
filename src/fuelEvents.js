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
        let minimum = parseFloat(taxiResult) + parseFloat(tripResult) + parseFloat(contingencyResult) + parseFloat(alternateResult) + parseFloat(reserveResult);

        results.updateTaxi(taxiResult);
        results.updateTrip(tripResult);
        results.updateContingency(contingencyResult);
        results.updateAlternate(alternateResult);
        results.updateReserve(reserveResult);
        results.updateMinimum(minimum);
    }
    
    function updateResults(){
        calcAll();
        taxiResult.textContent = results.getTaxi() + ' l';
        tripResult.textContent = results.getTrip() + ' l';
        contingencyResult.textContent = results.getContingency() + ' l';
        alternateResult.textContent = results.getAlternate() + ' l';
        reserveResult.textContent = results.getReserve() + ' l';
        minimumResult.textContent = results.getMinimum() + ' l';
    }
    
    button.addEventListener('click', () => {
        updateResults();
    });
}

