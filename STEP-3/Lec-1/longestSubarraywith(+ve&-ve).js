function longestSubarrayWithSumK(arr, k) {
    let map = new Map();  // prefixSum -> first index
    let prefixSum = 0;
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        if (prefixSum === k) {
            maxLen = Math.max(maxLen, i + 1);
        }

        if (!map.has(prefixSum)) {
            map.set(prefixSum, i);
        }

        const remaining = prefixSum - k;
        if (map.has(remaining)) {
            const len = i - map.get(remaining);
            maxLen = Math.max(maxLen, len);
        }
    }

    return maxLen;
}
console.log(longestSubarrayWithSumK([4, -2, -1, 5, -3, 2], 3));  // Output -> 5