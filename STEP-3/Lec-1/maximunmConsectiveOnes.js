function maxConsecutiveOnes(arr) {
    let maximum = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            counter++;
            maximum = Math.max(maximum, counter);   // time -> O(n) space -> O(1)
        } else {
            counter = 0;
        }
    }
    return maximum;
}
console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1]));    