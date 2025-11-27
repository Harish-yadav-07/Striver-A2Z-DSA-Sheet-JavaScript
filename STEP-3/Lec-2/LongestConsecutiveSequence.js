function longestConsecutive(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {   // start of sequence
            let current = num;
            let count = 1;

            while (set.has(current + 1)) {
                current++;
                count++;
            }

            longest = Math.max(longest, count);
        }
    }

    return longest;
}

console.log(longestConsecutive([1,2,100,110,4,5,3,101,102,2,1,1]));