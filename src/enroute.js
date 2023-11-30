import { createCalculateButton } from "./wb";
import { createInput } from "./wb";
import { createInputContainer } from "./wb";
import { createInputGroup } from "./wb";
import { createResultContainer } from "./wb";
import { createTitle } from "./wb";
import { createDropdownInput } from "./wb";

import { results } from "./results";

function createEnroute() {
    const titleContainer = createTitle('Enroute');

    const inputContainer = createInputContainer();

    const mcpDropdown = createDropdownInput('MCP', ['max', '75%', '65%', '55%', '45%', 'min'], 'mcp');
    const qnhInput = createInput('QNH', 'hPa', 'qnh', 950, 1050);
    const cruiseInput = createCruiseGroup();
    const isaDevInput = createInput('ISA dev', '°C', 'dev', -20, 20);
    

    const group1 = createInputGroup(...mcpDropdown, ...qnhInput);
    const group2 = createInputGroup(...cruiseInput, ...isaDevInput);

    inputContainer.appendChild(group1);
    inputContainer.appendChild(group2);

    const calculateButton = createCalculateButton();

    const tableRows = [
        { label: 'RPM', id: 'rpm', result: results.getRpm() + ' rpm'},
        { label: 'TAS', id: 'tas', result: results.getTas() + ' kt'},
        { label: 'Fuel Burn', id: 'fuel', result: results.getFuelBurn() + ' l/h'},
        { label: 'Range', id: 'range', result: results.getRange() + ' NM'},
        { label: 'Endurance', id: 'endurance', result: results.getEndurance() +  ' h'}
    ];
    

    const resultContainer = createResultContainer(tableRows, false);

    // Create the main container to hold all sections
    const mainContainer = document.createElement('div');
    mainContainer.appendChild(titleContainer);
    mainContainer.appendChild(inputContainer);
    mainContainer.appendChild(calculateButton);
    mainContainer.appendChild(resultContainer);

    return mainContainer;
}

function createCruiseGroup() {
    // Create the title div
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('input-group-text', 'input-title');
    titleDiv.textContent = 'Cruise';

    // Create the cruise group div
    const cruiseGroupDiv = document.createElement('div');
    cruiseGroupDiv.classList.add('cruise-group');

    // Create the input element
    const cruiseInput = document.createElement('input');
    cruiseInput.type = 'number';
    cruiseInput.classList.add('form-control');
    cruiseInput.placeholder = 'ft';
    cruiseInput.id = 'cruise';
    cruiseInput.min = '2000';
    cruiseInput.max = '15000';

    // Create the select element
    const isFLSelect = document.createElement('select');
    isFLSelect.classList.add('form-control');
    isFLSelect.id = 'isFL';

    // Create and add options to the select element
    const altitudeOption = document.createElement('option');
    altitudeOption.textContent = 'altitude';

    const flightLevelOption = document.createElement('option');
    flightLevelOption.textContent = 'flight level';

    isFLSelect.appendChild(altitudeOption);
    isFLSelect.appendChild(flightLevelOption);

    // Append the input and select elements to the cruise group div
    cruiseGroupDiv.appendChild(cruiseInput);
    cruiseGroupDiv.appendChild(isFLSelect);

    // Return an array containing the title div and the cruise group div
    return [titleDiv, cruiseGroupDiv];
}

export default createEnroute;