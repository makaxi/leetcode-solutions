/*
19. Remove Nth Node From End of List
https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head.next) return null;

    let copy = head;
    let count = 0;
    while(copy){
        count++;
        copy = copy.next;
    }
    
    let savedHead = head;

    for(let i = 0; i < count - 1 - n; i++){
        head = head.next;
    }

    if(n === count){
        return savedHead.next;
    }
    else if(n === 1){
        head.next = null;
    }
    else{
        let save = head.next.next;
        head.next = save;
    }

    return savedHead;
};

/*
 * Time Complexity: O(2n) -> O(n). We iterate through the linked list once to count the number of nodes, then iterate again to length - 1 - n to remove the nodes.
 * Space Complexity: O(1). We only need to create a couple variables to save nodes and count the number of nodes in the list
 */