const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


module.exports = function dateSample(sampleActivity = false) {
  const rateConstant = 0.693 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  const result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / rateConstant);
  if (isNaN(result) || result === Infinity) {
    return false;
  }
  return (result < 0 ? false : result);
};
