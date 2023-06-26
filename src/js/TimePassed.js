export default class TimePassed {
  constructor(currentAge, pastAge){
    this.currentAge = currentAge;
    this.pastAge = pastAge;
  }

  EarthPassed() {
    let earthPassed = this.currentAge - this.pastAge;
    return earthPassed;
  }

  MercuryPassed() {
    let mercuryPassed = parseFloat(((this.currentAge - this.pastAge) / 0.24).toFixed(2));
    return mercuryPassed;
  }
  VenusPassed() {
    let venusPassed = parseFloat(((this.currentAge - this.pastAge) / 0.62).toFixed(2));
    return venusPassed;
  }

  MarsPassed() {
    let marsPassed = parseFloat(((this.currentAge - this.pastAge) / 1.88).toFixed(2));
    return marsPassed;
  }

  JupiterPassed() {
    let jupiterPassed = parseFloat(((this.currentAge - this.pastAge) / 11.86).toFixed(2));
    return jupiterPassed;
  }
}