export default class YetToPass {
  constructor(currentAge, futureAge) {
    this.currentAge = currentAge;
    this.futureAge = futureAge;
  }

  EarthFuture() {
    let earthFuture = this.futureAge - this.currentAge;
    return earthFuture;
  }
}