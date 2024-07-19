import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0'); // Current input/result
  const [prevOperand, setPrevOperand] = useState(null); // Previous number
  const [currentOperator, setCurrentOperator] = useState(null); // Current operator

  const handleNumberClick = (number) => {
    setDisplayValue(displayValue === '0' ? number : displayValue + number);
  };

  const handleOperatorClick = (operator) => {
    setCurrentOperator(operator);
    setPrevOperand(parseFloat(displayValue));
    setDisplayValue('0');
  };

  const handleAllClearClick = () => {
    setDisplayValue('0');
    setPrevOperand(null);
    setCurrentOperator(null);
  };

    const handleClearClick = () => {
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1)); // Remove the last character
    } else {
      setDisplayValue('0'); // If only one digit left, reset to '0'
    }
  };


  const handleEqualsClick = () => {
    const current = parseFloat(displayValue);
    let result;
    switch (currentOperator) {
      case '+':
        result = prevOperand + current;
        break;
      case '-':
        result = prevOperand - current;
        break;
      case '*':
        result = prevOperand * current;
        break;
      case '/':
        result = prevOperand / current;
        break;
      default:
        return;
    }
    setDisplayValue(result.toString());
    setCurrentOperator(null);
    setPrevOperand(null);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>

      <div className="buttons">
        {/* Number Buttons */}
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map(number => (
          <button className="btn" key={number} onClick={() => handleNumberClick(number.toString())}>
            {number}
          </button>
        ))}
        <button className="btn zero" onClick={() => handleNumberClick('0')}>0</button>
        <button className="btn" onClick={() => handleNumberClick('.')}>.</button>

        {/* Operator Buttons */}
        {['+', '-', '*', '/'].map(operator => (
          <button className="operator" key={operator} onClick={() => handleOperatorClick(operator)}>
            {operator}
          </button>
        ))}

        {/* Other Buttons */}
        <button className="clear" onClick={handleAllClearClick}>AC</button> {/* Clear all */}
        <button className="clear" onClick={handleClearClick}>C</button>
        <button className="equals" onClick={handleEqualsClick}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
