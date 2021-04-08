/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let addStr = s2;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < addStr.length; j++) {
      if (s1[i] === addStr[j]) {
        count++;
        addStr = addStr.replace(addStr[j], '');
        break;
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
