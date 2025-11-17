function sort012(arr) {
    let count0 = 0, count1 = 0, count2 = 0;

    // First pass: counting
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) count0++;
        else if (arr[i] === 1) count1++;
        else count2++;
    }

    // Second pass: rewrite array using for loops
    let idx = 0;

    for (let i = 0; i < count0; i++) arr[idx++] = 0;
    for (let i = 0; i < count1; i++) arr[idx++] = 1;
    for (let i = 0; i < count2; i++) arr[idx++] = 2;

    return arr;
}
console.log(sort012([0,1,0,2,1,1,0,2,1,0,2,0]));

// Optimal approach - using Dutch National Flag Algorithm
function sort0_1_2(arr) {
    let low = 0, mid = 0, high = arr.length - 1;
    while (mid <= high) {
        if (arr[mid] == 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] == 1) {                            // Time -> 
            mid++;                              
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}
console.log(sort0_1_2([0,1,0,2,1,1,0,2,1,0,2,0]));