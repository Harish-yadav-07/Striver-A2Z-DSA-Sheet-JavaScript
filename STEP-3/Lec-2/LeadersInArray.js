function LeadersInArray(arr) {
    let maxi = -Infinity;
    let ans = [];
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] > maxi){
            ans.push(arr[i]);
        }
        maxi = Math.max(maxi, arr[i]);
    }
    ans.sort((a, b) => b - a);
    return ans;
}
console.log(LeadersInArray([10, 22, 12, 3, 0, 6]));  // [22, 12, 6]