import TimePassed from '../src/TimePassed.js';

describe('TimePassed', () => {
  let timePassed;
  
  beforeEach(() => {
    timePassed = new TimePassed(56, 43);
  });

  test('should correctly create a time passed object with two instances', () => {
    expect(timePassed.currentAge).toEqual(56);
    expect(timePassed.pastAge).toEqual(43);
  });

  test('should correctly calculate how much time passed in Earth years', () => {
    let earthYearsPassed = timePassed.EarthPassed();
    expect(earthYearsPassed).toEqual(13);
  });

  test('should correctly calculate how much time passed in Mercury years', () => {
    let mercuryYearsPassed = timePassed.MercuryPassed();
    expect(mercuryYearsPassed).toBeCloseTo(54.17);
  });

  test('should correctly calculate how much time passed in Venus years', () => {
    let venusYearsPassed = timePassed.VenusPassed();
    expect(venusYearsPassed).toBeCloseTo(20.97);
  });

  test('should correctly calculate how much time passed in Mars years', () => {
    let marsYearsPassed = timePassed.MarsPassed();
    expect(marsYearsPassed).toBeCloseTo(6.91);
  });
  
  test('should correctly calculate how much time passed in Jupiter years', () => {
    let jupiterYearsPassed = timePassed.JupiterPassed();
    expect(jupiterYearsPassed).toBeCloseTo(1.1);
  });
});