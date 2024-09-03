let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let operand1 = null;
let operand2 = null;

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
    currentOperator = '';
    operand1 = null;
    operand2 = null;
}

function appendNumber(number) {
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
    currentInput += number;
}

function appendOperator(operator) {
    if (currentInput === '') return;
    operand1 = parseFloat(currentInput);
    currentOperator = operator;
    currentInput = '';
    display.textContent = '';
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.textContent += '.';
    }
}

function calculateResult() {
    if (currentInput === '' || currentOperator === '' || operand1 === null) return;
    operand2 = parseFloat(currentInput);
    let result;
    switch (currentOperator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = operand1 / operand2;
            break;
        default:
            return;
    }
    display.textContent = result;
    currentInput = result.toString();
    currentOperator = '';
    operand1 = null;
    operand2 = null;
}
