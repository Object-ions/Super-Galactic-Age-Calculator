export default class YetToPass {
  constructor(currentAge, futureAge) {
    this.currentAge = currentAge;
    this.futureAge = futureAge;
  }

  EarthFuture() {
    let earthFuture = this.futureAge - this.currentAge;
    return earthFuture;
  }

  MercuryFuture(){
    const mercuryFuture = parseFloat(((this.futureAge - this.currentAge) / 0.24).toFixed(2));
    return mercuryFuture;
  }

  VenusFuture(){
    const venusFuture = parseFloat(((this.futureAge - this.currentAge) / 0.62).toFixed(2));
    return venusFuture;
  }
}