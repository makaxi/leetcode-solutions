/*
881. Boats to Save People
https://leetcode.com/problems/boats-to-save-people/description/

You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
Return the minimum number of boats to carry every given person.

Example 1:
Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Example 2:
Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

Example 3:
Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
*/


/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let numBoats = 0;
    // sort people array
    people.sort((a,b) => a - b);
    console.log(people);

    let left = 0;
    let right = people.length - 1;
    while(left <= right){
        if(people[right] === limit) {
            numBoats++;
            right--;
        }
        else if(people[right] + people[left] === limit){
            numBoats++;
            right--;
            left++;
        }
        else if(people[right] + people[left] > limit){
            numBoats++;
            right--;
        }
        else if(right === left) return numBoats+1;
    }
    return numBoats;
};

/*
 * Time Complexity: O(nlogn). We need to sort the array which takes logn time, then iterate it once with two pointers to solve how many boats
 * Space Complexity: O(1). We only need to store the left pointer, right pointer, and num of boats
 */