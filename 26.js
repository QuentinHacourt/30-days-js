/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function(arr, n) {
  const flatten = (arr, depth) => {
    let result = [];
    arr.forEach((elem, index) => {
      if (Array.isArray(elem) && depth < n) {
        result.push(...flatten(elem, depth + 1));
      } else {
        result.push(elem);
      }
    });
    return result;
  };

  return flatten(arr, 0);
};
