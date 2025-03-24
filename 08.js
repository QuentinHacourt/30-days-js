/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  console.log("Received functions: ", functions);

  if (!Array.isArray(functions))
    throw new TypeError("Expected an array of functions");

  return function(x) {
    let res = x;

    for (let i = functions.length - 1; i >= 0; i++) {
      console.log(`Calling function at index ${i}:`, functions[i]);
      res = functions[i](res);
    }

    return res;
  }
};

// const fn = compose([x => x + 1, x => 2 * x])
// fn(4) // 9
