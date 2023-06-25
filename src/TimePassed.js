export default class TimePassed {
  constructor(currentAge, pastAge){
    this.currentAge = currentAge;
    this.pastAge = pastAge;
  }

  EarthPassed() {
    let earthPassed = this.currentAge - this.pastAge;
    return earthPassed;
  }
}