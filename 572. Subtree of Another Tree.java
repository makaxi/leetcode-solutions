/*
 572. Subtree of Another Tree
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Example 2:
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
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
  public boolean isSubtree(TreeNode root, TreeNode subRoot) {
      if(root == null) return false;
      
      if(sameNode(root, subRoot)){
          return true;
      }
      else{
          boolean foundLeftSame = isSubtree(root.left, subRoot);
          boolean foundRightSame = isSubtree(root.right, subRoot);
          return foundLeftSame || foundRightSame;
      }
  }

  public boolean sameNode(TreeNode node, TreeNode subNode){
      if(node == null && subNode == null) return true;
      if(node == null || subNode == null) return false;
      return node.val == subNode.val && sameNode(node.left, subNode.left) && sameNode(node.right, subNode.right);
  }
}

/*
 N is the number of nodes in the tree rooted at the root
M is the number of nodes in the tree rooted at subRoot
Time Complexity: O(NM). We must traverse through all of the root tree N in order to say we did not find a subroot, and at each N node we might check against each M. 
Space Complexity: O(N+M). Since we are solving this via DFS with a stack, the call stack will have N elements before we start checking if N and M are identical. At that point, the call stack can increase to O(N+M) elements.
 */