/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const res = [];

  arr.forEach((element, index) => {
    if (fn(element, index))
      res.push(element);
  });

  return res;
};
