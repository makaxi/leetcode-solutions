/*
143. Reorder List
https://leetcode.com/problems/reorder-list/description/

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let copy = head;

  let arr = new Array();
  while(copy){
      arr.push(copy);
      copy = copy.next;
  }
  
  let length = arr.length;
  //console.log(length);

  let i = 1;
  let index;
  let start = 1;
  let end = length - 1;

  while(i < length){
      // if it's even index, we want to point from the start  
      if(i % 2 == 0){
          index = start;
          start++;
      }
      // if it's an odd index, we want to point from the end 
      else{
          index = end;
          end--;
      }
      i++;
      //console.log(`${index} : ${arr[index].val}`);
      head.next = arr[index];
      head = head.next;
  }    
  head.next = null;
};

 /*
Time Complexity: O(2n) -> O(n). We need to iterate through all the nodes in the linked list twice.
Space Complexity: O(n). We make a copy of the linked list and store it in an array to be able to reference which one we want to point to next
 */