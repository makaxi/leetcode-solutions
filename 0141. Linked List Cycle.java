/*
 141. Linked List Cycle

 Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
  public boolean hasCycle(ListNode head) {
      if (head == null) return false;
      ListNode slow = head;
      ListNode fast = head.next;

      while(fast != null){
          if(fast.next == null) return false;
          if(slow == fast) return true;
          slow = slow.next;
          fast = fast.next.next;
      }
      return  false;
  }
}

 /*
Time Complexity: O(n). Best case we iterate to the end of the list in n/2 time. Worst case would be slow pointer iterates through the end before it merges with fast pointer O(n).
Space Complexity: O(1). Only 2 ListNodes are created to keep track of where we are in the loop.
 */