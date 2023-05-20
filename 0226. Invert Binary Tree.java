/*
 * 226. Invert Binary Tree
 * Given the root of a binary tree, invert the tree, and return its root.
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
    public TreeNode invertTree(TreeNode root) {
    	postOrder(root);
      return root;
    }
    
    public void postOrder(TreeNode node) {
    	if(node == null) return;      
      postOrder(node.left);
      postOrder(node.right);
      
      TreeNode temp = node.left;
      node.left = node.right;
      node.right = temp;
    }
}
/*
Time Complexity: O(n). Must traverse through entire tree to invert all children nodes.
Space Complexity: O(h) => O(n). We only create a new ListNode to temporary save a value while we overwrite it which is constant time. Since we are using recursion, the callstack will contain at most h(height of the tree) function calls
*/