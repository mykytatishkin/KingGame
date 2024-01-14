document.addEventListener('input', function(event) {
    if (event.target.tagName === 'INPUT') {
        updateBValue(event.target);
        updateTotalValues();
    }
});

function updateBValue(inputElement) {
    const inputValue = parseInt(inputElement.value);
    const multiplier = getRowMultiplier(inputElement);

    if (!isNaN(inputValue)) {
        const bElement = findBElement(inputElement);
        if (bElement) {
            bElement.textContent = inputValue * multiplier;
        }
    }
}

function findBElement(inputElement) {
    let currentElement = inputElement.parentElement;
    while (currentElement) {
        if (currentElement.tagName === 'TD') {
            return currentElement.querySelector('b');
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

function getRowMultiplier(inputElement) {
    const rowElement = findRowElement(inputElement);
    return rowElement ? parseInt(rowElement.dataset.multiplier) || 1 : 1;
}

function findRowElement(inputElement) {
    let currentElement = inputElement.parentElement;
    while (currentElement) {
        if (currentElement.tagName === 'TR') {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

function updateTotalValues() {
    const table = document.getElementById('countTable');
    const totalRow = table.querySelector('tr:last-child');
    let totalSum = 0;

    for (let i = 1; i < totalRow.cells.length; i++) {
        let sum = 0;

        for (let j = 1; j < table.rows.length - 1; j++) {
            const cellValue = parseInt(table.rows[j].cells[i].querySelector('b').textContent);
            sum += isNaN(cellValue) ? 0 : cellValue;
        }

        totalRow.cells[i].querySelector('b').textContent = sum;
        totalSum += sum;
    }

    totalRow.cells[0].querySelector('b').textContent = totalSum;
}
