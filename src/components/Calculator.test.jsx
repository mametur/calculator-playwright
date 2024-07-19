// src/components/Calculator.test.jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('should display 0 initially', () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId('display');
  expect(display).toHaveTextContent('0'); // Use toHaveTextContent
  });

  it('should display numbers when clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('5'));
    expect(getByText('25')).toBeInTheDocument();
  });

  it('should perform addition', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('='));
    expect(getByText('10')).toBeInTheDocument();
  });

});
