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
      <div className="display" data-testid="display">
    {displayValue}
  </div>

      <div className="buttons">
        {/* Number Buttons */}
        {[6,7, 8, 9, 2, 3, 4, 5, 1].map(number => (
          <button data-testid={`btn-${number}`} className="btn" key={number} onClick={() => handleNumberClick(number.toString())}>
            {number}
          </button>
        ))}
        <button data-testid={'btn-0'} className="btn zero" onClick={() => handleNumberClick('0')}>0</button>
        <button data-testid={'btn-.'} className="btn" onClick={() => handleNumberClick('.')}>.</button>

        {['+','-', '*', '/'].map(operator => (
          <button data-testid={`btn-${operator}`} className="operator" key={operator} onClick={() => handleOperatorClick(operator)}>
            {operator}
        </button>
        ))}

        {/* Other Buttons */}
        <button data-testid="btn-AC" className="clear" onClick={handleAllClearClick}>AC</button> {/* Clear all */}
        <button data-testid="btn-C" className="clear" onClick={handleClearClick}>C</button>
        <button data-testid="btn-=" className="equals" onClick={handleEqualsClick}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
