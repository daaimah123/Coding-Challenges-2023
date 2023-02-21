/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


Examples:
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

*/

function chunkArrayInGroups(arr, size) {
    // new array to hold nested arrays
    let newArray = [];
    while (arr.length > 0) {
        // slice exact # of indexes with each iteration in its own array of numbers
        newArray.push(arr.splice(0, size));
      }
    // new array with nested arrays with size length
    return newArray;
}
  
chunkArrayInGroups(["a", "b", "c", "d", "e"], 3);