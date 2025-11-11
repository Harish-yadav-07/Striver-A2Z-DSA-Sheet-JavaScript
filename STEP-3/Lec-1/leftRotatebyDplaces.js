function rotatebyDplaces(nums, k) {
    let temp = [];
    let n = nums.length;
    //Step 1
    for (let i = 0; i < k; i++) {
        temp.push(nums[i]);
    }
    // Step 2 -> Shifting
    for (let i = k; i < n; i++) {
        nums[i - k] = nums[i];
    }
    // Step 3 -> Put Back
    for (let i = n - k; i < n; i++) {
        nums[i] = temp[i - (n - k)];
    }          
    return nums;

}
console.log(rotatebyDplaces([1, 2, 3, 4, 5, 6, 7], 3));