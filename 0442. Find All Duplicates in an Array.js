/*
442. Find All Duplicates in an Array
https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

Example 2:
Input: nums = [1,1,2]
Output: [1]

Example 3:
Input: nums = [1]
Output: []
 
Constraints:
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
Each element in nums appears once or twice.
*/

/**
* @param {number[]} nums
* @return {number[]}
*/
var findDuplicates = function(nums) {
   let duplicates = [];
   
   // numbers    [1, 2, 3, 4, 5]
   // indexes    [0, 1, 2, 3, 4]
   // duplicates [3, 4, 5, 4, 3]
   // duplicates [3, 4,-5,-4,-3]
   //            [             ]

   for(let i = 0; i < nums.length; i++){
       let val = Math.abs(nums[i]);
       let index = val - 1;

       // see if number has been seen
       // if number is positive, we will mark it negative to indicate we've seen it
       // if it's negative, that means the number has been see so it's a duplicate negative, we have now seen it 
       
       if(nums[index] > 0){
           nums[index] = -nums[index]; // do we negate it or make sure its negative
       }
       else{
           duplicates.push(val);
       }
   }

   return duplicates;
};

/*
 * Time Complexity: O(n). The problem requires us to solve the problem in linear time, so we iterate through the array once.
 * Space Complexity: O(1). The problem requires us to use constant auxilary space, so we will use the input array to store the values we have seen by marking the seen values as negative.
*/