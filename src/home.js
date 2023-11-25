import utdImg from "/src/assets/images/utd.jpg";

function createHome() {
    const container1 = document.createElement('div');
    container1.classList.add('container-fluid');

    // Create the first row with text
    const row1 = document.createElement('div');
    row1.classList.add('row');

    const text1 = document.createElement('p');
    text1.classList.add('display-5', 'text-center', 'fw-normal');
    text1.textContent = 'PERFORMANCE TOOL';

    row1.appendChild(text1);
    container1.appendChild(row1);

    // Create the second row with text
    const row2 = document.createElement('div');
    row2.classList.add('row');

    const text2 = document.createElement('p');
    text2.classList.add('display-5', 'text-center', 'fw-normal');
    text2.textContent = 'SP-UTD';

    row2.appendChild(text2);
    container1.appendChild(row2);

    // Create container for the second row
    const container2 = document.createElement('div');
    container2.classList.add('container-fluid');

    // Create a column with an image
    const col = document.createElement('div');
    col.classList.add('col', 'text-center');

    const image = document.createElement('img');
    image.classList.add('plane-photo');
    image.src = utdImg;

    col.appendChild(image);
    container2.appendChild(col);

    // Create container for the third row (fixed-bottom warning)
    const container3 = document.createElement('div');
    container3.classList.add('container-fluid', 'fixed-bottom', 'warning');

    // Create the third row with warning text
    const row3 = document.createElement('div');
    row3.classList.add('row');

    const warningText = document.createElement('p');
    warningText.classList.add('display-6', 'text-center', 'fw-normal', 'fst-italic', 'text-danger');
    warningText.textContent = 'NOT FOR OPERATIONAL USE';

    row3.appendChild(warningText);
    container3.appendChild(row3);


    // Create the main container to hold both rows
    const mainContainer = document.createElement('div');
    mainContainer.appendChild(container1);
    mainContainer.appendChild(container2);
    mainContainer.appendChild(container3);

    return mainContainer;
}

export default createHome;