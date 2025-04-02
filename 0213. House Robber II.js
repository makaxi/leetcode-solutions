/*
213. House Robber II
https://leetcode.com/problems/house-robber-ii/description/

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 3:
Input: nums = [1,2,3]
Output: 3
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0];

    let rob1 = 0;
    let rob2 = 0;
    let temp = 0;

    for(let i = 0; i < nums.length - 1; i++){
        temp = Math.max(rob1 + nums[i], rob2);
        rob1 = rob2;
        rob2 = temp;
    }

    let rob3 = 0;
    rob1 = 0;

    for(let i = nums.length - 1; i > 0; i--){
        temp = Math.max(rob1 + nums[i], rob3);
        rob1 = rob3;
        rob3 = temp;
    }

    return Math.max(rob2, rob3);
};

/*
 * Time Complexity: O(2n) -> O(n). Iterate through input array forwards and backwards 
 * Space Complexity: O(1). We only need to store 4 additional variables 
 */