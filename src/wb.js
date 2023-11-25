function createWb() {
    // Create container for the title
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('container-fluid');

    // Create the row with the title
    const titleRow = document.createElement('div');
    titleRow.classList.add('row');

    const title = document.createElement('p');
    title.classList.add('display-5', 'text-center', 'fw-normal', 'title');
    title.textContent = 'Weight and Balance';

    titleRow.appendChild(title);
    titleContainer.appendChild(titleRow);

    // Create container for the input groups
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('container', 'settings', 'mb-5');

    // Create individual input groups
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

    // Create container for the card and results
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('container');

    // Create the card with results
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

    const canvasDiv = document.createElement('div');
    const canvas = document.createElement('canvas');
    canvas.id = 'myChart';

    canvasDiv.appendChild(canvas);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(table);
    cardBody.appendChild(canvasDiv);
    card.appendChild(cardBody);

    resultContainer.appendChild(card);

    // Create the main container to hold all sections
    const mainContainer = document.createElement('div');
    mainContainer.appendChild(titleContainer);
    mainContainer.appendChild(inputContainer);
    mainContainer.appendChild(resultContainer);

    return mainContainer
}

function createInput(title, placeholder, id) {
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

function createInputGroup(...inputs) {
    const inputGroup = document.createElement('div');
    inputGroup.classList.add('input-group');

    inputs.forEach(element => {
        inputGroup.appendChild(element);
    });

    return inputGroup;
}

function createTableRow(thText) {
    const row = document.createElement('tr');

    const th = document.createElement('th');
    th.textContent = thText;

    const td = document.createElement('th');
    td.textContent = '0';

    row.appendChild(th);
    row.appendChild(td);

    return row;
}

export default createWb;