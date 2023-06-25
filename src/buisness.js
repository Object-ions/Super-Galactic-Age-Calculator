export default class AgeCalculator {
  constructor(currentYear, birthYear) {
    this.currentYear = currentYear;
    this.birthYear = birthYear;
    let earthYear = this.currentYear - this.birthYear;
  }
}

// Triangle.prototype.checkType = function () {
//   if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//     return "not a triangle";
//   } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//     return "scalene triangle";
//   } else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//     return "equilateral triangle";
//   } else {
//     return "isosceles triangle";
//   }
// };

// Triangle.prototype.isBigTriangle = function () {
//   const sum = this.side1 + this.side2 + this.side3;
//   if (sum > 10) {
//     return 'big';
//   } else {
//     return 'little';
//   }
// };