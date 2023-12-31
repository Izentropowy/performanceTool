import { createCalculateButton } from "./wb";
import { createInput } from "./wb";
import { createInputContainer } from "./wb";
import { createInputGroup } from "./wb";
import { createResultContainer } from "./wb";
import { createTitle } from "./wb";
import { createDropdownInput } from "./wb";

import { results } from "./results";

function createFuel() {
    const titleContainer = createTitle('Fuel');

    const inputContainer = createInputContainer();

    const destinationInput = createInput('Time to destination', 'min', 'destination', 0);
    const taxiInput = createInput('Taxi', 'min', 'taxi', 0);
    const alternateInput = createInput('Time to alternate', 'min', 'alternate', 0);
    const rulesDropdown = createDropdownInput('Flight rules', ['VFR', 'IFR'], 'rules');

    const group1 = createInputGroup(...destinationInput, ...taxiInput);
    const group2 = createInputGroup(...alternateInput, ...rulesDropdown);

    inputContainer.appendChild(group1);
    inputContainer.appendChild(group2);

    const calculateButton = createCalculateButton();

    const tableRows = [
        { label: 'Taxi', id: 'taxiResult', result: results.getTaxi() + ' l' },
        { label: 'Trip', id: 'tripResult', result: results.getTrip() + ' l' },
        { label: 'Contingency', id: 'contingencyResult', result: results.getContingency() + ' l' },
        { label: 'Alternate', id: 'alternateResult', result: results.getAlternate() + ' l' },
        { label: 'Final reserve', id: 'reserveResult', result: results.getReserve() + ' l' },
        { label: 'Minimum required', id: 'minimum', result: results.getMinimum() + ' l' },
    ];

    const resultContainer = createResultContainer(tableRows, false);
    resultContainer.classList.add('mb-3');

    // Create the main container to hold all sections
    const mainContainer = document.createElement('div');
    mainContainer.appendChild(titleContainer);
    mainContainer.appendChild(inputContainer);
    mainContainer.appendChild(calculateButton);
    mainContainer.appendChild(resultContainer);

    return mainContainer;
}

export default createFuel;