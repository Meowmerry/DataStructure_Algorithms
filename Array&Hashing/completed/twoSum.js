/*
Two Integer Sum
https://neetcode.io/problems/two-integer-sum
Given an array of integers nums and an integer target, 
return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7
Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Example 2:
Input: nums = [4,5,6], target = 10
Output: [0,2]

Example 3:
Input: nums = [5,5], target = 10
Output: [0,1]

Constraints:
2 <= nums.length <= 1000
-10,000,000 <= nums[i] <= 10,000,000
-10,000,000 <= target <= 10,000,000

Explore:
Input: array of nums >= 2 , target: Number
Output: index of two sum // with the smaller index first
target: is can be zero, or nagative or positive

Brainstrom:
    Brute force: 
        2 loops
     result = []       
 [3,4,5,6], target = 7
  

  i + j = target
  if(i+ j === tareget)
       resutl[i, j]
 
  return result
 first iterate 
    second inter



    -----------

    solution using Map

    key:value
    key = element, value = index

    1 loop only. 
    create a new Map
    iterate through the array
        check target - current element to find the difference
        check our map if the difference exists, return [i, map[difference]] (but need to sort this output)
{
 element: Index 
}
        
Plan: 


Implement:


*/

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} target
//      * @return {number[]}
//      */
//     twoSum(nums, target) { }
// }

function twoSum(nums, target) {
    const numsMap = new Map();
    // const output = [];
    for (i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        // console.log({numsMap})
        //check if we've seen the difference already
            if (numsMap.has(diff)) {
                 console.log('get:', numsMap.get(4));
                 console.log('has:', numsMap.has(3));
                return [numsMap.get(diff), i];
            }
            // output.push(Math.min(i,numsMap.get(diff)))
            numsMap.set(nums[i], i);
    }
   
    return [-1,-1]
 }

 console.log(twoSum([3,4,5,6],7)) // [0,1]
//  console.log(twoSum([4,5,6],10)) // [0,2]
//  console.log(twoSum([5,5],10)) // [0,1]