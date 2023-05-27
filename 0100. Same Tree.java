/*
100. Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  public boolean isSameTree(TreeNode p, TreeNode q) {
      if(p == null && q != null) return false;
      if(q == null && p != null) return false;
      if(p == null && q == null) return true;
      if(p.val != q.val) return false;

      boolean leftBranch = isSameTree(p.left, q.left);
      boolean rightBranch = isSameTree(p.right, q.right);

      return leftBranch && rightBranch;
  }    
}

/*
Time Complexity: O(n). We need to check if all nodes are the same, thus we need to visit each node. The code can be slightly optimized such that when the trees are not the same, we simply return and do not check the rest of the nodes in the tree.
Space Complexity: O(h) -> O)(n). Since we are doing this recursively, the call stack will contain h function calls. In the worst case scenario, it will contain n function calls if the tree is simply a linked list.
 */