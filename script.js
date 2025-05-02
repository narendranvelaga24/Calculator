function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) return "🫥";
    return a / b;
}


//let num1 = 3, num2 = 5, operator = '+';
function operate(operator, a, b) {
    switch(operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return null;
    }
}
//operate(operator, num1, num2);


const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let firstNum = '';
let secondNum = '';
let currentOp = null;
let resetNext = false;
let displayValue = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const val = button.textContent;

        if(!isNaN(val) || val === '.') {
            if(resetNext) {
                displayValue = '';
                resetNext = false;
            }

            if (val === '.' && displayValue.includes('.')) return;

            displayValue += val;
            display.textContent = displayValue;
        }

        else if(val === '+' || val === '-' || val === '*' || val === '/') {
            
        }
    });
});
