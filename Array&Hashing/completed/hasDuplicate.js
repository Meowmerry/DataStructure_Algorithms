/*

Duplicate Integer
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false


Input: nums = [-1, 2, 3, 3, -1]
Output: true

Explore:
numbers can be pos, neg, or zero
input is an array of numbers,
output is a boolean

edge cases:
empty array should return...false


Brainstorm:

Time Complexity: O(N), where N is the length of the input array. This is because you only iterate through the array once.
Space Complexity: O(N) in the worst case, where N is the length of the input array. This is because, in the worst case, 
all elements are unique, so all elements are stored in the set.

Plan: Using Set or Map to look up
Iterate throuhg the array
    if find dupplicate return true
else return false

Input: nums = [1, 2, 3, 3]
Set = {1,2,3}
Map
{
    1: 0
    2: 0
    3: 1
}

create new map
iterate through the array
  - check if the element exists in the map
  - if yes - the element is a duplicate. return true

  - if no, this is the first time we are seeing the element, so create the key

  -if we reach the end of the array, there are no duplicates. return false




*/
function hasDuplicate(nums) {
  const dupMap = new Set();
  for (i = 0; i < nums.length; i++) {
    //check if the element at i exists in our map
    const currNum = nums[i];
    if (dupMap.has(currNum)) return true;
    // else dupMap.add(currNum)
    dupMap.add(currNum);
  }

  return false;
}
console.log(hasDuplicate([1, 2, 3, 3])); // True
console.log(hasDuplicate([])); // False
console.log(hasDuplicate([2])); // False
console.log(hasDuplicate([-1, 2, 3, 3, -1])); // True
console.log(hasDuplicate([-1, 2, 1, 3, -3])); // False


// Using Map to look up
function hasDuplicate1(nums) {
  const duplicate = new Map();
  for (const num of nums) {
    duplicate.set(num, (duplicate.get(num) || 0) + 1);
    if (duplicate.get(num) > 1) return true;
  }

  return false;
}
console.log(hasDuplicate1([1, 2, 3, 3])); // True
console.log(hasDuplicate1([])); // False
console.log(hasDuplicate1([2])); // False
console.log(hasDuplicate1([-1, 2, 3, 3, -1])); // True
console.log(hasDuplicate1([-1, 2, 1, 3, -3])); // False
