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
    const operators = expression.match(/[\+\-\*\/]/g);

    if (numbers.length === 0 || (operators && numbers.length - 1 !== operators.length)) {
        throw new Error('Invalid input');
    }

    let tempNumbers = [];
    let tempOperators = [];

    let currentResult = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '*' || operators[i] === '/') {
            if (operators[i] === '*') {
                currentResult *= numbers[i + 1];
            } else if (operators[i] === '/') {
                if (numbers[i + 1] === 0) throw new Error('Division by zero');
                currentResult /= numbers[i + 1];
            }
        } else {
            tempNumbers.push(currentResult);
            tempOperators.push(operators[i]);
            currentResult = numbers[i + 1];
        }
    }

    tempNumbers.push(currentResult); 

    let finalResult = tempNumbers[0];

    for (let i = 0; i < tempOperators.length; i++) {
        if (tempOperators[i] === '+') {
            finalResult += tempNumbers[i + 1];
        } else if (tempOperators[i] === '-') {
            finalResult -= tempNumbers[i + 1];
        }
    }

    return finalResult;
}

