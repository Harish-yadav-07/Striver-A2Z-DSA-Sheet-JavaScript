// O(1) - Constant Time
function getFirstElement(arr) {
    return arr[0];
}

// O(n) - Linear Time
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// O(n^2) - Quadratic Time
function printAllPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}

// O(log n) - Logarithmic Time (Binary Search)
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
console.log('O(1):', getFirstElement(arr));
console.log('O(n):', sumArray(arr));
console.log('O(n^2):');
printAllPairs([1, 2]);
console.log('O(log n):', binarySearch([1, 2, 3, 4, 5], 3));