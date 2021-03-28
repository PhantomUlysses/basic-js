const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (result.length && arr[i - 2] !== '--discard-next') result.pop();
        continue;

      case '--discard-next':
        i++;
        continue;
        
      case '--double-prev':
        if (i && arr[i - 2] !== '--discard-next') result.push(arr[i - 1]);
        continue;
        
      case '--double-next':
        if (i < arr.length - 1) result.push(arr[i + 1]);
        continue;
      default:
        result.push(arr[i]);  
    }
  }
  return result;
};
