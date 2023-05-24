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
    if(root == null) return root;
    Queue<TreeNode> q = new LinkedList<>();
    q.add(root);
    TreeNode node = new TreeNode();
    do{
      node = q.poll();
      if(node == null) continue;
      q.add(node.left);
      q.add(node.right);
      TreeNode save = node.left;
      node.left = node.right;
      node.right = save;
    }while(!q.isEmpty());
    return root;
  }
}

/*
Time Complexity: O(n). Must traverse through entire tree to invert all children nodes.
Space Complexity: O(n). We need to push every node on the queue to be inverted.
*/