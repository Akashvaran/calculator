function calculate() {

    const expression = document.getElementById('expressionInput').value;
    try {        
        const result = simpleCalculator(expression);
        document.getElementById('result').innerText = `Result: ${result}`;
    } catch (error) {   
        document.getElementById('result').innerText = "Error: Invalid Expression";
    }
}

function simpleCalculator(expression) {

    expression = expression.replace(/\s+/g, '');

    const numbers = expression.split(/[\+\-\*\/]/).map(Number);
    ``
    const operators = expression.match(/[\+\-\*\/]/g);

    if (!numbers || !operators || numbers.length - 1 !== operators.length) {
        throw new Error('Invalid input');
    }

    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
            case '+':
                result += numbers[i + 1];
                break;
            case '-':
                result -= numbers[i + 1];
                break;
            case '*':
                result *= numbers[i + 1];
                break;
            case '/':
                if (numbers[i + 1] === 0) {
                    throw new Error('Division by zero');
                }
                result /= numbers[i + 1];
                break;
            default:
                throw new Error('Invalid operator');
        }
    }

    return result;
}

