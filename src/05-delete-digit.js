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
  const str = String(n);
  let minValue = str[0];
  for (let i = 0; i < str.length; i++) {
    if (minValue > str[i]) {
      minValue = str[i];
    }
  }
  return Number(str.replace(minValue, ''));
}

module.exports = deleteDigit;
