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
        let timeToc = results.getTimeToc();
        let fuelBurnToc = results.getFuelToc();
        
        if (fuelBurn === 0) {
            fuelBurn = 35;
            alert("Using standard fuel burn 35 l / h. Fill out the enroute tab.");
        }

        let taxiResult = calcTaxi(taxi.value);
        let tripResult = calcTrip(destination.value, fuelBurn, timeToc, fuelBurnToc);
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
    
    function validate(input){
        if (parseFloat(input.value) < input.min || input.value == ""){
            input.classList.add("invalid");
            button.classList.add("shake");
            return false;
        }

        input.classList.remove("invalid");
        return true;
    }
    
    function validateAll(){
        let validator = true;
        for (let element of variables) {
            if (!validate(element)) validator = false;
        }
        return validator;
    }

    function save_data_to_localstorage(id, value) {
        localStorage.setItem(id, value);
    }

    button.addEventListener('click', () => {
        if (validateAll()){
            updateResults();
        }
        for (let element of variables) {
            save_data_to_localstorage(element.id, element.value);
        }
    });

    button.addEventListener('animationend', () => button.classList.remove("shake"));
}

