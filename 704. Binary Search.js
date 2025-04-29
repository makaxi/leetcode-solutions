/*
704. Binary Search
https://leetcode.com/problems/binary-search/description/

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 
Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let binarySearch = function(left, right){
        if(right < left) return -1;

        let mid = Math.floor((left + right)/2);

        if(nums[mid] === target) return mid;
        else if(nums[mid] < target){
            return binarySearch(mid+1,right)
        }
        else if(nums[mid] > target){
            return binarySearch(left, mid-1);
        }
    }

    return binarySearch(0, nums.length-1);
};

/*
 * Time Complexity: O(logn). Since the array is already sorted, we use binary search to find the target. At each iteration, we only search half of the array.
 * Space Complexity: O(logn). We use recursion to search the array. The space complexity is O(logn) because of the recursion stack.
 */