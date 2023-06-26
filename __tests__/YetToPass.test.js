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

  test('should calculate how much time yet to pass in Mercury years', () => {
    let mercuryFuture = yetToPass.MercuryFuture();
    expect(mercuryFuture).toBeCloseTo(20.83);
  });

  test('should calculate how much time yet to pass in Venus years', () => {
    let venusFuture = yetToPass.VenusFuture();
    expect(venusFuture).toBeCloseTo(8.06);
  });

  test('should calculate how much time yet to pass in Mars years', () => {
    let marsFuture = yetToPass.MarsFuture();
    expect(marsFuture).toBeCloseTo(2.66);
  });

  test('should calculate how much time yet to pass in Jupiter years', () => {
    let jupiterFuture = yetToPass.JupiterFuture();
    expect(jupiterFuture).toBeCloseTo(0.42);
  });
});