/*
206. Reverse Linked List
https://leetcode.com/problems/reverse-linked-list/

Given the head of a singly linked list, reverse the list, and return the reversed list.

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
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(!head) return null;

  let nextNode = head.next;
  head.next = null;
  while(nextNode !== null){
      let saveNode= nextNode.next
      nextNode.next = head;
      head = nextNode;
      nextNode = saveNode;
  }
  return head;
  
};

 /*
Time Complexity: O(n). Must iterate through entire linked list to set the node's next to the prev node.
Space Complexity: O(1). Since we are reversing the linked list iteratively, we don't need the memory of a call stack. Instead we only need to create 2 extra variables to save nextNode before it's overwritten.
  */