document.addEventListener('input', function(event) {
    if (event.target.tagName === 'INPUT') {
        updateBValue(event.target);
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
