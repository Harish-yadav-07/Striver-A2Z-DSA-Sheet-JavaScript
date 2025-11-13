    function moveZerostoEnd(nums) {
        let temp = [];
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] != 0) temp.push(nums[i]);
        }                                                   
        let numofzeros = temp.length;
        for(let i = 0; i < temp.length; i++){
            nums[i] = temp[i];                          // brute force approach 
        }                                                   // time -> O(2n)
        for(let i = numofzeros; i < nums.length; i++){
            nums[i] = 0;
        }
        return nums;
    }
    console.log(moveZerostoEnd([1,2,0,3,4,0,5,0,5,6,0,0,2,1]));

// Optimal approach

function optimal(arr) {
    let j = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0){
            j = i;
            break;
        }
    }
                                                // time -> O(n)
    if (j == -1) return arr;

    for(let i = j + 1; i < arr.length; i++){
        if (arr[i] != 0){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    return arr;
}
console.log(optimal([1,2,0,3,4,0,5,0,5,6,0,0,2,1]));

