/*
238. Product of Array Except Self
https://leetcode.com/problems/product-of-array-except-self/

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let solution = new Array(nums.length).fill(0);
    let numZeros = 0;
    let indexOfZero = -1;
    let totalSum = 1;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            numZeros++;
            indexOfZero = i;
            if(numZeros >= 2) return solution;
            continue;
        }
        totalSum *= nums[i];
    }

    if(numZeros === 1){
        solution[indexOfZero] = totalSum;
    }
    else{
        for(let i = 0; i < nums.length; i++){
            solution[i] = totalSum / nums[i];
        }
    }

    return solution;
};

/*
 * Time Complexity: O(2n) -> O(n). We loop through the array the first time to calculate the product of all the numbers, and then we loop through the array again and divide the total product by the item itself.
 * Space Complexity: O(1) -> If we do not count the solution array as additional memory, we only need a couple variables to store the totalProduct and check how many zeros there are in the array. 
*/