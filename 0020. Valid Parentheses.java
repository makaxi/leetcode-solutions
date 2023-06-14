/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for(int i = 0 ; i < s.length(); i++){
            if(s.charAt(i) == ')'){
                if(stack.isEmpty() || stack.pop() != '(') return false;
            }
            else if(s.charAt(i) == '}'){
                if(stack.isEmpty() || stack.pop() != '{') return false;
            }
            else if(s.charAt(i) == ']'){
                if(stack.isEmpty() || stack.pop() != '[') return false;
            }
            else{
                stack.push(s.charAt(i));
            }
        }
        if(stack.isEmpty()) return true;
        return false;
    }
}

/*
Time Complexity: O(n). Need to iterate through whole input string to check parentheses are valid.
Space Complexity: O(n). At most we insert every open bracket in the string onto the stack.
*/
