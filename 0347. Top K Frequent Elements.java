/*
347. Top K Frequent Elements
 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/

class Solution {
  public int[] topKFrequent(int[] nums, int k) {
      
      HashMap<Integer, Integer> map = new HashMap<>();
      for(int i = 0; i < nums.length; i++){
          int currVal = map.getOrDefault (nums[i], 0);
          map.put(nums[i], currVal+1);
      }

      List<Map.Entry<Integer, Integer>> entryList = new ArrayList<>(map.entrySet());
      
      // Sort the entries by values in ascending order
      Collections.sort(entryList, new Comparator<Map.Entry<Integer, Integer>>() {
          @Override
          public int compare(Map.Entry<Integer, Integer> entry1, Map.Entry<Integer, Integer> entry2) {
              //System.out.println(entry1.getValue()  + " ? " + entry2.getValue());
              return entry2.getValue().compareTo(entry1.getValue());
          }
      });

      /*
      for (Map.Entry<Integer, Integer> entry : entryList) {
          System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
      }
      */
      
      int[] answer = new int[k];
      for(int i = 0; i < k; i++){
          answer[i] = entryList.get(i).getKey();
      }
      return answer;
  }
}

/*
Time Complexity: O(nlogn). We need to traverse through all values of nums, n, when inserting. It takes nlogn time we sort the list.
Space Complexity: O(n). We need to insert all values into a hash map, and then flatten that hashmap into a list.
 */