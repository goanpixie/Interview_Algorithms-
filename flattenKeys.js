//Write a function that takes a hierarchical map of
//properties and converts it to a single, flattened map,
//with the different levels separated by a forward slash('/').


//Eg: {
//   'a': {
//     'b': {
//       'c': 12,
//       'd': 'Hello World'
//     },
//     'e': [1,2,3]
//   }
// }
// return a new map:

// {
//   'a/b/c': 12,
//   'a/b/d': 'Hello World',
//   'a/e': [1,2,3]
// }


function flatKeys(object) {
  function iterate(part, keys) {
    Object.keys(part).forEach(function(k) {
      if (
        part[k] !== null &&
        !Array.isArray(part[k]) &&
        typeof part[k] === 'object'
      ) {
        return iterate(part[k], keys.concat(k));
      }
      flat[keys.concat(k).join('/')] = part[k];
    });
  }
  let flat = {};
  iterate(object, []);
  return flat;
}
var object = { a: { b: { c: 12, d: 'Hello World' }, e: [1, 2, 3] } };

console.log(flatKeys(object));
