function quickSort(arr) {
    // Base case: if array has 0 or 1 element, it’s already sorted
    if (arr.length <= 1) return arr;

    // Choose pivot (here, last element)
    const pivot = arr[arr.length - 1];

    // Partition step
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    // Recursively sort left and right, then combine
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([4, 2, 7, 1, 3]));
