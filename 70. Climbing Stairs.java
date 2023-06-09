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

 class Solution {
  public int climbStairs(int n) {
      int memoization[] = new int[n+1];
      return climbStairsHelper(0, n, memoization);
  }
  public int climbStairsHelper(int i, int n, int memo[]){
      if(i > n) return 0;
      if(i == n) return 1;
      if(memo[i] > 0) return memo[i];
      memo[i] = climbStairsHelper(i + 1, n, memo) + climbStairsHelper(i + 2, n, memo);
      return memo[i];
  }
}

/*
This brute force solution is optimized using memoization to save the calculated value of each step. This way when we see the same i value, we just use the memomoized value instead of having to redo the calculations.

 Time Complexity: O(n). Since we only do the calculation once for each n step, the time complexity is linear.
Space Complexity: O(n). We need to  memoize each calculation of the helper function at each n step using an array.
 */