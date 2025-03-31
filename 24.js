/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
  return arr.sort((a, b) => (fn(a) - fn(b)));
};

const arr1 = [5, 4, 1, 2, 3];
const fn1 = (x) => x;
console.log(sortBy(arr1, fn1)); // Output: [1, 2, 3, 4, 5]

const arr2 = [{"x": 1}, {"x": 0}, {"x": -1}];
const fn2 = (d) => d.x;
console.log(sortBy(arr2, fn2)); // Output: [{"x": -1}, {"x": 0}, {"x": 1}]

const arr3 = [[3, 4], [5, 2], [10, 1]];
const fn3 = (x) => x[1];
console.log(sortBy(arr3, fn3)); // Output: [[10, 1], [5, 2], [3, 4]]
