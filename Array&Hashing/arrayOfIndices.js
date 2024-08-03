/*
Q. Given an array of indices and an array of integer values, 
return an array of all the values at those indices. 
Any out of bounds indices should be filled in with a 0. 
Indices follow a zero-based numbering rule (i.e. The index of the first element is 0 not 1).

Example:
Input: indicies: [0, 0, 5, 2, 3], values: [7, 6, 5, 4, 3]
Output: [7, 7, 0, 5, 4]
[execution time limit] 4 seconds (js)

[input] array.integer indices

[input] array.integer values

[output] array.integer

iterate the the arrayValue and find index of the numberValue
check if the index of arrayValue is match with arrayIndex number 
will fill the newValue to that indxe

*/

function arrayOfIndices(arrIndex, arrValue) {

}
console.log(arrayOfIndices([], [])); //[ ]
console.log(arrayOfIndices([0, 0, 5, 2, 3], [7, 6, 5, 4, 3])); //[ 7, 7, 0, 5, 4 ]