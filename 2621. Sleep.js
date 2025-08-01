/*
2621. Sleep
https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is acceptable.

Example 1:
Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});

Example 2:
Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.

Constraints:
1 <= millis <= 1000
*/

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    
}
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

/*
 * Time Complexity: O().
 * Space Complexity: O().
 */