const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  const stringsArray = [...Array(options.repeatTimes).keys()].map((item) => item = str);
  const additionsArray = [...Array(options.additionRepeatTimes).keys()].map((item) => item = `${options.addition}`);
  const addition = additionsArray.join(options.additionSeparator);
  const result = stringsArray.map((item) => `${item}${addition}`);
  return result.join(options.separator);
};
