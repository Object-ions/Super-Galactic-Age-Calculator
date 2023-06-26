import YetToPass from '../src/YetToPass.js';

describe('YetToPass', () => {
  let yetToPass;
  
  beforeEach(() => {
    yetToPass = new YetToPass(56, 61);
  });

  test('should correctly create a yet to pass object with two instances', () => {
    expect(yetToPass.currentAge).toEqual(56);
    expect(yetToPass.futureAge).toEqual(61);
  });

  test('should calculate how much time yet to pass in Earth years', () => {
    let earthFuture = yetToPass.EarthFuture();
    expect(earthFuture).toEqual(5);
  });
});