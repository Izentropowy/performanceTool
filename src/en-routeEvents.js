import { calcEnroute, calcPressAltCruise } from "./en-routeCalc.js";
import { results } from "./results.js";

export const routeCalc = () => {
    const button = document.querySelector('.btn');

    const mcp = document.getElementById('mcp');
    const qnh = document.getElementById('qnh');
    const cruise = document.getElementById('cruise');
    const isaDev = document.getElementById('dev');
    const isFL = document.getElementById('isFL');

    const rpm = document.getElementById('rpm');
    const tas = document.getElementById('tas');
    const fuel = document.getElementById('fuel');
    const range = document.getElementById('range');
    const endurance = document.getElementById('endurance');
    
    const variables = Array.from(document.querySelectorAll('.form-control'));

    function calcAll(){
        let values = calcEnroute(qnh.value, cruise.value, isaDev.value, mcp.value, isFL.value);
        let rpm = values[0];
        let tas = values[1];  
        let fuel = values[2];
        let range = values[3];
        let endurance = values[4];

        return [rpm, tas, fuel, range, endurance];
    }
    
    function updateResults(){
        let values = calcAll();
        rpm.textContent = values[0];
        tas.textContent = values[1] + ' kt';
        fuel.textContent = values[2] + ' l / h';
        range.textContent = values[3] + ' Nm';
        endurance.textContent = values[4];
        results.updateFuelBurn(values[2]);
    }
    
    function addInvalid(input, button){
        input.classList.add("invalid");
        button.classList.add("shake"); 
    }
    
    function validate(input){
        if (parseFloat(input.value) < input.min || parseFloat(input.value) > input.max || input.value == ""){
            addInvalid(input, button);
            return false;
        }
    
        // max pa value in tables
        else if (input === cruise && calcPressAltCruise(qnh.value, cruise.value, isFL.value) > 12000 ){
            addInvalid(input, button);
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
        if (validator === true && !calcEnroute(qnh.value, cruise.value, isaDev.value, mcp.value, isFL.value)){
            addInvalid(mcp, button);
            validator = false;
        }
        return validator;
    }
    
    button.addEventListener('click', () => {
        if (validateAll()){
            updateResults();
        }
    });
    
    button.addEventListener('animationend', () => button.classList.remove("shake"));    
}
