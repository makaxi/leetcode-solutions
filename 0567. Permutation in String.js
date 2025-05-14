/*
567. Permutation in String
https://leetcode.com/problems/permutation-in-string/description/

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 
Constraints:
1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s2.length < s1.length) return false;

    let counts = new Array(26).fill(0);
    for(let char of s1){
        counts[char.charCodeAt(0) - 97]++;    
    }

    let left = 0;
    let length = 0;
    for(let i = 0; i < s2.length; i++){
        if( counts[s2[i].charCodeAt(0) - 97] <= 0){
            while(left < i && counts[s2[i].charCodeAt(0) - 97] <= 0 && length > 0){
                    counts[s2[left].charCodeAt(0) - 97]++;
                    length--;
                    left++;
            }
        }
        if(counts[s2[i].charCodeAt(0) - 97] > 0){
            counts[s2[i].charCodeAt(0) - 97]--;
            if(length === 0) left = i;
            length++;
        }
        if(length === s1.length) return true;
    }
    return false;
};

let s1 = "ab";
let s2 = "acaifba";
/* let s1 = "ab";
let s2 = "eidboaoo"; */
console.log(checkInclusion(s1,s2));

/*
 * Time Complexity: 
 * Space Complexity:
 */