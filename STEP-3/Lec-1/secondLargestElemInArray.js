function secondLargest(arr) {
    let largest = arr[0];
    let slargest = -1;
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            slargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > slargest) {
            slargest = arr[i]
        }
    }
    return slargest;                              // time complexity -> O(n)                           
}                                                // Space complexity -> O(1)

console.log(secondLargest([10, 5, 20, 8, 20])); // Output: 10
