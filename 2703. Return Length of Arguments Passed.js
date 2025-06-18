/*
2703. Return Length of Arguments Passed
https://leetcode.com/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript

Write a function argumentsLength that returns the count of arguments passed to it.

Example 1:
Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.

Example 2:
Input: args = [{}, null, "3"]
Output: 3
Explanation:
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.

Constraints:
args is a valid JSON array
0 <= args.length <= 100
*/

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let count = 0;
    while(args[0] !== undefined){
        count++;
        args.pop();
    }
    return count;
};
/**
 * argumentsLength(1, 2, 3); // 3
 */

/*
 * Time Complexity: O(n). Need to iterate through the whole array
 * Space Complexity: O(1). No extra space is used if we are popping from the given array
 */