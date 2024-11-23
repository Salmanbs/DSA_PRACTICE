function findKthLargest(arr, k) {
    const sortedArr = arr.sort((a, b) => b - a); // Sort in descending order
    return sortedArr[k - 1]; // Kth largest element
}

// Example usage:
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5 (2nd largest)


//MIN HEAP APPROACH 

function findKthLargest(arr, k) {
    const kLargestElements = arr.slice(0, k).sort((a, b) => a - b); // Keep top K elements sorted (smallest to largest)

    for (let i = k; i < arr.length; i++) {
        if (arr[i] > kLargestElements[0]) {
            kLargestElements[0] = arr[i];
            kLargestElements.sort((a, b) => a - b); // Re-sort when an element is added
        }
    }

    return kLargestElements[0];
}

// Example usage:
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
