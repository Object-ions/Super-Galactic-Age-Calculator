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

  test('should correctly calculate age on Earth', () => {
    let earthAge = ageCalculator.EarthAge();
    expect(earthAge).toEqual(31);
  });

  test('should correctly calculate age on Mercury. Mercury age is 0.24 Earth years.', () => {
    let mercuryAge = ageCalculator.MercuryAge();
    expect(mercuryAge).toBeCloseTo(7.44);
  });

  test('should correctly calculate age on Venus. Venus age is 0.62 Earth years.', () => {
    let venusAge = ageCalculator.VenusAge();
    expect(venusAge).toBeCloseTo(19.22);
  });

  test('should correctly calculate age on Mars. Mars age is 1.88 Earth years.', () => {
    let marsAge = ageCalculator.MarsAge();
    expect(marsAge).toBeCloseTo(58.28);
  });

  test('should correctly calculate age on Jupiter. Jupiter age is 11.86 Earth years.', () => {
    let jupiterAge = ageCalculator.JupiterAge();
    expect(jupiterAge).toBeCloseTo(367.66);
  });
});