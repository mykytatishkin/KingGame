document.addEventListener('input', function(event) {
    if (event.target.tagName === 'INPUT') {
        updateBValue(event.target);
        updateTotalValues();
    }
});

function updateBValue(inputElement) {
    const inputValue = parseInt(inputElement.value);
    const fixedMultiplier = 2; // Замените на ваше фиксированное число

    if (!isNaN(inputValue)) {
        const bElement = findBElement(inputElement);
        if (bElement) {
            bElement.textContent = inputValue * fixedMultiplier;
        }
    }
}

function findBElement(inputElement) {
    let currentElement = inputElement.parentElement; // Начинаем с родительского элемента
    while (currentElement) {
        if (currentElement.tagName === 'TD') {
            return currentElement.querySelector('b');
        }
        currentElement = currentElement.parentElement;
    }
    return null; // Если не найден элемент <b>
}

function updateTotalValues() {
    const table = document.getElementById('countTable');
    const totalRow = table.querySelector('tr:last-child');
    let totalSum = 0;

    for (let i = 1; i < totalRow.cells.length; i++) {
        let sum = 0;

        // Проходим по каждой строке (начиная с первой и заканчивая предпоследней)
        for (let j = 1; j < table.rows.length - 1; j++) {
            const cellValue = parseInt(table.rows[j].cells[i].querySelector('b').textContent);
            sum += isNaN(cellValue) ? 0 : cellValue;
        }

        // Обновляем значение в Total
        totalRow.cells[i].querySelector('b').textContent = sum;
        totalSum += sum;
    }

    // Обновляем общую сумму
    totalRow.cells[0].querySelector('b').textContent = totalSum;
}
