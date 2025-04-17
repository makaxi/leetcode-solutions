/*
42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
 
Constraints:
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let totalRain = 0;
    let leftHighest = new Array(height.length);
    let rightHighest = new Array(height.length);

    let currHighest = 0;
    for(let i = 1; i < height.length; i++){
        let left = height[i-1];
        currHighest = Math.max(left, currHighest);
        leftHighest[i] = Math.max(left, currHighest);
    }

    currHighest = 0;
    for(let i = height.length - 2; i >= 0; i--){
        let right = height[i + 1];
        currHighest = Math.max(right, currHighest);
        rightHighest[i] = Math.max(right, currHighest);
    }

    for(let i = 1; i < height.length - 1; i++){
        let possibleHeight = Math.min(leftHighest[i], rightHighest[i]);
        if(height[i] < possibleHeight) totalRain += possibleHeight - height[i];
    }

    return totalRain;
};

/*
Time Complexity: O(3n) => O(n). We iterate twice when storing the highest left wall, and then the highest right walls. For the final iteration, we iterate through the array once more to calculate the total rain by taking the difference between the lower wall height and the current height.
Space Complexity: O(2n) => O(n). We create 2 extra arrays to store the the highest walls on the left and right side of the current wall.
*/