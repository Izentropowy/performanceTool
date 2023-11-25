import { createCalculateButton } from "./wb";
import { createInput } from "./wb";
import { createInputContainer } from "./wb";
import { createInputGroup } from "./wb";
import { createResultContainer } from "./wb";
import { createTitle } from "./wb";
import { createDropdownInput } from "./wb";

function createDeparture() {
    const titleContainer = createTitle('Departure');

    const inputContainer = createInputContainer();

    // Create individual input groups
    const runwayInput = createInput('Runway hdg', '°', 'runway', 0, 360);
    const surfaceDropdown = createDropdownInput('Surface', ['Concrete', 'Grass'], 'surface');
    const windDegreesInput = createInput('Wind', '°', 'wind-degrees', 0, 360);
    const windMagnitudeInput = createInput('Wind', 'kt', 'wind-magnitude', 0, 100);
    const oatInput = createInput('OAT', '°C', 'oat', -40, 40);
    const qnhInput = createInput('QNH', 'hPa', 'qnh', 950, 1050);
    const elevationInput = createInput('Elevation', 'ft', 'elevation', -1250, 15000);
    const cruiseInput = createInput('Cruise', 'ft', 'cruise', 500, 15000);

    const group1 = createInputGroup(...runwayInput, ...surfaceDropdown);
    const group2 = createInputGroup(...windDegreesInput, ...windMagnitudeInput);
    const group3 = createInputGroup(...oatInput, ...qnhInput);
    const group4 = createInputGroup(...elevationInput, ...cruiseInput);

    inputContainer.appendChild(group1);
    inputContainer.appendChild(group2);
    inputContainer.appendChild(group3);
    inputContainer.appendChild(group4);

    const calculateButton = createCalculateButton();

    const tableRows = [
        { label: 'Takeoff Run', id: 'tor' },
        { label: 'Takeoff Distance', id: 'tod' },
        { label: 'Rate of Climb', id: 'roc' },
        { label: 'Time to Top of Climb', id: 'time' },
        { label: 'Distance to Top of Climb', id: 'distance' },
        { label: 'Fuel Burn to Top of Climb', id: 'fuel' }
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

export default createDeparture;