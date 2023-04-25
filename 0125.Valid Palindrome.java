/* 
125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

class Solution {
    public boolean isPalindrome(String s) {
        s = s.toLowerCase();
        s = s.replaceAll("[^a-zA-Z0-9]", "");
        int len = s.length();
        char[] S = s.toCharArray();
        for(int i = 0; i < len/2; i++){
            if(S[i] != S[len - 1 -i]) return false;
        }
        return true;
    }
}