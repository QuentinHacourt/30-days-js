/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
  if (Array.isArray(obj))
    return filterArr(obj);

  return filterObj(obj);
};

const filterArr = (array) => {
  let res = [];

  array.forEach((elem) => {
    if (Array.isArray(elem)) {
      res.push(filterArr(elem));
    } else if (typeof elem === "object" && Boolean(elem)) {
      res.push(filterObj(elem));
    } else if (Boolean(elem)) {
      res.push(elem);
    }
  });

  return res;
}

const filterObj = (obj) => {
  let res = new Object();

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      res[key] = filterArr(value);
    } else if (typeof value === "object" && Boolean(value)) {
      res[key] = filterObj(value);
    } else if (Boolean(value)) {
      res[key] = value;
    }
  }

  return res;
}
