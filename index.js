document.addEventListener('input', function(event) {
    if (event.target.tagName === 'INPUT') {
        updateBValue(event.target);
    }
});

function updateBValue(inputElement) {
    const inputValue = parseInt(inputElement.value);
    const fixedMultiplier = 2; // Замените на ваше фиксированное число

    if (!isNaN(inputValue)) {
        const bElement = inputElement.nextElementSibling.querySelector('b');
        if (bElement) {
            bElement.textContent = inputValue * fixedMultiplier;
        }
    }
}
