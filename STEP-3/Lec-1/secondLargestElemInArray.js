function secondLargest(arr) {
    if (arr.length < 2) return null; // Not enough elements

    let first = -Infinity, second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;
}

// Example:
console.log(secondLargest([10, 5, 20, 8, 20])); // Output: 10
