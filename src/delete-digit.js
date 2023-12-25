const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = 0;

  let numStr = n.toString();
  for (let i = 0; i < numStr.length; i += 1) {
    let newNum = +numStr.replace(numStr[i], "");
    if (newNum > num) num = newNum;
  }

  return num;
}

module.exports = {
  deleteDigit
};
