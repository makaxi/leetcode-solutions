/*
424. Longest Repeating Character Replacement
https://leetcode.com/problems/longest-repeating-character-replacement/description/

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 
Constraints:
1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
*/

/*
* @param {string} s
* @param {number} k
* @return {number}
*/
var characterReplacement = function(s, k) {
    console.log(s);
   let originalK = k;
   let solution = 0;
   let length = 0;
   let left = 0; right = 0; last = 0;
   let i = 1;
   while(i < s.length){
       if(s[i] === s[i-1])length++;
       else if(k > 0){
           k--;
           length++;
           last = i;
       }
       else if(k <= 0){
           i = last;
           k = originalK;
       }
       solution = Math.max(length, solution);
       i++;
   }

   return solution;
};

/*
 * Time Complexity: 
 * Space Complexity:
 */