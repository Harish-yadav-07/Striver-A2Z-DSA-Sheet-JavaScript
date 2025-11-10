function removeDuplicatesfromSortedArray(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            nums[i + 1] = nums[j];
            i++;
        }
    }
    return i + 1;
}
console.log(removeDuplicatesfromSortedArray([1,1,1,2,2,2,3,3,4,5]));