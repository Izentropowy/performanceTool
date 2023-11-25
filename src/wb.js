function createWb() {
    const titleContainer = createTitle('Weight and Balance');

    const inputContainer = createInputContainer();

    const blockFuelInput = createInput('Block Fuel', 'l', 'block-fuel');
    const row1Input = createInput('Row 1', 'kg', 'row-1',);
    const row2Input = createInput('Row 2', 'kg', 'row-2',);
    const baggage1Input = createInput('Baggage 1', 'kg', 'baggage-1');
    const baggage2Input = createInput('Baggage 2', 'kg', 'baggage-2');

    const group1 = createInputGroup(blockFuelInput[0], blockFuelInput[1]);
    const group2 = createInputGroup(row1Input[0], row1Input[1], row2Input[0], row2Input[1]);
    const group3 = createInputGroup(baggage1Input[0], baggage1Input[1], baggage2Input[0], baggage2Input[1]);

    inputContainer.appendChild(group1);
    inputContainer.appendChild(group2);
    inputContainer.appendChild(group3);

    const resultContainer = createResultContainer(true);

    // Create the main container to hold all sections
    const mainContainer = document.createElement('div');
    mainContainer.appendChild(titleContainer);
    mainContainer.appendChild(inputContainer);
    mainContainer.appendChild(resultContainer);

    return mainContainer
}

export function createTitle(title) {
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('container-fluid');

    const row = document.createElement('div');
    row.classList.add('row');

    const para = document.createElement('p');
    para.classList.add('display-5', 'text-center', 'fw-normal', 'title');
    para.textContent = title;

    row.appendChild(para);
    titleContainer.appendChild(row);
    
    return titleContainer;
}

export function createInputContainer() {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('container', 'settings', 'mb-5');

    return inputContainer;
}

export function createResultContainer(chart) {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('container');

    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = 'Results';

    const table = document.createElement('table');
    table.classList.add('table');

    const towRow = createTableRow('TOW', 'tow');
    const momentRow = createTableRow('Moment', 'moment');

    table.appendChild(towRow);
    table.appendChild(momentRow);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(table);
    card.appendChild(cardBody);

    if (chart) {
        const canvasDiv = document.createElement('div');
        const canvas = document.createElement('canvas');
        canvas.id = 'myChart';
    
        canvasDiv.appendChild(canvas);
        cardBody.appendChild(canvasDiv);
    }

    resultContainer.appendChild(card);

    return resultContainer;
}

export function createInput(title, placeholder, id) {
    const div = document.createElement('div');
    div.classList.add('input-group-text', 'input-title');
    div.textContent = title;

    const input = document.createElement('input');
    input.type = 'number';
    input.classList.add('form-control');
    input.id = id;
    input.placeholder = placeholder;

    return [div, input];
}

export function createInputGroup(...inputs) {
    const inputGroup = document.createElement('div');
    inputGroup.classList.add('input-group');

    inputs.forEach(element => {
        inputGroup.appendChild(element);
    });

    return inputGroup;
}

export function createTableRow(thText) {
    const row = document.createElement('tr');

    const th = document.createElement('th');
    th.textContent = thText;

    const td = document.createElement('th');
    td.textContent = '0';

    row.appendChild(th);
    row.appendChild(td);

    return row;
}

export function createCalculateButton() {
        // Create the button container
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('container', 'mb-3', 'd-flex', 'justify-content-center');
    
        // Create the button
        const calculateButton = document.createElement('button');
        calculateButton.type = 'button';
        calculateButton.classList.add('btn', 'btn-primary');
        calculateButton.textContent = 'Calculate';

        buttonContainer.appendChild(calculateButton);

        return buttonContainer;
}

export default createWb;