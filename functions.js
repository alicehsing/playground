// write a function that adds the newItem to the existing array. Be sure and take a look at the test and remember that pure functions always return something!
export function insertIntoArray(someArray, newItem) {
    someArray.push(newItem);
    return someArray;
}

// write a function that removes an existing item from an array. 
export function removeFromArray(someArray, arrayItem) {
    someArray.pop(arrayItem);
    return someArray;
}

// write a function that takes in two arrays and returns a new array that is a combination of the first two.
export function concatArrays(array1, array2) {
    return array1.concat(array2);   
}

// write a function that takes in an array and returns a new array that is comprised of the first two indexes of the original array
export function sliceArray(someArray) {
   return someArray.slice(0, 2);
}