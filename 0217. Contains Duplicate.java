/*
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/description/
 * 
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 */

 class Solution {
  public boolean containsDuplicate(int[] nums) {
      HashSet<Integer> map = new HashSet();
      for(int num : nums){
          if(map.contains(num)) return true;
          map.add(num);
      }
      return false;
  }
}

/*
 * Time Complexity: O(n). Iterate through input array linearly 
 * Space Complexity: O(n). Each index of nums is inputted into HashMap until we reach a duplicate
 */