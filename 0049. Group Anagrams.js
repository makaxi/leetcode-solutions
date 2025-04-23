/*
49. Group Anagrams
 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let solution  = [];
    let map = new Map();

    for(let str of strs){
        let key = str.split('').sort().join('');
        
        // put in hash map, key is the sorted str, values are the original str
        if(!map.has(key)){
            map.set(key, []);
        }

        map.key = map.get(key).push(str);
    }

    return Array.from(map.values());
};

/*
Time Complexity:  O(NKlogK) where N is the length of strs and K is the maximum length of a string in strs. Takes O(N) to go through the length of strs and flattening the hashmap to a list. Sorting requires O(KlogK).
Space Complexity: O(NK). Hashmap needs to contain each input.
*/