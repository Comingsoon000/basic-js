const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr is not an Array');
  }
  const copy = [...arr];
  copy.forEach((item, index) => {
    if (item === '--discard-next') {
      copy[index] = 'foo';
      copy[index + 1] = 'foo';
    }
    if (item === '--discard-prev') {
      if (index > 0) {
        copy[index - 1] = 'foo';
        copy[index] = 'foo';
      } else {
        copy.splice(index, 1);
      }
    }
    if (item === '--double-next') {
      if (index < copy.length - 1) {
        copy.splice(index, 1, copy[index + 1]);
      } else {
        copy.splice(index, 1);
      }
    }
    if (item === '--double-prev') {
      if (index > 0) {
        copy.splice(index, 1, copy[index - 1]);
      } else {
        copy.splice(index, 1);
      }
    }
  });
  return copy.filter((item) => item !== 'foo');
};
