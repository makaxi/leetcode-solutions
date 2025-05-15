/*
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/description/

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

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let item of s){
        if(item === "(" || item === "{" || item === "["){
            stack.push(item);
        }else{
            let popped = stack.pop();
            if(item === ")"){
                if(popped !== "(") return false;
            }else if(item === "}"){
                if(popped !== "{") return false;
            }else if(item === "]"){
                if(popped !== "[") return false;
            }
        }
    }
    if(stack.length !== 0) return false;
    return true;
};

/*
Time Complexity: O(n). Need to iterate through whole input string to check parentheses are valid.
Space Complexity: O(n). At most we insert every open bracket in the string onto the stack.
*/
