import { calcTaxi, calcContingency, calcTrip, calcAlternate, calcReserve } from "./fuelCalc.js";

import { getResults } from "./en-routeEvents.js";

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
const minimum = document.getElementById('minimum');

const variables = Array.from(document.querySelectorAll('.form-control'));

function calcAll(){
    let taxiResult = calcTaxi(taxi.value).toFixed(2);
    // let tripResult = calcTaxi(trip.value).toFixed(2);
    // let contingencyResult = calcTaxi(taxi.value).toFixed(2);
    // let alternateResult = calcAlternate(alternate.value).toFixed(2);
    // let reserveResult = calcReserve(taxi.value).toFixed(2);
    // let minimum = taxiResult + tripResult + contingencyResult + alternateResult + reserveResult;
    return [taxiResult];
}

function updateResults(){
    let results = calcAll();
    taxiResult.textContent = results[0] + ' l';
}


button.addEventListener('click', () => {
    console.log(getResults());
    updateResults();
});