/*
21. Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/description/

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let tail = new ListNode;
    let start = tail;

    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            tail.next = list1;
            list1 = list1.next;
        }else{
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    if(list1) tail.next = list1;
    else tail.next = list2;

    return start.next;
};

list1 = [1,2,4]
list2 = [1,3,4]
mergeTwoLists(list1,list2);

 /*
Time Complexity: O(n + m). Must iterate through the entirety of both lists
Space Complexity: O(1). We only create 2 new ListNodes which is constant space. No extra space is needed to merge lists as we only need to redirect the links
  */