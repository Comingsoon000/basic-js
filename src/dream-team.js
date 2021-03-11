const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return (!Array.isArray(members)) ? false : members
    .map((name) => {
      if (typeof name !== 'string') {
        return;
      }
      return name.split('').filter((item) => item !== ' ')[0].toUpperCase();
    })
    .sort().join('');
};
