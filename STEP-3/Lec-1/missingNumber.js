function missingNumber(arr) {
    let Sum = arr.length * (arr.length + 1)/2;
    let sum2 = 0;
    for(let i = 0; i < arr.length; i++){
        sum2 += arr[i];
    }
    return Sum - sum2;
}
console.log(missingNumber([0,1,2,3,4,5,6,8]));