/*
70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n < 3) return n;
    let stepOne = 1;
    let stepTwo = 2;
    let steps = 0;
    for(let i = 3; i <= n; i++){
        steps = stepOne + stepTwo;
        stepOne = stepTwo;
        stepTwo = steps;
    }
    return steps;
};

/*
Time Complexity: O(n). We only need to iterate n times. 
Space Complexity: O(1). We only need to store 3 variable. 
 */