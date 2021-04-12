/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let result = '';
  let count = 0;
  for (let i = 0; i < arr.length; i += count) {
    count = 0;
    if (arr[i] !== arr[i + 1]) {
      result += `${arr[i]}`;
      i++;
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
      result += `${count}${arr[i]}`;
    }
  }
  return result;
}

module.exports = encodeLine;
