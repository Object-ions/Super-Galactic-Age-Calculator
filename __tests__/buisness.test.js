import AgeCalculator from '../src/buisness.js';

describe('ageCalculator', () => {
  let ageCalculator;
  beforeEach(() => {
    ageCalculator = new AgeCalculator(2023, 1992);
  });
  test('should correctly create a calculator object with two instances', () => {
    expect(ageCalculator.currentYear).toEqual(2023);
    expect(ageCalculator.birthYear).toEqual(1992);
  });
});