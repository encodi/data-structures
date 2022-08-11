/**
 * Spread operator and some use cases
 */

// add elements of an existing array into a new array
const existingArray = ['Algorithms', 'Data Structures', 'Frontend', 'Backend'];
const updatedArray = ['Responsive design', ...existingArray, 'API', 'Unit Testing'];
console.log(updatedArray);

// pass elements of an array as arguments to a function
function addThreeNumber(x, y ,z) {
  return x + y + z;
}

const args = [0, 1, 2];
console.log(addThreeNumber(...args));

// copy arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);

// concatenate arrays
let arr3 = [0, 1, 2];
let arr4 = [3, 4, 5];
// arr3.concat(arr4); // Same as:
arr3 = [...arr3, ...arr4];
console.log(arr3)

// REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(element) {
    return multiplier * element;
  });
}

const array1 = multiply(2, 2, 3, 4);
console.log(array1);
