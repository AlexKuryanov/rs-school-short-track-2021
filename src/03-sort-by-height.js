/*
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const avg = arr;
  const newArr = [];
  for (let i = 0; i < avg.length; i++) {
    if (avg[i] === -1) {
      newArr.push(avg[i]);
    } else {
      let minValue = avg[i];
      for (let j = i + 1; j <= avg.length; j++) {
        if (avg[j] < minValue && avg[j] !== -1) {
          minValue = avg[j];
          const swap = avg[i];
          avg[i] = minValue;
          avg[j] = swap;
        }
      }
      newArr.push(avg[i]);
    }
  }
  return newArr;
}

module.exports = sortByHeight;
