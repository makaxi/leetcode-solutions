/*
141. Linked List Cycle
https://leetcode.com/problems/linked-list-cycle/

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
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head) return false;
  let fast = head.next;
  let slow = head;

  while(fast && fast.next){
      if(fast == slow) return true;
      fast = fast.next.next;
      slow = slow.next;
  }

  return false;
};

 /*
Time Complexity: O(n). Best case is there is no cycle and we reach the end of the list. If there is a cycle, we could possibly be looping through the list many times until the slow and fast pointer point to the same node. But this would still be O(cn) where we can drop the constant coefficient.
Space Complexity: O(1). By sacraficing speed, we can solve this in constant time. We only need to create 2 extra variables to point to the nodes.
 */