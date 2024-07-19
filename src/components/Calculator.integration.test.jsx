
// src/components/Calculator.test.jsx
import React, { act } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './Calculator';


describe('Calculator Integration', () => {
  it('should perform a full calculation', async () => {
    render(<Calculator />);

    // Simulate user input: 8 + 2 * 5 = 
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));

    // Assert the result
    await act(async () => {
      const display = screen.getByTestId('display');
      expect(display).toHaveTextContent('10'); 
    });
  });
});
