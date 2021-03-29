const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (mode = true) {
    this.mode = mode;
  }
  encrypt(str, key) {
    if (!str || !key) {
      throw new Error;
    }

    let strUpper = str.toUpperCase();
    let keyNew = key.padEnd(str.length, key).toUpperCase();
    let result = '';
    let index = 0;

    for (let i = 0; i < strUpper.length; i++) {
      let code = strUpper.charCodeAt(i);
      if (code >= 65 && code <= 91) {
        code -= 65;
        let encr = keyNew.charCodeAt(index) - 65;
        let resultCode = (code + encr) % 26 + 65;
        result += String.fromCharCode(resultCode);
        index = index + 1;
      } else {
        result += strUpper[i];
      }
    }
    return !this.mode ? result.split('').reverse().join('') : result;
  }    
  decrypt(str, key) {
    if (!str || !key) {
      throw new Error;
    }

    let strUpper = str.toUpperCase();
    let keyNew = key.padEnd(str.length, key).toUpperCase();
    let result = '';
    let index = 0;

    for (let i = 0; i < strUpper.length; i++) {
      let code = strUpper.charCodeAt(i);
      if (code >= 65 && code <= 91) {
        code -= 65;
        let encr = keyNew.charCodeAt(index) - 65;
        let resultCode = (code + 26 - encr) % 26 + 65;
        result += String.fromCharCode(resultCode);
        index = index + 1;
      } else {
        result += strUpper[i];
      }
    }
    return !this.mode ? result.split('').reverse().join('') : result;
  }
}

module.exports = VigenereCipheringMachine;
