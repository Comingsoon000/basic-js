const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((acc, row) => {
    return row.filter((item) => item === '^^').length + acc;
  }, 0);
};
