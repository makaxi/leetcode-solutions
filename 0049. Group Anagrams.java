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

class Solution {
  public List<List<String>> groupAnagrams(String[] strs) {
      Map<String, List<String>> map = new HashMap<>();
      for(String str: strs){
          char[] charArr = str.toCharArray();
          Arrays.sort(charArr);
          String sortedStr = new String(charArr);

          List<String> anagrams = new ArrayList<>();
          if(map.containsKey(sortedStr)){
              anagrams = map.get(sortedStr);
          }
          anagrams.add(str);
          map.put(sortedStr, anagrams);
      }

      List<List<String>> ans = new ArrayList();
      for (List<String> value : map.values()) {
          ans.add(value);
      }
      
      return ans;
  }
}

 /*
Time Complexity:  O(NKlogK) where N is the length of strs and K is the maximum length of a string in strs. Takes O(N) to go through the length of strs and flattening the hashmap to a list. Sorting requires O(KlogK).
Space Complexity: O(NK). Hashmap needs to contain each input.
  */