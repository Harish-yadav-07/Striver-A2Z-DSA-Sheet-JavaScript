function twoSum(arr, target) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let needed = target - arr[i];
        if (map.has(needed)) {
            return [map.get(needed), i];        // time -> O(n)
        }
        map.set(arr[i], i);
    }
}
console.log(twoSum([2, 7, 11, 15], 9)); // output -> [0,1]