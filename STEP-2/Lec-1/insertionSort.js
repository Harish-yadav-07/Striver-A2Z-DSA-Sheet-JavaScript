function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place key at its correct position
        arr[j + 1] = key;
    }
    return arr;                                         
    
}                                               // time complexity -> O(n²) [worst case]
                                                // time complexity -> O(n)  [best case]

console.log(insertionSort([5, 3, 4, 1, 2]));
