function subarraySumEqualsK(arr, k) {
    let map = new Map();
    map.set(0, 1);
    let presum = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        presum += arr[i];
        let remove = presum - k;
        if (map.has(remove)) {
            count += map.get(remove);
        }

        map.set(presum, (map.get(presum) || 0) + 1);
    }
    return count;
}
console.log(subarraySumEqualsK([3,-3,1,1,1], 3));