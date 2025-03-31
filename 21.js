/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  let res = [];
  let part = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0 && i !== 0) {
      res.push([...part]);
      part.length = 0;
      part.push(arr[i]);
    } else {
      part.push(arr[i]);
    }
  }
  if (part.length !== 0)
    res.push(part);

  return res;
};
