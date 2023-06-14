/*
104. Maximum Depth of Binary Tree\
 
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
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
  public int maxDepth(TreeNode root) {
      int max = 0;
      int leftCurr = 0;
      int rightCurr = 0;
      if(root == null) return 0;
      leftCurr += maxDepth(root.left);
      rightCurr += maxDepth(root.right);
      int curr = Math.max(leftCurr, rightCurr);
      if(curr > max) max = curr;

      return max+1;  
  }
}

 /*
Time Complexity: O(n). We need to traverse through all nodes in order to ensure we are going down the path with the most depth.
Space Complexity: O(h) -> O(n). Since we are solving this recursively, the call stack will have a most h function calls when we reach the max depth.
  */