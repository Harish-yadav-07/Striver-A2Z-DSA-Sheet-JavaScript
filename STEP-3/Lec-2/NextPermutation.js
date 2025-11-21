function nextPermutation(nums) {

    // Step 1: Find the first index from the right where nums[i] < nums[i+1]
    // This "pivot" is the position that needs to be increased
    let ind = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            ind = i;
            break;
        }
    }

    // If no such index exists, the array is in descending order.
    // That's already the largest permutation → reverse to smallest.
    if (ind === -1) {
        nums.reverse();
        return;
    }

    // Step 2: From the right, find the first number larger than nums[ind]
    // Swap it with the pivot to make the number slightly larger.
    for (let i = nums.length - 1; i > ind; i--) {
        if (nums[i] > nums[ind]) {
            [nums[i], nums[ind]] = [nums[ind], nums[i]];
            break;
        }
    }

    // Step 3: Reverse the part after the pivot.
    // This ensures it becomes the smallest possible ordering,
    // giving the "next" permutation instead of skipping ahead.
    let left = ind + 1,
        right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    // (Optional) returning nums isn't needed for LeetCode.
    return nums;
};
console.log(nextPermutation([]))