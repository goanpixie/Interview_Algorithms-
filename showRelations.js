/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

var parentChildPairs = [
    [1, 3], [2, 3], [3, 6], [5, 6],
    [5, 7], [4, 5], [4, 8], [8, 10]
];

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2   4
 \ /   / \
  3   5   8
   \ / \   \
    6   7   10

Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

Sample output (pseudodata):

findNodesWithZeroAndOneParents(parentChildPairs) => [
  [1, 2, 4],    // Individuals with zero parents
  [5, 7, 8, 10] // Individuals with exactly one parent
]

*/

var A = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [8, 10]];

function showRelation(A) {
  cMap = {};
  let size = A.length;

  for (let i = 0; i < size; i++) {
    [p, c] = A[i];
    if (!cMap[c]) {
      cMap[c] = 1;
    } else {
      cMap[c] += 1;
    }
  }
  console.log('cMap1', cMap);

  for (let i = 0; i < size; i++) {
    [p] = A[i];
    if (!cMap[p]) {
      cMap[p] = 0;
    }
  }
  console.log('cMap2', cMap);
  let noParent = [];
  let OneParent = [];

  for (k in cMap) {
    let z = cMap[k] === 0;
    let o = cMap[k] === 1;
    if (z) {
      noParent.push(+k);
    }
    if (o) {
      OneParent.push(+k);
    }
  }

  return { noParent, OneParent };
}

console.log(showRelation(A));
