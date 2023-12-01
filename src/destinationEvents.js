import { calcLandingDistance } from './destinationCalc.js';
import { calcPressAlt } from './departureCalc.js';

import { results } from './results.js';

export const destCalc = () => {
    const button = document.querySelector('.btn');

    const runway = document.getElementById('runway');
    const surface = document.getElementById('surface');
    const windDegrees = document.getElementById('wind-degrees');
    const windMagnitude = document.getElementById('wind-magnitude');
    const temperature = document.getElementById('oat');
    const qnh = document.getElementById('qnh');
    const elevation = document.getElementById('elevation');
    const flaps = document.getElementById('flaps');
    
    const ld1 = document.getElementById('ld1');
    const ld2 = document.getElementById('ld2');
    
    const variables = Array.from(document.querySelectorAll('.form-control'));
    
    function calcAll(){
        let values = calcLandingDistance(qnh.value, elevation.value, temperature.value, windDegrees.value, windMagnitude.value, runway.value, surface.value, flaps.value);
        results.updateGroundRoll(values[0]);
        results.updateLandingDistance(values[1]);
    }
    
    function updateResults(){
        calcAll();
        ld1.textContent = results.getGroundRoll() + ' m';
        ld2.textContent = results.getLandingDistance() + ' m';
    }
    
    function validate(input){
        if (parseFloat(input.value) < input.min || parseFloat(input.value) > input.max || input.value == ""){
            input.classList.add("invalid");
            button.classList.add("shake");
            return false;
        }
        // max pa value in tables
        else if (input === elevation && calcPressAlt(qnh.value, elevation.value) > 8000 ){
            input.classList.add("invalid");
            button.classList.add("shake");
            alert("Pressure altitude is too high");
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

