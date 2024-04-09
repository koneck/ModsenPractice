"use strict";

function isInArray(arr, value) {
    return arr.includes(value);
}

const array = [1, 2, 3, 4, 5];
console.log(isInArray(array, 3)); 
console.log(isInArray(array, 6)); 
