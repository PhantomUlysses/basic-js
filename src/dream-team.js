const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !members.length) return false;
  
  return members.reduce(function (p, i) {
    return p = typeof i === 'string'
    ? p.concat(i.trim()[0].toUpperCase())
    : p
  }, []).sort().join('')
}