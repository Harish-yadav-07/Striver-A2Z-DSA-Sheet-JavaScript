function largestElem(arr) {
    let largest = arr[0];
    for(let i = 0; i <= arr.length - 1; i++) {
        if(arr[i] > largest) largest = arr[i];
    }
    return largest;
}
console.log(largestElem([3,5,2,6,7,4,1]));