// Approach using two variables -> left and right

function reverseArray(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return arr;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    return reverseArray(arr, left + 1, right - 1);
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// Approach using one variable -> i

function ReverseArray(arr, i = 0, n = arr.length - 1) {
    if (i >= n / 2) return arr;
    [arr[i], arr[n - i]] = [arr[n - i], arr[i]];
    return ReverseArray(arr, i + 1,  n);
}

console.log(ReverseArray([6, 7, 8, 9, 10])); // [10, 9, 8, 7, 6]