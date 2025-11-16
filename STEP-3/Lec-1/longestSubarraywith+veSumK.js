// Better approach -> Hashing
function longestSubarray(arr, k) {
    let prefixSum = 0;
    let maxLen = 0;
    let map = new Map(); // prefixSum -> first index

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

console.log(longestSubarray([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3)); // output: 3

// Optimal approach -> 2 Pointer approach
function longestSubarrayWithSumK(arr, k) {
    let n = arr.length;
    let left = 0;
    let right = 0;
    let sum = 0;
    let maxLen = 0;

    while (right < n) {
        sum += arr[right];  // ALWAYS expand first

        while (sum > k && left <= right) {
            sum -= arr[left];
            left++;
        }

        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        right++;
    }

    return maxLen;
}
console.log(longestSubarrayWithSumK([1, 2, 3, 1, 1, 1, 1, 4], 7)); // output: 5