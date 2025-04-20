/*

128. Longest Consecutive Sequence
https://leetcode.com/problems/longest-consecutive-sequence/description/

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Example 3:
Input: nums = [1,0,1,2]
Output: 3

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longest = 0;

    const numSet = new Set(nums);
    for(let num of numSet){
        let count = 1;
        if(!numSet.has(num+1)){
            while(numSet.has(num-1)){
                count++;
                num--;
            };
        }
        longest = Math.max(longest, count);
    }

    return longest;
};

/*
 * Time Complexity: O(n). We iterate through all the elements in the array and push to a set as we check if they are end of the sequence.
 * Space Complexity: O(n). A hashset is used to store every element in the array.
 */