/**
 * @param {object|array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  if (Object.keys(obj).length === 0)
    return true;

  return false;
};
