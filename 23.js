/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  let res = {};

  this.forEach((item) => {
    let k = fn(item);
    if (res[k]) {
      res[k].push(item);
    } else {
      res[k] = [item];
    }
  });

  return res;
};


// [1,2,3].groupBy(String)//{[1],"2":[2],"3":[3]}
