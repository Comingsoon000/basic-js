const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw new Error('THROWN');
  }

  const getMonth = Date.prototype.getMonth.call(date);

  if (getMonth < 2 || getMonth === 11) {
    return 'winter';
  }
  if (getMonth < 5) {
    return 'spring';
  }
  if (getMonth < 8) {
    return 'summer';
  }
  return 'autumn';
};
