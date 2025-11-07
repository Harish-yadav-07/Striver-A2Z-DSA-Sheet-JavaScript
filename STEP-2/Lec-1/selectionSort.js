function selectionSort(arr) {
    for(let i = 0; i <= arr.length - 2; i++){
        let mini = i; 
        for(let j = i+1; j <= arr.length; j++){
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }
    [arr[mini], arr[i]] =[arr[i], arr[mini]];
    }                                                           // time complexity -> O(n²)
    return arr;
}

console.log(selectionSort([13, 24, 20, 52, 46, 9]));