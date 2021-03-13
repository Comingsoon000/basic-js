const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.depth = 1;
    this.result = 1;
  }

  calculateDepth(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        this.depth += 1;
        this.result = this.depth;
        this.calculateDepth(arr.flat());
        this.depth = 1;
        return this.result;
      }
    }
    return this.depth;
  }
};