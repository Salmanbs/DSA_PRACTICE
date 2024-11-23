// Delete value from the array

const arr = [1, 2, 3, 4, 5];
const index = arr.indexOf(3); // Find index of the value to delete
if (index !== -1) {
    arr.splice(index, 1); // Remove 1 element at the found index
}
console.log(arr); // Output: [1, 2, 4, 5]


// const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter(value => value !== 3); // Remove all occurrences of 3
console.log(newArr); // Output: [1, 2, 4, 5]

// const arr = [1, 2, 3, 4, 5];
arr.pop(); // Removes the last element
console.log(arr); // Output: [1, 2, 3, 4]

arr.shift(); // Removes the first element
console.log(arr); // Output: [2, 3, 4]

// const arr = [1, 2, 3, 4, 5];
delete arr[2]; // Deletes the value at index 2
console.log(arr); // Output: [1, 2, undefined, 4, 5]


