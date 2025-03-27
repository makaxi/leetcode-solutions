/*46. Permutations

Medium

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let subset = [];
    let solution = [];
    let copy = [...nums];
    
    let backtrack = function(start,elementsLeft){
        if(start === nums.length){
            solution.push([...subset]);
            return;
        }
        
        for(let i = 0; i < nums.length - start; i++){
            let numPicked = elementsLeft[i];
            subset.push(numPicked);

            elementsLeft.splice(i, 1);
            backtrack(start+1, elementsLeft);
            elementsLeft.splice(i,0,numPicked);
            subset.pop();
        }
    }

    backtrack(0, copy);
    return solution; 
};

nums = [10,20,30]
permute(nums);

/*
Time Complexity: O(n*n!) -> O(n!). At each level of the dfs, we have n-i options, so this is O(n!) time. And at each permutation, it takes O(n) time to iterate through each value in the array. 
Space Complexity: O(n) + O(n*n!) -> O(n!). We need to store each permutation which takes O(n*n!) space and the recusive call stack is O(n) space.
 */