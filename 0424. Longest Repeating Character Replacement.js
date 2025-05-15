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

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = new Map();

    let l = 0, r = 0;
    let mostFreqChar = 0;
    let maxLength = 0;

    while (r < s.length){
            let count = map.has(s[r]) ? map.get(s[r]) + 1 : 1; 
            map.set(s[r], count) 
            if(map.get(s[r]) > mostFreqChar) mostFreqChar = map.get(s[r]);

        while(r-l+1 - mostFreqChar > k){
            let decCount = map.get(s[l]) - 1;
            map.set(s[l], decCount);
            l++;
        }
        
        maxLength = Math.max(r-l+1, maxLength);
        r++;
    }

    return maxLength;
};

//characterReplacement("AABABBA", 2);
characterReplacement("AAAB", 0);

/*
 * Time Complexity: O(n). Since we are using a sliding window, we only need to iterate through the s once. We save time by using keeping track of the mostFreqChar instead of iteratively checking our map for the char with the most appearances. We can do this because we do not care if it decrements since we are only checking if a current substring is longer than one we found before. 
 * Space Complexity: O(m) where m is the number of unique elements in the string. We use a map to store the count of each unique element.
 */