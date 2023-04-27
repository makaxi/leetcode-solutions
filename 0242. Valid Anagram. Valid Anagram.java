/*
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 */

 class Solution {
  public boolean isAnagram(String s, String t) {
      if(s.length() != t.length()) return false;
      HashMap<Character, Integer> map = new HashMap<Character, Integer>();
      for(int i = 0; i < s.length(); i++) {
          map.put( s.charAt(i), map.getOrDefault(s.charAt(i), 0) + 1  );
          map.put( t.charAt(i), map.getOrDefault(t.charAt(i), 0) - 1 );
      }
      for(Integer value : map.values()) {
          if ( value != 0) return false;
      }
      return true;
  }
}

/*
 * Time Complexity: O(n). Iterate through length of string input, then through
 * the hashmap. O(2n) reduces to O(n).
 * 
 * Space Complexity: O(n). Hashmap stores at most the length of the input
 * string characters.
 */