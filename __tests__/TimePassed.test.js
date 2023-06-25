import TimePassed from '../src/TimePassed.js';

describe('TimePassed', () => {
  let timePassed;
  
  beforeEach(() => {
    timePassed = new TimePassed(31, 23);
  });

  test('should correctly create a time passed object with two instances', () => {
    expect(timePassed.currentAge).toEqual(31);
    expect(timePassed.pastAge).toEqual(23);
  });

  test('should correctly calculate how much time passed in earth years', () => {
    let earthYearsPassed = timePassed.EarthPassed();
    expect(earthYearsPassed).toEqual(8);
  });
});