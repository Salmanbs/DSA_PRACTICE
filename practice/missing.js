
// Find the Missing Number in an Array

function missingNumber (arr){
    const n = arr.length + 1 //Total length including the missing number
    const totalSum = (n * (n + 1))/2

    const arrSum = arr.reduce((acc, val) => acc + val, 0)
    return totalSum - arrSum
}

// Example usage:
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3 (missing number)