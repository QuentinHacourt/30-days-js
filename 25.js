/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
// my cool code
// var join = function(arr1, arr2) {
//   let joined = new Map();

//   arr1.forEach((elem) => {
//     joined.set(elem.id, elem);
//   });

//   arr2.forEach((elem) => {
//     if (joined.has(elem.id)){
//       Object.entries(elem).forEach(([key, value]) => {
//         joined.get(elem.id)[key] = value;
//       });
//     } else {
//       joined.set(elem.id, elem);
//     }
//   });



//   return Array.from(joined.values());
// };

var join = function(arr1, arr2) {
    const result = {};
    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i].id] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        if (result[arr2[i].id]) {
            for (const key in arr2[i]) result[arr2[i].id][key] = arr2[i][key];
        } else {
            result[arr2[i].id] = arr2[i];
        }
    }

    return Object.values(result);
};
