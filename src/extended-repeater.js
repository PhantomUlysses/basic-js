const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition || '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  if (typeof options.addition !== 'string' && options.addition ==! undefined) {
    addition = String(addition);
  } else if (options.addition === false) {
    addition = "false";
  } else if (options.addition === null) {
    addition = "null";
  }

  if (typeof str !== 'string') {
    str = String(str);
  }

  let array = [];
  let repeat = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    array.push(addition);
  }

  let repStr = str + array.join(additionSeparator);
  
  for (let i = 0; i < repeatTimes; i++) {
    repeat.push(repStr);
  }

  let result = repeat.join(separator);
  return result;


};
  