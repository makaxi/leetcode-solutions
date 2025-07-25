/*
2705. Compact Object
https://leetcode.com/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript

Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

Example 1:
Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.

Example 2:
Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

Example 3:
Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

Constraints:
obj is a valid JSON object
2 <= JSON.stringify(obj).length <= 106
*/

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {

    function arrayHelper(arr){
        let truthy = []; 
        for(let item of arr){
            if( Array.isArray(item) ) 
                truthy.push( arrayHelper(item) );
            else if(typeof item === 'object' && item !== null ){
                truthy.push( objectHelper(item ))
            }
            else{
                if(item) truthy.push(item);
            }
        }
        return truthy; 
    }

    function objectHelper(object){
        let result = new Object;
        for(let key in object){
            let compactValue = undefined; 
            let value = object[key];
            if(Array.isArray(value) ) compactValue = arrayHelper(value);
            else if( typeof value === 'object' && value !== null) compactValue = objectHelper(value);
            
            if(compactValue) result[key] = compactValue;
            else if( value ) result[key] = value;
        }
        return result;
    }

    if( Array.isArray(obj) ) {
        return arrayHelper(obj);
    }else{
        return objectHelper(obj);
    }
};

//let test = {"z":{"d":true,"t":null,"o":21},"w":12,"y":0};
let test = {"a": null, "b": [false, 1]};
let ans = compactObject(test);
console.log(ans);
/*
 * Time Complexity: O().
 * Space Complexity: O().
 */