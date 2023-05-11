/*
206. Reverse Linked List

iven the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
 */

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
  public ListNode reverseList(ListNode head) {
      if(head == null || head.next == null){
          return head;
      }
      ListNode node = head.next;
      head.next = null;
      ListNode ans = reverseList(node);
      node.next = head;
      return ans;        
  }
}

 /*
Time Complexity: O(n). Must iterate through entire linked list to set the node's next to the prev node.
Space Complexity: O(n). Although we need to create space to reverse the node's next nodes. We implicitly create space on the stack during recursion that is n levels deep.
  */