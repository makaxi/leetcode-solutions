/*
169. Majority Element
https://leetcode.com/problems/majority-element/description/

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let max = 0;
    let maj = nums[0];
    nums.forEach(val => {
        if(!map[val]) map[val] = 1;
        else {
            map[val] = map[val] + 1;
            if(map[val] > max){
                max = map[val];
                maj = val;
            }
        }
    })
    return maj;
};

/*
 * Time Complexity: O(n). We iterate through the whole array and keep track of how many times we have seen that element
 * Space Complexity: O(n). At most we will have n/2 new elements to insert to our hashmap, since the array will always a have a majority element that takes up half the values in the nums array. The key is the element, and the value is the number of times we have seen the element
 */