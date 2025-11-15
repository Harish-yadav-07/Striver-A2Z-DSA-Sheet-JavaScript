function singleNumber(arr) {
    let xorr = 0;
    for(let i = 0; i < arr.length; i++){
        xorr = xorr ^ arr[i]
    }
    return xorr;
}
console.log(singleNumber([1,1,2,3,3,4,4])) // output -> 2