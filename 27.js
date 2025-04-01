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
      if (Array.isArray(elem)){
        res.push(filterArr(elem));
      } else if (Boolean(elem) !== false) {
        res.push(elem);
      } else if (typeof elem === "object") {
        res.push(filterObj(elem));
      }
    });

    return res;
}

const filterObj = (obj) => {
  let res = new Object();

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      res[key] = filterArr(value);
    } else if (Boolean(value) !== false){
      res[key] = value;
    } else if (typeof value === "object") {
      res[key] = filterObj(value);
    }
  }

  return res;
}
