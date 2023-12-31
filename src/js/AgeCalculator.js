export default class AgeCalculator {
  constructor(currentYear, birthYear) {
    this.currentYear = currentYear;
    this.birthYear = birthYear;
    let earthYear = this.currentYear - this.birthYear;
  }

  EarthAge() {
    let earthAge = this.currentYear - this.birthYear;
    return earthAge;
  }

  MercuryAge() {
    let mercuryAge = this.EarthAge() / 0.24;
    return mercuryAge;
  }

  VenusAge() {
    let venusAge = this.EarthAge() / 0.62;
    return venusAge;
  }

  MarsAge() {
    let marsAge = this.EarthAge() / 1.88;
    return marsAge;
  }

  JupiterAge() {
    let jupiterAge = this.EarthAge() / 11.86;
    return jupiterAge;
  }
}