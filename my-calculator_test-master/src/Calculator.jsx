import React, { useState } from 'react';
import './App.css';

/**
 * React component that renders a basic calculator with arithmetic operations, exponentiation, and square root functionality.
 *
 * Manages calculator state and user input, allowing users to perform chained calculations, clear the display, and handle decimal input. The UI includes buttons for digits, decimal point, arithmetic operators, power, square root, clear, and equals.
 *
 * @returns {JSX.Element} The calculator UI component.
 */
function Calculator() {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = calculate(currentValue, inputValue, operator);

      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      case 'pow':
        return Math.pow(firstOperand, secondOperand);
      case 'sqrt':
        return Math.sqrt(firstOperand);
      default:
        return secondOperand;
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{display}</div>
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <button className="key-clear" onClick={() => clearDisplay()}>
              AC
            </button>
          </div>
          <div className="digit-keys">
            <button onClick={() => inputDigit('7')}>7</button>
            <button onClick={() => inputDigit('8')}>8</button>
            <button onClick={() => inputDigit('9')}>9</button>
            <button onClick={() => inputDigit('4')}>4</button>
            <button onClick={() => inputDigit('5')}>5</button>
            <button onClick={() => inputDigit('6')}>6</button>
            <button onClick={() => inputDigit('1')}>1</button>
            <button onClick={() => inputDigit('2')}>2</button>
            <button onClick={() => inputDigit('3')}>3</button>
            <button onClick={() => inputDigit('0')}>0</button>
            <button onClick={inputDecimal}>.</button>
          </div>
        </div>
        <div className="operator-keys">
          <button onClick={() => performOperation('/')}>÷</button>
          <button onClick={() => performOperation('*')}>×</button>
          <button onClick={() => performOperation('-')}>−</button>
          <button onClick={() => performOperation('+')}>+</button>
          <button onClick={() => performOperation('pow')}>x^y</button>
          <button onClick={() => {
            const inputValue = parseFloat(display);
            setDisplay(String(Math.sqrt(inputValue)));
            setFirstOperand(null);
            setOperator(null);
            setWaitingForSecondOperand(false);
          }}>√x</button>
          <button onClick={() => {
            if (operator && !waitingForSecondOperand) {
              performOperation('=');
            }
          }}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
