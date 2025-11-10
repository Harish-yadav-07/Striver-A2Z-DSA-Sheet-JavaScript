function checkSortedandRotated(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            count++;
        }
    }
    if (arr[arr.length - 1] > arr[0]) {
        count++;
    }
    return count <= 1;
}
console.log(checkSortedandRotated([3, 4, 5, 1, 2]));   // true
console.log(checkSortedandRotated([2, 1, 3, 4]));     // false
console.log(checkSortedandRotated([1, 2, 3]));       // true