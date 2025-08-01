/*
2722. Join Two Arrays by ID
https://leetcode.com/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript

Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

Example 1:
Input:
arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
],
arr2 = [
    {"id": 3, "x": 5}
]
Output:
[
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
]
Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.

Example 2:
Input:
arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
],
arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Output:
[
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.

Example 3:
Input:
arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]
Output: [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]
Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.

Constraints:
arr1 and arr2 are valid JSON arrays
Each object in arr1 and arr2 has a unique integer id key
2 <= JSON.stringify(arr1).length <= 106
2 <= JSON.stringify(arr2).length <= 106
*/

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // sort arr1 & arr2?
    // copy arr1 into result
    let results = arr1;
    // keep track of the index that the id field is in
    let arr1Map = new Map();
    for(let i = 0; i < arr1.length; i++){
        arr1Map.set( arr1[i].id , i)
    }
    // loop through arr2
    for(let i = 0; i < arr2.length; i++){
        // for each item, 
        // if it does not exist, copy directly
        if(!arr1Map.has(arr2[i].id)){
            results.push(arr2[i])
        }else{
        // if it exists in results
        // loop through all key value pairs and override existing keys
            let index = arr1Map.get(arr2[i].id);
            Object.entries(arr2[i]).forEach(([key, value]) => {
                if(key === 'id') return;
                results[index][key] = value;
            })
        }
    }
    // sort results by id key
    results.sort((a,b) => a.id - b.id);
    
    return results;
};

/*
 * Time Complexity: O().
 * Space Complexity: O().
 */