function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteDigit() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let display = document.getElementById('display').value;
    display = display.replace('^', '**'); // Replace power operator with JS power operator
    display = display.replace('pi', 'Math.PI'); // Replace pi with Math.PI

    try {
        // Evaluate using math functions
        document.getElementById('display').value = eval(display
            .replace('sin', 'Math.sin')
            .replace('cos', 'Math.cos')
            .replace('tan', 'Math.tan')
            .replace('log', 'Math.log')
            .replace('exp', 'Math.exp')
            .replace('sqrt', 'Math.sqrt')
        );
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
