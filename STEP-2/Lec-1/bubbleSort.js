function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // stops early if already sorted
    }
    return arr;
}                                               // time complexity -> O(n²) [worst case]
                                                // time complexity -> O(n)  [best case]
console.log(bubbleSort([5, 3, 8, 4, 2]));
