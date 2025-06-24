const { calculate } = require('../calculator'); // Ścieżka do funkcji kalkulatora

describe('Calculator Integration Tests', () => {
  test('should perform a full calculation flow', () => {
    let result;

    // Test dodawania
    result = calculate(2, 3, 'add');
    expect(result).toBe(5);

    // Test odejmowania
    result = calculate(result, 1, 'subtract');
    expect(result).toBe(4);

    // Test mnożenia
    result = calculate(result, 2, 'multiply');
    expect(result).toBe(8);

    // Test dzielenia
    result = calculate(result, 2, 'divide');
    expect(result).toBe(4);

    // Test dzielenia przez zero
    result = calculate(result, 0, 'divide');
    expect(result).toBe('Cannot divide by zero');
  });
});
