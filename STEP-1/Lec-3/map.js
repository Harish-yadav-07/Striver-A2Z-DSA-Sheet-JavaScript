// Custom map function
function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

// Custom filter function
function customFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Custom reduce function
function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

const mapped = customMap(numbers, x => x * 2); // [2, 4, 6, 8, 10]
const filtered = customFilter(numbers, x => x % 2 === 0); // [2, 4]
const reduced = customReduce(numbers, (acc, x) => acc + x, 0); // 15

console.log('Mapped:', mapped);
console.log('Filtered:', filtered);
console.log('Reduced:', reduced);