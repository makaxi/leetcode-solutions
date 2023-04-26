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