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

  test('should correctly calculate age on earth', () => {
    let earthAge = ageCalculator.EarthAge();
    expect(earthAge).toEqual(31);
  });

  test('should correctly calculate age on mercury. Mercury age is 0.24 Earth years.', () => {
    let mercuryAge = ageCalculator.MercuryAge();
    expect(mercuryAge).toBeCloseTo(7.44);
  });
});