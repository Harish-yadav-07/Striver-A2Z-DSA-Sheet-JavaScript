// linear search
function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] == num) return i; 
    }
    return -1;
}
console.log(linearSearch([6,7,8,5,4,1], 5));