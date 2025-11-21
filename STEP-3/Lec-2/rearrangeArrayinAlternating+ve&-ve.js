function alternatingPositiveandNegative(arr) {
    const res = new Array(arr.length);
    let pos = 0;
    let neg = 1;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] >= 0) {
            res[pos] = arr[i];
            pos += 2;
        } else {
            res[neg] = arr[i];
            neg += 2;
        }
    }
    return res;
}
console.log(alternatingPositiveandNegative([3,1,-2,-5,2,-4]));