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
        case 'ADD': return add(a, b);
        case 'SUB': return subtract(a, b);
        case 'MUL': return multiply(a, b);
        case 'DIV': return divide(a, b);
        default: return null;
    }
}
//operate(operator, num1, num2);

function roundResult(result) {
    return typeof result === "number" ? Math.round(result * 1000) / 1000 : result;
}

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

        else if(val === 'ADD' || val === 'SUB' || val === 'MUL' || val === 'DIV') {
            if(currentOp && firstNum ==='') {
                secondNum = displayValue;
                const result = operate(currentOp, parseFloat(firstNum), parseFloat(secondNum));
                display.textContent = roundResult(result);

                firstNum = result;
            } else {
                firstNum = displayValue;
            }

            currentOp = val;
            resetNext = true;
        }

        else if (val === '=') {
            if(currentOp = null || resetNext) return;

            secondNum = displayValue;
            const result = operate(currentOp, parseFloat(firstNum), parseFloat(secondNum));
            display.textContent = roundResult(result);
            firstNum = result;
            currentOp = null;
            resetNext = true;
        }

        else if(val === 'CLEAR') {
            () => {
                firstNum = '';
                secondNum = '';
                currentOp = null;
                displayValue = '';
                display.textContent = '0';
                resetNext = false;
            }
        }

        else if (val === '←') {
            displayValue = displayValue.slice(0, -1);
            display.textContent = displayValue || '0';
        }
          
    });
});
