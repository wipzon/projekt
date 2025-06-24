const { calculate } = require('./calculator');

describe('Calculator Tests', () => {


  test('should add two numbers correctly', () => {
    expect(calculate(2, 3, 'add')).toBe(5);
  });

  test('should subtract two numbers correctly', () => {
    expect(calculate(5, 3, 'subtract')).toBe(2);
  });

  test('should multiply two numbers correctly', () => {
    expect(calculate(2, 3, 'multiply')).toBe(6);
  });

  test('should divide two numbers correctly', () => {
    expect(calculate(6, 3, 'divide')).toBe(2);
  });

  test('should return error message for division by zero', () => {
    expect(calculate(6, 0, 'divide')).toBe('Cannot divide by zero');
  });

  test('should return error message for invalid operation', () => {
    expect(calculate(6, 3, 'invalid')).toBe('Invalid operation');
  });
});
