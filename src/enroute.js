import { createCalculateButton } from "./wb";
import { createInput } from "./wb";
import { createInputContainer } from "./wb";
import { createInputGroup } from "./wb";
import { createResultContainer } from "./wb";
import { createTableRow } from "./wb";
import { createTitle } from "./wb";
import { createDropdownInput } from "./wb";

function createEnroute() {
    const titleContainer = createTitle('Enroute');

    const inputContainer = createInputContainer();

    const mcpDropdown = createDropdownInput('MCP', ['max', '75%', '65%', '55%', '45%', 'min'], 'mcp');
    const qnhInput = createInput('QNH', 'hPa', 'qnh', 950, 1050);
    const cruiseInput = createInput('Cruise', 'ft', 'cruise', 2000, 15000);
    const isaDevInput = createInput('ISA dev', '°C', 'dev', -20, 20);
    
    const group1 = createInputGroup(...mcpDropdown, ...qnhInput);
    const group2 = createInputGroup(...cruiseInput, ...isaDevInput);

    inputContainer.appendChild(group1);
    inputContainer.appendChild(group2);

    const calculateButton = createCalculateButton();

    const tableRows = [
        { label: 'RPM', id: 'rpm' },
        { label: 'TAS', id: 'tas' },
        { label: 'Fuel Burn', id: 'fuel' },
        { label: 'Range', id: 'range' },
        { label: 'Endurance', id: 'endurance' }
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

export default createEnroute;