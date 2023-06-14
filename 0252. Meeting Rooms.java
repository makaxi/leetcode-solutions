/*
 252. Meeting Rooms

Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false

Example 2:
Input: intervals = [[7,10],[2,4]]
Output: true
 */

class Solution {
  public boolean canAttendMeetings(int[][] intervals) {

      Arrays.sort(intervals, new Comparator<int[]>(){
          @Override
          public int compare(int[] interval1, int[] interval2){
              return interval1[0] - interval2[0];
          }
      });

      for(int i = 0; i < intervals.length - 1; i++){
          if(intervals[i][1] > intervals[i+1][0]) return false;
      }

      return true;
  }
}

/*
Time Complexity: O(n). We need to iterate through all the intervals in order to determine if there is a time conflict.
Space Complexity: O(1). No additional space is needed since we are just sorting and comparing.
 */